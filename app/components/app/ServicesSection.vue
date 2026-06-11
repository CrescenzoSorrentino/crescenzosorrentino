<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  services: { iconPaths: string; title: string; description: string }[]
  alt?: boolean
}>()
</script>

<template>
  <section class="section" :class="{ 'section--alt': alt }">
    <div class="container">
      <div class="section__head">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
      <div class="services__grid">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="service"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 150 } }"
        >
          <div class="service__icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              v-html="service.iconPaths"
            />
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
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

.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .services__grid { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 1024px) {
  .services__grid { grid-template-columns: repeat(2, 1fr); }
}

.service {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background-color: var(--bg-page);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: var(--space-6);
}

.service__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background-color: var(--bg-section-alt);
  color: var(--color-accent);
  flex-shrink: 0;
}
</style>
