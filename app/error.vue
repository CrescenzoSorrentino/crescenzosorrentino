<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; statusMessage: string } }>()

const is404 = props.error.statusCode === 404

useHead({ title: is404 ? "Page not found" : "Something went wrong" })
</script>

<template>
  <NuxtLayout>
    <main class="error-page">
      <div class="container container--narrow">
        <div class="content">

          <svg
            v-if="is404"
            viewBox="0 0 320 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="illustration"
            aria-hidden="true"
          >
            <!-- Cable left -->
            <path d="M 0 90 C 10 78 20 102 30 90" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>

            <!-- Plug body -->
            <rect x="30" y="58" width="76" height="64" rx="8" stroke="currentColor" stroke-width="2.5"/>

            <!-- Plug prongs -->
            <rect x="106" y="70" width="36" height="12" rx="4" stroke="currentColor" stroke-width="2"/>
            <rect x="106" y="98" width="36" height="12" rx="4" stroke="currentColor" stroke-width="2"/>

            <!-- Sparks -->
            <path d="M 152 66 L 160 84 L 155 84 L 163 102" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="spark spark--1"/>
            <path d="M 164 72 L 170 84 L 166 84 L 172 96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spark spark--2"/>

            <!-- Socket body -->
            <rect x="183" y="58" width="76" height="64" rx="8" stroke="currentColor" stroke-width="2.5"/>

            <!-- Socket holes -->
            <rect x="187" y="70" width="16" height="12" rx="3" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.12"/>
            <rect x="187" y="98" width="16" height="12" rx="3" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.12"/>

            <!-- Wall -->
            <line x1="259" y1="42" x2="259" y2="138" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          </svg>

          <div class="text">
            <span class="label">{{ error.statusCode }}</span>
            <h1>{{ is404 ? "Nothing here." : "Something broke." }}</h1>
            <p class="message">
              {{ is404
                ? "This page doesn't exist or has been moved."
                : "An unexpected error occurred. Try refreshing the page." }}
            </p>

            <NuxtLink to="/" class="home-link">Back to homepage</NuxtLink>
          </div>

        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  min-height: 70vh;
  padding-block: var(--space-24);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-10);
}

.illustration {
  width: 100%;
  max-width: 280px;
  color: var(--text-primary);
}

.spark {
  stroke: var(--color-accent);
}

.spark--1 {
  animation: flicker 1.8s ease-in-out infinite;
}

.spark--2 {
  animation: flicker 1.8s ease-in-out infinite 0.3s;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  45% { opacity: 0.2; }
  50% { opacity: 1; }
  55% { opacity: 0.3; }
  60% { opacity: 1; }
}

.text {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.label {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

h1 {
  font-family: var(--font-headings);
  font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
  font-weight: 300;
  line-height: 1.1;
}

.message {
  font-size: var(--text-md);
  color: var(--text-secondary);
}


.home-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--space-4);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-accent-text);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s;

  &:hover { opacity: 0.75; }
}
</style>
