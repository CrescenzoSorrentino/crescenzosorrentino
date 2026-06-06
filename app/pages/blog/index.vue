<script setup lang="ts">
const description = "Thoughts on Nuxt.js, performance, Core Web Vitals and building interfaces that convert."

useHead({
  link: [{ rel: "canonical", href: "https://crescenzosorrentino.com/blog" }],
})

useSeoMeta({
  title: "Blog",
  description,
  ogType: "website",
  ogTitle: "Blog — Crescenzo Sorrentino",
  ogDescription: description,
  ogUrl: "https://crescenzosorrentino.com/blog",
  twitterCard: "summary_large_image",
  twitterTitle: "Blog — Crescenzo Sorrentino",
  twitterDescription: description,
})

// Carica tutti gli articoli ordinati dal più recente al più vecchio.
// La chiave "blog" è la cache key: Nuxt riutilizza il risultato se il componente
// viene rimontato senza una nuova navigazione.
const { data: articles } = await useAsyncData("blog", () =>
  queryCollection("blog").order("date", "DESC").all()
)

// Lingua attiva del filtro: parte da "en" (lingua principale del sito).
const activeLang = ref<"en" | "it">("en")

// Mostra il toggle solo se esistono articoli italiani da filtrare.
const hasItalian = computed(() => articles.value?.some(a => a.lang === "it") ?? false)

// Articoli della lingua attiva (gli articoli senza campo lang sono trattati come "en").
const langArticles = computed(() =>
  articles.value?.filter(a => (a.lang ?? "en") === activeLang.value) ?? []
)

// Data formattata secondo la lingua dell'articolo.
const formatDate = (date: string, lang?: string) =>
  new Date(date).toLocaleDateString(lang === "it" ? "it-IT" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
</script>

<template>
  <main>
    <!-- INTRO -->
    <section class="section section--alt section--pb-sm section-top">
      <div class="container container--narrow">
        <div class="intro">
          <h1>Blog</h1>
          <p>Thoughts on Nuxt.js, performance, and building interfaces that convert.</p>
        </div>

        <!-- TOGGLE LINGUA: appare solo se ci sono articoli in italiano -->
        <div v-if="hasItalian" class="lang-toggle" role="group" aria-label="Filter articles by language">
          <button
            type="button"
            class="lang-toggle__btn"
            :class="{ 'lang-toggle__btn--active': activeLang === 'en' }"
            :aria-pressed="activeLang === 'en'"
            @click="activeLang = 'en'"
          >
            English
          </button>
          <button
            type="button"
            class="lang-toggle__btn"
            :class="{ 'lang-toggle__btn--active': activeLang === 'it' }"
            :aria-pressed="activeLang === 'it'"
            @click="activeLang = 'it'"
          >
            Italiano
          </button>
        </div>
      </div>
    </section>

    <!-- ARTICOLI -->
    <section class="section section--pt-sm">
      <div class="container container--narrow">
        <ul class="list">
          <li
            v-for="article in langArticles"
            :key="article.path"
            class="item"
          >
            <NuxtLink :to="article.path" class="row">
              <div class="row__main">
                <time :datetime="article.date" class="date">
                  {{ formatDate(article.date, article.lang) }}
                </time>
                <span class="title">{{ article.title }}</span>
                <p class="description">{{ article.description }}</p>
              </div>
              <Icon name="lucide:arrow-right" class="arrow" :size="20" aria-hidden="true" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- PROJECTS CTA -->
    <section class="section section--alt">
      <div class="container container--narrow">
        <div class="projects-cta">
          <span class="projects-cta__label">See the work</span>
          <p class="projects-cta__text">The principles I write about here are the same ones behind every project I build.</p>
          <NuxtLink to="/projects" class="projects-cta__link">Browse the projects</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

/* INTRO */

.intro {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-16);
}

.intro p {
  font-size: var(--text-md);
  color: var(--text-secondary);
}


/* TOGGLE LINGUA */

.lang-toggle {
  display: inline-flex;
  gap: var(--space-1);
  margin-top: var(--space-8);
  padding: var(--space-1);
  border: 1px solid var(--border);
  border-radius: 999px;
}

.lang-toggle__btn {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: color 200ms ease, background-color 200ms ease;

  &:hover {
    color: var(--text-primary);
  }
}

.lang-toggle__btn--active {
  color: #fff;
  background-color: var(--color-accent);

  &:hover {
    color: #fff;
  }
}


/* LISTA */

.list {
  list-style: none;
  border-top: 1px solid var(--border);
}

.item {
  border-bottom: 1px solid var(--border);
}


/* RIGA */

.row {
  display: flex;
  align-items: flex-start;
  gap: var(--space-6);
  padding-block: var(--space-6);
  color: var(--text-primary);
  transition: color 200ms ease;

  &:hover {
    color: var(--color-accent);
  }
}

.row__main {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  flex: 1;
}

.date {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.title {
  font-family: var(--font-headings);
  font-size: var(--text-xl);
  font-weight: 300;
}

.description {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  transition: color 200ms ease, opacity 200ms ease;
}

.arrow {
  flex-shrink: 0;
  color: var(--color-accent);
}


/* PROJECTS CTA */

.projects-cta {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding-block: var(--space-12);
}

.projects-cta__label {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.projects-cta__text {
  font-size: var(--text-md);
  color: var(--text-secondary);
  max-width: 48ch;
}

.projects-cta__link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-accent-text);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
}

</style>
