<script setup lang="ts">
import { CONTACT_INFO } from "~/data/contact"

useHead({ link: [{ rel: "canonical", href: "https://crescenzosorrentino.com/contact" }] })

useSeoMeta({
  title: "Contact",
  description: "Get in touch to discuss your Nuxt.js project. I reply within 24 hours.",
  ogTitle: "Contact — Crescenzo Sorrentino",
  ogDescription: "Get in touch to discuss your Nuxt.js project. I reply within 24 hours.",
  ogUrl: "https://crescenzosorrentino.com/contact",
  twitterTitle: "Contact — Crescenzo Sorrentino",
  twitterDescription: "Get in touch to discuss your Nuxt.js project. I reply within 24 hours.",
})
</script>

<template>
  <main>
    <!-- INTRO -->
    <section class="section section--alt section--pb-sm section-top">
      <div class="container container--narrow">
        <div class="intro">
          <h1>Get in touch</h1>
          <p>Fill in the form or reach me directly. I reply within 24 hours.</p>
        </div>
      </div>
    </section>

    <!-- INFO + FORM -->
    <section class="section section--pt-sm">
      <div class="container container--narrow">

        <ul class="info-strip">
          <li
            v-for="item in CONTACT_INFO"
            :key="item.label"
            class="info-item"
          >
            <span class="info-label">{{ item.label }}</span>
            <!-- Usa <a> se c'è un href, aggiunge rel e target solo per link esterni -->
            <a
              v-if="item.href"
              :href="item.href"
              class="info-value"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
            >
              {{ item.value }}
            </a>
            <span v-else class="info-value">{{ item.value }}</span>
          </li>
        </ul>

        <ContactForm />
      </div>
    </section>
  </main>
</template>

<style scoped>
/* INTRO */

.section-top {
  padding-top: var(--space-24);
}

.intro {
  margin-bottom: var(--space-12);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.intro p {
  font-size: var(--text-md);
  color: var(--text-secondary);
}

/* INFO STRIP */

.info-strip {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-bottom: var(--space-12);
  padding-bottom: var(--space-12);
  border-bottom: 1px solid var(--border);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.info-label {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.info-value {
  font-size: var(--text-sm);
  color: var(--text-primary);
  text-decoration: none;
  white-space: nowrap;

  &:is(a):hover {
    color: var(--color-accent);
  }
}

@media (min-width: 768px) {
  .info-strip {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  /* Posizionamento manuale delle celle nella griglia 2×3 */
  .info-item:nth-child(1) { grid-column: 1; grid-row: 1; }
  .info-item:nth-child(2) { grid-column: 1; grid-row: 2; }
  .info-item:nth-child(3) { grid-column: 1; grid-row: 3; }
  .info-item:nth-child(4) { grid-column: 2; grid-row: 1; }
  .info-item:nth-child(5) { grid-column: 2; grid-row: 2; }
}
</style>
