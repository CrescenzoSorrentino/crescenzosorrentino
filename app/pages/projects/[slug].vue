<script setup lang="ts">
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-vue-next"
import { projects } from "~/data/projects"

const route   = useRoute()
const project = projects.find(p => p.slug === route.params.slug)

// Slug non trovato → pagina 404
if (!project) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" })
}

useHead({ link: [{ rel: "canonical", href: `https://crescenzosorrentino.com/projects/${project.slug}` }] })

useSeoMeta({
  title: project.title,
  description: project.description,
  ogTitle: `${project.title} — Crescenzo Sorrentino`,
  ogDescription: project.description,
  ogUrl: `https://crescenzosorrentino.com/projects/${project.slug}`,
  twitterTitle: `${project.title} — Crescenzo Sorrentino`,
  twitterDescription: project.description,
})
</script>

<template>
  <main>
    <!-- HEADER -->
    <section class="section section--alt section--pb-sm section-top">
      <div class="container container--narrow">

        <NuxtLink to="/projects" class="back">
          <ArrowLeft :size="16" aria-hidden="true" />
          All projects
        </NuxtLink>

        <header class="header">
          <div class="meta">
            <span>{{ project.year }}</span>
            <span>{{ project.category }}</span>
          </div>
          <h1 class="title">{{ project.title }}</h1>
          <ul class="tags" aria-label="Technologies">
            <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
          </ul>
          <div class="links">
            <Button
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              variant="primary"
              size="sm"
            >
              <ExternalLink :size="16" aria-hidden="true" />
              View live site
            </Button>
            <Button
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              variant="secondary"
              size="sm"
            >
              <GitBranch :size="16" aria-hidden="true" />
              View on GitHub
            </Button>
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

.section-top {
  padding-top: var(--space-24);
}

.back {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: var(--space-12);
  transition: color 150ms ease;

  &:hover {
    color: var(--color-accent);
  }
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
  color: var(--color-primary);
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
