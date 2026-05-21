<script setup lang="ts">
import { projects } from "~/data/projects"

const route = useRoute()

// Ricerca sincrona nei dati statici: nessuna chiamata asincrona necessaria
const project = projects.find(p => p.slug === route.params.slug)

// Restituisce 404 se lo slug non corrisponde ad alcun progetto
if (!project) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" })
}

// Dati strutturati per Google: rappresenta il progetto come CreativeWork.
// Se esiste liveUrl lo usa come URL canonico, altrimenti cade sull'URL interno.
const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: project.longDescription,
  url: project.liveUrl ?? `https://crescenzosorrentino.com/projects/${project.slug}`,
  keywords: project.tags.join(", "),
  author: {
    "@type": "Person",
    name: "Crescenzo Sorrentino",
    url: "https://crescenzosorrentino.com",
  },
}

// Inietta canonical e lo schema come tag <script type="application/ld+json"> nel <head>
useHead({
  link: [{ rel: "canonical", href: `https://crescenzosorrentino.com/projects/${project.slug}` }],
  script: [{ type: "application/ld+json", innerHTML: JSON.stringify(projectSchema) }],
})

useSeoMeta({
  title: project.title,
  description: project.description,
  ogType: "website",
  ogTitle: `${project.title} — Crescenzo Sorrentino`,
  ogDescription: project.description,
  ogUrl: `https://crescenzosorrentino.com/projects/${project.slug}`,
  twitterCard: "summary",
  twitterTitle: `${project.title} — Crescenzo Sorrentino`,
  twitterDescription: project.description,
})
</script>

<template>
  <main>
    <!-- HEADER -->
    <section class="section section--alt section--pb-sm section-top">
      <div class="container container--narrow">

        <nav class="breadcrumb" aria-label="Breadcrumb">
          <NuxtLink to="/" class="breadcrumb__item">Home</NuxtLink>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <NuxtLink to="/projects" class="breadcrumb__item">Projects</NuxtLink>
          <span class="breadcrumb__sep" aria-hidden="true">/</span>
          <span class="breadcrumb__item breadcrumb__item--current" aria-current="page">{{ project!.title }}</span>
        </nav>

        <header class="header">
          <div class="meta">
            <span>{{ project.year }}</span>
            <span>{{ project.tags.join(", ") }}</span>
          </div>
          <h1 class="title">{{ project.title }}</h1>
          <ul class="tags" aria-label="Technologies">
            <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
          </ul>
          <div class="links">
            <BaseButton
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              variant="primary"
              size="sm"
            >
              <Icon name="lucide:external-link" :size="16" aria-hidden="true" />
              View live site
            </BaseButton>
            <BaseButton
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              variant="secondary"
              size="sm"
            >
              <Icon name="lucide:git-branch" :size="16" aria-hidden="true" />
              View on GitHub
            </BaseButton>
          </div>
        </header>

      </div>
    </section>

    <!-- CORPO -->
    <section class="section section--pt-sm">
      <div class="container container--narrow">
        <div class="body">

          <div class="block">
            <h2 class="label">About the project</h2>
            <p class="description">{{ project.longDescription }}</p>
          </div>

          <div class="block">
            <h2 class="label">Highlights</h2>
            <ul class="highlights">
              <li v-for="h in project.highlights" :key="h" class="highlight">{{ h }}</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

/* HEADER */

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

.header {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);

  /* Linea decorativa che si estende fino al bordo destro */
  &::after {
    content: "";
    display: block;
    flex: 1;
    height: 1px;
    background: var(--border);
  }
}

.title {
  font-family: var(--font-headings);
  font-size: var(--text-3xl);
  font-weight: 300;
  line-height: 1.1;
}

@media (min-width: 768px) {
  .title {
    font-size: var(--text-4xl);
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
}

.tag {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
  background-color: var(--bg-page);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: var(--space-1) var(--space-2);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

/* CORPO */

.body {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.block {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.description {
  font-size: var(--text-md);
  color: var(--text-primary);
  line-height: 1.8;
}

.highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

/* Pallino decorativo prima di ogni highlight */
.highlight {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  font-size: var(--text-base);
  color: var(--text-primary);
  line-height: 1.6;

  &::before {
    content: "";
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--color-accent);
    position: relative;
    top: -1px;
  }
}
</style>
