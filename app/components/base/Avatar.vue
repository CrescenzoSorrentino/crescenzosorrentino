<script setup>
// Tutte le variabili CSS derivate (--noggin, --mask-size, ecc.)
// sono calcolate da `size`, quindi una sola prop controlla l'intero layout.
defineProps({
  src:  { type: String, required: true },
  alt:  { type: String, required: true },
  size: { type: Number, default: 200 },
})
</script>

<template>
  <!-- `--size` viene iniettato come proprietà CSS custom così tutti i calc()
       dentro .avatar si aggiornano automaticamente al cambio della prop. -->
  <div class="avatar" :style="{ '--size': `${size}px` }">
    <NuxtImg :src="src" :alt="alt" :width="size" :height="size" class="image" />
  </div>
</template>

<style scoped>
/*
  AVATAR — cornice circolare con effetto "testa che sbuca".

  L'effetto funziona in due passaggi:
  1. L'immagine viene resa più alta del cerchio (--height-with-noggin = size + 15%)
     così la testa sale naturalmente sopra il bordo superiore.
  2. Un doppio mask-image ritaglia tutto ciò che è fuori dal cerchio
     lasciando aperta la metà superiore, quindi solo la parte sopra il bordo è visibile.

  --noggin              altezza extra che sporge sopra il cerchio.
  --height-with-noggin  altezza totale dell'immagine (size + noggin).
  --border-width        scala con size così il bordo rimane proporzionale.
  --mask-size           raggio del ritaglio circolare (metà size meno il bordo).

  mask-image usa due livelli:
  - un linear-gradient che espone la metà superiore (area testa sopra il bordo)
  - un radial-gradient che ritaglia il corpo circolare dell'avatar
*/

.avatar {
  --noggin:             calc(var(--size) * 0.15);
  --height-with-noggin: calc(var(--size) + var(--noggin));
  --border-width:       calc(var(--size) * 0.015);
  --mask-size:          calc(var(--size) / 2 - var(--border-width));

  --mask-image:
    linear-gradient(to bottom, black 0%, black 50%, transparent 50%),
    radial-gradient(
      circle at center center,
      black 0%,
      black var(--mask-size),
      transparent var(--mask-size),
      transparent 100%
    );
  --mask-repeat:   no-repeat, no-repeat;
  --mask-position:
    center center,
    center calc(var(--noggin) / 2 + var(--border-width));

  width:            var(--size);
  height:           var(--size);
  border-radius:    50%;
  border:           var(--border-width) solid var(--color-accent);
  background-color: var(--color-primary);
  display:          flex;
  align-items:      flex-end;
  position:         relative;
  flex-shrink:      0;
  filter:           drop-shadow(0 8px 24px rgba(10, 35, 66, 0.35));
}

.image {
  width:         100%;
  height:        var(--height-with-noggin);
  object-fit:    cover;
  mask-image:    var(--mask-image);
  mask-repeat:   var(--mask-repeat);
  mask-position: var(--mask-position);
  mask-mode:     alpha;
}
</style>
