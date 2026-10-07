"use client";

import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { PageContent } from "./site-content";
import { useLanguagePreference } from "./use-language";

export default function ContentPage({ content }: { content: PageContent }) {
  const [language, setLanguage] = useLanguagePreference();
  const page = content[language];
  const donationMethods = page.donationMethods ? [
    ...page.donationMethods.filter((method) => method.id !== "stocks"),
    ...page.donationMethods.filter((method) => method.id === "stocks"),
  ] : undefined;

  return <main>
    <SiteHeader language={language} onLanguageChange={setLanguage} />
    <section className="page-hero">
      <div className="shell">
        <p className="eyebrow light">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        {page.intro && <p>{page.intro}</p>}
      </div>
    </section>
    <section className="section content-section">
      <div className={`shell ${page.calendarEmbed ? "calendar-layout" : page.timeline ? "timeline-layout" : donationMethods ? "donation-layout" : "content-layout"}`}>
        {page.calendarEmbed ? (
          <div className="calendar-frame-wrap">
            <iframe
              className="calendar-frame"
              src={page.calendarEmbed}
              title={language === "en" ? "Saint Dimitrie parish calendar" : "Calendarul parohiei Sfântul Dimitrie"}
              loading="lazy"
            />
          </div>
        ) : page.timeline ? (
          <ol className="parish-timeline" aria-label={language === "en" ? "Parish history timeline" : "Cronologia istoriei parohiei"}>
            {page.timeline.map((item) => <li className="timeline-entry" key={`${item.date}-${item.title}`}>
              <time className="timeline-date">{item.date}</time>
              <span className="timeline-marker" aria-hidden="true" />
              <article className="timeline-card">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            </li>)}
          </ol>
        ) : donationMethods ? (
          <div className="donation-page">
            <nav className="donation-method-nav" aria-label={language === "en" ? "Donation methods" : "Metode de donație"}>
              {donationMethods.map((method, index) => <a href={`#${method.id}`} key={method.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{method.title}</strong>
              </a>)}
            </nav>
            <div className="donation-methods">
              {donationMethods.map((method, index) => <article className="donation-card" id={method.id} key={method.id}>
                <header className="donation-card-header">
                  <span className="donation-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="donation-title-line">
                      <h2>{method.title}</h2>
                    </div>
                    <p>{method.summary}</p>
                  </div>
                </header>
                <div className={`donation-card-body${method.image ? " has-image" : ""}`}>
                  <div className="donation-copy">
                    {method.paragraphs?.map((paragraph, i) => <p className={paragraph.includes("\n") ? "donation-address" : undefined} key={i}>{paragraph}</p>)}
                    {method.bullets && <ul>{method.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
                    {method.steps && <ol>{method.steps.map(item => <li key={item}>{item}</li>)}</ol>}
                    {method.note && <p className="donation-note">{method.note}</p>}
                    {method.links && <div className="donation-actions">{method.links.map((link, linkIndex) => <a className={linkIndex === 0 ? "primary" : ""} href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div>}
                  </div>
                  {method.image && (method.image.href ? <a className="donation-qr" href={method.image.href} target="_blank" rel="noreferrer"><img src={method.image.src} alt={method.image.alt} /></a> : <div className="donation-qr"><img src={method.image.src} alt={method.image.alt} /></div>)}
                </div>
              </article>)}
            </div>
            {page.donationClosing && <div className="donation-closing"><p>{page.donationClosing}</p><a href="/contact/">{language === "en" ? "Contact the parish" : "Contactați parohia"}</a></div>}
          </div>
        ) : page.empty ? (
          <div className="empty-page" aria-label={language === "en" ? "Content coming soon" : "Conținut în pregătire"} />
        ) : page.sections?.map((section, index) => <article className={`content-block${section.variant === "recording" ? " recording-card" : ""}${section.image ? " clergy-profile" : ""}`} key={`${page.title}-${index}`}>
          {section.image && <div className="clergy-profile-image"><img src={section.image.src} alt={section.image.alt} /></div>}
          {section.meta && <p className="content-meta">{section.meta}</p>}
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs?.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
          {section.link && <a className="button content-button" href={section.link.href}>{section.link.label} <span aria-hidden="true">↗</span></a>}
          {section.links && <div className="recording-links">{section.links.map(link => <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div>}
        </article>)}
      </div>
    </section>
    <SiteFooter language={language} />
  </main>;
}
