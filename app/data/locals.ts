// Landing locali per zona (Napoli, Torre del Greco, Ercolano, Portici, ...).
// Ogni voce alimenta un'unica pagina renderizzata da components/app/LocalLanding.vue:
// aggiungere una zona = una nuova entry qui + un file .vue wrapper di poche righe.
// Tutte le pagine sono in italiano e a targeting locale.
//
// Gemello di data/verticals.ts: lì l'asse è il settore, qui è la geografia.
// REGOLA ANTI-DUPLICATI: il contenuto che cambia da zona a zona (servizi, intro
// "Perché Nuxt", FAQ locali, sezione "Per chi lavoro") deve essere scritto sul
// tessuto reale della città, non con il nome della città infilato in frasi identiche
// (quello è il pattern "doorway" che Google penalizza). Resta condiviso nel componente
// solo ciò che è davvero uguale ovunque: numeri, titoli/icone dei servizi, spiegazione
// tecnica di Nuxt e le FAQ generiche.

// Nodo di un'area servita nello schema ProfessionalService (City o AdministrativeArea).
export interface AreaServed {
  "@type": "City" | "AdministrativeArea"
  name: string
}

export interface LocalFaq {
  q: string
  a: string
}

export interface Local {
  slug:           string // path senza slash iniziale, es. "realizzazione-siti-web-napoli"
  seoTitle:       string
  seoDescription: string

  hero: {
    title:    string // può contenere <br> (renderizzato via v-html in HeroSection)
    subtitle: string
  }

  about: {
    title:      string
    paragraphs: string[]
    avatarAlt:  string
  }

  // Sottotitolo della sezione Servizi.
  servicesSubtitle: string

  // Descrizioni delle 4 card servizio, una per zona (titoli e icone sono fissi nel
  // componente). Scritte sul tessuto economico locale: è uno dei blocchi che rende
  // ogni pagina davvero diversa dalle altre. Ordine: aziende/professionisti,
  // landing page, web app, velocità/posizionamento.
  serviceDescriptions: string[]

  // Sezione "Per chi lavoro": intro iper-locale (antidoto al doorway) sopra le card
  // dei verticali. La frase di raccordo alle card è costante e vive nel componente.
  local: {
    title:      string
    subtitle:   string
    paragraphs: string[]
  }

  // Paragrafo/i d'apertura della sezione "Perché Nuxt", specifici per la zona.
  // La spiegazione tecnica generica che segue vive nel componente.
  whyLead: string[]

  // Solo le FAQ specifiche della zona. Quelle generiche (costo, tempi, manutenzione,
  // velocità) sono condivise e vivono nel componente.
  faqs: LocalFaq[]

  schema: {
    businessName: string
    areaServed:   AreaServed[]
  }
}

export const locals = {
  napoli: {
    slug: "realizzazione-siti-web-napoli",
    seoTitle: "Realizzazione Siti Web a Napoli | Crescenzo Sorrentino",
    seoDescription:
      "Realizzazione siti web a Napoli: creo siti veloci, moderni e ottimizzati per Google per aziende e professionisti. Preventivo gratuito in tutta la Campania.",
    hero: {
      title: "Realizzazione Siti Web<br>a Napoli",
      subtitle:
        "Creo siti web veloci, moderni e ottimizzati per Google per aziende e professionisti a Napoli e in tutta la Campania.",
    },
    about: {
      title: "Un freelance napoletano, non un'agenzia",
      paragraphs: [
        "Mi chiamo Crescenzo Sorrentino e mi occupo di realizzazione di siti web per aziende e professionisti a Napoli. Quando mi contatti, parli direttamente con me: la stessa persona che cura il web design e lo sviluppo, e consegna il tuo sito nei tempi concordati.",
        "Nessun account manager, nessun intermediario, nessuna sorpresa in fattura. Se sei a Napoli, Salerno, Caserta, Avellino o Benevento, possiamo incontrarci di persona. Altrimenti si lavora tranquillamente da remoto.",
      ],
      avatarAlt: "Crescenzo Sorrentino, realizzazione siti web a Napoli",
    },
    servicesSubtitle:
      "Dalla creazione di un nuovo sito al restyling di uno esistente, soluzioni per aziende, PMI e professionisti a Napoli e in Campania.",
    serviceDescriptions: [
      "Studi legali, medici, commercialisti e PMI di Napoli e provincia: siti che trasmettono autorevolezza dal primo secondo e trasformano i visitatori in clienti. Anche restyling di siti datati o lenti.",
      "Pagine costruite per un solo obiettivo: far compiere un'azione a chi arriva, una chiamata, un preventivo o una prenotazione. Ogni sezione e ogni pulsante è pensato per convertire.",
      "Gestionali, dashboard e strumenti su misura per aziende strutturate: fanno esattamente ciò che ti serve, senza i limiti dei template preconfezionati.",
      "Con Nuxt.js i tuoi clienti a Napoli ti trovano prima: punteggi altissimi su Google PageSpeed significano meno rimbalzi, più posizionamento e più richieste.",
    ],
    local: {
      title: "Siti web per le attività di Napoli e della Campania",
      subtitle: "Conosco il mercato locale perché ci lavoro ogni giorno.",
      paragraphs: [
        "So che uno studio professionale, un avvocato o un commercialista, deve trasmettere autorevolezza ancora prima del primo incontro. Che un ristorante o un'attività turistica vive di prenotazioni e recensioni, e deve farsi trovare subito da chi cerca dal telefono. Che una PMI o un negozio della provincia compete con realtà più grandi e ha bisogno di un sito che lo faccia sembrare, ed essere, all'altezza.",
        "Dal centro storico al Vomero, da Fuorigrotta alla provincia, ogni zona ha la sua clientela e le sue ricerche su Google. Costruisco siti che ti fanno trovare da chi cerca i tuoi servizi proprio lì dove operi.",
      ],
    },
    whyLead: [
      "A Napoli e in Campania la concorrenza online è alta e moltissimi siti sono ancora lenti e fragili. Partire da una tecnologia migliore è un vantaggio competitivo concreto, non un dettaglio tecnico.",
    ],
    faqs: [
      {
        q: "Lavori solo a Napoli e in Campania?",
        a: "No, lavoro con clienti in tutta Italia e anche all'estero, principalmente da remoto. Essere basato a Napoli è un vantaggio per chi preferisce un contatto diretto, ma non è un limite geografico.",
      },
      {
        q: "Realizzi siti per studi professionali e PMI di Napoli?",
        a: "Sì, è una buona parte del mio lavoro. Per avvocati, medici, commercialisti, architetti e piccole imprese realizzo siti sobri e autorevoli, che trasmettono fiducia e portano contatti qualificati, non solo visite.",
      },
      {
        q: "Ti occupi anche del posizionamento su Google a Napoli?",
        a: "Sì. Ogni sito che realizzo nasce già ottimizzato per la ricerca locale, e ho raccolto i passaggi concreti nella guida su come farsi trovare su Google a Napoli. Per chi vuole, seguo anche la crescita nel tempo.",
      },
    ],
    schema: {
      businessName: "Crescenzo Sorrentino, Realizzazione Siti Web a Napoli",
      areaServed: [
        { "@type": "City", name: "Napoli" },
        { "@type": "City", name: "Salerno" },
        { "@type": "City", name: "Caserta" },
        { "@type": "City", name: "Avellino" },
        { "@type": "City", name: "Benevento" },
        { "@type": "AdministrativeArea", name: "Campania" },
      ],
    },
  },

  "torre-del-greco": {
    slug: "realizzazione-siti-web-torre-del-greco",
    seoTitle: "Realizzazione Siti Web a Torre del Greco | Crescenzo Sorrentino",
    seoDescription:
      "Sviluppatore web a Torre del Greco: creo siti veloci, moderni e ottimizzati per Google per le attività locali. Preventivo gratuito, incontri di persona in zona.",
    hero: {
      title: "Realizzazione Siti Web<br>a Torre del Greco",
      subtitle:
        "Sono uno sviluppatore web di Torre del Greco. Creo siti veloci, moderni e ottimizzati per Google per le attività e i professionisti della città e dell'area vesuviana.",
    },
    about: {
      title: "Uno sviluppatore di Torre del Greco, non un'agenzia",
      paragraphs: [
        "Mi chiamo Crescenzo Sorrentino, sono nato e vivo a Torre del Greco e realizzo siti web per le attività della mia città. Quando mi contatti parli direttamente con me: la stessa persona che progetta, sviluppa e consegna il tuo sito nei tempi concordati.",
        "Essere qui è un vantaggio concreto: possiamo vederci di persona, a Torre del Greco o in zona, davanti a un caffè invece che dietro a una mail. Nessun account manager, nessun intermediario, nessuna sorpresa in fattura. E se preferisci, si lavora tranquillamente da remoto.",
      ],
      avatarAlt: "Crescenzo Sorrentino, sviluppatore web a Torre del Greco",
    },
    servicesSubtitle:
      "Dalla creazione di un nuovo sito al restyling di uno esistente, soluzioni per aziende, PMI e professionisti a Torre del Greco e nell'area vesuviana.",
    serviceDescriptions: [
      "Artigiani del corallo, attività del lungomare, studi professionali e negozi di Torre del Greco: siti veloci e curati che valorizzano il tuo lavoro e portano clienti, anche dall'estero.",
      "Pagine pensate per un obiettivo solo: una prenotazione, un preventivo, una chiamata. Ideali per ristoranti, lidi e attività che vivono di contatti diretti.",
      "Gestionali e strumenti su misura per chi ha esigenze che un sito vetrina non copre: prenotazioni, cataloghi, aree riservate, costruiti attorno al tuo flusso di lavoro.",
      "Con Nuxt.js il tuo sito si carica in un lampo: fondamentale per chi a Torre del Greco ti cerca dal telefono e decide in pochi secondi.",
    ],
    local: {
      title: "Siti web per le attività di Torre del Greco",
      subtitle: "Conosco il tessuto della città perché ci vivo.",
      paragraphs: [
        "So che un'attività di corallo e cammei ha bisogno di un sito che valorizzi le immagini e racconti la lavorazione artigianale a un pubblico anche internazionale. Che un ristorante o un lido sul lungomare vive di prenotazioni e deve farsi trovare subito da chi cerca dal telefono. Che un B&B o una struttura turistica vesuviana compete sulla velocità e sulla riprova di chi arriva per il Vesuvio e gli Scavi.",
        "Per ognuna di queste realtà il sito non è una vetrina decorativa: è lo strumento che porta clienti. Lo costruisco su misura, veloce e pensato per posizionarsi su Google per le ricerche di chi è qui in zona.",
      ],
    },
    whyLead: [
      "A Torre del Greco la maggior parte delle attività è ancora su siti lenti o solo sui social: un sito davvero veloce e ben fatto ti mette subito davanti. La tecnologia con cui lo costruisco fa la differenza.",
    ],
    faqs: [
      {
        q: "Possiamo incontrarci di persona a Torre del Greco?",
        a: "Certo, è uno dei vantaggi di lavorare con me: vivo a Torre del Greco e per i clienti della zona un incontro di persona è il modo più semplice per partire col piede giusto. Per chi è più lontano, lavoro senza problemi da remoto.",
      },
      {
        q: "Lavori con gli artigiani del corallo e le attività del lungomare?",
        a: "Sì. Per chi lavora il corallo o i cammei realizzo siti che valorizzano le immagini e raccontano l'artigianato anche a un pubblico estero; per ristoranti, lidi e attività del lungomare punto su contatti e prenotazioni immediate da mobile.",
      },
      {
        q: "Lavori solo a Torre del Greco?",
        a: "No, lavoro con clienti in tutta l'area vesuviana, a Napoli e in tutta Italia, principalmente da remoto. Vivere a Torre del Greco è un vantaggio per chi della zona preferisce un contatto diretto, ma non è un limite geografico.",
      },
    ],
    schema: {
      businessName: "Crescenzo Sorrentino, Realizzazione Siti Web a Torre del Greco",
      areaServed: [
        { "@type": "City", name: "Torre del Greco" },
        { "@type": "City", name: "Ercolano" },
        { "@type": "City", name: "Portici" },
        { "@type": "City", name: "Napoli" },
        { "@type": "AdministrativeArea", name: "Città metropolitana di Napoli" },
      ],
    },
  },

  ercolano: {
    slug: "realizzazione-siti-web-ercolano",
    seoTitle: "Realizzazione Siti Web a Ercolano | Crescenzo Sorrentino",
    seoDescription:
      "Sviluppatore web a Ercolano: siti veloci, multilingua e ottimizzati per Google per attività turistiche, ristoranti e professionisti. Preventivo gratuito.",
    hero: {
      title: "Realizzazione Siti Web<br>a Ercolano",
      subtitle:
        "Sviluppatore web per le attività di Ercolano e dell'area vesuviana. Siti veloci, moderni e ottimizzati per Google, pensati anche per il turismo internazionale.",
    },
    about: {
      title: "Uno sviluppatore della zona, non un'agenzia",
      paragraphs: [
        "Mi chiamo Crescenzo Sorrentino, vivo a Torre del Greco, a pochi minuti da Ercolano, e realizzo siti web per le attività della zona. Quando mi contatti parli direttamente con me: la stessa persona che progetta, sviluppa e consegna il tuo sito nei tempi concordati.",
        "Essere qui vicino è un vantaggio concreto: per i clienti di Ercolano possiamo vederci di persona, senza intermediari né sorprese in fattura. E se preferisci, si lavora tranquillamente da remoto.",
      ],
      avatarAlt: "Crescenzo Sorrentino, sviluppatore web a Ercolano",
    },
    servicesSubtitle:
      "Dalla creazione di un nuovo sito al restyling di uno esistente, soluzioni per aziende, PMI e professionisti a Ercolano e nell'area vesuviana.",
    serviceDescriptions: [
      "B&B, hotel, guide, ristoranti e negozi di Ercolano: siti multilingua e velocissimi che intercettano i turisti del Parco Archeologico e i clienti del posto.",
      "Pagine costruite per far prenotare: per una struttura ricettiva o un ristorante vicino agli Scavi, ogni sezione spinge il visitatore a contattarti subito.",
      "Strumenti su misura per la ricettività: calendari, richieste di prenotazione, cataloghi e aree riservate, pensati attorno a come lavori davvero.",
      "Con Nuxt.js il sito vola anche da mobile: decisivo quando un turista cerca dove dormire o mangiare a Ercolano mentre è già in viaggio.",
    ],
    local: {
      title: "Siti web per le attività di Ercolano",
      subtitle: "Una città che vive di turismo, e non solo.",
      paragraphs: [
        "Ercolano vive di turismo: ogni anno il Parco Archeologico, il MAV e i sentieri del Vesuvio portano visitatori da tutto il mondo. Un B&B, un hotel, una guida o un ristorante qui ha bisogno di un sito multilingua, velocissimo e con prenotazioni immediate, perché chi cerca lo fa dal telefono mentre organizza la visita e decide in pochi secondi.",
        "Ma Ercolano non è solo Scavi: negozi del centro, studi professionali e artigiani del Miglio d'Oro competono ogni giorno per farsi trovare. A ognuno serve un sito che lo posizioni su Google per le ricerche della sua zona, non una vetrina che nessuno visita.",
      ],
    },
    whyLead: [
      "Per intercettare i turisti di Ercolano un sito deve essere velocissimo e affidabile anche con tante foto e in più lingue: è il motivo per cui non parto da WordPress.",
    ],
    faqs: [
      {
        q: "Sei di Ercolano?",
        a: "Vivo a Torre del Greco, a pochi minuti da Ercolano, e seguo da vicino le attività della zona. Per i clienti di Ercolano un incontro di persona è semplice; per chi preferisce, lavoro senza problemi da remoto.",
      },
      {
        q: "Lavori con le attività turistiche vicino agli Scavi?",
        a: "Sì, è uno dei contesti in cui un sito ben fatto rende di più. Per B&B, hotel, guide e ristoranti vicino al Parco Archeologico realizzo siti multilingua e veloci, pensati per chi prenota dal telefono, con immagini valorizzate e contatti immediati.",
      },
      {
        q: "Puoi fare un sito multilingua per i turisti stranieri?",
        a: "Sì, ed è quasi sempre la scelta giusta a Ercolano. Realizzo siti in più lingue, veloci e facili da aggiornare, così chi arriva dall'estero trova subito informazioni, orari e prenotazioni nella propria lingua.",
      },
    ],
    schema: {
      businessName: "Crescenzo Sorrentino, Realizzazione Siti Web a Ercolano",
      areaServed: [
        { "@type": "City", name: "Ercolano" },
        { "@type": "City", name: "Portici" },
        { "@type": "City", name: "Torre del Greco" },
        { "@type": "City", name: "Napoli" },
        { "@type": "AdministrativeArea", name: "Città metropolitana di Napoli" },
      ],
    },
  },

  portici: {
    slug: "realizzazione-siti-web-portici",
    seoTitle: "Realizzazione Siti Web a Portici | Crescenzo Sorrentino",
    seoDescription:
      "Sviluppatore web a Portici: siti veloci, moderni e ottimizzati per Google per negozi, ristoranti e professionisti. Preventivo gratuito, incontri in zona.",
    hero: {
      title: "Realizzazione Siti Web<br>a Portici",
      subtitle:
        "Sviluppatore web per le attività di Portici e dell'area vesuviana. Siti veloci, moderni e ottimizzati per Google, pensati per farti scegliere prima dei concorrenti.",
    },
    about: {
      title: "Uno sviluppatore della zona, non un'agenzia",
      paragraphs: [
        "Mi chiamo Crescenzo Sorrentino, vivo a Torre del Greco, qui vicino, e realizzo siti web per le attività di Portici e di tutta l'area vesuviana. Quando mi contatti parli direttamente con me: la stessa persona che progetta, sviluppa e consegna il tuo sito nei tempi concordati.",
        "Essere della zona è un vantaggio concreto: possiamo vederci di persona, senza account manager né sorprese in fattura. E se preferisci, si lavora tranquillamente da remoto.",
      ],
      avatarAlt: "Crescenzo Sorrentino, sviluppatore web a Portici",
    },
    servicesSubtitle:
      "Dalla creazione di un nuovo sito al restyling di uno esistente, soluzioni per aziende, PMI e professionisti a Portici e nell'area vesuviana.",
    serviceDescriptions: [
      "Negozi, ristoranti, studi professionali e PMI di Portici: siti veloci che ti fanno emergere in una delle città più competitive d'Europa e trasformano i clic in clienti.",
      "Pagine pensate per convertire: quando la concorrenza è a due passi, ogni dettaglio che spinge a chiamarti o prenotare fa la differenza tra una giornata piena e una vuota.",
      "Gestionali e strumenti su misura per attività strutturate: fanno esattamente ciò che ti serve, senza i compromessi dei template preconfezionati.",
      "Con Nuxt.js sei più veloce dei concorrenti su Google: punteggi PageSpeed altissimi, più visibilità locale, più richieste.",
    ],
    local: {
      title: "Siti web per le attività di Portici",
      subtitle: "Tanta concorrenza in poco spazio: vince chi si fa trovare.",
      paragraphs: [
        "Portici è una delle città più densamente popolate d'Europa: tante attività in pochi chilometri. Un negozio, un ristorante o uno studio professionale qui si gioca tutto sulla visibilità locale, ed essere primo su Google per la propria via o il proprio quartiere fa la differenza tra una giornata piena e una vuota.",
        "Tra la Reggia, l'Orto Botanico, le Ville Vesuviane del Miglio d'Oro e la vicinanza all'università, Portici ha anche un tessuto culturale e turistico che merita siti curati: multilingua, veloci e pensati per valorizzare immagini e storia. Costruisco entrambe le cose, su misura e ottimizzate per posizionarsi.",
      ],
    },
    whyLead: [
      "In un mercato affollato come Portici la velocità del sito è un vantaggio diretto sui concorrenti: ecco perché costruisco con Nuxt.js invece che con WordPress.",
    ],
    faqs: [
      {
        q: "Sei di Portici?",
        a: "Vivo a Torre del Greco, qui vicino, e seguo da vicino le attività di Portici e di tutta l'area vesuviana. Per i clienti della zona possiamo vederci di persona senza problemi; oppure si lavora da remoto se preferisci.",
      },
      {
        q: "Il mio settore è molto affollato a Portici: un sito mi serve davvero?",
        a: "Proprio perché la concorrenza è alta, un sito veloce e ben posizionato è ciò che ti fa scegliere. Lo costruisco per farti trovare su Google per le ricerche della tua zona e per trasformare chi arriva sulla pagina in un cliente, non per fare bella figura e basta.",
      },
      {
        q: "Lavori con le attività vicino alla Reggia e del Miglio d'Oro?",
        a: "Sì. Per attività culturali, turistiche e commerciali della zona della Reggia e delle Ville Vesuviane realizzo siti curati, multilingua se serve, che valorizzano immagini e storia e portano visitatori reali.",
      },
    ],
    schema: {
      businessName: "Crescenzo Sorrentino, Realizzazione Siti Web a Portici",
      areaServed: [
        { "@type": "City", name: "Portici" },
        { "@type": "City", name: "Ercolano" },
        { "@type": "City", name: "Torre del Greco" },
        { "@type": "City", name: "Napoli" },
        { "@type": "AdministrativeArea", name: "Città metropolitana di Napoli" },
      ],
    },
  },
} satisfies Record<string, Local>
