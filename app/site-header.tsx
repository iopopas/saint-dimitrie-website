"use client";

import { useEffect, useRef, useState } from "react";
import { Language, navigation } from "./site-content";

const LOGO = "https://sfdimitrie.org/wp-content/uploads/2020/08/STDimitrie_logo-e1748324916623.png";

export default function SiteHeader({ language, onLanguageChange }: { language: Language; onLanguageChange: (language: Language) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeOutside = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("mousedown", closeOutside);
    return () => document.removeEventListener("mousedown", closeOutside);
  }, []);

  const closeNavigation = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  return <>
    <div className="contact-bar">
      <div className="shell contact-inner">
        <a href="tel:+14406680010">440 668-0010</a><span aria-hidden="true">·</span>
        <a href="mailto:prbogdan@sfdimitrie.org">prbogdan@sfdimitrie.org</a>
        <a
          className="facebook-link"
          href="https://facebook.com/360786994121954"
          target="_blank"
          rel="noreferrer"
          aria-label={language === "en" ? "Visit our Facebook page" : "Vizitați pagina noastră de Facebook"}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2H7.8v3h2.7v8h3.2Z" />
          </svg>
          <span className="facebook-label">Facebook</span>
        </a>
        <a className="contact-address" href="https://maps.google.com/?q=6060+Puritan+Lane+Frederick+CO+80516">6060 Puritan Lane, Frederick, CO</a>
      </div>
    </div>
    <header className="site-header">
      <div className="shell nav-wrap">
        <a className="brand" href="/" aria-label={language === "en" ? "Saint Dimitrie the New Orthodox Church" : "Biserica Ortodoxă Sfântul Dimitrie cel Nou"}>
          <img className="brand-logo" src={LOGO} alt="Saint Dimitrie the New Church logo" />
          <span>
            <strong>{language === "en" ? "Saint Dimitrie the New" : "Sfântul Dimitrie cel Nou"}</strong>
            <small>{language === "en" ? "Orthodox Church" : "Biserică Ortodoxă"}</small>
          </span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => { setMenuOpen(v => !v); setOpenGroup(null); }}>
          {menuOpen ? (language === "en" ? "Close" : "Închide") : (language === "en" ? "Menu" : "Meniu")}
        </button>
        <nav ref={navRef} id="main-navigation" className={`nav-links${menuOpen ? " open" : ""}${openGroup ? " has-open-group" : ""}`} aria-label={language === "en" ? "Main navigation" : "Navigare principală"} onKeyDown={(event) => { if (event.key === "Escape") { setOpenGroup(null); setMenuOpen(false); } }}>
          {navigation.map((item) => item.children ? (
            <div className={openGroup === item.label.en ? "nav-group open" : "nav-group"} key={item.label.en}>
              <button type="button" className="nav-parent" aria-expanded={openGroup === item.label.en} onClick={() => setOpenGroup(current => current === item.label.en ? null : item.label.en)}>
                {item.label[language]}
              </button>
              <div className="nav-dropdown" aria-hidden={openGroup !== item.label.en}>
                {item.children.map(child => <a key={child.href} href={child.href} onClick={closeNavigation}>{child.label[language]}</a>)}
              </div>
            </div>
          ) : <a key={item.href} href={item.href} onClick={closeNavigation}>{item.label[language]}</a>)}
          <button className="language-toggle" type="button" onClick={() => { onLanguageChange(language === "en" ? "ro" : "en"); closeNavigation(); }}>
            {language === "en" ? "Română" : "English"}
          </button>
        </nav>
      </div>
    </header>
  </>;
}
