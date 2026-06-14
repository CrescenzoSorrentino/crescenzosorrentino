// Landing verticali per settore (fotografi, palestre, ...).
// Ogni voce alimenta un'unica pagina renderizzata da components/app/VerticalLanding.vue:
// aggiungere una nicchia = una nuova entry qui + un file .vue wrapper di poche righe.
// Tutte le pagine sono in italiano e a targeting locale (Napoli/Campania).

export const siteUrl = "https://crescenzosorrentino.com"

// Aree servite condivise da tutte le verticali, riusate nello schema ProfessionalService.
export const areaServed = [
  { "@type": "City", name: "Napoli" },
  { "@type": "City", name: "Torre del Greco" },
  { "@type": "City", name: "Ercolano" },
  { "@type": "City", name: "Portici" },
  { "@type": "City", name: "Salerno" },
  { "@type": "City", name: "Caserta" },
  { "@type": "City", name: "Avellino" },
  { "@type": "City", name: "Benevento" },
  { "@type": "AdministrativeArea", name: "Campania" },
]

// Riferimento al nodo Person globale definito in nuxt.config.ts.
export const personProvider = {
  "@id": `${siteUrl}#person`,
  "@type": "Person",
  name: "Crescenzo Sorrentino",
}

export interface VerticalService {
  iconPaths:   string // contenuto SVG (path/rect) iniettato via v-html nell'icona del servizio
  title:       string
  description: string
}

export interface VerticalMetric {
  value: string
  label: string
}

export interface VerticalFaq {
  q: string
  a: string
}

export interface Vertical {
  slug:           string // path senza slash iniziale, es. "siti-web-per-fotografi-napoli"
  seoTitle:       string
  seoDescription: string

  // Dati per la card nell'hub "Settori" della pagina madre (realizzazione-siti-web-napoli).
  // L'hub fa un v-for su tutte le verticali: aggiungerne una qui la fa comparire da sola.
  card: {
    name:    string // nome breve del settore, es. "Fotografi"
    tagline: string // una riga di teaser
    icon:    string // nome icona lucide, es. "lucide:camera"
  }

  hero: {
    title:        string // può contenere <br> (renderizzato via v-html in HeroSection)
    subtitle:     string
    primaryCta:   string // etichetta, punta sempre a /contact
    secondaryCta: string // etichetta, fa scroll alla sezione demo (#demo) della stessa pagina
  }

  about: {
    title:      string
    paragraphs: string[]
    cta:        string
    avatarAlt:  string
  }

  metrics: VerticalMetric[]

  servicesHead: { title: string; subtitle: string }
  services:     VerticalService[]

  // Sezione "demo dal vivo": mostra il template reale del settore (il vero elemento di prova).
  demo: {
    label:    string
    title:    string
    text:     string
    image:    string // screenshot in /public
    imageAlt: string
    liveUrl:  string // demo live esterna (template su Vercel)
    cta:      string
  }

  faqHead: { title: string; subtitle: string }
  faqs:    VerticalFaq[]

  // Dati specifici per lo schema ProfessionalService della nicchia.
  schema: {
    businessName: string
    knowsAbout:   string[]
  }
}

// Icone servizi (path SVG riusati dalla pagina locale principale).
const ICON_MONITOR  = '<rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>'
const ICON_BARS     = '<path d="M18 20V4"></path><path d="M12 20V10"></path><path d="M6 20v-4"></path>'
const ICON_PHONE    = '<rect x="5" y="2" width="14" height="20" rx="2"></rect><path d="M12 18h.01"></path>'
const ICON_BOLT     = '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>'
const ICON_IMAGE    = '<rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>'
const ICON_USERS    = '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>'
const ICON_CALENDAR = '<rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path>'

// ---------------------------------------------------------------------------
// FOTOGRAFI
// ---------------------------------------------------------------------------

const fotografi: Vertical = {
  slug: "siti-web-per-fotografi-napoli",
  seoTitle: "Siti Web per Fotografi a Napoli | Crescenzo Sorrentino",
  seoDescription:
    "Siti web per fotografi a Napoli: portfolio veloci e ottimizzati per mobile che valorizzano le tue foto e trasformano i visitatori in clienti. Preventivo gratuito.",

  card: {
    name: "Fotografi",
    tagline: "Portfolio veloci che valorizzano le tue foto e trasformano chi guarda in clienti.",
    icon: "lucide:camera",
  },

  hero: {
    title: "Siti Web per Fotografi<br>a Napoli",
    subtitle:
      "Un portfolio online che valorizza il tuo lavoro, si carica in un istante anche da telefono e trasforma chi guarda le tue foto in clienti.",
    primaryCta: "Richiedi un preventivo gratuito",
    secondaryCta: "Guarda un sito di esempio",
  },

  about: {
    title: "Il tuo portfolio merita più di un profilo Instagram",
    paragraphs: [
      "Instagram mostra le tue foto compresse, dentro un layout uguale a quello di tutti gli altri e che non controlli. Un sito tuo mette il tuo lavoro al centro, nella qualità giusta, e dice ai clienti che sei un professionista serio.",
      "Mi chiamo Crescenzo Sorrentino e realizzo siti per fotografi a Napoli. Quando mi contatti parli direttamente con me: progetto, sviluppo e consegna il tuo sito, senza intermediari. Se sei a Napoli o in Campania possiamo vederci di persona, altrimenti si lavora da remoto.",
    ],
    cta: "Parliamo del tuo portfolio",
    avatarAlt: "Crescenzo Sorrentino, siti web per fotografi a Napoli",
  },

  metrics: [
    { value: "<2s", label: "Caricamento delle gallerie anche da mobile" },
    { value: "95+", label: "Score medio su Google PageSpeed" },
    { value: "48h", label: "Per ricevere un preventivo dettagliato" },
  ],

  servicesHead: {
    title: "Cosa includo nel sito di un fotografo",
    subtitle:
      "Tutto pensato per un solo obiettivo: far risaltare le tue foto e farti arrivare richieste.",
  },
  services: [
    {
      iconPaths: ICON_IMAGE,
      title: "Gallerie che valorizzano le foto",
      description:
        "Portfolio full-screen e gallerie per categoria (matrimoni, ritratti, eventi) costruiti per mettere in mostra il tuo lavoro, non per nasconderlo dietro un template generico.",
    },
    {
      iconPaths: ICON_PHONE,
      title: "Perfetto da telefono",
      description:
        "La maggior parte dei clienti guarderà le tue foto dallo smartphone. Il sito è progettato mobile-first, così le immagini sono impeccabili su ogni schermo.",
    },
    {
      iconPaths: ICON_BOLT,
      title: "Veloce anche con foto pesanti",
      description:
        "Immagini in formati moderni e caricamento progressivo: le gallerie restano leggere e rapide anche con decine di scatti ad alta risoluzione.",
    },
    {
      iconPaths: ICON_MONITOR,
      title: "Contatti e richieste di lavoro",
      description:
        "Form di contatto, pulsanti WhatsApp e sezione servizi pensati per trasformare chi ammira le tue foto in una richiesta di preventivo concreta.",
    },
  ],

  demo: {
    label: "Demo dal vivo",
    title: "Guarda un sito per fotografi già pronto",
    text:
      "Questo è un template che ho costruito apposta per i fotografi: dark, minimale, con hero video e gallerie adattive. Lo personalizzo con le tue foto, i tuoi colori e i tuoi testi. Aprilo dal vivo e fatti un'idea.",
    image: "/projects/photographer-starter.png",
    imageAlt: "Esempio di sito web per fotografi realizzato con Nuxt.js",
    liveUrl: "https://photographer-starter.vercel.app",
    cta: "Apri la demo",
  },

  faqHead: {
    title: "Domande frequenti",
    subtitle: "Le risposte alle domande che mi fanno più spesso i fotografi.",
  },
  faqs: [
    {
      q: "Quanto costa un sito per un fotografo?",
      a: "Un portfolio professionale va in genere dagli 800 ai 2.500 euro, in base al numero di gallerie, al design e al fatto che le foto siano già pronte. Ogni progetto inizia con una chiamata gratuita per capire le tue esigenze e darti un preventivo chiaro e fisso, senza sorprese.",
    },
    {
      q: "Le gallerie con tante foto rallentano il sito?",
      a: "No, se il sito è costruito bene. Uso formati immagine moderni e caricamento progressivo: le foto appaiono nitide ma il sito resta velocissimo, anche con decine di scatti ad alta risoluzione. La velocità è uno dei punti su cui lavoro di più.",
    },
    {
      q: "Posso aggiornare le foto da solo?",
      a: "Sì. Per chi cambia spesso i lavori in portfolio collego un sistema semplice da cui aggiorni foto e testi senza toccare il codice. Se invece il sito cambia di rado, agli aggiornamenti penso io, di solito in giornata.",
    },
    {
      q: "Ho già un profilo Instagram, mi serve davvero un sito?",
      a: "Instagram è ottimo per farti scoprire, ma le foto sono compresse, l'algoritmo decide chi le vede e il layout è uguale per tutti. Un sito tuo mostra il lavoro nella qualità giusta, lo trovi su Google e dà subito un'impressione di professionalità che un profilo social da solo non trasmette.",
    },
    {
      q: "Lavori solo con fotografi di Napoli?",
      a: "Sono basato a Napoli e per i fotografi di Napoli, Salerno, Caserta, Avellino e Benevento è comodo vedersi di persona. Ma lavoro con fotografi in tutta Italia da remoto senza alcun problema.",
    },
  ],

  schema: {
    businessName: "Crescenzo Sorrentino, Siti Web per Fotografi a Napoli",
    knowsAbout: [
      "Siti web per fotografi",
      "Portfolio fotografici online",
      "Realizzazione siti web",
      "Web design",
      "SEO",
      "Nuxt.js",
      "Core Web Vitals",
    ],
  },
}

// ---------------------------------------------------------------------------
// PALESTRE
// ---------------------------------------------------------------------------

const palestre: Vertical = {
  slug: "siti-web-per-palestre-napoli",
  seoTitle: "Siti Web per Palestre e Centri Fitness a Napoli | Crescenzo Sorrentino",
  seoDescription:
    "Siti web per palestre e centri fitness a Napoli: orari, corsi e abbonamenti sempre aggiornati e un sito veloce che porta nuovi iscritti. Preventivo gratuito.",

  card: {
    name: "Palestre e centri fitness",
    tagline: "Orari, corsi e abbonamenti dentro un sito veloce che porta nuovi iscritti.",
    icon: "lucide:dumbbell",
  },

  hero: {
    title: "Siti Web per Palestre<br>e Centri Fitness a Napoli",
    subtitle:
      "Orari, corsi e abbonamenti sempre aggiornati, dentro un sito veloce e d'impatto, costruito per trasformare i visitatori in nuovi iscritti.",
    primaryCta: "Richiedi un preventivo gratuito",
    secondaryCta: "Guarda un sito di esempio",
  },

  about: {
    title: "Chi cerca una palestra parte da Google",
    paragraphs: [
      "Prima di iscriversi, le persone cercano su Google una palestra vicino a casa, guardano gli orari, i corsi e i prezzi. Se non ti trovano, o trovano un sito lento e confuso, vanno dalla concorrenza prima ancora di chiamarti.",
      "Mi chiamo Crescenzo Sorrentino e realizzo siti per palestre e centri fitness a Napoli. Lavori direttamente con me, dalla grafica alla consegna, senza intermediari. Se sei a Napoli o in Campania possiamo incontrarci di persona, altrimenti si lavora da remoto.",
    ],
    cta: "Parliamo della tua palestra",
    avatarAlt: "Crescenzo Sorrentino, siti web per palestre a Napoli",
  },

  metrics: [
    { value: "95+", label: "Score medio su Google PageSpeed" },
    { value: "2–4", label: "Settimane per un sito completo" },
    { value: "48h", label: "Per ricevere un preventivo dettagliato" },
  ],

  servicesHead: {
    title: "Cosa includo nel sito di una palestra",
    subtitle:
      "Pensato per un solo obiettivo: farti trovare e portarti nuovi iscritti.",
  },
  services: [
    {
      iconPaths: ICON_CALENDAR,
      title: "Orari e corsi sempre aggiornati",
      description:
        "Schede corsi, orari delle classi e calendario delle attività, facili da consultare e da aggiornare quando cambia il palinsesto della settimana.",
    },
    {
      iconPaths: ICON_USERS,
      title: "Più iscritti, non solo visite",
      description:
        "Form per la prova gratuita, richieste di informazioni e pulsanti WhatsApp posizionati per trasformare chi visita il sito in un contatto reale.",
    },
    {
      iconPaths: ICON_BARS,
      title: "Brand giovane e d'impatto",
      description:
        "Design dark, tipografia forte e colori energici che comunicano subito l'identità della tua palestra e la distinguono da quella accanto.",
    },
    {
      iconPaths: ICON_BOLT,
      title: "Veloce e in cima a Google",
      description:
        "Un sito rapido che supera i controlli di velocità di Google: meno persone che abbandonano e più visibilità per chi cerca una palestra a Napoli.",
    },
  ],

  demo: {
    label: "Demo dal vivo",
    title: "Guarda un sito per palestre già pronto",
    text:
      "Questo è un template che ho costruito apposta per le palestre: dark, energico, con sezioni per orari, corsi, statistiche e team. Lo personalizzo con il tuo brand, i tuoi colori e i tuoi contenuti. Aprilo dal vivo e fatti un'idea.",
    image: "/projects/gym-starter.png",
    imageAlt: "Esempio di sito web per palestre realizzato con Nuxt.js",
    liveUrl: "https://gym-starter-psi.vercel.app",
    cta: "Apri la demo",
  },

  faqHead: {
    title: "Domande frequenti",
    subtitle: "Le risposte alle domande che mi fanno più spesso i titolari di palestre.",
  },
  faqs: [
    {
      q: "Quanto costa un sito per una palestra?",
      a: "Un sito completo per una palestra va in genere dagli 800 ai 2.500 euro, in base al numero di pagine, ai corsi da mostrare e al design. Ogni progetto inizia con una chiamata gratuita per capire le tue esigenze e darti un preventivo chiaro e fisso, senza sorprese.",
    },
    {
      q: "Posso aggiornare orari e corsi da solo?",
      a: "Sì. Collego un sistema semplice da cui aggiorni orari, corsi e prezzi senza toccare il codice né dipendere da me. Quando cambia il palinsesto, lo modifichi in pochi minuti dal telefono o dal computer.",
    },
    {
      q: "Un sito mi aiuta davvero ad avere più iscritti?",
      a: "Sì, se è costruito per quello. Chi cerca una palestra parte da Google: un sito veloce, chiaro, con orari, prezzi e un form per la prova gratuita ben visibile trasforma molte più visite in contatti rispetto a un semplice profilo social.",
    },
    {
      q: "Si può integrare con WhatsApp e Instagram?",
      a: "Certo. Aggiungo pulsanti WhatsApp per le richieste immediate e collego i tuoi profili social, così chi arriva sul sito può contattarti o seguirti nel modo che preferisce.",
    },
    {
      q: "Lavori solo con palestre di Napoli?",
      a: "Sono basato a Napoli e per le palestre di Napoli, Salerno, Caserta, Avellino e Benevento è comodo vedersi di persona. Ma lavoro con centri fitness in tutta Italia da remoto senza problemi.",
    },
  ],

  schema: {
    businessName: "Crescenzo Sorrentino, Siti Web per Palestre a Napoli",
    knowsAbout: [
      "Siti web per palestre",
      "Siti web per centri fitness",
      "Realizzazione siti web",
      "Web design",
      "SEO",
      "Nuxt.js",
      "Core Web Vitals",
    ],
  },
}

// Mappa slug -> dati, usata dai wrapper di pagina per recuperare la verticale.
export const verticals = { fotografi, palestre } as const

export type VerticalKey = keyof typeof verticals
