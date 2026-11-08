# Saint Dimitrie the New Romanian Orthodox Church

Bilingual parish website for Saint Dimitrie the New Romanian Orthodox Church in Frederick, Colorado.

## Features

- English is the default language, with Romanian available from the header.
- The selected language is remembered while visitors move between pages and on later visits.
- Responsive navigation and layouts for desktop, tablet, and mobile.
- Parish pages, clergy profiles, history timeline, donations, literary-circle recordings, and calendar.
- The home page retrieves upcoming services dynamically from the public parish Google Calendar.

## Requirements

- Node.js 22 or newer
- npm

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm ci
npm run build
npm start
```

The production server uses port `3000` by default. Set the standard `PORT` environment variable when the hosting provider supplies a different port.

## GoDaddy deployment

1. Open **Node.js Apps** in the GoDaddy Web Hosting dashboard.
2. Connect this GitHub repository or upload a ZIP of the repository.
3. Select Node.js 22.
4. Use `npm run build` as the build command.
5. Use `npm start` as the start command.
6. Test the GoDaddy preview URL before attaching `sfdimitrie.org` and `www.sfdimitrie.org`.
7. Preserve the existing email-related DNS records when the website domain is connected.

The Google Calendar URL used for upcoming services is public and is configured in `app/api/services/route.ts`.
