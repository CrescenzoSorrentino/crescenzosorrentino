<template>
  <div class="layout">
    <a href="#main" class="skip-link">Vai al contenuto</a>
    <AppNavbar />
    <div id="main" tabindex="-1" class="layout__main">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
/* Link "skip to content": nascosto finché non riceve il focus da tastiera,
   poi appare in alto a sinistra per saltare la navbar. */
.skip-link {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);
  z-index: 200;
  padding: var(--space-2) var(--space-4);
  background-color: var(--color-accent);
  color: #ffffff;
  border-radius: 6px;
  font-size: var(--text-sm);
  font-weight: 500;
  transform: translateY(-150%);
  transition: transform 0.2s ease;
}

.skip-link:focus {
  transform: translateY(0);
}

/* Il wrapper non deve mostrare l'outline quando riceve il focus
   programmaticamente dallo skip-link. */
.layout__main:focus {
  outline: none;
}
</style>
