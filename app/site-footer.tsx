import { Language } from "./site-content";

export default function SiteFooter({ language }: { language: Language }) {
  return <footer><div className="shell footer-inner">
    <div>
      <strong>{language === "en" ? "Saint Dimitrie the New Romanian Orthodox Church" : "Biserica Ortodoxă Română Sfântul Dimitrie cel Nou"}</strong>
      <p>{language === "en" ? "Orthodox faith · Romanian tradition · A welcoming community" : "Credință ortodoxă · Tradiție românească · O comunitate primitoare"}</p>
    </div>
    <p>© {new Date().getFullYear()} Saint Dimitrie the New</p>
  </div></footer>;
}
