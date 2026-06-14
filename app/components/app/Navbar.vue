<script setup>
import { navLinks } from "~/data/nav"

const isOpen = ref(false) // stato del menu mobile
const isDark = ref(false) // stato del tema, sincronizzato con data-theme

function toggleMenu() {
  isOpen.value = !isOpen.value
}

// Chiude il menu mobile con il tasto Esc, riportando il focus
// sul bottone hamburger per non perdere il punto di navigazione.
const hamburger = ref(null)

function onKeydown(e) {
  if (e.key === "Escape" && isOpen.value) {
    isOpen.value = false
    hamburger.value?.focus()
  }
}

onMounted(() => {
  // document non è accessibile durante l'SSR: al mount leggiamo il tema già
  // scritto dall'inline script in <head> e iniziamo ad ascoltare il tasto Esc.
  isDark.value = document.documentElement.getAttribute("data-theme") === "dark"
  document.addEventListener("keydown", onKeydown)
})

onUnmounted(() => {
  document.removeEventListener("keydown", onKeydown)
})

// Doppio aggiornamento: setAttribute cambia il tema subito (effetto visivo immediato),
// localStorage lo persiste così l'inline script lo rileva al prossimo caricamento
function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem("theme", theme)
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar__inner">
      <NuxtLink to="/" aria-label="Home" class="navbar__logo">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2L28 8.9282V22.7846L16 29.7128L4 22.7846V8.9282L16 2Z"
            :fill="isDark ? 'rgba(255,255,255,0.15)' : 'var(--color-primary)'"
            :fill-opacity="isDark ? '1' : '0.15'"
            :stroke="isDark ? 'rgba(255,255,255,0.75)' : 'var(--color-primary)'"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M16 29.7128V15.8564M16 15.8564L28 8.92822M16 15.8564L4 8.92822"
            :stroke="isDark ? 'rgba(255,255,255,0.75)' : 'var(--color-primary)'"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <circle cx="16" cy="16" r="3" fill="var(--color-accent)" />
        </svg>
      </NuxtLink>

      <div class="navbar__right">
        <div class="navbar__links">
          <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="navbar__link">
            <Icon :name="link.icon" :size="16" aria-hidden="true" />
            {{ link.label }}
          </NuxtLink>
        </div>

        <span class="navbar__divider" aria-hidden="true"></span>

        <button
          class="navbar__icon-btn"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <Transition name="theme-icon" mode="out-in">
            <Icon v-if="!isDark" key="moon" name="lucide:moon" :size="18" aria-hidden="true" />
            <Icon v-else key="sun" name="lucide:sun" :size="18" aria-hidden="true" />
          </Transition>
        </button>

        <button
          ref="hamburger"
          class="navbar__icon-btn navbar__icon-btn--hamburger"
          :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isOpen"
          aria-controls="navbar-mobile-menu"
          @click="toggleMenu"
        >
          <Transition name="burger-icon" mode="out-in">
            <Icon v-if="!isOpen" key="menu" name="lucide:menu" :size="20" aria-hidden="true" />
            <Icon v-else key="x" name="lucide:x" :size="20" aria-hidden="true" />
          </Transition>
        </button>
      </div>
    </div>

    <Transition name="menu">
      <div v-if="isOpen" id="navbar-mobile-menu" class="navbar__mobile-menu">
        <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="navbar__mobile-link" @click="isOpen = false">
          <Icon :name="link.icon" :size="16" aria-hidden="true" />
          {{ link.label }}
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>

/* NAVBAR */

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg-page);
  border-bottom: 1px solid var(--border);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--space-4);
  height: 64px;
}

@media (min-width: 640px) {
  .navbar__inner {
    padding-inline: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .navbar__inner {
    padding-inline: var(--space-12);
  }
}

.navbar__logo svg {
  display: block;
}

.navbar__right {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.navbar__links {
  display: none;
}

.navbar__divider {
  display: none;
  width: 1px;
  height: 20px;
  background-color: var(--border);
}

.navbar__link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    background-color: var(--bg-section-alt);
    color: var(--color-accent);
  }

  &.router-link-active {
    color: var(--color-accent);
    background-color: var(--bg-section-alt);
  }
}

.navbar__icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: var(--text-secondary);
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background-color: var(--bg-section-alt);
    color: var(--color-accent);
  }
}

/* MENU MOBILE */

.navbar__mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-4) var(--space-4);
  background-color: var(--bg-page);
  border-bottom: 1px solid var(--border);
}

.navbar__mobile-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--text-primary);
  padding: var(--space-3) var(--space-4);
  border-radius: 8px;
  transition: background-color 0.2s;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }

  &:hover {
    background-color: var(--bg-section-alt);
  }

  &.router-link-active {
    color: var(--color-accent);
  }
}

/* TRANSIZIONI */

.burger-icon-enter-active,
.burger-icon-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.burger-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg);
}

.burger-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg);
}

.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-180deg) scale(0.5);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(180deg) scale(0.5);
}

.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}


/* DESKTOP */

@media (min-width: 768px) {
  .navbar__links {
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }

  .navbar__divider {
    display: block;
    margin-inline: var(--space-2);
  }

  .navbar__icon-btn--hamburger {
    display: none;
  }
}
</style>
