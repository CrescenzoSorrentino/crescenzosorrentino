<template>
  <main lang="it">
    <AppHeroSection
      :title="l.hero.title"
      :subtitle="l.hero.subtitle"
      :primary-cta="{ label: 'Richiedi un preventivo gratuito', to: '/contact' }"
      :secondary-cta="{ label: 'Guarda i miei progetti', to: '/projects' }"
    />

    <AppAboutSection
      :title="l.about.title"
      :paragraphs="l.about.paragraphs"
      :cta="{ label: 'Parliamo del tuo progetto', to: '/contact' }"
      :avatar-alt="l.about.avatarAlt"
      alt
    />

    <!-- NUMERI -->
    <section class="section">
      <div class="container">
        <div class="metrics">
          <div v-for="m in metrics" :key="m.label" class="metric">
            <span class="metric__value">{{ m.value }}</span>
            <span class="metric__label">{{ m.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <AppServicesSection
      title="Servizi di realizzazione siti web"
      :subtitle="l.servicesSubtitle"
      :services="services"
      alt
    />

    <!-- PER CHI LAVORO: intro iper-locale (antidoto al doorway) + hub dei settori. -->
    <section class="section">
      <div class="container">
        <div class="section__head">
          <h2>{{ l.local.title }}</h2>
          <p>{{ l.local.subtitle }}</p>
        </div>
        <div class="local__body">
          <p v-for="(p, i) in l.local.paragraphs" :key="i">{{ p }}</p>
          <p>Per alcune categorie parto da un template già pronto e pensato per il loro mondo: una base solida da personalizzare, meno tempo e costi più bassi.</p>
        </div>
        <div class="sectors">
          <NuxtLink
            v-for="s in sectors"
            :key="s.slug"
            :to="`/${s.slug}`"
            class="sector"
          >
            <div class="sector__icon">
              <Icon :name="s.card.icon" :size="24" aria-hidden="true" />
            </div>
            <div class="sector__text">
              <h3>{{ s.card.name }}</h3>
              <p>{{ s.card.tagline }}</p>
            </div>
            <Icon name="lucide:arrow-right" class="sector__arrow" :size="20" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- PERCHÉ NUXT -->
    <section class="section section--alt">
      <div class="container container--narrow">
        <div class="section__head">
          <h2>Perché Nuxt.js e non WordPress?</h2>
          <p>Performance reale, flessibilità totale, nessun plugin che si rompe.</p>
        </div>
        <div class="why__body">
          <p v-for="(p, i) in l.whyLead" :key="i">{{ p }}</p>
          <p>
            WordPress è rapido da impostare, ma limitato in performance e flessibilità. Nuxt.js è una tecnologia moderna basata su Vue.js che genera siti molto più veloci: si caricano in frazioni di secondo, un fattore critico per il posizionamento su Google e per chi naviga da telefono.
          </p>
          <p>
            Ogni elemento è costruito su misura, senza plugin di terze parti che si rompono ad ogni aggiornamento. Il codice che scrivo oggi è pensato per durare e scalare con la tua attività.
          </p>
          <p>
            E quanto costa tutto questo? Ho spiegato le fasce di prezzo reali, e cosa le fa variare, nella guida su <NuxtLink to="/blog/quanto-costa-sito-web-napoli">quanto costa un sito web</NuxtLink>.
          </p>
          <p>
            Ma un sito veloce serve a poco se chi cerca i tuoi servizi non lo trova: ho raccolto i passaggi concreti in una guida su <NuxtLink to="/blog/farsi-trovare-su-google-napoli">come farsi trovare su Google</NuxtLink>.
          </p>
        </div>
      </div>
    </section>

    <AppFaqSection
      title="Domande frequenti"
      subtitle="Tutto quello che ti serve sapere prima di contattarmi."
      :items="allFaqs"
    />
  </main>
</template>

<script setup lang="ts">
import { footerCtaIt } from "~/data/footer"
import { siteUrl, personProvider, verticals } from "~/data/verticals"
import type { Local } from "~/data/locals"

// Rende l'intera landing locale da un oggetto Local (vedi data/locals.ts).
// Le pagine in pages/ sono wrapper sottili che passano qui i dati della zona.
const props = defineProps<{ data: Local }>()
const l = props.data

// Hub dei settori: l'elenco si auto-popola da data/verticals.ts.
const sectors = Object.values(verticals)

const pageUrl = `${siteUrl}/${l.slug}`

// Pagina in italiano: imposta la CTA italiana del footer.
// Il reset a inglese all'uscita è gestito dal middleware globale footer-cta.global.ts.
const footerCta = useFooterCta()
footerCta.value = footerCtaIt

// Numeri identici per ogni zona (riguardano il servizio, non il luogo).
const metrics = [
  { value: "95+", label: "Score medio su Google PageSpeed" },
  { value: "2–4", label: "Settimane per un sito vetrina completo" },
  { value: "48h", label: "Per ricevere un preventivo dettagliato" },
]

// Titoli e icone dei servizi sono fissi; le descrizioni cambiano per zona (l.serviceDescriptions)
// così la sezione Servizi non è identica tra le pagine locali.
const serviceMeta = [
  { iconPaths: '<rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>', title: "Siti per aziende e professionisti" },
  { iconPaths: '<path d="M18 20V4"></path><path d="M12 20V10"></path><path d="M6 20v-4"></path>', title: "Landing page che convertono" },
  { iconPaths: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>', title: "Web app e strumenti su misura" },
  { iconPaths: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>', title: "Velocità e posizionamento su Google" },
]
const services = serviceMeta.map((m, i) => ({ ...m, description: l.serviceDescriptions[i] ?? "" }))

// FAQ generiche, condivise da tutte le zone (costo, manutenzione, tempi, velocità).
// Le FAQ specifiche della zona (l.faqs) vengono prima, poi queste.
const genericFaqs = [
  {
    q: "Quanto costa un sito web?",
    a: "Dipende da cosa ti serve. Un sito vetrina o una landing page va in genere dagli €800 ai €2.500. Una web app o uno strumento su misura parte da €4.000. Ogni progetto inizia con una chiamata gratuita per capire i tuoi obiettivi e darti un preventivo chiaro, fisso e senza sorprese.",
  },
  {
    q: "Chi si occupa della manutenzione dopo il lancio?",
    a: "Me ne occupo io. Il sito rimane sotto la mia gestione con un abbonamento mensile che include aggiornamenti, modifiche ai contenuti e supporto continuo. Non ti devi preoccupare di nulla dal punto di vista tecnico.",
  },
  {
    q: "Quanto tempo ci vuole per un sito?",
    a: "Una landing page richiede 1-2 settimane, un sito vetrina completo dalle 2 alle 4 settimane, una web app dalle 4 alle 8 settimane in base alle funzionalità. I tempi dipendono anche dalla velocità con cui mi fornisci testi, foto e loghi, e li concordiamo sempre prima di iniziare.",
  },
]
const allFaqs = [...l.faqs, ...genericFaqs]

// Argomenti di competenza per lo schema: uguali per ogni zona.
const knowsAbout = [
  "Realizzazione siti web",
  "Creazione siti web",
  "Siti web per aziende",
  "Web design",
  "SEO",
  "Nuxt.js",
  "Vue.js",
  "Core Web Vitals",
]

// Dati strutturati per Google, raggruppati in un @graph:
// - ProfessionalService: attività locale con aree servite e catalogo servizi → SEO locale
// - FAQPage: rende le FAQ idonee ai rich result
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${pageUrl}#business`,
      name: l.schema.businessName,
      description: l.seoDescription,
      url: pageUrl,
      image: `${siteUrl}/og-image.png`,
      priceRange: "€€",
      areaServed: l.schema.areaServed,
      knowsAbout,
      provider: personProvider,
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
      mainEntity: allFaqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
}

useHead({
  titleTemplate: null,
  htmlAttrs: { lang: "it" },
  link: [{ rel: "canonical", href: pageUrl }],
  script: [{ type: "application/ld+json", innerHTML: JSON.stringify(jsonLd) }],
})

useSeoMeta({
  title: l.seoTitle,
  description: l.seoDescription,
  ogType: "website",
  ogTitle: l.seoTitle,
  ogDescription: l.seoDescription,
  ogUrl: pageUrl,
  ogImage: `${siteUrl}/og-image.png`,
  ogLocale: "it_IT",
  twitterCard: "summary_large_image",
  twitterTitle: l.seoTitle,
  twitterDescription: l.seoDescription,
  twitterImage: `${siteUrl}/og-image.png`,
})
</script>


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

/* PER CHI LAVORO: intro locale sopra le card */

.section--alt {
  background-color: var(--bg-section-alt);
}

.local__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: 70ch;
  margin: 0 auto var(--space-12);
  text-align: center;
}

/* SETTORI */

.sectors {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .sectors { grid-template-columns: repeat(2, 1fr); }
}

.sector {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-6);
  background-color: var(--bg-page);
  border: 1px solid var(--border);
  border-radius: 16px;
  color: var(--text-primary);
  transition: border-color 200ms ease, transform 200ms ease;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
  }
}

.sector__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background-color: var(--bg-section-alt);
  color: var(--color-accent);
  flex-shrink: 0;
}

.sector__text {
  flex: 1;

  p {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.5;
    margin-top: var(--space-1);
  }
}

.sector__arrow {
  flex-shrink: 0;
  color: var(--color-accent);
}

/* PERCHÉ NUXT */

.section__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
  text-align: center;
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
