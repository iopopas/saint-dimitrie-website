export type Language = "en" | "ro";

export type NavItem = { label: Record<Language, string>; href?: string; children?: NavItem[] };

export const navigation: NavItem[] = [
  { label: { en: "Home", ro: "Acasă" }, href: "/" },
  { label: { en: "Our Church", ro: "Biserica noastră" }, children: [
    { label: { en: "Our Future Church", ro: "Viitoarea noastră biserică" }, href: "/biserica-noastra/viitoarea-biserica/" },
    { label: { en: "Clergy", ro: "Clerul nostru" }, href: "/biserica-noastra/clerul/" },
    { label: { en: "Our Parish", ro: "Parohia noastră" }, href: "/biserica-noastra/istoria-noastra/" },
    { label: { en: "Romanian Episcopate", ro: "Episcopia Română" }, href: "https://roea.org/" },
  ]},
  { label: { en: "Visitors", ro: "Vizitatori" }, children: [
    { label: { en: "Becoming a Member", ro: "Cum devin membru" }, href: "/biserica-noastra/membru/" },
  ]},
  { label: { en: "Calendar", ro: "Calendar" }, href: "/calendar/" },
  { label: { en: "Services", ro: "Sfintele slujbe" }, children: [
    { label: { en: "Regular Liturgical Schedule", ro: "Programul liturgic obișnuit" }, href: "/services/divine-liturgy/" },
    { label: { en: "Baptism", ro: "Botez" }, href: "/services/baptism/" },
    { label: { en: "Marriage", ro: "Cununie" }, href: "/services/marriage/" },
    { label: { en: "Funeral Service", ro: "Înmormântare" }, href: "/services/funeral-service/" },
    { label: { en: "Memorial Service", ro: "Parastas" }, href: "/services/memorial-service/" },
  ]},
  { label: { en: "Community", ro: "Comunitate" }, children: [
    { label: { en: "Sunday School", ro: "Școala duminicală" }, href: "/biserica-noastra/scoala-duminicala/" },
    { label: { en: "Youth Development", ro: "Dezvoltarea tinerilor" }, href: "/community/youth-development/" },
    { label: { en: "Literary Circle", ro: "Cenaclul literar" }, href: "/community/literary-circle/" },
  ]},
  { label: { en: "Contact", ro: "Contact" }, href: "/contact/" },
  { label: { en: "Donate", ro: "Donează" }, href: "/donatii/" },
];

type ContentLink = { label: string; href: string };
type Section = {
  heading?: string;
  meta?: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  image?: { src: string; alt: string };
  link?: ContentLink;
  links?: ContentLink[];
  variant?: "recording" | "callout";
};
type LiteraryArticle = {
  meta: string;
  title: string;
  paragraphs: string[];
  link?: ContentLink;
  image?: { src: string; alt: string };
};
type LiteraryPageData = {
  navLabels: string[];
  aboutTitle: string;
  aboutMeta: string;
  aboutParagraphs: string[];
  aboutSignature: string;
  boardTitle: string;
  boardIntro: string;
  boardMembers: string[];
  recordingsTitle: string;
  recordingsIntro: string;
  recordings: Section[];
  showMore: string;
  showLess: string;
  articlesTitle: string;
  articlesIntro: string;
  articles: LiteraryArticle[];
};
type TimelineItem = { date: string; title: string; text: string };
type DonationImage = { src: string; alt: string; href?: string };
type DonationMethod = {
  id: string;
  title: string;
  summary: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  note?: string;
  links?: ContentLink[];
  image?: DonationImage;
};
type LocalizedPage = { title: string; eyebrow: string; intro?: string; empty?: boolean; sections?: Section[]; calendarEmbed?: string; videoEmbed?: string; videoTitle?: string; timeline?: TimelineItem[]; donationMethods?: DonationMethod[]; donationClosing?: string; literary?: LiteraryPageData };
export type PageContent = Record<Language, LocalizedPage>;

const placeholder = (enTitle: string, roTitle: string): PageContent => ({
  en: { title: enTitle, eyebrow: "Saint Dimitrie the New", empty: true },
  ro: { title: roTitle, eyebrow: "Sfântul Dimitrie cel Nou", empty: true },
});

type ArchiveLink = { type: "video" | "intro" | "photos" | "article"; href: string };
type ArchiveEntry = {
  date: Record<Language, string>;
  title: Record<Language, string>;
  notes?: Partial<Record<Language, string[]>>;
  links: ArchiveLink[];
};

const literaryRecordings: ArchiveEntry[] = [
  { date: { en: "March 16, 2024", ro: "16 martie 2024" }, title: { en: "Who Is Afraid of Nae Ionescu?", ro: "Cui i-e frică de Nae Ionescu?" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=zhCRsQpEOJA" }] },
  { date: { en: "May 19, 2023", ro: "19 mai 2023" }, title: { en: "Between Mythos and Logos: Constantin Eretescu—Portrait of a Scholar", ro: "Între Mythos și Logos—Constantin Eretescu—Portret de cărturar" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=N6M9wlTIe0s" }] },
  { date: { en: "April 29, 2023", ro: "29 aprilie 2023" }, title: { en: "Recovering the Interwar Period: A Rediscovered Book—Horia Groza—Colloquia", ro: "Recuperarea Interbelicului—O carte regăsită—Horia Groza—Colocvii" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=cRMNVl-A3pw" }] },
  { date: { en: "April 8, 2023", ro: "8 aprilie 2023" }, title: { en: "Contemporary Reference Points: Romanian Writers in the United States", ro: "Repere contemporane de scriitori români în Statele Unite ale Americii" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=slCyW2R2m0Q" }] },
  { date: { en: "February 11, 2023", ro: "11 februarie 2023" }, title: { en: "Recovering the Exile", ro: "Recuperarea Exilului" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=SJ_cGanq350&t=386s" }] },
  { date: { en: "November 12, 2022", ro: "12 noiembrie 2022" }, title: { en: "Culture and Ideology", ro: "Cultură și Ideologie" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=o6-nHuz17PI" }] },
  { date: { en: "August 20, 2022", ro: "20 august 2022" }, title: { en: "Between the Kalashnikov and the Writing Desk: The Securitate and Intellectuals at Home and in Exile", ro: "Între Kalașnikov și masa de scris. Securitatea și intelectualii din țară și din exil" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=XSuxLF9pAcY" }] },
  { date: { en: "April 30, 2022", ro: "30 aprilie 2022" }, title: { en: "The Young Interwar Generation Under the Terror of History", ro: "Tânăra Generație interbelică sub teroarea istoriei" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=_ypVcbLa6Go&t=25s" }] },
  { date: { en: "February 26, 2022", ro: "26 februarie 2022" }, title: { en: "Between Gutenberg and Zuckerberg: Print and Online Media", ro: "Între Gutenberg și Zuckerberg—Presa tipărită și online" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=aqyS7PjeU7o" }] },
  { date: { en: "January 29, 2022", ro: "29 ianuarie 2022" }, title: { en: "Mihai Eminescu’s Nationalism and Romanians Beyond the Borders", ro: "Naționalismul lui Mihai Eminescu și românii din afara granițelor" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=FtGSELHW2w8" }] },
  { date: { en: "December 11, 2021", ro: "11 decembrie 2021" }, title: { en: "Between God and My People", ro: "Între Dumnezeu și neamul meu" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=goCBhQTucz8" }] },
  { date: { en: "September 25, 2021", ro: "25 septembrie 2021" }, title: { en: "The Gustian Archipelago: The Bucharest Sociological School During the Interwar Period", ro: "Arhipelagul Gustian: Școala Sociologică de la București în perioada interbelică" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=ZGd-yFebhyQ" }] },
  { date: { en: "August 28, 2021", ro: "28 august 2021" }, title: { en: "The Romanian Language, the Rich Empress", ro: "Limba română, împărăteasa bogată" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=aFVZlSHVIp4" }] },
  { date: { en: "July 31, 2021", ro: "31 iulie 2021" }, title: { en: "Lucian Blaga: Beneath the Corolla of Wonders of the World", ro: "Lucian Blaga—Sub corola de minuni a lumii" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=wHXlubt3RhM" }] },
  { date: { en: "June 19, 2021", ro: "19 iunie 2021" }, title: { en: "The Vitality of Youth", ro: "Seva tinereții" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=iVJTToH9r_o" }] },
  { date: { en: "May 22, 2021", ro: "22 mai 2021" }, title: { en: "Constantin Noica", ro: "Constantin Noica" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=4LK8cKm5_Zc" }] },
  { date: { en: "April 17, 2021", ro: "17 aprilie 2021" }, title: { en: "Emil Cioran", ro: "Emil Cioran" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=lB2rDgdqSb8" }] },
  { date: { en: "March 20, 2021", ro: "20 martie 2021" }, title: { en: "Always Mircea Eliade—Forever", ro: "Întotdeauna Mircea Eliade—Forever" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=JwZPKEaHWSE" }] },
  { date: { en: "February 20, 2021", ro: "20 februarie 2021" }, title: { en: "From Eros to Heresies: Love, Folklore, and Poetry", ro: "De la eros la eresuri—Dragoste, folclor și poezie" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=yPLBt_TvKmo" }] },
  { date: { en: "January 23, 2021", ro: "23 ianuarie 2021" }, title: { en: "The Eminescu Within Us", ro: "Eminescu din noi" }, notes: {
    en: ["Because of technical difficulties, only 1 hour and 18 minutes of the four hours spent together were recorded. We apologize and will address these issues for future meetings."],
    ro: ["Din cauza unor defecțiuni tehnice, s-au înregistrat numai o oră și 18 minute din cele patru ore petrecute împreună. Ne pare rău și vom remedia aceste probleme pentru întâlnirile viitoare."],
  }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=8sci-cSCcoI" }] },
  { date: { en: "December 5, 2020", ro: "5 decembrie 2020" }, title: { en: "The Burning Bush: The Fire of Faith in Troubled Times", ro: "Rugul Aprins—Focul credinței în vremuri tulburi" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=sEu34YcK1TQ" }] },
  { date: { en: "November 28, 2020", ro: "28 noiembrie 2020" }, title: { en: "Romania’s National Day—RAFA Event", ro: "Ziua României—Eveniment RAFA" }, links: [{ type: "video", href: "https://www.youtube.com/watch?v=Y7snoV55Om8" }] },
];

const archiveLinkLabel = (type: ArchiveLink["type"], language: Language) => ({
  video: language === "en" ? "Watch recording" : "Vezi înregistrarea",
  intro: language === "en" ? "Watch introduction" : "Vezi introducerea",
  photos: language === "en" ? "View event photos" : "Vezi fotografiile",
  article: language === "en" ? "Read the article" : "Citește articolul",
}[type]);

const literarySections = (language: Language): Section[] => literaryRecordings.map(entry => ({
  variant: "recording",
  meta: entry.date[language],
  heading: entry.title[language],
  paragraphs: entry.notes?.[language],
  links: entry.links
    .filter(link => link.type === "video")
    .map(link => ({ label: archiveLinkLabel(link.type, language), href: link.href })),
}));

const literaryPage = (language: Language): LiteraryPageData => language === "en" ? {
  navLabels: ["About & history", "Board of directors", "Recordings", "Articles"],
  aboutTitle: "A bridge between cultures and generations",
  aboutMeta: "Founded in December 2011 · Frederick, Colorado",
  aboutParagraphs: [
    "Founded in December 2011 at the initiative of professors Simona Sîrghie and Sebastian Doreanu, with the help of Prof. Anca Sîrghie, Ph.D., and Rev. Fr. Ioan Bogdan of the Saint Dimitrie the New parish, the Romanian literary circle in the American state at the foot of the Rocky Mountains chose as its spiritual patron Mircea Eliade—the universal man, a Renaissance-type scholar through the variety of fields he approached (science, literature, etc.).",
    "The organizers began with the idea of preserving the national language and culture among Romanian immigrants in this area, while also making them known to Americans.",
    "Alongside the church and the local organization RAFA (Romanian American Freedom Alliance), the circle wishes to be a bridge between Romanians at home and those who have chosen to live in these lands. At the same time, we want it to become a bridge between generations, so that Romanian-American youth born here may become familiar with their origins, traditions, and, especially, the language spoken by their parents and grandparents.",
    "By nature, people are drawn to beauty, harmony, generous ideas, and the joy of being together with those who love, appreciate, and admire the same things.",
    "Our literary circle offers all this spiritual joy because it is the place where poetry (and literature in general) meets and harmonizes perfectly with music, the visual arts, history, philosophy, and religion.",
    "The books presented here are gates that open toward other horizons, while the invited writers and artists have become helmsmen of the imagination.",
    "We invite you to embark with us on the ship of the spirit, on a journey toward the world of beauty, for such wonderful places do exist. Finding them means that you have sought them!",
  ],
  aboutSignature: "Simona Sîrghie and Sebastian Doreanu, captains of the Romanian Literary Circle “Mircea Eliade”",
  boardTitle: "Board of directors",
  boardIntro: "The Literary Circle is guided by educators, scholars, and clergy committed to Romanian culture and community life.",
  boardMembers: ["Prof. Anca Sîrghie, Ph.D.", "Rev. Fr. Ioan Bogdan", "Prof. Sebastian Doreanu", "Prof. Simona Sîrghie"],
  recordingsTitle: "Recordings",
  recordingsIntro: "Revisit conversations on Romanian literature, philosophy, history, faith, and cultural identity. The newest meetings appear first.",
  recordings: literarySections("en"),
  showMore: "See all recordings",
  showLess: "Show fewer recordings",
  articlesTitle: "Articles & recognition",
  articlesIntro: "Writers and scholars have praised the circle’s intellectual depth, careful organization, and role in connecting Romanian culture across borders.",
  articles: [
    {
      meta: "Article written by Ion Lazu",
      title: "A Literary Circle Without Equal in the Romanian World",
      paragraphs: [
        "This is about the Mircea Eliade Literary Circle of Denver, Colorado, USA. A simple, plainly visible observation, after I followed from beginning to end the proceedings—over four full hours, without a single second of respite!—of this long-established circle whose prestige continues to grow; proceedings easily accessible on Zoom, a circle brilliantly organized, without the slightest hesitation and with the highest professionalism, by Mr. Sebastian Doreanu, a well-known figure of the cultural diaspora who is rising rapidly in my estimation of our literary life. With an extraordinarily engaging theme—this time Lucian Blaga, the poet and philosopher—and with elite participation from every region of the Romanian world, but principally from our beloved homeland itself, this cultural feast succeeded in inspiring me and, in practice, restoring my fundamental confidence in the value of our writers and cultural historians. Put more simply: we have people of the highest value; why do we not manage to keep our eyes on them, and why have distrust, discouragement, and longing overcome us?!? The surprises followed one another: from the outstanding speakers to the excellent way Mr. Doreanu managed to support both his own statements about the excellence of studies concerning the great poet and philosopher and those of the speakers who followed one another for four hours, through the prompt presentation of numerous books published specifically on the subjects under discussion—and I do not believe I exaggerate in saying that nearly one hundred volumes were presented to us, with precise, pertinent explanations of their content. It must be emphasized: these were books read word for word, not elements of cultural decoration…",
        "A highly learned presentation by Mrs. Anca Sârghie about Blaga, an eminent personality of our twentieth-century culture. Comparable to Eminescu, whose lineage he acknowledged, Blaga himself wished to be considered the “younger brother.” Many similarities deserve attention: both were educated in the German tradition, both cultivated the national myth, and both edited folklore collections, etc. Even the fact that Blaga, who began writing poetry at fifteen and whose poems were long ignored, was first published nowhere other than Cernăuți, in historic Bukovina, may belong to this suggestion of similarities. Blaga later edited Eminescu’s poetry and accompanied it with learned prefaces. He worked on the German translation of Eminescu in 1928, for which he would receive the Hamangiu Prize in 1935. Blaga referred to Eminescu throughout his life, including in his acceptance speech at the Romanian Academy. He was unforgiving toward those who attacked Eminescu—Grama, Stăniloae, Rădulescu-Motru—and contributed essentially to Eminescu’s rehabilitation. See Liviu Rusu’s study From Mihai Eminescu to Lucian Blaga, as well as Ovidiu Drîmba’s The Philosophy of Blaga. Then comes the episode involving the minor poet Mihai Beniuc, who attacked Blaga ignobly, including in the 1959 novel On the Knife’s Edge. During the conference, Mr. Sebastian Doreanu showed us various books about Blaga that had been sent abroad, naturally without their covers, in order to evade the Securitate. I have described the first presentation in greater detail to give you a general idea of the level of the contributions within the Circle. You can access the Denver Orthodox church’s website, where you will find recordings of all the literary-circle meetings; the church supports this circle by every means so that each of you may delight in them, enrich yourselves, and form your own understanding.",
        "The following speakers came next: Ioan Biriș—Lucian Blaga and Dogmatic Concepts: From the Philosophy of the Absolute to the Philosophy of Science. His clear assertion: Lucian Blaga is the greatest Romanian philosopher—as C. Noica also stated, placing D. D. Roșca alongside Blaga. In greater detail: Blaga was both a poet and a philosopher, but he did not confuse the two domains. He had been interested in science since high school and astonished his examiners at the baccalaureate. He made mathematics and physics fields of profound interest and studied them deeply. The twentieth century witnessed a widening of the boundaries of knowledge, but also an oscillation from the rational to the irrational: Bergson, Frobenius, Spengler, Freud. He associated with Einstein and Poincaré. The rigorous dimension of Blaga’s work cannot be overlooked. Etc.",
        "Florea Lucaci. The Principle of Negation in Blaga’s Thought.",
        "Adrian Săhlean. On Blaga’s The Mioritic Space and the numerous errors in approaches to the ballad Miorița.",
        "Ileana Costea. The American artist Jerry McDaniel and Blaga’s light.",
        "Cristian Stamatoiu. The anthropological roots of Master Manole and the presence of this myth, through Lucian Blaga, in Romanian drama.",
        "Maria-Daniela Pănăzan. Biblical motifs in Lucian Blaga’s poetry.",
        "Dorin Stoika. The human condition in the universe according to Lucian Blaga’s metaphysics.",
        "Horia I. Groza. Blaga and the Romanian village.",
        "Ion Dur. Lucian Blaga and Vasile Băncilă—a metaphysical friendship.",
        "Francisc Lorinczi. The Sounds of the Tear (a recital from the poems of Lucian Blaga).",
        "Lidia Lazu: Lucian Blaga recital—Yesterday’s Light!",
        "At the end, five or six people offered their points of view during the Discussions, hosted with the same distinction by Mr. Sebastian Doreanu.",
        "Explore the work of the Mircea Eliade Literary Circle of Denver, Colorado, on the local church’s website.",
        "Excelsior!",
      ],
    },
    {
      meta: "Article written by Ion Dur for the Mircea Eliade Literary Circle",
      title: "Bessarabia—A Corner of Romania",
      paragraphs: [
        "As it has accustomed its target audience, the Mircea Eliade Literary Circle of Denver, Colorado, held another “collector’s edition” yesterday. It is true that the subject was passionate, serious, generous, and of the greatest interest: BESSARABIA—A CORNER OF ROMANIA.",
        "Leading specialists exchanged syllogisms for the benefit of more than forty followers, coming from folklore, history, literary criticism, and prose: Sanda Golopenția, Nicolas Dima, Maria Daniela Pănăzan, Constantin Eretescu, Ada Stuparu, Anca Sârghie, Stoica Lascu, Alex Cetățeanu, Horia Ion Groza.",
        "The cultivation of aesthetic emotions was sustained by Ileana Barbu’s delicate painting and graphic art—she also ventures into sculpture—and by the varied poetic forms explored by Lilia Manole, Diana Marcenco, and Ștefan Mircea Bîrtan.",
        "During the four hours of the Circle, truly fiery discussions also found their place at the end—Professor Corbu set the tone—with judgments that were, for the time being, more or less utopian regarding the reunification of today’s Romania, while Bessarabia continues to cry beneath the Soviet-Russian boot.",
        "But the entire direction and architecture of the Mircea Eliade Literary Circle rests on two caryatids whose strength sustains its well-deserved achievement: the philologist Simona Sîrghie and the historian Sebastian / Cayus Dorean.",
        "Fully deserved congratulations, and good health so that they may continue to move forward this Noah’s Ark, which month after month welcomes all those who feel and think in Romanian.",
        "BEING ROMANIAN, WE ARE ALSO UNIVERSAL, Arghezi would say.",
      ],
    },
  ],
} : {
  navLabels: ["Despre și istoric", "Consiliul director", "Înregistrări", "Articole"],
  aboutTitle: "O punte între culturi și generații",
  aboutMeta: "Fondat în decembrie 2011 · Frederick, Colorado",
  aboutParagraphs: [
    "Pornit în luna decembrie a anului 2011, din inițiativa profesorilor Simona Sîrghie și Sebastian Doreanu, cu ajutorul doamnei Prof. Univ. Dr. Anca Sîrghie și al preotului Ioan Bogdan de la parohia Sf. Dimitrie cel Nou, cenaclul românesc din statul american de la poalele Munților Stâncoși și-a ales ca patron spiritual pe cărturarul de factură renascentistă, prin varietatea domeniilor abordate (știință, literatură, etc.), omul universal Mircea Eliade.",
    "Ideea de la care au pornit organizatorii a fost aceea de păstrare a limbii și culturii naționale printre emigranții români din această zonă, cât și de a le face pe acestea cunoscute americanilor.",
    "Alături de biserică și de organizația locală RAFA (Romanian American Freedom Alliance), cenaclul se dorește a fi o punte de legătură între românii de acasă și cei care au ales să să trăiască pe aceste meleaguri. În același timp, ne dorim să devină și o punte de legătură între generații, astfel ca tinerii româno-americani, născuți aici, să fie familiarizați cu originile, tradițiile și, îndeosebi, cu limba vorbită de părinții și bunicii lor.",
    "Prin natura sa, omul este atras de frumos, de armonie, de idei generoase, de bucuria de a fi împreună cu semenii săi, care indrăgesc, apreciază și admiră aceleași lucruri.",
    "Cenaclul nostru oferă toată această bucurie spirituală pentru că este locul în care se se întâlnesc și se armonizează perfect poezia (și literatura în general) cu muzica, artele plastice, istoria, filosofia și religia.",
    "Cărțile prezentate aici sunt porți ce se deschid spre alte orizonturi, iar scriitorii și artiștii invitați au devenit timonieri ai imaginației.",
    "Vă așteptăm să vă îmbarcați, alături de noi, pe corabia spiritului, într-o călătorie spre lumea frumosului, căci există și asemenea locuri minunate. Găsindu-le, înseamnă că le-ați căutat!",
  ],
  aboutSignature: "Simona Sîrghie și Sebastian Doreanu, căpitanii corabiei Cenaclul Românesc „Mircea Eliade”",
  boardTitle: "Consiliul director",
  boardIntro: "Cenaclul este îndrumat de profesori, cărturari și clerici dedicați culturii române și vieții comunității.",
  boardMembers: ["Prof. Univ. Dr. Anca Sîrghie", "Pr. Ioan Bogdan", "Prof. Sebastian Doreanu", "Prof. Simona Sîrghie"],
  recordingsTitle: "Înregistrări",
  recordingsIntro: "Revedeți întâlnirile dedicate literaturii, filosofiei, istoriei, credinței și identității culturale românești. Cele mai noi ediții apar primele.",
  recordings: literarySections("ro"),
  showMore: "Vezi toate înregistrările",
  showLess: "Afișează mai puține",
  articlesTitle: "Articole și aprecieri",
  articlesIntro: "Scriitori și cărturari au apreciat profunzimea intelectuală a cenaclului, organizarea atentă și rolul său în unirea culturii române de pretutindeni.",
  articles: [
    {
      meta: "Articol scris de Ion Lazu",
      title: "Un cenaclu literar fără egal în lumea românească",
      paragraphs: [
        "Este vorba despre cenaclul Mircea Eliade de la Denver, Colorado, USA. Constatare simplă, la vedere, după ce am urmărit d-a-capo al fine desfășurarea – de-a lungul a 4 ore bătute pe muchie, fără vreo secundă de destindere ! – a lucrărilor acestui cenaclu cu vechime și cu prestigiu în creștere; lucrări lesne de accesat pe Zoom, un cenaclu aflat în organizarea strălucită, fără cea mai mică ezitare, de înalt profesionalism, a dlui Sebastian Doreanu, personaj cunoscut al diasporei culturale și care urcă vertiginos în aprecierile mele privind viața noastră literară. Cu o tematică incitantă la extrem – de astă dată Lucian Blaga, poetul și filosoful – și cu asigurarea unei participări de elită, din toate zonele românității, dar în principal din chiar dulcea țară, acest regal cultural a izbutit să mă entuziasmeze, practic să-mi relanseze încrederea de principiu în valoarea literaților și istoricilor culturii noastre. Mai simplu spus: avem oameni de cea mai înaltă valoare, de ce oare nu reușim să fim cu ochii pe dânșii, de ce ne-a cuprins neîncrederea, descurajarea, aleanul?!? Surprizele se țin lanț, cum spuneam: de la conferențiarii de vârf, la modul excelent în care dl Doreanu a izbutit să susțină propriile afirmații despre excelența studiilor privindu-l pe marele poet și filosof, dar și afirmațiile conferențiarilor ce s-au succedat vreme de patru ore patru, prin prezentarea promtă a numeroase cărți editate anume pe temele în discuție – și nu cred că exagerez afirmând că ni s-au prezentat ca la o sută de volume, cu explicațiile stricte, la obiect, despre conținutul lor, și este de subliniat: cărți citite la literă, iar nu elemente de decor cultural…",
        "O foarte doctă comunicare a dnei Anca Sârghie despre Blaga, personalitate eclatantă a culturii noastre din veacul XX. Comparabil cu Eminescu, față de care, recunoscând filiația, Balga însuși se dorea a fi considerat ”fratele mai mic”. Și sunt de luat în seamă multe similitudini, ambii erau de formație germană, ambii au cultivat mitul național; au editat culegeri de folclor, etc. Poate intra în această sugestie de similitudini chiar faptul că Blaga, debutând la 15 ani, cu poeme îndelung ignorate, a fost publicat pentru prima dată nu altundeva ci chiar la Cernăuți, în Bucovina istorică. Apoi, Blaga s-a ocupat de editarea poeziilor lui Eminescu, însoțindu-le de docte prefețe; S-a ocupat de traducerea lui Eminescu în germană, 1928, pentru care va primi premiul Hamangiu, 1935. Tot timpul Blaga a făcut referiri la Eminescu, inclusiv în discursul de recepție la Academia Română. Era neiertător cu cei care l-au atacat pe Eminescu: Grama, Stăniloae, Rădulescu-Motru, contribuind esențial la reabilitarea Eminscului. Vezi studiul lui Liviu Rusu: De la Mihai Eminescu la Lucian Blaga, vezi și Ovidiu Drîmba: Filosofia lui Blaga. Și vine secvența cu minimul poet Mihai Beniuc, care l-a atacat ignobil pe Blaga, inclusiv în romanul Pe muchie de cuțit, 1959. Pe timpul conferinței, dl Sebastian Doreanu ne prezintă diferite cărți despre Blaga, trimise în străinătate, desigur fără coperte, pentru a fenta securitatea. Am relatat mai pe larg despre prima conferință, ca să vă faceți o idee generală despre nivelul susținerilor din Cenaclu. Căci de fapt puteți accesa linkul bisericii ortodoxe din Denver, unde veți găsi înregistrările tuturor ședințelor de cenaclu, biserica fiind cea care susține cu toate mijloacele acest cenaclu, ca să vă desfătați – și să vă îmbogățiți – și să vă edificați fiecare în parte.",
        "Au urmat conferențiarii: Ioan Biriș: Lician Blaga și conceptele dogmatice. De la filosofia absolutului la filosofia științei. Afirmația clară: Lucian Blaga este cel mai mare filosof român – cum de altfel a afrimat C. Noica, alăturându-i lui Blaga pe D.D. Roșca. Mai în amănunt: Blaga a fost și poet și folosof, dar nu a încurcat cele două domenii. Era preocupat de știință încă din liceu, la bacalaureat i-a uimit pe examinatori. Își făcuse din matematică și fizică domenii de mare interes, cercetata în profunzime. În secolul XX se constată o lărgire a hotarelor cunoașterii, dar și o pendulare de la rațional la irațional. Bergson, Frobenius, Spengler, Freud. Îi frecventase pe Einstein, Poincare. Nu poate fi eludată latra riguroasă a operei lui Blaga. Etc.",
        "Florea Lucaci. Principiul negației în gândirea lui Blaga.",
        "Adrian Săhlean. Despre Spațiul mioritic, de Blaga; și despre numeroasele erori în abordarea baladei Miorița.",
        "Ileana Costea. Artistul america Jerry Mc. Daniel și lumina lui Blaga.",
        "Cristian Stamatoiu. Rădăcinile antropologice ale Meșterului Manole și prezența acestui mit, prin Lucian Blaga, în dramaturgia românească.",
        "Maria-Daniela Pănăzan. Motice biblice în poezia lui Lucian Blaga.",
        "Dorin Stoika. Condția omului în univers potrivit metafizicii lui Lucian Blaga.",
        "Horia I. Groza. Blaga și satul românesc.",
        "Ion Dur. Lucian Blaga și Vasile Băncilă – o prietenie metafizică.",
        "Francisc Lorinczi. Sunetele lacrimei (recital din poemele lu Lucian Blaga).",
        "Lidia Lazu: Recital Lucian Blaga – Lumina de ieri!",
        "La urmă, cinci-șase persoane care și-au spus punctul de vedere la Discuții, găzduite cu aceeași distincție de dl Sebastian Doreanu.",
        "Cercetați lucrările Cenaclului Mircea Eliade din Denver-Colorado pe saitul Bisericii din localitatea Denver.",
        "Excelsior !",
      ],
    },
    {
      meta: "Articol scris de Ion Dur la adresa Cenaclului Mircea Eliade",
      title: "Basarabia – colț de Românie",
      paragraphs: [
        "Cum și-a obișnuit publicul țintă, Cenaclul „Mircea Eliade” din Denver (Colorado) a avut ieri o nouă ediție „de colecție”. E-adevărat că tema era fierbinte, gravă, generoasă, de interes maxim: #BASARABIA - COLȚ DE ROMÂNIE.",
        "Și-au încrucișat silogismele spre beneficiul celor peste 40 de urmăritori specialiști de primă mărime, care vin dinspre folclor, istorie, critică literară, proză: Sanda Golopenția, Nicolas Dima, Maria Daniela Pănăzan, Constantin Eretescu, Ada Stuparu, Anca Sârghie, Stoica Lascu, Alex Cetățeanu, Horia Ion Groza.",
        "Cultivarea emoțiilor estetice a fost întreținută de suava pictură / grafică a Ilenei Barbu (care se încearcă deopotrivă și în sculptură), de variile formule poetice exersate de Lilia Manole, Diana Marcenco și Ștefan Mircea Bîrtan.",
        "În cele patru ore cât a ținut Cenaclul, și-au făcut loc, la final, și discuțiile cu adevărat incendiare (profesorul Corbu avea diapazonul), cu judecăți deocamdată mai mult sau mai puțin utopice despre reîntregirea României de azi (Basarabia continuă să țipe sub cizma sovieto-rusă).",
        "Dar întreaga regie și arhitectură a Cenaclului ”Mircea Eliade” se sprijină pe două cariatide, a căror forță susțin performanța binemeritată: filologa Simona Sîrghie și istoricul Sebastian / Cayus Dorean.",
        "Felicitări pe deplin meritate și sănătate pentru a putea împinge pe mai departe această Corabie a lui Noe, în care urcă lună de lună toți cei ce simt și gândesc românește.",
        "FIIND ROMÂNI, SUNTEM ȘI UNIVERSALI, ar spune Arghezi.",
      ],
    },
  ],
};

export const pages: Record<string, PageContent> = {
  "biserica-noastra/viitoarea-biserica": {
    en: {
      title: "Our Future Church",
      eyebrow: "Our Church",
      intro: "Discover the vision for the future home of Saint Dimitrie the New—a sacred place created for worship, fellowship, education, and generations to come.",
      videoTitle: "The vision for our new church",
      videoEmbed: "https://www.youtube-nocookie.com/embed/DIilNj0YD6g?rel=0",
    },
    ro: {
      title: "Viitoarea noastră biserică",
      eyebrow: "Biserica noastră",
      intro: "Descoperiți viziunea viitorului lăcaș al parohiei Sfântul Dimitrie cel Nou—un spațiu sfânt pentru rugăciune, comuniune, educație și generațiile care vor veni.",
      videoTitle: "Viziunea viitoarei noastre biserici",
      videoEmbed: "https://www.youtube-nocookie.com/embed/DIilNj0YD6g?rel=0",
    },
  },
  "community/youth-development": {
    en: {
      title: "Youth Development",
      eyebrow: "Community",
      intro: "A welcoming monthly gathering where teenagers and young adults can grow in faith, friendship, and confidence together.",
      sections: [
        {
          heading: "A place to grow together",
          paragraphs: [
            "The Youth Development group brings together teenagers and young adults from our parish in a friendly and supportive setting. Through conversation, fellowship, and shared activities, participants can strengthen their relationships, explore their faith, and encourage one another through the opportunities and challenges of growing up.",
            "The club offers young people a place to be heard, build lasting friendships, and become more involved in the life of our church community.",
          ],
        },
        {
          meta: "Monthly gathering",
          heading: "When we meet",
          paragraphs: ["The group meets on the last Tuesday of every month. Teenagers and young adults are warmly invited to join us."],
          variant: "callout",
        },
      ],
    },
    ro: {
      title: "Dezvoltarea tinerilor",
      eyebrow: "Comunitate",
      intro: "O întâlnire lunară primitoare, în care adolescenții și tinerii adulți pot crește împreună în credință, prietenie și încredere.",
      sections: [
        {
          heading: "Un loc în care creștem împreună",
          paragraphs: [
            "Grupul de dezvoltare a tinerilor îi reunește pe adolescenții și tinerii adulți ai parohiei noastre într-un cadru prietenos și încurajator. Prin conversații, activități și momente petrecute împreună, participanții își pot întări relațiile, își pot aprofunda credința și se pot susține reciproc în oportunitățile și provocările acestei etape a vieții.",
            "Clubul le oferă tinerilor un loc în care să fie ascultați, să lege prietenii de durată și să se implice mai mult în viața comunității bisericii noastre.",
          ],
        },
        {
          meta: "Întâlnire lunară",
          heading: "Când ne întâlnim",
          paragraphs: ["Grupul se întâlnește în ultima zi de marți a fiecărei luni. Adolescenții și tinerii adulți sunt invitați cu drag să ni se alăture."],
          variant: "callout",
        },
      ],
    },
  },
  "biserica-noastra/clerul": {
    en: { title: "Our Clergy", eyebrow: "Our Church", intro: "Meet the clergy who serve the Saint Dimitrie the New parish community.", sections: [
      { heading: "Rev. Fr. Ioan Bogdan", image: { src: "/rev-fr-ioan-bogdan.webp", alt: "Rev. Fr. Ioan Bogdan" }, paragraphs: [
        "Fr. Rev. Ioan Bogdan was appointed priest of our mission, Saint Demetrius the New, in September 2007 by His Eminence Archbishop Nathaniel Popp. He is a graduate of the \"Unirea\" High School in Brașov and the \"Andrei Șaguna\" Theological Institute in Sibiu, and he earned his Master’s degree in Theology from Saint Vladimir’s Orthodox Theological Seminary in Crestwood, NY.",
        "Son of Fr. Iosif Bogdan and Presbytera Viorica of Brașov, Romania, he was born on June 1, 1970, and came to the United States in April 1997. He served for several years at the Romanian Orthodox Cathedral “St. Mary” in Cleveland, OH, as a subdeacon and deacon, and, beginning October 29, 2006, as an assistant priest. Between 2003 and 2005, he served as Executive Director of the “Saint Andrew’s House” Cultural Center in Detroit, MI.",
        "In September 2005, he married Diana Klein. Together they have two children, Maria and Daniel. In September 2007, they moved to Colorado, where they established the mission parish of St. Demetrius the New.",
      ]},
      { heading: "Deacon Ilie Gîscă", image: { src: "/deacon-ilie-gisca.webp", alt: "Deacon Ilie Gîscă" }, paragraphs: [
        "Deacon Ilie Gîscă was ordained by His Grace Bishop Andrei of Cleveland in February 2024. Since then, he has been serving alongside Fr. Ioan at St. Demetrius the New Church in Frederick, CO.",
        "Mr. Ilie Gîscă was born on June 19, 1997, in the Republic of Moldova, Dondușeni District, village of Tîrnova. He is married to Liubov Kushchenko, and they have one child, Miriam Elyia.",
        "He is a graduate of the Orthodox Theological Seminary “St. Hierarch Gavriil” in Chișinău, Republic of Moldova. Between 2016 and 2022, he served as a chanter at the parish of “St. Great Martyr Demetrius” in Chișinău and as an assistant conductor within the Metropolis of Basarabia.",
      ]},
    ]},
    ro: { title: "Clerul nostru", eyebrow: "Biserica noastră", intro: "Cunoașteți clerul care slujește comunitatea parohiei Sfântul Dimitrie cel Nou.", sections: [
      { heading: "Pr. Ioan Bogdan", image: { src: "/rev-fr-ioan-bogdan.webp", alt: "Părintele Ioan Bogdan" }, paragraphs: [
        "Părintele Ioan Bogdan a fost numit preot al misiunii noastre, Sfântul Dimitrie cel Nou, în septembrie 2007 de către Înaltpreasfințitul Arhiepiscop Nathaniel Popp. Este absolvent al Liceului „Unirea” din Brașov și al Institutului Teologic „Andrei Șaguna” din Sibiu și a obținut diploma de master în Teologie la Saint Vladimir’s Orthodox Theological Seminary din Crestwood, NY.",
        "Fiul Părintelui Iosif Bogdan și al Preotesei Viorica din Brașov, România, s-a născut la 1 iunie 1970 și a venit în Statele Unite în aprilie 1997. A slujit timp de mai mulți ani la Catedrala Ortodoxă Română „Sfânta Maria” din Cleveland, OH, ca subdiacon și diacon, iar începând cu 29 octombrie 2006, ca preot asistent. Între 2003 și 2005, a fost Director Executiv al Centrului Cultural „Saint Andrew’s House” din Detroit, MI.",
        "În septembrie 2005, s-a căsătorit cu Diana Klein. Împreună au doi copii, Maria și Daniel. În septembrie 2007, s-au mutat în Colorado, unde au înființat parohia-misiune Sfântul Dimitrie cel Nou.",
      ]},
      { heading: "Diacon Ilie Gîscă", image: { src: "/deacon-ilie-gisca.webp", alt: "Diaconul Ilie Gîscă" }, paragraphs: [
        "Diaconul Ilie Gîscă a fost hirotonit de către Preasfințitul Andrei, Episcop de Cleveland, în februarie 2024. De atunci, slujește alături de Părintele Ioan la Biserica Sfântul Dimitrie cel Nou din Frederick, CO.",
        "Domnul Ilie Gîscă s-a născut la 19 iunie 1997 în satul Tîrnova, raionul Dondușeni, Republica Moldova. Este căsătorit cu Liubov Kushchenko și au un copil, Miriam Elyia.",
        "Este absolvent al Seminarului Teologic Ortodox „Sfântul Ierarh Gavriil” din Chișinău, Republica Moldova. Între 2016 și 2022, a slujit în calitate de cântăreț la Parohia „Sfântul Mare Mucenic Dimitrie” din Chișinău și ca dirijor secund în cadrul Mitropoliei Basarabiei.",
      ]},
    ]},
  },
  "biserica-noastra/istoria-noastra": {
    en: {
      title: "Our Parish",
      eyebrow: "Our Church",
      intro: "The story of Saint Dimitrie the New—from the first written request to a thriving Romanian Orthodox parish in Colorado.",
      timeline: [
        { date: "March 7, 2006", title: "A written beginning", text: "The formal steps to establish our mission began with a written request addressed to His Eminence Nathaniel and signed by 39 families." },
        { date: "April 17, 2006", title: "The organizing meeting", text: "Archpriest Dumitru Păun, as the representative of the Episcopate, presided over the meeting that constituted the Saint Dimitrie the New mission." },
        { date: "May 26, 2007", title: "The mission is established", text: "The Saint Dimitrie the New Romanian Orthodox Mission was established with the approval of the Diocesan Council of the Romanian Orthodox Episcopate of America, under the omophorion of His Eminence Archbishop Nathaniel." },
        { date: "October 1, 2007", title: "A parish priest is appointed", text: "The Episcopate at Vatra Românească appointed Fr. Ioan Bogdan as parish priest." },
        { date: "October 2, 2007", title: "Nonprofit registration", text: "Our mission was registered with the State of Colorado as a nonprofit organization." },
        { date: "December 10, 2010", title: "The first Divine Liturgy in Frederick", text: "The first Divine Liturgy was celebrated in the new church building in Frederick, Colorado." },
        { date: "February 2, 2013", title: "A gift from Saint Dimitrie’s reliquary", text: "On the Feast of the Presentation of Our Lord, we received coverings from the reliquary of Saint Dimitrie the New." },
        { date: "August 16, 2014", title: "A fragment of the Holy Cross", text: "Our church received a fragment of the Cross upon which our Lord Jesus Christ Himself was crucified." },
        { date: "September 2014", title: "From mission to parish", text: "Our mission was elevated to the rank of parish." },
      ],
    },
    ro: {
      title: "Parohia noastră",
      eyebrow: "Biserica noastră",
      intro: "Povestea Bisericii Sfântul Dimitrie cel Nou—de la prima solicitare scrisă la o parohie ortodoxă română în Colorado.",
      timeline: [
        { date: "7 martie 2006", title: "Începutul oficial", text: "Demersurile oficiale pentru înființarea misiunii noastre au început cu o solicitare scrisă, adresată Înaltpreasfințitului Nathaniel și semnată de 39 de familii." },
        { date: "17 aprilie 2006", title: "Ședința de constituire", text: "Părintele Protopop Dumitru Păun, în calitate de reprezentant al Episcopiei, a prezidat ședința de constituire a misiunii „Sf. Dimitrie cel Nou”." },
        { date: "26 mai 2007", title: "Înființarea misiunii", text: "Misiunea Ortodoxă Română Sf. Dimitrie cel Nou a luat ființă odată cu aprobarea sa de către Consiliul Episcopesc al Episcopiei Ortodoxe Române din America, sub omoforul Înaltpreasfințitului Arhiepiscop Nathaniel." },
        { date: "1 octombrie 2007", title: "Numirea preotului paroh", text: "Episcopia de la Vatra Românească l-a desemnat ca preot paroh pe Părintele Ioan Bogdan." },
        { date: "2 octombrie 2007", title: "Înregistrarea ca organizație nonprofit", text: "Misiunea noastră a fost înregistrată în statul Colorado ca organizație nonprofit." },
        { date: "10 decembrie 2010", title: "Prima Sfântă Liturghie în Frederick", text: "S-a oficiat prima Sfântă Liturghie în noua clădire din Frederick, Colorado." },
        { date: "2 februarie 2013", title: "Dar de la racla Sfântului Dimitrie", text: "De praznicul Întâmpinării Domnului, am primit acoperămintele de la racla Sfântului Dimitrie cel Nou." },
        { date: "16 august 2014", title: "Fragment din Sfânta Cruce", text: "Biserica noastră a primit un fragment din Crucea pe care S-a răstignit Însuși Domnul nostru Iisus Hristos." },
        { date: "Septembrie 2014", title: "De la misiune la parohie", text: "Misiunea noastră a fost ridicată la rangul de parohie." },
      ],
    },
  },
  "our-faith": placeholder("Our Faith", "Credința noastră"),
  "biserica-noastra/membru": {
    en: {
      title: "How Can You Become a Member of Our Mission?",
      eyebrow: "Get Involved",
      intro: "Anyone over the age of 18 who has been baptized and chrismated in the Orthodox Christian Church and completes the membership form (see below) may become a member of our mission.",
      sections: [
        { paragraphs: [
          "According to the Statute and Constitution of the Romanian Orthodox Episcopate of America (Article IX, Sections 13–17), the priest accepts or declines a person as a member of the parish solely on pastoral grounds.",
          "Please see below the ways you can complete the membership form:",
        ]},
        { heading: "Complete the form online", paragraphs: ["Choose the link for your preferred language:"], links: [
          { label: "Online form in Romanian", href: "https://forms.gle/umxpC1JHEW2qgpr16" },
          { label: "Online form in English", href: "https://forms.gle/8c1x2tLYRtWRhiDZ8" },
        ]},
        { heading: "Download and mail the form", paragraphs: [
          "Download the form in Romanian or English, complete it, and then bring it to the church or mail it to the address below:",
        ], links: [
          { label: "Romanian PDF form", href: "/documents/membership-form-ro.pdf" },
          { label: "English PDF form", href: "/documents/membership-form-en.pdf" },
        ]},
        { heading: "Mailing address", paragraphs: [
          "Secretariat",
          "Saint Dimitrie the New",
          "6060 Puritan Lane",
          "Frederick, CO 80516",
        ]},
        { heading: "This year's membership fee", bullets: [
          "$100 per year for one person. Of this amount, $85.00 is donated to the Episcopate, and only $15 remains with the parish.",
        ]},
        { heading: "Suggested donations for non-members", paragraphs: ["For those who are not members of our mission, a donation is suggested for the religious services provided:"], bullets: [
          "Baptism: $250",
          "Wedding: $350",
          "Memorial service (Parastas): $50",
          "House blessing (Sfeștanie): $100",
          "Funeral: $150",
        ]},
        { heading: "Important", paragraphs: ["No service will be refused for financial reasons."] },
      ],
    },
    ro: {
      title: "Cum puteți deveni membru al misiunii noastre?",
      eyebrow: "Implică-te",
      intro: "Membru al misiunii noastre poate deveni oricine are vârsta de peste 18 ani, este botezat și miruns în Biserica Ortodoxă Creștină și completează formularul de membrie (vedeți mai jos).",
      sections: [
        { paragraphs: [
          "Conform Statutului și Constituției Bisericii Ortodoxe Române din America (Articolul IX, Secțiunile 13–17), preotul acceptă sau nu o persoană ca membră a parohiei doar pe criterii strict pastorale.",
          "Vă rugăm să vedeți mai jos modalitățile de a completa formularul de membrie:",
        ]},
        { heading: "Completați formularul online", paragraphs: ["Accesați unul dintre următoarele linkuri, în funcție de limba dorită:"], links: [
          { label: "Formular online în română", href: "https://forms.gle/umxpC1JHEW2qgpr16" },
          { label: "Formular online în engleză", href: "https://forms.gle/8c1x2tLYRtWRhiDZ8" },
        ]},
        { heading: "Descărcați și trimiteți formularul", paragraphs: [
          "Descărcați formularul în română sau engleză, completați-l, după care puteți să îl aduceți la biserică sau să îl trimiteți la adresa de mai jos:",
        ], links: [
          { label: "Formular PDF în română", href: "/documents/membership-form-ro.pdf" },
          { label: "Formular PDF în engleză", href: "/documents/membership-form-en.pdf" },
        ]},
        { heading: "Adresa poștală", paragraphs: [
          "Secretariat",
          "Saint Dimitrie the New",
          "6060 Puritan Lane",
          "Frederick, CO 80516",
        ]},
        { heading: "Taxa de membrie pe acest an", bullets: [
          "$100/an pentru o persoană. Din această sumă, $85.00 sunt donați la Episcopie; doar $15 sunt pentru parohie.",
        ]},
        { heading: "Donații sugerate pentru cei care nu sunt membri", paragraphs: ["Pentru cei care nu sunt membri ai misiunii noastre, se sugerează o donație pentru serviciile religioase oferite:"], bullets: [
          "Botez: $250",
          "Cununie: $350",
          "Parastas: $50",
          "Sfeștanie: $100",
          "Înmormântare: $150",
        ]},
        { heading: "Important", paragraphs: ["Nicio slujbă nu va fi refuzată pe motive financiare."] },
      ],
    },
  },
  "becoming-orthodox": placeholder("Becoming Orthodox", "Cum devin ortodox"),
  "take-a-tour": placeholder("Take a Tour", "Vizitează biserica"),
  "calendar": {
    en: {
      title: "Parish Calendar",
      eyebrow: "Services & Events",
      intro: "Consult the parish calendar for the current schedule of worship services, feast days, and community events.",
      calendarEmbed: "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&src=Y182YmsxOGxpb2k3NTBqbmZhcDBydDZnaWxjb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&hl=en",
    },
    ro: {
      title: "Calendarul parohiei",
      eyebrow: "Slujbe și evenimente",
      intro: "Consultați calendarul parohiei pentru programul actualizat al slujbelor, sărbătorilor și evenimentelor comunității.",
      calendarEmbed: "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&src=Y182YmsxOGxpb2k3NTBqbmZhcDBydDZnaWxjb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&hl=ro",
    },
  },
  "services/divine-liturgy": {
    en: { title: "Regular Liturgical Schedule", eyebrow: "Services", sections: [
      { paragraphs: [
        "Every Sunday morning at 10:00 AM, we celebrate the Divine Liturgy.",
        "We also celebrate the Divine Liturgy at 10:00 AM on every feast day marked in red on the Romanian Orthodox Episcopate calendar.",
        "Services are celebrated primarily in Romanian. When parishioners or visitors who do not speak Romanian are present, the priest also offers petitions, the Lord’s Prayer, and the Creed in English.",
        "Responses and chanting at the kliros are under the direction of Dr. Patricia Bratulescu.",
        "During the fasting seasons, Vespers is celebrated on Saturday at 7:00 PM, followed by the Holy Mystery of Confession.",
        "The parish also celebrates the Holy Mystery of Unction, especially during the major fasting periods of the Church year.",
      ], link: { label: "Vatra calendar", href: "https://roea.org/resources-category/calendar-tipic-paschalia/" } },
    ]},
    ro: { title: "Programul liturgic obișnuit", eyebrow: "Sfintele slujbe", sections: [
      { paragraphs: [
        "În fiecare duminică dimineața, de la ora 10:00, săvârșim Sf. Liturghie.",
        "De asemenea, săvârșim Sfânta Liturghie de la ora 10:00 la fiecare sărbătoare trecută cu roșu în calendarul Episcopiei Ortodoxe Române din America.",
        "Slujbele sunt în limba română. Când sunt prezenți enoriași sau vizitatori care nu cunosc limba română, preotul rostește ectenii, rugăciunea Tatăl Nostru și Crezul și în limba engleză.",
        "Răspunsurile și cântările de la strană sunt sub îndrumarea doamnei Dr. Patricia Bratulescu.",
        "În timpul posturilor, Vecernia se săvârșește sâmbăta de la ora 19:00, urmată de Taina Sfintei Spovedanii.",
        "De asemenea, săvârșim Taina Sfântului Maslu, cu precădere în posturile de peste an.",
      ], link: { label: "Calendarul de la Vatra", href: "https://roea.org/resources-category/calendar-tipic-paschalia/" } },
    ]},
  },
  "services/baptism": {
    en: { title: "Baptism", eyebrow: "Services", intro: "Information to help families and sponsors prepare for the Holy Mystery of Baptism.", sections: [
      { heading: "What to bring", bullets: [
        "A decorated white candle for the sponsors",
        "A small bottle of clean oil, preferably olive oil",
        "One large white towel and one small white towel for the priest",
        "A bar of soap for the priest, if this is part of your tradition",
        "A white ribbon approximately 2 inches wide and 3–4 feet long (no more than 7 feet)",
        "A small cross, if this is part of your tradition",
        "White clothing for the newly baptized, symbolizing purity",
      ]},
      { heading: "Information for the baptismal certificate", bullets: [
        "Full name of the person being baptized",
        "Parents’ names, date of birth, and place of birth",
        "Names of the godparents, who must be Orthodox Christians",
        "Home address, telephone number, and proposed date and time",
        "Parish membership information",
      ]},
      { heading: "Spiritual preparation and contribution", paragraphs: [
        "Godparents are encouraged to receive Confession and Holy Communion before the Baptism. Contact the priest in advance to select a date and discuss preparation.",
        "The parish’s current suggested contribution for Baptism is $300. Parish members of at least six months receive religious services without charge. No one will be refused a service for financial reasons.",
      ]},
    ]},
    ro: { title: "Botez", eyebrow: "Sfintele slujbe", intro: "Informații pentru pregătirea Tainei Sfântului Botez.", sections: [
      { heading: "Lucruri necesare", bullets: [
        "O lumânare albă frumos împodobită pentru nași",
        "O sticlă mică de ulei curat, preferabil de măsline",
        "Un prosop mare alb și un prosop mic alb pentru preot",
        "Un săpun pentru preot, dacă aceasta este tradiția familiei",
        "O panglică albă lată de aproximativ 2 inches și lungă de 3–4 ft (maximum 7 ft)",
        "O cruciuliță mică, dacă aceasta este tradiția familiei",
        "Haine albe pentru cel nou botezat, ca simbol al curăției",
      ]},
      { heading: "Date pentru certificatul de botez", bullets: [
        "Numele complet al celui care se botează",
        "Numele părinților, data și locul nașterii",
        "Numele nașilor, care trebuie să fie creștini ortodocși",
        "Adresa, numărul de telefon, ziua și ora propuse",
        "Informații despre membria în parohie",
      ]},
      { heading: "Pregătire duhovnicească și contribuție", paragraphs: [
        "Este bine ca nașii să se spovedească și să se împărtășească înainte de Botez. Contactați preotul din timp pentru stabilirea datei.",
        "Contribuția sugerată în prezent pentru Botez este de $300. Membrii cu o vechime de cel puțin șase luni beneficiază de slujbe fără plată. Nimeni nu va fi refuzat din motive financiare.",
      ]},
    ]},
  },
  "services/marriage": {
    en: { title: "Marriage", eyebrow: "Services", intro: "Preparation for the Holy Mystery of Marriage begins with a conversation with the parish priest.", sections: [
      { heading: "What to bring", bullets: [
        "The bride and groom must be baptized Orthodox Christians; exceptional cases require written episcopal dispensation",
        "Orthodox sponsors married in the Orthodox Church",
        "Two large white candles and the wedding rings",
        "A small bottle of red wine and, if desired, a stemmed glass",
        "Ladyfinger biscuits, if this is part of the family tradition",
        "A white ribbon approximately 2 inches wide and 7 feet long",
      ]},
      { heading: "Information the couple should provide", bullets: [
        "Full names of the bride, groom, and sponsors",
        "The couple’s address and telephone numbers",
        "Parish membership information",
        "Information about any previous marriage, divorce, or widowhood",
      ]},
      { heading: "When weddings are not celebrated", bullets: [
        "During fasting seasons and fast days",
        "On the eve and day of the twelve Great Feasts",
        "During Cheesefare Week and Bright Week",
        "From the Nativity of the Lord through Theophany (December 25–January 6)",
      ]},
      { heading: "Scheduling and contribution", paragraphs: [
        "Contact the priest before confirming the wedding date. He will guide the couple through the pastoral and canonical preparation.",
        "The current suggested contribution for Marriage is $400. Members of at least six months receive services without charge. No one will be refused for financial reasons.",
      ]},
    ]},
    ro: { title: "Cununie", eyebrow: "Sfintele slujbe", intro: "Pregătirea Tainei Sfintei Cununii începe printr-o discuție cu preotul paroh.", sections: [
      { heading: "Lucruri necesare", bullets: [
        "Mirii să fie botezați ortodocși; cazurile excepționale necesită dispensă scrisă de la ierarh",
        "Nași ortodocși căsătoriți în Biserica Ortodoxă",
        "Două lumânări albe mari și inelele de logodnă",
        "O sticluță cu vin roșu și, dacă se dorește, un pahar cu picior",
        "Pișcoturi, dacă aceasta este tradiția familiei",
        "O panglică albă lată de aproximativ 2 inches și lungă de aproximativ 7 ft",
      ]},
      { heading: "Informații necesare", bullets: [
        "Numele complete ale mirelui, miresei și nașilor",
        "Adresa și numerele de telefon ale mirilor",
        "Informații despre membria în parohie",
        "Informații despre eventuale căsătorii anterioare, divorț sau văduvie",
      ]},
      { heading: "Perioade în care nu se fac nunți", bullets: [
        "În posturile și zilele de post de peste an",
        "În preziua și ziua celor douăsprezece Praznice Împărătești",
        "În Săptămâna Brânzei și în Săptămâna Luminată",
        "De la Nașterea Domnului până la Botezul Domnului (25 decembrie–6 ianuarie)",
      ]},
      { heading: "Programare și contribuție", paragraphs: [
        "Contactați preotul înainte de confirmarea datei. El va îndruma mirii în pregătirea pastorală și canonică.",
        "Contribuția sugerată în prezent pentru Cununie este de $400. Membrii cu o vechime de cel puțin șase luni beneficiază de slujbe fără plată. Nimeni nu va fi refuzat din motive financiare.",
      ]},
    ]},
  },
  "services/funeral-service": {
    en: { title: "Funeral Service", eyebrow: "Services", intro: "Please contact the parish priest as soon as possible when arranging an Orthodox funeral.", sections: [
      { heading: "What to prepare", bullets: [
        "A small bottle of oil, preferably olive oil",
        "A small bottle of wine, preferably red",
        "Koliva, wine, and bread for the memorial meal",
        "Crescent-shaped cookies only if they belong to your family tradition",
      ], paragraphs: ["In some Romanian regions, families prepare a traditional memorial arrangement called a “măr.” If you plan to do so, please tell the priest in advance."]},
      { heading: "Memorials after the funeral", bullets: [
        "The small memorial is held after nine days or on the Sunday following the funeral",
        "The larger memorial is held at forty days, when blessed clothing may also be distributed",
        "For the one-year memorial, contact the priest well in advance",
      ], paragraphs: ["The current suggested contribution for a Funeral Service is $200. Members of at least six months receive services without charge. No one will be refused for financial reasons."]},
    ]},
    ro: { title: "Înmormântare", eyebrow: "Sfintele slujbe", intro: "Vă rugăm să contactați preotul paroh cât mai curând pentru pregătirea unei înmormântări ortodoxe.", sections: [
      { heading: "Lucruri necesare", bullets: [
        "O sticluță mică de ulei, preferabil de măsline",
        "O sticluță de vin, preferabil roșu",
        "Colivă, vin și colac pentru pomană",
        "Cornulețe numai dacă fac parte din obiceiul familiei",
      ], paragraphs: ["În unele zone din România se pregătește un „măr”. Dacă doriți să urmați acest obicei, vă rugăm să anunțați preotul din timp."]},
      { heading: "Pomenirile după înmormântare", bullets: [
        "Parastasul mic se face la nouă zile sau în duminica următoare înmormântării",
        "Pomana mare se face la patruzeci de zile, când se pot împărți și hainele binecuvântate",
        "Pentru parastasul de un an, contactați preotul din timp",
      ], paragraphs: ["Contribuția sugerată în prezent pentru Înmormântare este de $200. Membrii cu o vechime de cel puțin șase luni beneficiază de slujbe fără plată. Nimeni nu va fi refuzat din motive financiare."]},
    ]},
  },
  "services/memorial-service": {
    en: { title: "Memorial Service", eyebrow: "Services", intro: "A Parastas is the Orthodox memorial service offered in prayer for those who have fallen asleep in the Lord.", sections: [
      { heading: "What to bring", bullets: [
        "Koliva",
        "A loaf of bread",
        "A bottle of wine",
        "Candles",
        "A list with the baptismal names of those being commemorated",
      ], paragraphs: ["Food, clothing, or other items may be distributed at church in memory of the departed after receiving the priest’s blessing. During a fasting season, all food should follow the fast."]},
      { heading: "When memorials are not celebrated", bullets: [
        "On Sundays, except with the bishop’s blessing",
        "On the Great Feasts of the Church",
        "On weekdays during Great Lent and on days when the Divine Liturgy is not celebrated",
        "From Palm Sunday through the Sunday of Saint Thomas",
        "From the Nativity of the Lord through Theophany (December 25–January 6)",
      ]},
      { heading: "Contribution", paragraphs: ["The current suggested contribution for a Memorial Service is $100. Members of at least six months receive services without charge. No one will be refused for financial reasons."]},
    ]},
    ro: { title: "Parastas", eyebrow: "Sfintele slujbe", intro: "Parastasul este slujba ortodoxă de pomenire și rugăciune pentru cei adormiți în Domnul.", sections: [
      { heading: "Lucruri necesare", bullets: [
        "O colivă",
        "Un colac sau o pâine",
        "O sticlă cu vin",
        "Lumânări",
        "Un pomelnic cu numele de botez ale celor pomeniți",
      ], paragraphs: ["În memoria celor adormiți se pot împărți la biserică mâncare, haine sau alte obiecte, după binecuvântarea preotului. Dacă parastasul are loc în post, mâncarea trebuie să fie de post."]},
      { heading: "Perioade în care nu se fac parastase", bullets: [
        "În duminicile de peste an, cu excepția binecuvântării ierarhului",
        "La Praznicele Împărătești",
        "În zilele de rând ale Postului Mare și în zilele aliturgice",
        "De la Duminica Floriilor până la Duminica Sfântului Apostol Toma",
        "De la Nașterea Domnului până la Botezul Domnului (25 decembrie–6 ianuarie)",
      ]},
      { heading: "Contribuție", paragraphs: ["Contribuția sugerată în prezent pentru Parastas este de $100. Membrii cu o vechime de cel puțin șase luni beneficiază de slujbe fără plată. Nimeni nu va fi refuzat din motive financiare."]},
    ]},
  },
  "biserica-noastra/scoala-duminicala": {
    en: {
      title: "Sunday School",
      eyebrow: "Community & Education",
      intro: "Our Sunday School helps children grow in the Orthodox faith while discovering the rich traditions of Romanian culture.",
      sections: [
        {
          heading: "Learning, faith, and belonging",
          paragraphs: [
            "The Sunday School program is coordinated by Natalia Maxim together with Presbytera Diana Bogdan, Mihaiela Vieru, Georgeta Popa, Diana Marcenco, and Corina Mihăilescu. Children participating in the program learn about the values of Orthodoxy and Romania’s rich traditions.",
          ],
        },
        {
          meta: "Faith · Worship · Heritage",
          heading: "Three core goals",
          steps: [
            "To educate young people spiritually and morally in accordance with the teachings of our Lord Jesus Christ and the traditions of Romanian Orthodoxy.",
            "To develop the habit of studying Scripture and the Holy Fathers and, as a result, participating in the services and sacramental life of our church.",
            "To cultivate an awareness of Romanian heritage, respect for Romanian values, and commitment to the community and country in which they live.",
          ],
        },
        {
          variant: "callout",
          meta: "Every Sunday · 11:30 AM",
          heading: "Schedule",
          paragraphs: ["Sunday School meets every Sunday beginning at 11:30 AM."],
        },
        {
          heading: "Celebrations throughout the year",
          paragraphs: ["Throughout the year, the Sunday School children prepare programs and activities for:"],
          bullets: [
            "Easter",
            "Christmas",
            "An autumn farm visit",
            "March 1 and March 8 celebrations",
            "Thanksgiving",
          ],
        },
        {
          variant: "callout",
          meta: "$20 per child · Materials included",
          heading: "Registration",
          paragraphs: ["To register your child, please speak with one of the Sunday School teachers. The registration fee, which covers materials, is $20 per child."],
        },
      ],
    },
    ro: {
      title: "Școala Duminicală",
      eyebrow: "Comunitate și educație",
      intro: "Școala Duminicală îi ajută pe copii să crească în credința ortodoxă și să descopere bogatele tradiții românești.",
      sections: [
        {
          heading: "Educație, credință și apartenență",
          paragraphs: [
            "Școala Duminicală este un program coordonat de Natalia Maxim, alături de Preoteasa Diana Bogdan, Mihaiela Vieru, Georgeta Popa, Diana Marcenco și Corina Mihăilescu. Copiii participanți la acest program învață despre valorile Ortodoxiei și bogatele tradiții românești.",
          ],
        },
        {
          meta: "Credință · Slujire · Tradiție",
          heading: "Trei obiective majore",
          steps: [
            "Să educe tinerii din punct de vedere spiritual și moral, în acord cu învățăturile Domnului nostru Iisus Hristos și ale tradițiilor Ortodoxiei Românești.",
            "Să dezvolte obiceiul de a studia Scriptura și Sfinții Părinți și, în consecință, de a participa la slujbe și la viața sacră a bisericii noastre.",
            "Să cultive conștiința de neam, cu respect pentru valorile noastre românești, pentru comunitate și pentru țara în care trăiesc.",
          ],
        },
        {
          variant: "callout",
          meta: "În fiecare duminică · 11:30 AM",
          heading: "Orar",
          paragraphs: ["Școala Duminicală se desfășoară în fiecare duminică, începând cu ora 11:30 AM."],
        },
        {
          heading: "Serbări și activități de-a lungul anului",
          paragraphs: ["De-a lungul anului, copiii de la Școala Duminicală pregătesc serbări și activități pentru:"],
          bullets: [
            "Paști",
            "Crăciun",
            "Vizita la fermă, toamna",
            "1 și 8 Martie",
            "Thanksgiving",
          ],
        },
        {
          variant: "callout",
          meta: "$20 per copil · Materiale incluse",
          heading: "Înscrieri",
          paragraphs: ["Pentru înscrieri, vă rugăm să luați legătura cu una dintre doamnele profesoare. Taxa de înscriere, destinată materialelor, este de $20 per copil."],
        },
      ],
    },
  },
  "community/literary-circle": {
    en: { title: "Mircea Eliade Literary Circle", eyebrow: "Community", intro: "A meeting place for Romanian literature, history, philosophy, art, faith, and cultural memory in Colorado and across the world.", literary: literaryPage("en") },
    ro: { title: "Cenaclul literar Mircea Eliade", eyebrow: "Comunitate", intro: "Un loc de întâlnire pentru literatura, istoria, filosofia, arta, credința și memoria culturală românească din Colorado și din întreaga lume.", literary: literaryPage("ro") },
  },
  "community/announcements": placeholder("Community Announcements", "Anunțuri comunitare"),
  "donatii": {
    en: {
      title: "Donations",
      eyebrow: "Support Our Parish",
      intro: "Below you can find several ways to support our church.",
      donationClosing: "Thank you, and may God bless you. If you have any questions, please contact us.",
      donationMethods: [
        {
          id: "zelle", title: "Zelle",
          summary: "Donate directly through your bank using the email address donate@sfdimitrie.org.",
          paragraphs: ["Most banks offer Zelle transfers through their online banking platforms or mobile applications."],
          note: "Zelle does not charge the church a fee.",
          links: [
            { label: "Email donate@sfdimitrie.org", href: "mailto:donate@sfdimitrie.org" },
            { label: "Learn more about Zelle", href: "https://www.zellepay.com/" },
          ],
          image: { src: "/images/donation-zelle.jpg", alt: "Zelle donation information for Saint Dimitrie the New" },
        },
        {
          id: "stocks", title: "Stock Donations",
          summary: "The parish can receive donations of stock through our donation partner.",
          paragraphs: ["Stock donations can provide significant benefits to both the church and the donor:"],
          bullets: [
            "The church receives the maximum value of the donated stock; only 1.9% is withheld.",
            "The donor may avoid capital-gains tax.",
            "The donor may deduct the full current market value of the donation from income taxes.",
            "The donor may specify the tax lot from which the donation should be made, including the purchase date and price.",
          ],
          links: [
            { label: "Start a stock donation", href: "https://stockdonator.com/stock-information/?oid=cefd7dfe" },
            { label: "How to specify a tax lot", href: "https://stockdonator.com/docs/can-i-specify-a-certain-tax-lot-or-specific-date-of-stock-i-wish-to-donate/" },
            { label: "Visit Stock Donator", href: "https://stockdonator.com/" },
            { label: "Email donation questions", href: "mailto:donate@sfdimitrie.org" },
          ],
          image: { src: "/images/donation-stock-qr.png", alt: "QR code for donating stock to Saint Dimitrie the New", href: "https://stockdonator.com/stock-information/?oid=cefd7dfe" },
        },
        {
          id: "king-soopers", title: "King Soopers Community Rewards",
          summary: "Support the church through purchases you already make at King Soopers.",
          paragraphs: ["Through its partner, The Kroger Co., King Soopers distributes up to $2,500,000 quarterly—and up to $10,000,000 annually—to participating organizations. The church’s share depends on spending by its enrolled participants relative to all organizations in the program. The more parish participants we have, the more the church can receive."],
          steps: [
            "Visit kingsoopers.com and sign in to your King Soopers account, or create an account if you do not already have one.",
            "From My Account, select Community Rewards, or open the Community Rewards page directly.",
            "Search for “Saint Dimitrie the New” or enter organization code RF678, then select Enroll.",
            "Add Saint Dimitrie the New to your account only once. Use the King Soopers card connected to that account whenever you shop.",
            "On a phone, install the King Soopers app and sign in. Under Rewards → Community Rewards, enter code RF678.",
          ],
          links: [
            { label: "King Soopers website", href: "https://www.kingsoopers.com/" },
            { label: "Community Rewards", href: "https://www.kingsoopers.com/signin?redirectUrl=/account/communityrewards" },
            { label: "King Soopers app", href: "https://www.kingsoopers.com/i/ways-to-shop/mobile-app" },
            { label: "Program details", href: "https://www.kingsoopers.com/i/community/community-rewards" },
          ],
        },
        {
          id: "venmo", title: "Venmo",
          summary: "Send a donation to the church through Venmo.",
          steps: [
            "Download the Venmo application to your mobile phone.",
            "Set up a payment method.",
            "In the friends list, search for “Sf Dimitrie Church.” After finding the account, send a request to be added as a friend.",
            "Once the friend request is accepted, you can make payments to Saint Dimitrie Church.",
          ],
          note: "Venmo charges the church 1.9% plus $0.10 from your donation.",
          links: [{ label: "Open Venmo", href: "https://venmo.com/account/sign-in" }],
          image: { src: "/images/donation-venmo-qr.png", alt: "Venmo QR code for Saint Dimitrie Church", href: "https://venmo.com/account/sign-in" },
        },
        {
          id: "checks", title: "Checks",
          summary: "Checks may be mailed directly to the parish or arranged automatically through your bank.",
          paragraphs: ["Please make your check payable to “Saint Dimitrie the New” and mail it to:", "Saint Dimitrie the New\n6060 Puritan Lane\nFrederick, CO 80516"],
        },
        {
          id: "paypal", title: "PayPal",
          summary: "Donate through PayPal using the QR code or the direct PayPal link.",
          bullets: [
            "On a computer, click the QR-code image or scan it with your mobile phone.",
            "On a mobile device, tap the QR-code image.",
          ],
          note: "The church is charged 2.5% of your donation. For donations over $100.00, the fee decreases proportionally.",
          links: [{ label: "Donate with PayPal", href: "https://paypal.me/stdimitrie?locale.x=en_US" }],
          image: { src: "/images/donation-paypal-qr.png", alt: "PayPal QR code for Saint Dimitrie the New", href: "https://paypal.me/stdimitrie?locale.x=en_US" },
        },
        {
          id: "raiseright", title: "RaiseRight",
          summary: "Purchase gift cards and allow the participating retailer’s rebate to support the church.",
          paragraphs: ["RaiseRight offers gift cards from hundreds of stores and restaurants. You receive the card’s full value, while the percentage offered by the participating brand is donated to the church. The cards do not expire and may be used at any time. This offers a way to shop in stores or online with gift cards instead of an ordinary credit card. Our parish implemented this program in 2021."],
          steps: [
            "Open the RaiseRight enrollment page, enter code 171LAB8676459, and select Register.",
            "Enter your information, create an account, and search for the gift cards you want. The complete retailer list is available online.",
            "On a phone, install the RaiseRight app and sign in. To create an account, select Join a Program and enter code 171LAB8676459.",
          ],
          links: [
            { label: "Enroll in RaiseRight", href: "https://shop.shopwithscrip.com/Login/Enroll" },
            { label: "View participating retailers", href: "https://shop.shopwithscrip.com/Shop/Product/BrandAlphabeticalList" },
            { label: "RaiseRight mobile app", href: "https://shop.shopwithscrip.com/Support/shop-earn" },
            { label: "Gift-card fundraising details", href: "https://www.shopwithscrip.com/" },
          ],
        },
      ],
    },
    ro: {
      title: "Donații",
      eyebrow: "Sprijiniți parohia",
      intro: "Mai jos puteți găsi modalități de a susține biserica noastră.",
      donationClosing: "Vă mulțumim și Dumnezeu să vă binecuvânteze. Pentru orice întrebare, vă rugăm să ne contactați.",
      donationMethods: [
        {
          id: "zelle", title: "Zelle",
          summary: "Donați direct prin banca dumneavoastră folosind adresa de e-mail donate@sfdimitrie.org.",
          paragraphs: ["Majoritatea băncilor oferă tranzacții cu Zelle din platformele lor online sau din aplicațiile mobile."],
          note: "Serviciul Zelle nu percepe nicio taxă bisericii.",
          links: [
            { label: "E-mail donate@sfdimitrie.org", href: "mailto:donate@sfdimitrie.org" },
            { label: "Mai multe despre Zelle", href: "https://www.zellepay.com/" },
          ],
          image: { src: "/images/donation-zelle.jpg", alt: "Informații pentru donații Zelle către Biserica Sfântul Dimitrie cel Nou" },
        },
        {
          id: "stocks", title: "Donații cu acțiuni",
          summary: "Parohia poate primi donații cu acțiuni prin intermediul partenerului nostru.",
          paragraphs: ["Donațiile cu acțiuni aduc beneficii majore ambelor părți:"],
          bullets: [
            "Biserica obține valoarea maximă a acțiunilor; se rețin doar 1.9%.",
            "Donatorul poate evita impozitul pe câștigurile de capital.",
            "Donatorul poate deduce întreaga valoare curentă de piață a donației din impozitul pe venit.",
            "Donatorul poate specifica lotul din care dorește să facă donația, inclusiv data și prețul achiziționării.",
          ],
          links: [
            { label: "Începeți donația de acțiuni", href: "https://stockdonator.com/stock-information/?oid=cefd7dfe" },
            { label: "Cum specificați lotul", href: "https://stockdonator.com/docs/can-i-specify-a-certain-tax-lot-or-specific-date-of-stock-i-wish-to-donate/" },
            { label: "Vizitați Stock Donator", href: "https://stockdonator.com/" },
            { label: "Trimiteți întrebări prin e-mail", href: "mailto:donate@sfdimitrie.org" },
          ],
          image: { src: "/images/donation-stock-qr.png", alt: "Cod QR pentru donații cu acțiuni către Biserica Sfântul Dimitrie cel Nou", href: "https://stockdonator.com/stock-information/?oid=cefd7dfe" },
        },
        {
          id: "king-soopers", title: "King Soopers Community Rewards",
          summary: "Susțineți biserica prin cumpărăturile pe care deja le faceți la King Soopers.",
          paragraphs: ["King Soopers trimite, prin firma parteneră The Kroger Co., până la $2,500,000 trimestrial organizațiilor participante și până la $10,000,000 pe an. Suma primită de biserică depinde de cât cheltuiesc participanții săi în raport cu membrii tuturor organizațiilor participante. Cu cât avem mai mulți participanți ai bisericii, cu atât suma primită este mai mare."],
          steps: [
            "Mergeți la kingsoopers.com și conectați-vă la cont prin Sign In sau creați un cont prin Create Account.",
            "Din meniul My Account, selectați Community Rewards sau accesați direct pagina Community Rewards.",
            "Căutați “Saint Dimitrie the New” sau introduceți codul RF678, apoi selectați Enroll.",
            "Adăugați Saint Dimitrie the New la cont o singură dată și folosiți cardul King Soopers conectat la cont când cumpărați.",
            "Pe telefon, instalați aplicația King Soopers, conectați-vă, iar în Rewards → Community Rewards introduceți codul RF678.",
          ],
          links: [
            { label: "Site-ul King Soopers", href: "https://www.kingsoopers.com/" },
            { label: "Community Rewards", href: "https://www.kingsoopers.com/signin?redirectUrl=/account/communityrewards" },
            { label: "Aplicația King Soopers", href: "https://www.kingsoopers.com/i/ways-to-shop/mobile-app" },
            { label: "Detalii despre program", href: "https://www.kingsoopers.com/i/community/community-rewards" },
          ],
        },
        {
          id: "venmo", title: "Venmo",
          summary: "Trimiteți o donație către biserică prin Venmo.",
          steps: [
            "Descărcați aplicația Venmo pe telefonul mobil.",
            "Configurați o metodă de plată.",
            "În lista de prieteni, căutați „Sf Dimitrie Church”. După ce găsiți contul, trimiteți o cerere pentru a fi adăugat(ă) în lista de prieteni.",
            "După acceptarea cererii de prietenie, puteți face plăți către Biserica Sfântul Dimitrie.",
          ],
          note: "Serviciul Venmo taxează biserica cu 1.9% + $0.10 din donația dumneavoastră.",
          links: [{ label: "Deschideți Venmo", href: "https://venmo.com/account/sign-in" }],
          image: { src: "/images/donation-venmo-qr.png", alt: "Cod QR Venmo pentru Biserica Sfântul Dimitrie", href: "https://venmo.com/account/sign-in" },
        },
        {
          id: "checks", title: "Cecuri",
          summary: "Cecurile pot fi trimise direct parohiei sau programate automat prin bancă.",
          paragraphs: ["Vă rugăm să scrieți cecul către „Saint Dimitrie the New” și să îl trimiteți la:", "Saint Dimitrie the New\n6060 Puritan Lane\nFrederick, CO 80516"],
        },
        {
          id: "paypal", title: "PayPal",
          summary: "Donați prin PayPal folosind codul QR sau linkul direct.",
          bullets: [
            "Dacă sunteți pe calculator, dați click pe imaginea care conține codul QR sau scanați codul cu telefonul mobil.",
            "Dacă sunteți pe mobil, dați click pe imaginea cu codul QR.",
          ],
          note: "Biserica va fi taxată cu 2.5% din donația dumneavoastră. Dacă donația este mai mare de $100.00, taxa scade procentual.",
          links: [{ label: "Donați prin PayPal", href: "https://paypal.me/stdimitrie?locale.x=en_US" }],
          image: { src: "/images/donation-paypal-qr.png", alt: "Cod QR PayPal pentru Biserica Sfântul Dimitrie cel Nou", href: "https://paypal.me/stdimitrie?locale.x=en_US" },
        },
        {
          id: "raiseright", title: "RaiseRight",
          summary: "Cumpărați carduri cadou, iar procentul oferit de marca participantă susține biserica.",
          paragraphs: ["RaiseRight oferă carduri cadou de la sute de magazine și restaurante. Dumneavoastră primiți întreaga valoare a cardului, iar procentul oferit de marca participantă este donat bisericii. Cardurile nu expiră și pot fi folosite oricând. Este un mod de a face cumpărături în magazin sau online cu un card cadou, în locul unui card obișnuit de credit. Parohia noastră a implementat acest program în 2021."],
          steps: [
            "Accesați pagina de înscriere RaiseRight, introduceți codul 171LAB8676459 și selectați Register.",
            "Introduceți datele, creați un cont și căutați cardurile dorite. Lista completă a mărcilor este disponibilă online.",
            "Pe telefon, instalați aplicația RaiseRight și conectați-vă. Pentru un cont nou, selectați Join a Program și introduceți codul 171LAB8676459.",
          ],
          links: [
            { label: "Înscriere RaiseRight", href: "https://shop.shopwithscrip.com/Login/Enroll" },
            { label: "Lista magazinelor participante", href: "https://shop.shopwithscrip.com/Shop/Product/BrandAlphabeticalList" },
            { label: "Aplicația RaiseRight", href: "https://shop.shopwithscrip.com/Support/shop-earn" },
            { label: "Detalii despre program", href: "https://www.shopwithscrip.com/" },
          ],
        },
      ],
    },
  },
  "contact": {
    en: { title: "Contact Us", eyebrow: "More", intro: "We would be glad to hear from you and welcome you to Saint Dimitrie the New.", sections: [
      { heading: "Parish contact", paragraphs: ["Rev. Fr. Ioan Bogdan", "6060 Puritan Lane, Frederick, CO 80516", "Mobile: 440 668-0010", "Email: prbogdan@sfdimitrie.org"], link: { label: "Get directions", href: "https://maps.google.com/?q=6060+Puritan+Lane+Frederick+CO+80516" } },
    ]},
    ro: { title: "Contact", eyebrow: "Mai mult", intro: "Vă răspundem cu drag și vă așteptăm la Biserica Sfântul Dimitrie cel Nou.", sections: [
      { heading: "Contactul parohiei", paragraphs: ["Pr. Ioan Bogdan", "6060 Puritan Lane, Frederick, CO 80516", "Mobil: 440 668-0010", "E-mail: prbogdan@sfdimitrie.org"], link: { label: "Deschide harta", href: "https://maps.google.com/?q=6060+Puritan+Lane+Frederick+CO+80516" } },
    ]},
  },
};
