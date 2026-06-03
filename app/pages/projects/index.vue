<script setup lang="ts">
import { projects, categories } from "~/data/projects"

const description = "Nuxt.js projects by Crescenzo Sorrentino: landing pages and web applications."

useHead({
  link: [{ rel: "canonical", href: "https://crescenzosorrentino.com/projects" }],
})

useSeoMeta({
  title: "Projects",
  description,
  ogType: "website",
  ogTitle: "Projects — Crescenzo Sorrentino",
  ogDescription: description,
  ogUrl: "https://crescenzosorrentino.com/projects",
  twitterCard: "summary_large_image",
  twitterTitle: "Projects — Crescenzo Sorrentino",
  twitterDescription: description,
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

    <!-- BLOG CTA -->
    <section class="section section--alt">
      <div class="container container--narrow">
        <div class="blog-cta">
          <span class="blog-cta__label">From the blog</span>
          <p class="blog-cta__text">Curious about the process? I write about frontend development and how decisions get made.</p>
          <NuxtLink to="/blog" class="blog-cta__link">Read the blog</NuxtLink>
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


/* BLOG CTA */

.blog-cta {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding-block: var(--space-12);
}

.blog-cta__label {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.blog-cta__text {
  font-size: var(--text-md);
  color: var(--text-secondary);
  max-width: 48ch;
}

.blog-cta__link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-accent-text);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
}
</style>
