<template>
  <header class="hero">
    <div class="hero__content">
      <h1
        class="hero__title"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        v-html="title"
      />
      <p
        class="hero__subtitle"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 120 } }"
      >
        {{ subtitle }}
      </p>
      <div
        class="hero__actions"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 240 } }"
      >
        <BaseButton :to="primaryCta.to" variant="primary" size="md">{{ primaryCta.label }}</BaseButton>
        <BaseButton :to="secondaryCta.to" variant="secondary" size="md">{{ secondaryCta.label }}</BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  primaryCta: { label: string; to: string }
  secondaryCta: { label: string; to: string }
}>()
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background-color: var(--color-primary);
  min-height: 60svh;
  display: flex;
  align-items: center;
  padding-block: var(--space-24);
}

[data-theme="dark"] .hero {
  background-color: var(--footer-bg);
}

.hero::before,
.hero::after {
  content: '';
  position: absolute;
  inset: -50%;
  pointer-events: none;
  z-index: 0;
}

.hero::before {
  background: radial-gradient(ellipse at 20% 60%, color-mix(in srgb, var(--color-accent) 60%, transparent) 0%, transparent 55%);
  animation: glow-a 7s ease-in-out infinite alternate;
}

.hero::after {
  background: radial-gradient(ellipse at 75% 30%, color-mix(in srgb, white 35%, transparent) 0%, transparent 50%);
  animation: glow-b 10s ease-in-out infinite alternate;
}

@keyframes glow-a {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(20%, -30%) scale(1.4); }
}

@keyframes glow-b {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(-18%, 25%) scale(1.5); }
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--space-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .hero__content { padding-inline: var(--space-6); }
}

@media (min-width: 1024px) {
  .hero__content { padding-inline: var(--space-12); }
}

.hero__title {
  font-size: var(--text-4xl);
  font-weight: 300;
  color: #fff;
  line-height: 1.1;
}

@media (min-width: 768px) {
  .hero__title { font-size: var(--text-hero); }
}

.hero__subtitle {
  font-size: var(--text-md);
  color: rgba(255, 255, 255, 0.75);
  max-width: 52ch;
}

@media (min-width: 768px) {
  .hero__subtitle { font-size: var(--text-lg); }
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  justify-content: center;
}

.hero__actions :deep(.btn--secondary) {
  color: rgba(255, 255, 255, 0.85);
  border-color: rgba(255, 255, 255, 0.35);

  &:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.75);
  }
}
</style>
