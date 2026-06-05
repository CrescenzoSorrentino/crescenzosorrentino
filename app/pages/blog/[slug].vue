<script setup lang="ts">
const route = useRoute()

// Carica l'articolo corrispondente al percorso URL corrente
const { data: article } = await useAsyncData(route.path, () =>
  queryCollection("blog").path(route.path).first()
)

// Restituisce 404 se lo slug non corrisponde ad alcun articolo pubblicato
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: "Article not found" })
}

// URL assoluto riutilizzato nei meta tag e negli schema sottostanti
const url = `https://crescenzosorrentino.com${route.path}`

// Dati strutturati per Google: rappresenta l'articolo come BlogPosting
// Migliora la visibilità nei risultati di ricerca con i rich results
const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: article.value.title,
  description: article.value.description,
  datePublished: article.value.date,
  ...(article.value.dateModified ? { dateModified: article.value.dateModified } : {}),
  url,
  author: {
    "@type": "Person",
    name: "Crescenzo Sorrentino",
    url: "https://crescenzosorrentino.com",
  },
}

// Dati strutturati per la breadcrumb visibile nei risultati di ricerca
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crescenzosorrentino.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://crescenzosorrentino.com/blog" },
    { "@type": "ListItem", position: 3, name: article.value.title, item: url },
  ],
}

// Schema FAQPage generato dalle FAQ in frontmatter (se presenti).
// Le stesse FAQ vengono renderizzate in pagina: requisito di Google per i rich result.
const faqs = article.value.faqs ?? []
const faqSchema = faqs.length
  ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    }
  : null

// Inietta canonical e gli schema come tag <script type="application/ld+json"> nel <head>
useHead({
  link: [{ rel: "canonical", href: url }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify(blogPostingSchema) },
    { type: "application/ld+json", innerHTML: JSON.stringify(breadcrumbSchema) },
    ...(faqSchema ? [{ type: "application/ld+json", innerHTML: JSON.stringify(faqSchema) }] : []),
  ],
})

useSeoMeta({
  title: article.value.title,
  description: article.value.description,
  ogType: "article",
  ogTitle: `${article.value.title} — Crescenzo Sorrentino`,
  ogDescription: article.value.description,
  ogUrl: url,
  ogImage: "https://crescenzosorrentino.com/og-image.png",
  twitterCard: "summary_large_image",
  twitterTitle: `${article.value.title} — Crescenzo Sorrentino`,
  twitterDescription: article.value.description,
  twitterImage: "https://crescenzosorrentino.com/og-image.png",
})
</script>

<template>
  <main>
    <!-- INTRO -->
    <section class="section section--alt section--pb-sm section-top">
      <div class="container container--narrow">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <NuxtLink to="/" class="breadcrumb__item">Home</NuxtLink>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <NuxtLink to="/blog" class="breadcrumb__item">Blog</NuxtLink>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span class="breadcrumb__item breadcrumb__item--current" aria-current="page">{{ article!.title }}</span>
        </nav>

        <div class="intro">
          <time :datetime="article!.date" class="date">
            {{ new Date(article!.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) }}
          </time>
          <h1>{{ article!.title }}</h1>
          <p>{{ article!.description }}</p>
        </div>
      </div>
    </section>

    <!-- CONTENUTO -->
    <section class="section section--pt-sm">
      <div class="container container--narrow">
        <ContentRenderer :value="article!" class="prose" />
      </div>
    </section>

    <!-- FAQ -->
    <AppFaqSection
      v-if="faqs.length"
      title="Frequently Asked Questions"
      subtitle="Quick answers to the questions this article raises most often."
      :items="faqs"
      alt
    />
  </main>
</template>

<style scoped>

/* BREADCRUMB */

.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.breadcrumb__item {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
  transition: color 0.2s;

  &:is(a):hover {
    color: var(--color-accent);
  }
}

.breadcrumb__item--current {
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 30ch;
}

.breadcrumb__sep {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  opacity: 0.5;
}


/* INTRO */

.intro {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-16);
}

.date {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);

  &::after {
    content: "";
    display: block;
    flex: 1;
    height: 1px;
    background: var(--border);
  }
}

.intro p {
  font-size: var(--text-md);
  color: var(--text-secondary);
}


/* PROSE */

.prose {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.prose :deep(h2) {
  margin-top: var(--space-8);
}

.prose :deep(p) {
  color: var(--text-secondary);
  font-size: var(--text-base);
  line-height: 1.8;
}

.prose :deep(ul),
.prose :deep(ol) {
  padding-left: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  color: var(--text-secondary);
  font-size: var(--text-base);
  line-height: 1.8;
}

.prose :deep(strong) {
  color: var(--text-primary);
  font-weight: 600;
}

.prose :deep(a) {
  color: var(--color-accent-text);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.prose :deep(hr) {
  border: none;
  border-top: 1px solid var(--border);
  margin-block: var(--space-8);
}

/* IMMAGINI / FIGURE */

.prose :deep(img) {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.prose :deep(figure) {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin: 0;
}

.prose :deep(figcaption) {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  text-align: center;
}

</style>
