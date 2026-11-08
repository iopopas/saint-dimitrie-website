"use client";

import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { PageContent } from "./site-content";
import { useState } from "react";
import { useLanguagePreference } from "./use-language";

type LiteraryData = NonNullable<PageContent["en"]["literary"]>;

function LiteraryExperience({ data, language }: { data: LiteraryData; language: "en" | "ro" }) {
  const [showAllRecordings, setShowAllRecordings] = useState(false);
  const visibleRecordings = showAllRecordings ? data.recordings : data.recordings.slice(0, 4);
  const sectionIds = ["about", "board", "recordings", "articles"];
  const emphasizedPhrase = language === "en" ? "universal man" : "omul universal";

  return <div className="literary-page">
    <nav className="literary-section-nav" aria-label={language === "en" ? "Literary Circle sections" : "Secțiunile Cenaclului literar"}>
      {data.navLabels.map((label, index) => <a href={`#${sectionIds[index]}`} key={label}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{label}</strong>
      </a>)}
    </nav>

    <section className="literary-section literary-about" id="about">
      <div className="literary-section-heading">
        <p className="content-meta">{data.aboutMeta}</p>
        <h2>{data.aboutTitle}</h2>
      </div>
      <div className="literary-about-grid">
        <div className="literary-story">
          {data.aboutParagraphs.map((paragraph, index) => {
            const [before, after] = paragraph.split(emphasizedPhrase);
            return <p key={index}>{after === undefined ? paragraph : <>{before}<em>{emphasizedPhrase}</em>{after}</>}</p>;
          })}
          <p className="literary-signature">{data.aboutSignature}</p>
        </div>
        <aside className="literary-foundation" aria-label={language === "en" ? "Founding year" : "Anul înființării"}>
          <span>2011</span>
          <p>{language === "en" ? "Founded at the foot of the Rocky Mountains" : "Fondat la poalele Munților Stâncoși"}</p>
          <div aria-hidden="true">✦</div>
          <p>{language === "en" ? "Romanian culture · Dialogue · Community" : "Cultură română · Dialog · Comunitate"}</p>
        </aside>
      </div>
    </section>

    <section className="literary-section literary-board" id="board">
      <div className="literary-section-heading compact">
        <p className="content-meta">{language === "en" ? "Leadership" : "Conducere"}</p>
        <h2>{data.boardTitle}</h2>
        <p>{data.boardIntro}</p>
      </div>
      <div className="literary-board-grid">
        {data.boardMembers.map((member, index) => <article key={member}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{member}</h3>
        </article>)}
      </div>
    </section>

    <section className="literary-section literary-recordings" id="recordings">
      <div className="literary-section-heading compact">
        <p className="content-meta">{language === "en" ? "Video archive · 2020–2024" : "Arhivă video · 2020–2024"}</p>
        <h2>{data.recordingsTitle}</h2>
        <p>{data.recordingsIntro}</p>
      </div>
      <div className="literary-recording-grid">
        {visibleRecordings.map((recording, index) => <article className="literary-recording-card" key={`${recording.meta}-${recording.heading}`}>
          <span className="literary-recording-number">{String(index + 1).padStart(2, "0")}</span>
          {recording.meta && <p className="content-meta">{recording.meta}</p>}
          {recording.heading && <h3>{recording.heading}</h3>}
          {recording.paragraphs?.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
          {recording.links && <div className="recording-links">{recording.links.map(link => <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div>}
        </article>)}
      </div>
      {data.recordings.length > 4 && <button className="literary-more-button" type="button" aria-expanded={showAllRecordings} onClick={() => setShowAllRecordings(value => !value)}>
        {showAllRecordings ? data.showLess : `${data.showMore} (${data.recordings.length})`}
        <span aria-hidden="true">{showAllRecordings ? "↑" : "↓"}</span>
      </button>}
    </section>

    <section className="literary-section literary-articles" id="articles">
      <div className="literary-section-heading compact">
        <p className="content-meta">{language === "en" ? "Perspectives from writers and scholars" : "Perspective ale scriitorilor și cărturarilor"}</p>
        <h2>{data.articlesTitle}</h2>
        <p>{data.articlesIntro}</p>
      </div>
      <div className="literary-article-list">
        {data.articles.map((article, index) => <article className={`literary-article-card${article.image ? " has-image" : ""}`} key={article.title}>
          <div className="literary-article-number">{String(index + 1).padStart(2, "0")}</div>
          <div className="literary-article-copy">
            <p className="content-meta">{article.meta}</p>
            <h3>{article.title}</h3>
            {article.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
            {article.link && <a className="literary-article-link" href={article.link.href} target="_blank" rel="noreferrer">{article.link.label} <span aria-hidden="true">↗</span></a>}
          </div>
          {article.image && <a className="literary-article-image" href={article.image.src} target="_blank" rel="noreferrer"><img src={article.image.src} alt={article.image.alt} /></a>}
        </article>)}
      </div>
    </section>
  </div>;
}

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
      <div className={`shell ${page.calendarEmbed ? "calendar-layout" : page.videoEmbed ? "video-page-layout" : page.timeline ? "timeline-layout" : donationMethods ? "donation-layout" : page.literary ? "literary-layout" : "content-layout"}`}>
        {page.calendarEmbed ? (
          <div className="calendar-frame-wrap">
            <iframe
              className="calendar-frame"
              src={page.calendarEmbed}
              title={language === "en" ? "Saint Dimitrie parish calendar" : "Calendarul parohiei Sfântul Dimitrie"}
              loading="lazy"
            />
          </div>
        ) : page.videoEmbed ? (
          <article className="future-church-video">
            <header className="future-church-video-heading">
              <p className="content-meta">{language === "en" ? "Project presentation" : "Prezentarea proiectului"}</p>
              <h2>{page.videoTitle}</h2>
              <p>{language === "en" ? "Watch the presentation below to learn more about the vision and plans for our parish’s next church." : "Urmăriți prezentarea de mai jos pentru a afla mai multe despre viziunea și planurile pentru viitoarea biserică a parohiei noastre."}</p>
            </header>
            <div className="future-church-video-frame">
              <iframe
                src={page.videoEmbed}
                title={page.videoTitle || (language === "en" ? "Future church project presentation" : "Prezentarea proiectului viitoarei biserici")}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a className="future-church-youtube-link" href="https://www.youtube.com/watch?v=DIilNj0YD6g" target="_blank" rel="noreferrer">
              {language === "en" ? "Watch on YouTube" : "Urmăriți pe YouTube"} <span aria-hidden="true">↗</span>
            </a>
          </article>
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
        ) : page.literary ? (
          <LiteraryExperience data={page.literary} language={language} />
        ) : page.empty ? (
          <div className="empty-page" aria-label={language === "en" ? "Content coming soon" : "Conținut în pregătire"} />
        ) : page.sections?.map((section, index) => <article className={`content-block${section.variant === "recording" ? " recording-card" : ""}${section.variant === "callout" ? " callout-card" : ""}${section.image ? " clergy-profile" : ""}`} key={`${page.title}-${index}`}>
          {section.image && <div className="clergy-profile-image"><img src={section.image.src} alt={section.image.alt} /></div>}
          {section.meta && <p className="content-meta">{section.meta}</p>}
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs?.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
          {section.steps && <ol className="content-steps">{section.steps.map(item => <li key={item}>{item}</li>)}</ol>}
          {section.link && <a className="button content-button" href={section.link.href}>{section.link.label} <span aria-hidden="true">↗</span></a>}
          {section.links && <div className="recording-links">{section.links.map(link => <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div>}
        </article>)}
      </div>
    </section>
    <SiteFooter language={language} />
  </main>;
}
