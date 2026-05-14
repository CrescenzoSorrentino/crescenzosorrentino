<script setup lang="ts">
import { projects, categories } from "~/data/projects"

useHead({ link: [{ rel: "canonical", href: "https://crescenzosorrentino.com/projects" }] })

useSeoMeta({
  title: "Projects",
  description: "Nuxt.js projects by Crescenzo Sorrentino: landing pages and web applications.",
  ogType: "website",
  ogTitle: "Projects — Crescenzo Sorrentino",
  ogDescription: "Nuxt.js projects by Crescenzo Sorrentino: landing pages and web applications.",
  ogUrl: "https://crescenzosorrentino.com/projects",
  twitterCard: "summary",
  twitterTitle: "Projects — Crescenzo Sorrentino",
  twitterDescription: "Nuxt.js projects by Crescenzo Sorrentino: landing pages and web applications.",
})
</script>

<template>
  <main>
    <!-- INTRO -->
    <section class="section section--alt section--pb-sm section-top">
      <div class="container container--narrow">
        <div class="intro">
          <h1>Projects</h1>
          <p>A selection of work I've built for clients and personal projects.</p>
        </div>
      </div>
    </section>

    <!-- LISTA -->
    <section class="section section--pt-sm">
      <div class="container container--narrow">
        <template v-for="category in categories" :key="category">
          <!-- Filtra i progetti per categoria e salta se la categoria è vuota -->
          <div
            v-if="projects.filter(p => p.category === category).length"
            class="group"
          >
            <span class="category-label">{{ category }}</span>
            <ul class="list">
              <li
                v-for="project in projects.filter(p => p.category === category)"
                :key="project.to"
                class="item"
              >
                <NuxtLink :to="project.to" class="row">
                  <div class="row__main">
                    <span class="tags">{{ project.tags.join(" · ") }}</span>
                    <span class="title">{{ project.title }}</span>
                    <p class="description">{{ project.description }}</p>
                  </div>
                  <Icon name="lucide:arrow-right" class="arrow" :size="20" aria-hidden="true" />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </template>
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
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-16);
}

.intro p {
  font-size: var(--text-md);
  color: var(--text-secondary);
}

/* LISTA PROGETTI */

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

.row {
  display: flex;
  align-items: center;
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
  gap: var(--space-1);
  flex: 1;
}

.title {
  font-family: var(--font-headings);
  font-size: var(--text-xl);
  font-weight: 300;
}

.tags {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.description {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.arrow {
  flex-shrink: 0;
  color: var(--color-accent);
}
</style>
