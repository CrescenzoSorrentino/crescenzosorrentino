<script setup>
// `image` è opzionale: se assente il template mostra il placeholder con gradiente.
// `tags` ha default array vuoto così `v-if="tags.length"` non genera errori se omesso.
defineProps({
  image: { type: String, default: null },
  tags: { type: Array, default: () => [] },
  title: { type: String, required: true },
  description: { type: String, required: true },
  to: { type: String, required: true },
});
</script>

<template>
  <article class="card">
    <div class="preview">
      <!-- Mostra l'immagine solo se la prop è valorizzata -->
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="preview__img"
      />
      <div v-else class="placeholder" aria-hidden="true" />
    </div>

    <div class="body">
      <!-- Il <ul> non viene renderizzato affatto se l'array è vuoto, non solo nascosto -->
      <ul v-if="tags.length" class="tags" aria-label="Technologies">
        <li v-for="tag in tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
      <!-- .link::after si estende su tutta la card, rendendo l'intera superficie cliccabile -->
      <NuxtLink :to="to" class="link">View project</NuxtLink>
    </div>
  </article>
</template>

<style scoped>
/* CARD */

.card {
  height: 100%;
  background-color: var(--bg-page);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;

  transition:
    transform  240ms ease,
    box-shadow 240ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(10, 35, 66, 0.10);
  }
}

/* PREVIEW */

.preview {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.preview__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    #1A3A6E 100%
  );
}

/* BODY */

.body {
  padding: var(--space-6);

  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
}

/* TAGS */

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
  background-color: var(--bg-section-alt);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: var(--space-1) var(--space-2);
}

/* TEXT */

.title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.description {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: 1.6;
  flex: 1;
}

/* LINK */

.link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-accent-text);
  margin-top: var(--space-2);
  align-self: flex-start;
}

/* Estende l'area cliccabile all'intera superficie della card */
.link::after {
  content: "";
  position: absolute;
  inset: 0;
}
</style>
