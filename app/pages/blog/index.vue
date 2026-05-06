<script setup lang="ts">
const categories = ["Guides", "Opinion", "Case Studies"] as const

const { data: articles } = await useAsyncData("blog", () =>
  queryCollection("blog").order("date", "DESC").all()
)

const byCategory = (category: string) =>
  articles.value?.filter(a => a.category === category) ?? []

useHead({ link: [{ rel: "canonical", href: "https://crescenzosorrentino.com/blog" }] })

useSeoMeta({
  title: "Blog",
  description: "Thoughts on Nuxt.js, performance, Core Web Vitals and building interfaces that convert.",
  ogTitle: "Blog — Crescenzo Sorrentino",
  ogDescription: "Thoughts on Nuxt.js, performance, Core Web Vitals and building interfaces that convert.",
  ogUrl: "https://crescenzosorrentino.com/blog",
  twitterTitle: "Blog — Crescenzo Sorrentino",
  twitterDescription: "Thoughts on Nuxt.js, performance, Core Web Vitals and building interfaces that convert.",
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
                v-for="(article, i) in byCategory(category)"
                :key="article.path"
                class="item"
                v-motion
                :initial="{ opacity: 0, y: 16 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: i * 80 } }"
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
  </main>
</template>

<style scoped>
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
  gap: var(--space-2);
  flex: 1;
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

.date {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.arrow {
  flex-shrink: 0;
  color: var(--color-accent);
}
</style>
