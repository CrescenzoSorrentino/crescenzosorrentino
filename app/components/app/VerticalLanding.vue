<script setup lang="ts">
import { footerCtaIt } from "~/data/footer"
import { siteUrl, areaServed, personProvider, type Vertical } from "~/data/verticals"

// Rende l'intera landing verticale da un oggetto Vertical (vedi data/verticals.ts).
// Le pagine in pages/ sono wrapper sottili che passano qui i dati della nicchia.
const props = defineProps<{ data: Vertical }>()
const v = props.data

const pageUrl = `${siteUrl}/${v.slug}`

// Pagina in italiano: imposta la CTA italiana del footer.
// Il reset a inglese all'uscita è gestito dal middleware globale footer-cta.global.ts.
const footerCta = useFooterCta()
footerCta.value = footerCtaIt

// Dati strutturati per Google, raggruppati in un @graph:
// - ProfessionalService: attività locale specializzata, con aree servite e catalogo dei servizi → SEO locale
// - FAQPage: rende le FAQ idonee ai rich result
// services e faqs alimentano sia questo schema sia le sezioni renderizzate (fonte unica).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${pageUrl}#business`,
      name: v.schema.businessName,
      description: v.seoDescription,
      url: pageUrl,
      image: `${siteUrl}/og-image.png`,
      priceRange: "€€",
      areaServed,
      knowsAbout: v.schema.knowsAbout,
      provider: personProvider,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servizi di sviluppo web",
        itemListElement: v.services.map(({ title, description }) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: title, description },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: v.faqs.map(({ q, a }) => ({
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
  title: v.seoTitle,
  description: v.seoDescription,
  ogType: "website",
  ogTitle: v.seoTitle,
  ogDescription: v.seoDescription,
  ogUrl: pageUrl,
  ogImage: `${siteUrl}/og-image.png`,
  ogLocale: "it_IT",
  twitterCard: "summary_large_image",
  twitterTitle: v.seoTitle,
  twitterDescription: v.seoDescription,
  twitterImage: `${siteUrl}/og-image.png`,
})
</script>

<template>
  <main lang="it">
    <AppHeroSection
      :title="v.hero.title"
      :subtitle="v.hero.subtitle"
      :primary-cta="{ label: v.hero.primaryCta, to: '/contact' }"
      :secondary-cta="{ label: v.hero.secondaryCta, to: '#demo' }"
    />

    <AppAboutSection
      :title="v.about.title"
      :paragraphs="v.about.paragraphs"
      :cta="{ label: v.about.cta, to: '/contact' }"
      :avatar-alt="v.about.avatarAlt"
      alt
    />

    <!-- NUMERI -->
    <section class="section">
      <div class="container">
        <div class="metrics">
          <div v-for="m in v.metrics" :key="m.label" class="metric">
            <span class="metric__value">{{ m.value }}</span>
            <span class="metric__label">{{ m.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <AppServicesSection
      :title="v.servicesHead.title"
      :subtitle="v.servicesHead.subtitle"
      :services="v.services"
      alt
    />

    <!-- DEMO DAL VIVO -->
    <section id="demo" class="section">
      <div class="container">
        <div class="demo">
          <div class="demo__text">
            <span class="demo__label">{{ v.demo.label }}</span>
            <h2>{{ v.demo.title }}</h2>
            <p>{{ v.demo.text }}</p>
            <BaseButton :href="v.demo.liveUrl" target="_blank" variant="primary" size="md">
              <Icon name="lucide:external-link" :size="16" aria-hidden="true" />
              {{ v.demo.cta }}
            </BaseButton>
          </div>
          <a
            :href="v.demo.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="demo__preview"
            :aria-label="v.demo.cta"
          >
            <NuxtImg
              :src="v.demo.image"
              :alt="v.demo.imageAlt"
              class="demo__img"
              sizes="xs:100vw sm:100vw md:50vw lg:50vw"
              format="webp"
              quality="80"
              loading="lazy"
              width="640"
              height="360"
            />
          </a>
        </div>
      </div>
    </section>

    <AppFaqSection
      :title="v.faqHead.title"
      :subtitle="v.faqHead.subtitle"
      :items="v.faqs"
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

/* DEMO DAL VIVO */

.demo {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  align-items: center;
}

/* Su mobile l'anteprima (la prova visiva) viene prima del testo: l'utente vede
   subito un sito reale, poi legge la spiegazione e arriva alla CTA. */
.demo__preview { order: -1; }

@media (min-width: 768px) {
  .demo {
    flex-direction: row;
    gap: var(--space-12);
  }

  /* Affiancati: testo a sinistra, anteprima a destra (ordine naturale del DOM). */
  .demo__text,
  .demo__preview {
    flex: 1;
    order: 0;
  }
}

.demo__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  text-align: center;
}

.demo__label {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.demo__text .btn {
  align-self: center;
  margin-top: var(--space-2);
}

@media (min-width: 768px) {
  .demo__text { text-align: left; }
  .demo__text .btn { align-self: flex-start; }
}

/* Anteprima cliccabile del template: bordo e leggera elevazione all'hover */
.demo__preview {
  display: block;
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 240ms ease, box-shadow 240ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(10, 35, 66, 0.12);
  }
}

.demo__img {
  width: 100%;
  height: auto;
}
</style>
