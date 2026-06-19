<template>
  <article class="card">
    <div class="card__preview">
      <!-- Mostra l'immagine solo se la prop è valorizzata -->
      <NuxtImg
        v-if="image"
        :src="image"
        :alt="title"
        class="card__preview-img"
        sizes="xs:100vw sm:100vw md:50vw lg:33vw xl:33vw"
        format="webp"
        quality="80"
        loading="lazy"
        width="370"
        height="208"
      />
      <div v-else class="card__placeholder" aria-hidden="true" />
    </div>

    <div class="card__body">
      <!-- Il <ul> non viene renderizzato affatto se l'array è vuoto, non solo nascosto -->
      <ul v-if="tags.length" class="card__tags" aria-label="Technologies">
        <li v-for="tag in tags" :key="tag" class="card__tag">{{ tag }}</li>
      </ul>
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__description">{{ description }}</p>
      <!-- .card__link::after si estende su tutta la card, rendendo l'intera superficie cliccabile -->
      <NuxtLink :to="to" class="card__link">View project</NuxtLink>
    </div>
  </article>
</template>

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

<style scoped>
/* CARD */

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  background-color: var(--bg-page);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  transition:
    transform  240ms ease,
    box-shadow 240ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(10, 35, 66, 0.10);
  }
}

/* PREVIEW */

.card__preview {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.card__preview-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    #1A3A6E 100%
  );
}

/* BODY */

.card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
  padding: var(--space-6);
}

/* TAGS */

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
}

.card__tag {
  padding: var(--space-1) var(--space-2);
  border: 1px solid var(--border);
  border-radius: 4px;
  background-color: var(--bg-section-alt);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

/* TEXT */

.card__title {
  font-size: var(--text-lg);
  font-weight: 600;
  line-height: 1.3;
  color: var(--text-primary);
}

.card__description {
  flex: 1;
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--text-secondary);
}

/* LINK */

.card__link {
  align-self: flex-start;
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-accent-text);
}

/* Estende l'area cliccabile all'intera superficie della card */
.card__link::after {
  content: "";
  position: absolute;
  inset: 0;
}
</style>
