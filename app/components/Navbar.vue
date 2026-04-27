<script setup>
import { Menu, X, FolderOpen, Mail, Moon, Sun } from "lucide-vue-next";

const isOpen = ref(false);
const isDark = ref(false);

onMounted(() => {
  isDark.value = document.documentElement.getAttribute("data-theme") === "dark";
});

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function toggleTheme() {
  isDark.value = !isDark.value;
  const theme = isDark.value ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
</script>

<template>
  <nav class="navbar">
    <div class="inner">
      <NuxtLink to="/" aria-label="Home" class="logo">
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

      <div class="right">
        <div class="links">
          <NuxtLink to="/projects" class="link">
            <FolderOpen :size="16" aria-hidden="true" />
            Projects
          </NuxtLink>
          <NuxtLink to="/contact" class="link">
            <Mail :size="16" aria-hidden="true" />
            Contact
          </NuxtLink>
        </div>

        <span class="divider" aria-hidden="true"></span>

        <button
          class="icon-btn"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <Transition name="theme-icon" mode="out-in">
            <Moon v-if="!isDark" key="moon" :size="18" aria-hidden="true" />
            <Sun v-else key="sun" :size="18" aria-hidden="true" />
          </Transition>
        </button>

        <button
          class="icon-btn hamburger"
          :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          @click="toggleMenu"
        >
          <Transition name="burger-icon" mode="out-in">
            <Menu v-if="!isOpen" key="menu" :size="20" aria-hidden="true" />
            <X v-else key="x" :size="20" aria-hidden="true" />
          </Transition>
        </button>
      </div>
    </div>

    <Transition name="menu">
      <div v-if="isOpen" class="mobile-menu">
        <NuxtLink to="/projects" class="mobile-link" @click="isOpen = false">
          <FolderOpen :size="16" aria-hidden="true" />
          Projects
        </NuxtLink>
        <NuxtLink to="/contact" class="mobile-link" @click="isOpen = false">
          <Mail :size="16" aria-hidden="true" />
          Contact
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg-page);
  border-bottom: 1px solid var(--border);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--space-4);
  height: 64px;
}

@media (min-width: 640px) {
  .inner {
    padding-inline: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .inner {
    padding-inline: var(--space-12);
  }
}

.logo svg {
  display: block;
}

.right {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.links {
  display: none;
}

.divider {
  display: none;
  width: 1px;
  height: 20px;
  background-color: var(--border);
}

.link {
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
}

.icon-btn {
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

/* Mobile menu */
.mobile-menu {
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

.mobile-link {
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
}

/* Burger icon transition */
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

/* Theme icon transition */
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

/* Menu transition */
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

/* Desktop */
@media (min-width: 768px) {
  .links {
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }

  .divider {
    display: block;
    margin-inline: var(--space-2);
  }

  .hamburger {
    display: none;
  }
}
</style>
