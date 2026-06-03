<script setup lang="ts">
defineProps<{
  title: string
  paragraphs: string[]
  cta: { label: string; to: string }
  alt?: boolean
  avatarAlt?: string
}>()
</script>

<template>
  <section
    class="section about-section"
    :class="{ 'section--alt': alt }"
  >
    <div class="container">
      <div class="about">
        <BaseAvatar
          src="/crescenzosorrentino.png"
          :alt="avatarAlt ?? 'Crescenzo Sorrentino'"
          :size="280"
          v-motion
          :initial="{ opacity: 0, x: -32 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
        />
        <div
          class="about__text"
          v-motion
          :initial="{ opacity: 0, x: 32 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
        >
          <h2>{{ title }}</h2>
          <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
          <div class="about__cta">
            <BaseButton :to="cta.to" variant="primary" size="md">{{ cta.label }}</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  overflow-x: clip;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-12);
}

@media (min-width: 768px) {
  .about {
    flex-direction: row;
    align-items: flex-start;
    gap: var(--space-16);
  }
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  text-align: center;

  .about__cta {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    text-align: left;

    .about__cta {
      justify-content: flex-start;
    }
  }
}
</style>
