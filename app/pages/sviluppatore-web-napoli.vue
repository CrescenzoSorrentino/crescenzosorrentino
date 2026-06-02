<script setup lang="ts">
const siteUrl = "https://crescenzosorrentino.com";
const pageUrl = `${siteUrl}/sviluppatore-web-napoli`;

const title = "Sviluppatore Front-End a Napoli | Crescenzo Sorrentino";
const description =
  "Sviluppatore front-end freelance a Napoli: realizzo siti web veloci e ottimizzati per Google con Nuxt.js e Vue.js. Preventivo gratuito in tutta la Campania.";

// Le FAQ vengono renderizzate sia come HTML (sezione <details>) sia come dati
// strutturati JSON-LD, così Google può mostrarle come rich result in SERP.
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
</script>

<template>
  <main lang="it">
    <!-- HERO -->
    <header class="hero">
      <div class="hero__content">
        <h1
          class="hero__title"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: 100 },
          }"
        >
          Sviluppatore Front-End<br />Freelance a Napoli
        </h1>
        <p
          class="hero__subtitle"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: 200 },
          }"
        >
          Realizzo siti web veloci, moderni e ottimizzati per Google con
          Nuxt.js, per aziende e professionisti a Napoli e in tutta la Campania.
        </p>
        <div
          class="hero__actions"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: 300 },
          }"
        >
          <BaseButton to="/contact" variant="primary" size="md"
            >Richiedi un preventivo gratuito</BaseButton
          >
          <BaseButton to="/projects" variant="secondary" size="md"
            >Guarda i miei progetti</BaseButton
          >
        </div>
      </div>
    </header>

    <!-- CHI SONO -->
    <section id="chi-sono" class="section section--alt">
      <div class="container">
        <div class="about">
          <BaseAvatar
            src="/crescenzosorrentino.png"
            alt="Crescenzo Sorrentino, sviluppatore front-end freelance a Napoli"
            :size="280"
            v-motion
            :initial="{ opacity: 0, x: -32 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          />
          <div
            class="about__text"
            v-motion
            :initial="{ opacity: 0, x: 32 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          >
            <h2>Un freelance napoletano, non un'agenzia</h2>
            <p>
              Mi chiamo Crescenzo Sorrentino. Lavoro come sviluppatore front-end
              freelance da Napoli, specializzato nella realizzazione di siti web
              moderni con Nuxt.js e Vue.js. Quando mi contatti, parli
              direttamente con me: la persona che scriverà il tuo codice, curerà
              il design e consegnerà il progetto nei tempi concordati.
            </p>
            <p>
              Nessun account manager, nessun intermediario, nessuna sorpresa in
              fattura. Se sei a Napoli, Salerno, Caserta, Avellino o Benevento,
              possiamo incontrarci di persona. Altrimenti si lavora
              tranquillamente da remoto.
            </p>
            <div class="about__cta">
              <BaseButton to="/contact" variant="primary" size="md"
                >Parliamo del tuo progetto</BaseButton
              >
            </div>
          </div>
        </div>
      </div>
    </section>

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
            <span class="metric__label"
              >Settimane per un sito vetrina completo</span
            >
          </div>
          <div class="metric">
            <span class="metric__value">48h</span>
            <span class="metric__label"
              >Per ricevere un preventivo dettagliato</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- SERVIZI -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__head">
          <h2>Servizi di sviluppo web su misura</h2>
          <p>
            Soluzioni pensate per aziende, PMI e professionisti a Napoli e in
            Campania.
          </p>
        </div>
        <div class="services__grid">
          <div class="service">
            <div class="service__icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            <h3>Siti vetrina per professionisti e PMI</h3>
            <p>
              Avvocati, medici, architetti, consulenti: un sito che comunica
              autorevolezza, ottimizzato per le ricerche locali su Google.
            </p>
          </div>

          <div class="service">
            <div class="service__icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M18 20V4" />
                <path d="M12 20V10" />
                <path d="M6 20v-4" />
              </svg>
            </div>
            <h3>Landing page per campagne</h3>
            <p>
              Pagine costruite per convertire. Ogni scelta di layout e ogni CTA
              è pensata per trasformare i visitatori in clienti.
            </p>
          </div>

          <div class="service">
            <div class="service__icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3>Siti veloci e ottimizzati per Google</h3>
            <p>
              Con Nuxt.js ottengo punteggi altissimi su Google PageSpeed: meno
              rimbalzi, più posizionamento, più clienti.
            </p>
          </div>

          <div class="service">
            <div class="service__icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>Restyling di siti esistenti</h3>
            <p>
              Il tuo sito attuale è lento, vecchio, o non converte? Analizzo il
              problema e propongo un intervento mirato.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PERCHÉ NUXT -->
    <section class="section">
      <div class="container container--narrow">
        <div class="section__head">
          <h2>Perché Nuxt.js e non WordPress?</h2>
          <p>
            Performance reale, flessibilità totale, nessun plugin che si rompe.
          </p>
        </div>
        <div class="why__body">
          <p>
            WordPress è rapido da impostare, ma limitato in performance e
            flessibilità. Nuxt.js è un framework moderno basato su Vue.js:
            grazie al rendering lato server (SSR) e alla generazione statica
            (SSG), i siti si caricano in frazioni di secondo, un fattore critico
            per la SEO e per chi naviga da mobile.
          </p>
          <p>
            Ogni elemento è costruito su misura, senza plugin di terze parti che
            si rompono ad ogni aggiornamento. Il codice che scrivo oggi è
            pensato per durare e scalare con la tua attività.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section section--alt">
      <div class="container container--narrow">
        <div class="section__head">
          <h2>Domande frequenti</h2>
          <p>Tutto quello che ti serve sapere prima di contattarmi.</p>
        </div>
        <div class="faq__list">
          <details v-for="faq in faqs" :key="faq.q" class="faq__item">
            <summary class="faq__question">{{ faq.q }}</summary>
            <p class="faq__answer">{{ faq.a }}</p>
          </details>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* HERO */

.hero {
  position: relative;
  overflow: hidden;
  background-color: var(--color-primary);
  min-height: 60svh;
  display: flex;
  align-items: center;
  padding-block: var(--space-24);
}

[data-theme="dark"] .hero {
  background-color: var(--footer-bg);
}

.hero::before,
.hero::after {
  content: "";
  position: absolute;
  inset: -50%;
  pointer-events: none;
  z-index: 0;
}

.hero::before {
  background: radial-gradient(
    ellipse at 20% 60%,
    color-mix(in srgb, var(--color-accent) 60%, transparent) 0%,
    transparent 55%
  );
  animation: glow-a 7s ease-in-out infinite alternate;
}

.hero::after {
  background: radial-gradient(
    ellipse at 75% 30%,
    color-mix(in srgb, white 35%, transparent) 0%,
    transparent 50%
  );
  animation: glow-b 10s ease-in-out infinite alternate;
}

@keyframes glow-a {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(20%, -30%) scale(1.4);
  }
}

@keyframes glow-b {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(-18%, 25%) scale(1.5);
  }
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--space-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .hero__content {
    padding-inline: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .hero__content {
    padding-inline: var(--space-12);
  }
}

.hero__title {
  font-size: var(--text-4xl);
  font-weight: 300;
  color: #fff;
  line-height: 1.1;
}

@media (min-width: 768px) {
  .hero__title {
    font-size: var(--text-hero);
  }
}

.hero__subtitle {
  font-size: var(--text-md);
  color: rgba(255, 255, 255, 0.75);
  max-width: 52ch;
}

@media (min-width: 768px) {
  .hero__subtitle {
    font-size: var(--text-lg);
  }
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  justify-content: center;
}

.hero__actions .btn--secondary {
  color: rgba(255, 255, 255, 0.85);
  border-color: rgba(255, 255, 255, 0.35);

  &:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.75);
  }
}

/* ABOUT */

#chi-sono {
  overflow-x: clip;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-12);
}

@media (min-width: 768px) {
  .about {
    flex-direction: row;
    align-items: flex-start;
    gap: var(--space-16);
  }
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  text-align: center;

  .about__cta {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    text-align: left;

    .about__cta {
      justify-content: flex-start;
    }
  }
}

/* SECTION HEAD */

.section__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

/* SERVICES */

.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .services__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.service {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background-color: var(--bg-page);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: var(--space-6);
}

.service__icon {
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

/* WHY */

.why__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: var(--space-6);
}

/* METRICS */

.metrics {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  text-align: center;
}

@media (min-width: 640px) {
  .metrics {
    grid-template-columns: repeat(3, 1fr);
  }
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

/* FAQ */

.faq__list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}

.faq__item {
  border-bottom: 1px solid var(--border);
}

.faq__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding-block: var(--space-4);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  list-style: none;
  transition: color 0.2s;

  &:hover {
    color: var(--color-accent);
  }
  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: "+";
    font-size: var(--text-xl);
    font-weight: 300;
    color: var(--color-accent);
    flex-shrink: 0;
    transition: transform 0.2s;
  }
}

details[open] .faq__question::after {
  transform: rotate(45deg);
}

.faq__answer {
  padding-bottom: var(--space-4);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.7;
}
</style>
