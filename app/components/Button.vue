<script setup>
import { resolveComponent, computed } from "vue"

const props = defineProps({
  variant: { type: String, default: "primary" },
  size: { type: String, default: "md" },
  to: String,
  href: String,
});

// resolveComponent deve essere chiamato nello script setup, non nel template,
// altrimenti fallisce durante il rendering SSR di Nuxt.
const tag = computed(() =>
  props.to ? resolveComponent("NuxtLink") : props.href ? "a" : "button"
)
</script>

<template>
  <!--
    Si comporta da NuxtLink se `to` è presente, da <a> se è presente `href`,
    altrimenti ricade su <button>. Priorità: to > href > button.
  -->
  <component
    :is="tag"
    :to="to"
    :href="href"
    :class="['btn', `btn--${variant}`, `btn--${size}`]"
  >
    <slot />
  </component>
</template>

<style scoped>
/* BASE */

.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-sm);
  font-weight: 600;
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s, transform 0.1s;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
  }
}

/* DIMENSIONI */

.btn--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.btn--md {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-sm);
}

.btn--lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
}

/* VARIANTI */

.btn--primary {
  background-color: var(--color-accent);
  color: #fff;

  &:hover {
    background-color: var(--color-accent-text);
  }
}

.btn--secondary {
  background-color: transparent;
  color: var(--text-primary);
  border: 1.5px solid var(--border);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
}
</style>
