<script setup>
import { FolderOpen, Mail, Shield, Cookie } from "lucide-vue-next";
</script>

<template>
  <footer class="footer">
    <div class="inner">
      <!-- Pitch -->
      <div class="pitch">
        <h2 class="pitch-title">Let's work together</h2>
        <p class="pitch-text">
          Have a project in mind? I'm available for freelance work and open to
          new opportunities.
        </p>
        <Button to="/contact" size="lg">Get in touch</Button>
      </div>

      <!-- Sitemap -->
      <div class="sitemap">
        <!-- Brand -->
        <div class="brand">
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
          <p class="description">
            Building fast, polished Nuxt.js interfaces that turn visitors into
            customers.
          </p>
        </div>

        <!-- Navigation -->
        <div class="col">
          <span class="col-title">Navigation</span>
          <nav>
            <NuxtLink to="/projects" class="link">
              <FolderOpen :size="14" aria-hidden="true" />
              Projects
            </NuxtLink>
            <NuxtLink to="/contact" class="link">
              <Mail :size="14" aria-hidden="true" />
              Contact
            </NuxtLink>
          </nav>
        </div>

        <!-- Social -->
        <div class="col">
          <span class="col-title">Social</span>
          <div class="social-links">
            <a
              href="https://github.com/CrescenzoSorrentino"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
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
              class="link"
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

        <!-- Legal -->
        <div class="col">
          <span class="col-title">Legal</span>
          <nav>
            <NuxtLink to="/privacy-policy" class="link">
              <Shield :size="14" aria-hidden="true" />
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/cookie-policy" class="link">
              <Cookie :size="14" aria-hidden="true" />
              Cookie Policy
            </NuxtLink>
          </nav>
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        <p>&copy; 2026 Crescenzo Sorrentino</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--footer-bg);
  color: rgba(255, 255, 255, 0.75);
}

.inner {
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--space-4);
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

/* ── Pitch ── */

.pitch {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-4);
  padding-block: var(--space-16);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.pitch-title {
  font-family: var(--font-headings);
  font-size: var(--text-3xl);
  font-weight: 600;
  color: #fff;
  line-height: 1.15;
}

@media (min-width: 768px) {
  .pitch-title {
    font-size: var(--text-4xl);
  }
}

.pitch-text {
  font-size: var(--text-md);
  max-width: 48ch;
  opacity: 0.75;
}

/* ── Sitemap ── */

.sitemap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8) var(--space-6);
  padding-block: var(--space-12);
}

@media (min-width: 768px) {
  .sitemap {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: var(--space-8);
  }
}

/* Brand */

.brand {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .brand {
    grid-column: auto;
  }
}

.logo svg {
  display: block;
}

.description {
  font-size: var(--text-sm);
  line-height: 1.6;
  opacity: 0.65;
  max-width: 28ch;
}

/* Columns */

.col {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.col-title {
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.45);
}

.col nav,
.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.link {
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

/* ── Copyright ── */

.copyright {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-block: var(--space-6);

  p {
    font-size: var(--text-sm);
    opacity: 0.45;
  }
}
</style>
