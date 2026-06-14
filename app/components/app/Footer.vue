<template>
  <footer class="footer">
    <div class="footer__inner">
      <!-- PITCH -->
      <div class="footer__pitch">
        <h2 class="footer__pitch-title">{{ cta.title }}</h2>
        <p class="footer__pitch-text">{{ cta.text }}</p>
        <BaseButton to="/contact" size="lg">{{ cta.label }}</BaseButton>
      </div>

      <!-- SITEMAP -->
      <div class="footer__sitemap">
        <!-- BRAND -->
        <div class="footer__brand">
          <NuxtLink to="/" aria-label="Home" class="footer__logo">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2L28 8.9282V22.7846L16 29.7128L4 22.7846V8.9282L16 2Z"
                fill="rgba(255,255,255,0.15)"
                stroke="rgba(255,255,255,0.75)"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M16 29.7128V15.8564M16 15.8564L28 8.92822M16 15.8564L4 8.92822"
                stroke="rgba(255,255,255,0.75)"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <circle cx="16" cy="16" r="3" fill="var(--color-accent)" />
            </svg>
          </NuxtLink>
          <p class="footer__description">
            Fast, modern websites and web apps, built with Nuxt.js to turn
            visitors into customers.
          </p>
        </div>

        <!-- NAVIGATION -->
        <div class="footer__col">
          <span class="footer__col-title">Navigation</span>
          <nav>
            <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="footer__link">
              <Icon :name="link.icon" :size="14" aria-hidden="true" />
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- LOCAL -->
        <div class="footer__col">
          <span class="footer__col-title">Local</span>
          <nav>
            <NuxtLink v-for="link in localLinks" :key="link.to" :to="link.to" class="footer__link">
              <Icon :name="link.icon" :size="14" aria-hidden="true" />
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- SOCIAL -->
        <div class="footer__col">
          <span class="footer__col-title">Social</span>
          <div class="footer__social-links">
            <a
              href="https://github.com/CrescenzoSorrentino"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/crescenzo-sorrentino"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      <!-- COPYRIGHT -->
      <div class="footer__copyright">
        <p>&copy; {{ new Date().getFullYear() }} Crescenzo Sorrentino</p>
        <nav class="footer__copyright-legal">
          <NuxtLink v-for="link in legalLinks" :key="link.to" :to="link.to" class="footer__link">
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const cta = useFooterCta()

const navLinks = [
  { to: "/projects", label: "Projects", icon: "lucide:folder-open" },
  { to: "/blog",     label: "Blog",     icon: "lucide:book-open" },
  { to: "/contact",  label: "Contact",  icon: "lucide:mail" },
]

const localLinks = [
  { to: "/realizzazione-siti-web-napoli", label: "Services in Naples", icon: "lucide:map-pin" },
  { to: "/realizzazione-siti-web-torre-del-greco", label: "Services in Torre del Greco", icon: "lucide:map-pin" },
  { to: "/realizzazione-siti-web-ercolano", label: "Services in Ercolano", icon: "lucide:map-pin" },
  { to: "/realizzazione-siti-web-portici", label: "Services in Portici", icon: "lucide:map-pin" },
]

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy", icon: "lucide:shield" },
  { to: "/cookie-policy",  label: "Cookie Policy",  icon: "lucide:cookie" },
]
</script>

<style scoped>

/* BASE */

.footer {
  background-color: var(--footer-bg);
  color: rgba(255, 255, 255, 0.75);
}

.footer__inner {
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--space-4);
}

@media (min-width: 640px) {
  .footer__inner {
    padding-inline: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .footer__inner {
    padding-inline: var(--space-12);
  }
}

/* PITCH */

.footer__pitch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  padding-block: var(--space-16);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.footer__pitch-title {
  font-family: var(--font-headings);
  font-size: var(--text-3xl);
  font-weight: 600;
  line-height: 1.15;
  color: #fff;
}

@media (min-width: 768px) {
  .footer__pitch-title {
    font-size: var(--text-4xl);
  }
}

.footer__pitch-text {
  max-width: 48ch;
  font-size: var(--text-md);
  opacity: 0.75;
}

/* SITEMAP */

.footer__sitemap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8) var(--space-6);
  padding-block: var(--space-12);
}

@media (min-width: 768px) {
  .footer__sitemap {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: var(--space-8);
  }
}

@media (min-width: 1024px) {
  .footer__sitemap {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

/* BRAND */

.footer__brand {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .footer__brand {
    grid-column: auto;
  }
}

.footer__logo svg {
  display: block;
}

.footer__description {
  max-width: 28ch;
  font-size: var(--text-sm);
  line-height: 1.6;
  opacity: 0.65;
}

/* COLONNE */

.footer__col {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__col-title {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.footer__col nav,
.footer__social-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer__link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.65);
  transition: color 0.2s;

  &:hover {
    color: var(--color-accent);
  }
}

/* COPYRIGHT */

.footer__copyright {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
  padding-block: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer__copyright-legal {
  display: flex;
  gap: 0;

  .footer__link {
    gap: 0;
  }

  .footer__link:not(:first-child)::before {
    content: "|";
    padding-inline: var(--space-3);
    color: rgba(255, 255, 255, 0.2);
    pointer-events: none;
  }
}
</style>
