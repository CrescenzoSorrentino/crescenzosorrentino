<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  items: { q: string; a: string }[]
  alt?: boolean
}>()
</script>

<template>
  <section class="section" :class="{ 'section--alt': alt }">
    <div class="container container--narrow">
      <div class="section__head">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
      <div class="faq__list">
        <details v-for="item in items" :key="item.q" class="faq__item">
          <summary class="faq__question">{{ item.q }}</summary>
          <p class="faq__answer">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.faq__list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}

.faq__item {
  border-bottom: 1px solid var(--border);
}

.faq__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding-block: var(--space-4);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  list-style: none;
  transition: color 0.2s;

  &:hover { color: var(--color-accent); }
  &::-webkit-details-marker { display: none; }

  &::after {
    content: "+";
    font-size: var(--text-xl);
    font-weight: 300;
    color: var(--color-accent);
    flex-shrink: 0;
    transition: transform 0.2s;
  }
}

details[open] .faq__question::after {
  transform: rotate(45deg);
}

.faq__answer {
  padding-bottom: var(--space-4);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.7;
}
</style>
