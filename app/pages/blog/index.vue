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

// Ordine delle categorie: determina la sequenza di visualizzazione nella pagina
const categories = ["Guides", "Opinion", "Case Studies"] as const

// Carica tutti gli articoli ordinati dal più recente al più vecchio.
// La chiave "blog" è la cache key: Nuxt riutilizza il risultato se il componente
// viene rimontato senza una nuova navigazione.
const { data: articles } = await useAsyncData("blog", () =>
  queryCollection("blog").order("date", "DESC").all()
)

// Filtra gli articoli per categoria.
// Il ?? [] garantisce un array vuoto se articles non è ancora disponibile (SSR).
const byCategory = (category: string) =>
  articles.value?.filter(a => a.category === category) ?? []
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
      </div>
    </section>

    <!-- ARTICOLI -->
    <section class="section section--pt-sm">
      <div class="container container--narrow">
        <template v-for="category in categories" :key="category">
          <div v-if="byCategory(category).length" class="group">
            <span class="category-label">{{ category }}</span>
            <ul class="list">
              <li
                v-for="article in byCategory(category)"
                :key="article.path"
                class="item"
              >
                <NuxtLink :to="article.path" class="row">
                  <div class="row__main">
                    <time :datetime="article.date" class="date">
                      {{ new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) }}
                    </time>
                    <span class="title">{{ article.title }}</span>
                    <p class="description">{{ article.description }}</p>
                  </div>
                  <Icon name="lucide:arrow-right" class="arrow" :size="20" aria-hidden="true" />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </template>
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


/* LISTA */

.group {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-24);

  &:last-child {
    margin-bottom: 0;
  }
}

.category-label {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

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
