const CALENDAR_ICS_URL = "https://calendar.google.com/calendar/ical/c_6bk18lioi750jnfap0rt6gilco%40group.calendar.google.com/public/basic.ics";
const CALENDAR_TIME_ZONE = "America/Denver";

type CalendarParts = { year: number; month: number; day: number; hour: number; minute: number; second: number };
type ParsedDate = { date: Date; parts: CalendarParts; allDay: boolean; timeZone: string };
type RawEvent = {
  uid: string;
  title: string;
  location: string;
  start: ParsedDate;
  rule?: Record<string, string>;
  exclusions: Set<string>;
};

const SERVICE_TERMS = [
  "liturgh", "liturghie", "vecern", "utren", "denie", "denii", "acatist", "parastas",
  "maslu", "prohod", "privegh", "slujb", "botez", "cunun", "te deum", "molie",
  "divine liturgy", "liturgy", "vespers", "orthros", "matins", "akathist", "memorial",
  "holy unction", "worship", "service",
];

const unfold = (value: string) => value.replace(/\r?\n[ \t]/g, "");
const unescapeText = (value = "") => value
  .replace(/\\n/gi, " ")
  .replace(/\\,/g, ",")
  .replace(/\\;/g, ";")
  .replace(/\\\\/g, "\\")
  .trim();

function property(line: string) {
  const colon = line.indexOf(":");
  if (colon < 0) return null;
  const descriptor = line.slice(0, colon);
  const [name, ...parameterParts] = descriptor.split(";");
  const parameters = Object.fromEntries(parameterParts.map((item) => {
    const equals = item.indexOf("=");
    return equals < 0 ? [item.toUpperCase(), ""] : [item.slice(0, equals).toUpperCase(), item.slice(equals + 1)];
  }));
  return { name: name.toUpperCase(), parameters, value: line.slice(colon + 1) };
}

function localPartsToDate(parts: CalendarParts, timeZone: string) {
  const guess = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });
  const values = Object.fromEntries(formatter.formatToParts(new Date(guess)).map((item) => [item.type, item.value]));
  const represented = Date.UTC(
    Number(values.year), Number(values.month) - 1, Number(values.day),
    Number(values.hour), Number(values.minute), Number(values.second),
  );
  const firstPass = guess - (represented - guess);
  const secondValues = Object.fromEntries(formatter.formatToParts(new Date(firstPass)).map((item) => [item.type, item.value]));
  const secondRepresented = Date.UTC(
    Number(secondValues.year), Number(secondValues.month) - 1, Number(secondValues.day),
    Number(secondValues.hour), Number(secondValues.minute), Number(secondValues.second),
  );
  return new Date(firstPass - (secondRepresented - guess));
}

function parseCalendarDate(value: string, parameters: Record<string, string> = {}): ParsedDate | null {
  const match = value.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?)?(Z)?$/);
  if (!match) return null;
  const parts: CalendarParts = {
    year: Number(match[1]), month: Number(match[2]), day: Number(match[3]),
    hour: Number(match[4] || 0), minute: Number(match[5] || 0), second: Number(match[6] || 0),
  };
  const allDay = parameters.VALUE === "DATE" || !match[4];
  const timeZone = match[7] ? "UTC" : (parameters.TZID || CALENDAR_TIME_ZONE).replace(/^"|"$/g, "");
  const date = match[7]
    ? new Date(Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second))
    : localPartsToDate(parts, timeZone);
  return { date, parts, allDay, timeZone };
}

function addDays(parts: CalendarParts, days: number): CalendarParts {
  const date = new Date(Date.UTC(parts.year, parts.month - 1, parts.day + days, parts.hour, parts.minute, parts.second));
  return {
    year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate(),
    hour: parts.hour, minute: parts.minute, second: parts.second,
  };
}

function dateKey(date: Date) {
  return date.toISOString();
}

function parseEvents(ics: string): RawEvent[] {
  return unfold(ics).split("BEGIN:VEVENT").slice(1).map<RawEvent | null>((block) => {
    const lines = block.split(/\r?\n/).slice(0, -1);
    const values = lines.map(property).filter(Boolean) as NonNullable<ReturnType<typeof property>>[];
    const first = (name: string) => values.find((item) => item.name === name);
    if (first("STATUS")?.value === "CANCELLED") return null;
    const startProperty = first("DTSTART");
    if (!startProperty) return null;
    const start = parseCalendarDate(startProperty.value, startProperty.parameters);
    if (!start) return null;
    const ruleProperty = first("RRULE");
    const rule = ruleProperty
      ? Object.fromEntries(ruleProperty.value.split(";").map((part) => part.split("=", 2)))
      : undefined;
    const exclusions = new Set<string>();
    for (const exclusion of values.filter((item) => item.name === "EXDATE")) {
      for (const item of exclusion.value.split(",")) {
        const parsed = parseCalendarDate(item, exclusion.parameters);
        if (parsed) exclusions.add(dateKey(parsed.date));
      }
    }
    return {
      uid: unescapeText(first("UID")?.value) || `${first("SUMMARY")?.value}-${start.date.toISOString()}`,
      title: unescapeText(first("SUMMARY")?.value) || "Service",
      location: unescapeText(first("LOCATION")?.value),
      start,
      rule,
      exclusions,
    };
  }).filter((event): event is RawEvent => Boolean(event));
}

const weekdayCodes = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

function matchesRule(candidate: CalendarParts, event: RawEvent, dayOffset: number) {
  const rule = event.rule;
  if (!rule) return dayOffset === 0;
  const interval = Math.max(1, Number(rule.INTERVAL || 1));
  const candidateDate = new Date(Date.UTC(candidate.year, candidate.month - 1, candidate.day));
  const startDate = new Date(Date.UTC(event.start.parts.year, event.start.parts.month - 1, event.start.parts.day));
  if (candidateDate < startDate) return false;
  const byDay = (rule.BYDAY || weekdayCodes[startDate.getUTCDay()]).split(",").map((day) => day.slice(-2));
  const byMonthDay = (rule.BYMONTHDAY || String(event.start.parts.day)).split(",").map(Number);
  if (rule.FREQ === "DAILY") return dayOffset % interval === 0;
  if (rule.FREQ === "WEEKLY") return Math.floor(dayOffset / 7) % interval === 0 && byDay.includes(weekdayCodes[candidateDate.getUTCDay()]);
  if (rule.FREQ === "MONTHLY") {
    const monthOffset = (candidate.year - event.start.parts.year) * 12 + candidate.month - event.start.parts.month;
    return monthOffset >= 0 && monthOffset % interval === 0 && byMonthDay.includes(candidate.day) && byDay.includes(weekdayCodes[candidateDate.getUTCDay()]);
  }
  if (rule.FREQ === "YEARLY") {
    const yearOffset = candidate.year - event.start.parts.year;
    return yearOffset >= 0 && yearOffset % interval === 0 && candidate.month === event.start.parts.month && candidate.day === event.start.parts.day;
  }
  return dayOffset === 0;
}

function expandEvent(event: RawEvent, from: Date, through: Date) {
  const occurrences: { uid: string; title: string; location: string; start: string; allDay: boolean }[] = [];
  const until = event.rule?.UNTIL ? parseCalendarDate(event.rule.UNTIL)?.date : null;
  const countLimit = event.rule?.COUNT ? Number(event.rule.COUNT) : Number.POSITIVE_INFINITY;
  const totalDays = event.rule ? Math.ceil((through.getTime() - event.start.date.getTime()) / 86_400_000) + 2 : 1;
  let matched = 0;
  for (let offset = 0; offset < Math.max(1, totalDays); offset += 1) {
    const parts = addDays(event.start.parts, offset);
    if (!matchesRule(parts, event, offset)) continue;
    matched += 1;
    if (matched > countLimit) break;
    const date = event.start.timeZone === "UTC"
      ? new Date(Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second))
      : localPartsToDate(parts, event.start.timeZone);
    if (until && date > until) break;
    if (date < from || date > through || event.exclusions.has(dateKey(date))) continue;
    occurrences.push({ uid: `${event.uid}-${date.toISOString()}`, title: event.title, location: event.location, start: date.toISOString(), allDay: event.start.allDay });
  }
  return occurrences;
}

export async function GET() {
  try {
    const response = await fetch(CALENDAR_ICS_URL, { headers: { Accept: "text/calendar" } });
    if (!response.ok) throw new Error(`Calendar returned ${response.status}`);
    const ics = await response.text();
    const now = new Date();
    const from = new Date(now.getTime() - 2 * 60 * 60 * 1000);
    const through = new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000);
    const events = parseEvents(ics)
      .filter((event) => SERVICE_TERMS.some((term) => event.title.toLocaleLowerCase().includes(term)))
      .flatMap((event) => expandEvent(event, from, through))
      .sort((a, b) => a.start.localeCompare(b.start))
      .filter((event, index, list) => index === list.findIndex((candidate) => candidate.start === event.start && candidate.title === event.title))
      .slice(0, 6);
    return Response.json({ events, updatedAt: now.toISOString() }, {
      headers: { "Cache-Control": "public, max-age=300, s-maxage=900, stale-while-revalidate=3600" },
    });
  } catch {
    return Response.json({ events: [], error: "calendar_unavailable" }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
