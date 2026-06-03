<script setup lang="ts">
const siteUrl = "https://crescenzosorrentino.com";
const pageUrl = `${siteUrl}/sviluppatore-web-napoli`;

const title = "Sviluppatore Front-End a Napoli | Crescenzo Sorrentino";
const description =
  "Sviluppatore front-end freelance a Napoli: realizzo siti web veloci e ottimizzati per Google con Nuxt.js e Vue.js. Preventivo gratuito in tutta la Campania.";

const faqs = [
  {
    q: "Quanto costa un sito web?",
    a: "Il costo dipende dalla complessità del progetto. Un sito vetrina semplice parte da cifre accessibili; progetti più articolati vengono valutati su misura. Il preventivo è sempre gratuito e senza impegno.",
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
    a: "Un sito vetrina richiede da 2 a 4 settimane. I tempi variano in base alla complessità e alla velocità nel fornire materiali come testi, foto e loghi.",
  },
  {
    q: "Ho bisogno di un designer prima di iniziare?",
    a: "Non necessariamente. Se hai un file Figma o una brand identity, la traduco direttamente in codice. Se parti da zero, posso occuparmi anche della direzione visiva partendo da riferimenti o mood board.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${pageUrl}#business`,
      name: "Crescenzo Sorrentino, Sviluppatore Front-End Freelance",
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
        "Nuxt.js",
        "Vue.js",
        "SEO",
        "Core Web Vitals",
        "Sviluppo front-end",
        "Realizzazione siti web",
      ],
      provider: { "@id": `${siteUrl}#person`, "@type": "Person", name: "Crescenzo Sorrentino" },
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

const services = [
  {
    iconPaths: '<rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>',
    title: "Siti vetrina per professionisti e PMI",
    description: "Avvocati, medici, architetti, consulenti: un sito che comunica autorevolezza, ottimizzato per le ricerche locali su Google.",
  },
  {
    iconPaths: '<path d="M18 20V4"></path><path d="M12 20V10"></path><path d="M6 20v-4"></path>',
    title: "Landing page per campagne",
    description: "Pagine costruite per convertire. Ogni scelta di layout e ogni CTA è pensata per trasformare i visitatori in clienti.",
  },
  {
    iconPaths: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>',
    title: "Siti veloci e ottimizzati per Google",
    description: "Con Nuxt.js ottengo punteggi altissimi su Google PageSpeed: meno rimbalzi, più posizionamento, più clienti.",
  },
  {
    iconPaths: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    title: "Restyling di siti esistenti",
    description: "Il tuo sito attuale è lento, vecchio, o non converte? Analizzo il problema e propongo un intervento mirato.",
  },
]
</script>

<template>
  <main lang="it">
    <AppHeroSection
      title="Sviluppatore Front-End<br>Freelance a Napoli"
      subtitle="Realizzo siti web veloci, moderni e ottimizzati per Google con Nuxt.js, per aziende e professionisti a Napoli e in tutta la Campania."
      :primary-cta="{ label: 'Richiedi un preventivo gratuito', to: '/contact' }"
      :secondary-cta="{ label: 'Guarda i miei progetti', to: '/projects' }"
    />

    <AppAboutSection
      title="Un freelance napoletano, non un'agenzia"
      :paragraphs="[
        'Mi chiamo Crescenzo Sorrentino. Lavoro come sviluppatore front-end freelance da Napoli, specializzato nella realizzazione di siti web moderni con Nuxt.js e Vue.js. Quando mi contatti, parli direttamente con me: la persona che scriverà il tuo codice, curerà il design e consegnerà il progetto nei tempi concordati.',
        'Nessun account manager, nessun intermediario, nessuna sorpresa in fattura. Se sei a Napoli, Salerno, Caserta, Avellino o Benevento, possiamo incontrarci di persona. Altrimenti si lavora tranquillamente da remoto.',
      ]"
      :cta="{ label: 'Parliamo del tuo progetto', to: '/contact' }"
      avatar-alt="Crescenzo Sorrentino, sviluppatore front-end freelance a Napoli"
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
      title="Servizi di sviluppo web su misura"
      subtitle="Soluzioni pensate per aziende, PMI e professionisti a Napoli e in Campania."
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
            WordPress è rapido da impostare, ma limitato in performance e flessibilità. Nuxt.js è un framework moderno basato su Vue.js: grazie al rendering lato server (SSR) e alla generazione statica (SSG), i siti si caricano in frazioni di secondo, un fattore critico per la SEO e per chi naviga da mobile.
          </p>
          <p>
            Ogni elemento è costruito su misura, senza plugin di terze parti che si rompono ad ogni aggiornamento. Il codice che scrivo oggi è pensato per durare e scalare con la tua attività.
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
</style>
