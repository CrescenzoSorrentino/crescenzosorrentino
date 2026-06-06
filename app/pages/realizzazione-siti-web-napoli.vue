<script setup lang="ts">
import { footerCtaIt, footerCtaEn } from "~/data/footer"

const footerCta = useFooterCta()
footerCta.value = footerCtaIt
onUnmounted(() => { footerCta.value = footerCtaEn })

const siteUrl = "https://crescenzosorrentino.com";
const pageUrl = `${siteUrl}/realizzazione-siti-web-napoli`;

const title = "Realizzazione Siti Web a Napoli | Crescenzo Sorrentino";
const description =
  "Realizzazione siti web a Napoli: creo siti veloci, moderni e ottimizzati per Google per aziende e professionisti. Preventivo gratuito in tutta la Campania.";

const services = [
  {
    iconPaths: '<rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>',
    title: "Siti per aziende e professionisti",
    description: "Avvocati, medici, architetti, consulenti, PMI: siti veloci e moderni che trasmettono autorevolezza e trasformano i visitatori in clienti. Anche restyling di siti vecchi o lenti.",
  },
  {
    iconPaths: '<path d="M18 20V4"></path><path d="M12 20V10"></path><path d="M6 20v-4"></path>',
    title: "Landing page che convertono",
    description: "Pagine costruite per un solo obiettivo: trasformare i visitatori in clienti. Ogni sezione e ogni pulsante è pensato per spingere all'azione.",
  },
  {
    iconPaths: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    title: "Web app e strumenti su misura",
    description: "Gestionali, dashboard e strumenti interattivi che fanno esattamente ciò che serve alla tua attività, senza i limiti dei template.",
  },
  {
    iconPaths: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>',
    title: "Velocità e posizionamento su Google",
    description: "Con Nuxt.js ottengo punteggi altissimi su Google PageSpeed: meno rimbalzi, più posizionamento, più clienti.",
  },
]

const faqs = [
  {
    q: "Quanto costa un sito web?",
    a: "Dipende da cosa ti serve. Un sito vetrina o una landing page va in genere dagli €800 ai €2.500. Una web app o uno strumento su misura parte da €4.000. Ogni progetto inizia con una chiamata gratuita per capire i tuoi obiettivi e darti un preventivo chiaro, fisso e senza sorprese.",
  },
  {
    q: "Lavori solo a Napoli e in Campania?",
    a: "No, lavoro con clienti in tutta Italia e anche all'estero, principalmente da remoto. Essere basato a Napoli è un vantaggio per chi preferisce un contatto diretto, ma non è un limite geografico.",
  },
  {
    q: "Chi si occupa della manutenzione dopo il lancio?",
    a: "Me ne occupo io. Il sito rimane sotto la mia gestione con un abbonamento mensile che include aggiornamenti, modifiche ai contenuti e supporto continuo. Non ti devi preoccupare di nulla dal punto di vista tecnico.",
  },
  {
    q: "Quanto tempo ci vuole per un sito?",
    a: "Una landing page richiede 1-2 settimane, un sito vetrina completo dalle 2 alle 4 settimane, una web app dalle 4 alle 8 settimane in base alle funzionalità. I tempi dipendono anche dalla velocità con cui mi fornisci testi, foto e loghi, e li concordiamo sempre prima di iniziare.",
  },
  {
    q: "Ho bisogno di un designer prima di iniziare?",
    a: "Non necessariamente. Se hai già un design o una brand identity, lo trasformo in un sito reale e funzionante. Se parti da zero, mi occupo io sia dell'aspetto grafico sia della realizzazione.",
  },
  {
    q: "Perché la velocità del sito è importante per il mio business?",
    a: "Più della metà degli utenti da mobile abbandona un sito che impiega più di 3 secondi a caricarsi. Un sito veloce trattiene le persone sulla pagina e sale più in alto su Google. Ogni sito che realizzo è ottimizzato per caricarsi in meno di 2 secondi e superare i controlli di velocità di Google (Core Web Vitals).",
  },
  {
    q: "Conviene di più un freelance o un'agenzia?",
    a: "Con un freelance hai tempi più rapidi, un contatto diretto con chi scrive il tuo codice e un costo più contenuto: nessun account manager, nessun overhead. Le agenzie hanno senso quando il progetto richiede un team molto grande o una gamma di competenze molto ampia tutte sotto lo stesso tetto.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${pageUrl}#business`,
      name: "Crescenzo Sorrentino, Realizzazione Siti Web a Napoli",
      description,
      url: pageUrl,
      image: `${siteUrl}/og-image.png`,
      priceRange: "€€",
      areaServed: [
        { "@type": "City", name: "Napoli" },
        { "@type": "City", name: "Salerno" },
        { "@type": "City", name: "Caserta" },
        { "@type": "City", name: "Avellino" },
        { "@type": "City", name: "Benevento" },
        { "@type": "AdministrativeArea", name: "Campania" },
      ],
      knowsAbout: [
        "Realizzazione siti web",
        "Creazione siti web",
        "Siti web per aziende",
        "Web design",
        "SEO",
        "Nuxt.js",
        "Vue.js",
        "Core Web Vitals",
      ],
      provider: { "@id": `${siteUrl}#person`, "@type": "Person", name: "Crescenzo Sorrentino" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servizi di sviluppo web",
        itemListElement: services.map(({ title, description }) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: title, description },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

useHead({
  titleTemplate: null,
  htmlAttrs: { lang: "it" },
  link: [{ rel: "canonical", href: pageUrl }],
  script: [{ type: "application/ld+json", innerHTML: JSON.stringify(jsonLd) }],
});

useSeoMeta({
  title,
  description,
  ogType: "website",
  ogTitle: title,
  ogDescription: description,
  ogUrl: pageUrl,
  ogImage: `${siteUrl}/og-image.png`,
  ogLocale: "it_IT",
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${siteUrl}/og-image.png`,
});
</script>

<template>
  <main lang="it">
    <AppHeroSection
      title="Realizzazione Siti Web<br>a Napoli"
      subtitle="Creo siti web veloci, moderni e ottimizzati per Google per aziende e professionisti a Napoli e in tutta la Campania."
      :primary-cta="{ label: 'Richiedi un preventivo gratuito', to: '/contact' }"
      :secondary-cta="{ label: 'Guarda i miei progetti', to: '/projects' }"
    />

    <AppAboutSection
      title="Un freelance napoletano, non un'agenzia"
      :paragraphs="[
        'Mi chiamo Crescenzo Sorrentino e mi occupo di realizzazione di siti web per aziende e professionisti a Napoli. Quando mi contatti, parli direttamente con me: la stessa persona che cura il web design e lo sviluppo, e consegna il tuo sito nei tempi concordati.',
        'Nessun account manager, nessun intermediario, nessuna sorpresa in fattura. Se sei a Napoli, Salerno, Caserta, Avellino o Benevento, possiamo incontrarci di persona. Altrimenti si lavora tranquillamente da remoto.',
      ]"
      :cta="{ label: 'Parliamo del tuo progetto', to: '/contact' }"
      avatar-alt="Crescenzo Sorrentino, realizzazione siti web a Napoli"
      alt
    />

    <!-- NUMERI -->
    <section class="section">
      <div class="container">
        <div class="metrics">
          <div class="metric">
            <span class="metric__value">95+</span>
            <span class="metric__label">Score medio su Google PageSpeed</span>
          </div>
          <div class="metric">
            <span class="metric__value">2–4</span>
            <span class="metric__label">Settimane per un sito vetrina completo</span>
          </div>
          <div class="metric">
            <span class="metric__value">48h</span>
            <span class="metric__label">Per ricevere un preventivo dettagliato</span>
          </div>
        </div>
      </div>
    </section>

    <AppServicesSection
      title="Servizi di realizzazione siti web"
      subtitle="Dalla creazione di un nuovo sito al restyling di uno esistente, soluzioni per aziende, PMI e professionisti a Napoli e in Campania."
      :services="services"
      alt
    />

    <!-- PERCHÉ NUXT -->
    <section class="section">
      <div class="container container--narrow">
        <div class="section__head">
          <h2>Perché Nuxt.js e non WordPress?</h2>
          <p>Performance reale, flessibilità totale, nessun plugin che si rompe.</p>
        </div>
        <div class="why__body">
          <p>
            WordPress è rapido da impostare, ma limitato in performance e flessibilità. Nuxt.js è una tecnologia moderna basata su Vue.js che genera siti molto più veloci: si caricano in frazioni di secondo, un fattore critico per il posizionamento su Google e per chi naviga da telefono.
          </p>
          <p>
            Ogni elemento è costruito su misura, senza plugin di terze parti che si rompono ad ogni aggiornamento. Il codice che scrivo oggi è pensato per durare e scalare con la tua attività.
          </p>
          <p>
            E quanto costa tutto questo? Ho spiegato le fasce di prezzo reali, e cosa le fa variare, nella guida su <NuxtLink to="/blog/quanto-costa-sito-web-napoli">quanto costa un sito web a Napoli</NuxtLink>.
          </p>
        </div>
      </div>
    </section>

    <AppFaqSection
      title="Domande frequenti"
      subtitle="Tutto quello che ti serve sapere prima di contattarmi."
      :items="faqs"
      alt
    />
  </main>
</template>

<style scoped>
/* NUMERI */

.metrics {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  text-align: center;
}

@media (min-width: 640px) {
  .metrics { grid-template-columns: repeat(3, 1fr); }
}

.metric {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-6);
  border: 1px solid var(--border);
  border-radius: 16px;
}

.metric__value {
  font-size: var(--text-4xl);
  font-weight: 300;
  color: var(--color-accent);
  line-height: 1;
}

.metric__label {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.5;
}

/* PERCHÉ NUXT */

.section__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.why__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: var(--space-6);
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
}

.why__body :deep(a) {
  color: var(--color-accent-text);
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
