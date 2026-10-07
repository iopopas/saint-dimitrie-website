"use client";

import { useEffect, useState } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { useLanguagePreference } from "./use-language";

const copy = {
  en: {
    language: "Română",
    menu: "Menu",
    close: "Close",
    nav: [
      ["Welcome", "#welcome"],
      ["Our Church", "#about"],
      ["Services", "#services"],
      ["Community", "#community"],
      ["Contact", "#contact"],
    ],
    eyebrow: "Romanian Orthodox Church · Frederick, Colorado",
    title: "Saint Dimitrie the New",
    intro:
      "A spiritual home where Orthodox faith, Romanian tradition, and the joy of life in Christ are shared from one generation to the next.",
    join: "About our parish",
    calendar: "View parish calendar",
    regularKicker: "Worship with us",
    regularTitle: "Regular services",
    regularIntro: "Our regular worship schedule follows the rhythm of Sundays, feast days, and the fasting seasons of the Orthodox Church.",
    regularItems: [
      "Divine Liturgy every Sunday at 10:00 AM",
      "Divine Liturgy at 10:00 AM on feast days marked in red in the Episcopate calendar",
      "Saturday Vespers at 7:00 PM during fasting seasons, followed by Confession",
      "Services are primarily in Romanian, with key prayers offered in English when needed",
    ],
    regularLink: "More about regular services",
    upcomingKicker: "Parish calendar",
    upcomingTitle: "Upcoming events",
    upcomingBody: "The schedule below is updated automatically from our parish calendar.",
    viewCalendar: "View full calendar",
    loadingServices: "Loading the upcoming service schedule…",
    noServices: "No upcoming services are currently listed. Please check the full parish calendar.",
    calendarUnavailable: "The live schedule is temporarily unavailable. Please use the full parish calendar.",
    allDay: "All day",
    relicKicker: "A sacred blessing",
    relicTitle: "Venerate a fragment of the Holy Cross",
    relicBody:
      "Our church is blessed to safeguard a fragment of the Cross of our Lord Jesus Christ. It may be venerated on Sundays or during the week by appointment with the priest.",
    relicCta: "Contact the parish",
    visitKicker: "Visit us",
    visitTitle: "You are welcome here",
    addressLabel: "Address",
    priestLabel: "Parish priest",
    priest: "Rev. Fr. Ioan Bogdan",
    phoneLabel: "Phone",
    emailLabel: "Email",
    directions: "Get directions",
    footer: "Saint Dimitrie the New Romanian Orthodox Church",
    footerLine: "Orthodox faith · Romanian tradition · A welcoming community",
  },
  ro: {
    language: "English",
    menu: "Meniu",
    close: "Închide",
    nav: [
      ["Bun venit", "#welcome"],
      ["Biserica noastră", "#about"],
      ["Sfintele slujbe", "#services"],
      ["Comunitate", "#community"],
      ["Contact", "#contact"],
    ],
    eyebrow: "Biserică Ortodoxă Română · Frederick, Colorado",
    title: "Sfântul Dimitrie cel Nou",
    intro:
      "Un cămin duhovnicesc în care credința ortodoxă, tradiția românească și bucuria vieții în Hristos se împărtășesc din generație în generație.",
    join: "Despre parohia noastră",
    calendar: "Vezi calendarul parohiei",
    regularKicker: "Rugați-vă cu noi",
    regularTitle: "Slujbe regulate",
    regularIntro: "Programul nostru regulat urmează ritmul duminicilor, al sărbătorilor și al posturilor Bisericii Ortodoxe.",
    regularItems: [
      "Sfânta Liturghie în fiecare duminică, de la ora 10:00",
      "Sfânta Liturghie la ora 10:00 în sărbătorile marcate cu roșu în calendarul Episcopiei",
      "Vecernia sâmbăta, de la ora 19:00, în timpul posturilor, urmată de Spovedanie",
      "Slujbele sunt în principal în limba română, cu rugăciuni importante rostite și în engleză când este nevoie",
    ],
    regularLink: "Mai multe despre slujbele regulate",
    upcomingKicker: "Calendarul parohiei",
    upcomingTitle: "Evenimente viitoare",
    upcomingBody: "Programul este actualizat automat din calendarul parohiei.",
    viewCalendar: "Vezi calendarul complet",
    loadingServices: "Se încarcă programul slujbelor…",
    noServices: "Nu sunt afișate slujbe viitoare. Vă rugăm să consultați calendarul complet al parohiei.",
    calendarUnavailable: "Programul nu este disponibil momentan. Vă rugăm să consultați calendarul complet.",
    allDay: "Toată ziua",
    relicKicker: "O binecuvântare sfântă",
    relicTitle: "Închinați-vă unui fragment din Sfânta Cruce",
    relicBody:
      "Biserica noastră are binecuvântarea de a păstra un fragment din Crucea Domnului nostru Iisus Hristos. Vă puteți închina duminica sau în timpul săptămânii, cu programare la preot.",
    relicCta: "Contactați parohia",
    visitKicker: "Vizitați-ne",
    visitTitle: "Sunteți bineveniți",
    addressLabel: "Adresă",
    priestLabel: "Preot paroh",
    priest: "Pr. Ioan Bogdan",
    phoneLabel: "Telefon",
    emailLabel: "E-mail",
    directions: "Deschide harta",
    footer: "Biserica Ortodoxă Română Sfântul Dimitrie cel Nou",
    footerLine: "Credință ortodoxă · Tradiție românească · O comunitate primitoare",
  },
} as const;

const Arrow = () => <span aria-hidden="true">↗</span>;

type ServiceEvent = { uid: string; title: string; location: string; start: string; allDay: boolean };

export default function Home() {
  const [language, setLanguage] = useLanguagePreference();
  const [serviceEvents, setServiceEvents] = useState<ServiceEvent[]>([]);
  const [serviceState, setServiceState] = useState<"loading" | "ready" | "error">("loading");
  const t = copy[language];

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/services", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Calendar unavailable");
        return response.json() as Promise<{ events: ServiceEvent[] }>;
      })
      .then((data) => {
        setServiceEvents(data.events || []);
        setServiceState("ready");
      })
      .catch((error) => {
        if (error.name !== "AbortError") setServiceState("error");
      });
    return () => controller.abort();
  }, []);

  const locale = language === "en" ? "en-US" : "ro-RO";
  const dateFormatter = new Intl.DateTimeFormat(locale, { weekday: "long", month: "short", day: "numeric", timeZone: "America/Denver" });
  const timeFormatter = new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "2-digit", timeZone: "America/Denver" });

  return (
    <main className="home-page">
      <SiteHeader language={language} onLanguageChange={setLanguage} />

      <section className="hero" id="welcome">
        <img
          className="hero-image"
          src="https://sfdimitrie.org/wp-content/uploads/2020/09/55485908_1068868776647102_8974784101470961664_n.jpg"
          alt="Saint Dimitrie the New Romanian Orthodox Church"
        />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="eyebrow light">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="/biserica-noastra/istoria-noastra/">{t.join}</a>
            <a className="button ghost" href="/calendar/">{t.calendar} <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section services-section upcoming-services" id="services">
        <div className="shell services-split">
          <article className="regular-services-panel">
            <p className="eyebrow light">{t.regularKicker}</p>
            <h2>{t.regularTitle}</h2>
            <p className="regular-services-intro">{t.regularIntro}</p>
            <ul>
              {t.regularItems.map((item) => <li key={item}><span aria-hidden="true">✛</span>{item}</li>)}
            </ul>
            <a className="regular-services-link" href="/services/divine-liturgy/">{t.regularLink}</a>
          </article>
          <div className="events-panel">
            <div className="events-heading">
              <div>
                <p className="eyebrow">{t.upcomingKicker}</p>
                <h2>{t.upcomingTitle}</h2>
                <p>{t.upcomingBody}</p>
              </div>
              <a className="button calendar-button" href="/calendar/">{t.viewCalendar}</a>
            </div>
            {serviceState === "loading" && <p className="services-status">{t.loadingServices}</p>}
            {serviceState === "error" && <p className="services-status">{t.calendarUnavailable}</p>}
            {serviceState === "ready" && serviceEvents.length === 0 && <p className="services-status">{t.noServices}</p>}
            {serviceEvents.length > 0 && <div className="upcoming-service-grid">
              {serviceEvents.map((event) => {
                const start = new Date(event.start);
                return <article className="upcoming-service-card" key={event.uid}>
                  <span className="service-cross" aria-hidden="true">✛</span>
                  <div>
                    <time dateTime={event.start}>{dateFormatter.format(start)}</time>
                    <h3>{event.title}</h3>
                    <p>{event.allDay ? t.allDay : timeFormatter.format(start)}</p>
                    {event.location && <span className="service-location">{event.location}</span>}
                  </div>
                </article>;
              })}
            </div>}
          </div>
        </div>
      </section>

      <section className="section relic-section">
        <div className="shell relic-grid">
          <div className="relic-image-wrap">
            <img src="https://sfdimitrie.org/wp-content/uploads/2020/10/Cruce-69-e1602263593256.jpg" alt="Relic of the Holy Cross at Saint Dimitrie Church" />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">{t.relicKicker}</p>
            <h2>{t.relicTitle}</h2>
            <p className="lead">{t.relicBody}</p>
            <a className="text-link" href="#contact">{t.relicCta} <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow light">{t.visitKicker}</p>
            <h2>{t.visitTitle}</h2>
            <a className="button pale" href="https://maps.google.com/?q=6060+Puritan+Lane+Frederick+CO+80516" target="_blank" rel="noreferrer">{t.directions} <Arrow /></a>
          </div>
          <address>
            <div><small>{t.addressLabel}</small><a href="https://maps.google.com/?q=6060+Puritan+Lane+Frederick+CO+80516">6060 Puritan Lane<br />Frederick, CO 80516</a></div>
            <div><small>{t.priestLabel}</small><span>{t.priest}</span></div>
            <div><small>{t.phoneLabel}</small><a href="tel:+14406680010">440 668-0010</a></div>
            <div><small>{t.emailLabel}</small><a href="mailto:prbogdan@sfdimitrie.org">prbogdan@sfdimitrie.org</a></div>
          </address>
        </div>
      </section>

      <SiteFooter language={language} />
    </main>
  );
}
