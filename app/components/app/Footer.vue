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
          <p class="footer__description">{{ cta.description }}</p>
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

        <!-- CONTACT -->
        <div class="footer__col footer__col--contact">
          <span class="footer__col-title">Contact</span>
          <nav>
            <a v-for="link in contactLinks" :key="link.href" :href="link.href" class="footer__link">
              <Icon :name="link.icon" :size="14" aria-hidden="true" />
              {{ link.label }}
            </a>
          </nav>
        </div>

        <!-- LOCAL -->
        <div class="footer__col footer__col--local">
          <span class="footer__col-title">Local</span>
          <nav>
            <NuxtLink v-for="link in localLinks" :key="link.to" :to="link.to" class="footer__link">
              <Icon :name="link.icon" :size="14" aria-hidden="true" />
              {{ link.label }}
            </NuxtLink>
          </nav>
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
        <nav class="footer__social" aria-label="Social">
          <a
            v-for="link in socialLinks"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.label"
            :title="link.label"
            class="footer__social-icon"
          >
            <Icon :name="link.icon" :size="18" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerCtaEn, footerCtaIt } from "~/data/footer"
import { EMAIL, PHONE, PHONE_TEL } from "~/data/contact"
import { navLinks } from "~/data/nav"

// I testi del footer seguono la lingua della pagina: useLocale() è impostato a "it"
// dalle pagine italiane (vedi composables/useLocale.ts), altrimenti resta "en".
const locale = useLocale()
const cta = computed(() => (locale.value === "it" ? footerCtaIt : footerCtaEn))

const contactLinks = [
  { href: `mailto:${EMAIL}`, label: EMAIL, icon: "lucide:mail" },
  { href: PHONE_TEL,         label: PHONE, icon: "lucide:phone" },
]

const localLinks = [
  { to: "/realizzazione-siti-web-napoli", label: "Services in Naples", icon: "lucide:map-pin" },
  { to: "/realizzazione-siti-web-torre-del-greco", label: "Services in Torre del Greco", icon: "lucide:map-pin" },
  { to: "/realizzazione-siti-web-ercolano", label: "Services in Ercolano", icon: "lucide:map-pin" },
  { to: "/realizzazione-siti-web-portici", label: "Services in Portici", icon: "lucide:map-pin" },
]

// Icone social nella barra in basso. I loghi di brand arrivano dal set `simple-icons`
// (via @nuxt/icon), diverso da `lucide` usato per le icone UI.
const socialLinks = [
  { href: "https://github.com/CrescenzoSorrentino", label: "GitHub", icon: "simple-icons:github" },
  { href: "https://linkedin.com/in/crescenzo-sorrentino", label: "LinkedIn", icon: "simple-icons:linkedin" },
  { href: "https://www.facebook.com/people/Crescenzo-Sorrentino/61592824216477/", label: "Facebook", icon: "simple-icons:facebook" },
  { href: "https://www.instagram.com/crescenzo.sorrentino", label: "Instagram", icon: "simple-icons:instagram" },
  { href: "https://www.tiktok.com/@crescenzo.sorrentino", label: "TikTok", icon: "simple-icons:tiktok" },
  { href: "https://www.youtube.com/@crescenzo.sorrentino", label: "YouTube", icon: "simple-icons:youtube" },
]

// Link legali nella lingua della pagina: sulle pagine IT puntano alle versioni
// italiane (collegate via hreflang), altrimenti restano le inglesi.
const legalLinks = computed(() =>
  locale.value === "it"
    ? [
        { to: "/informativa-privacy", label: "Privacy Policy", icon: "lucide:shield" },
        { to: "/informativa-cookie",  label: "Cookie Policy",  icon: "lucide:cookie" },
      ]
    : [
        { to: "/privacy-policy", label: "Privacy Policy", icon: "lucide:shield" },
        { to: "/cookie-policy",  label: "Cookie Policy",  icon: "lucide:cookie" },
      ]
)
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

/* Mobile: Brand a tutta larghezza (riga 1), Navigation + Contact affiancati (riga 2),
   Local a tutta larghezza (riga 3). */
.footer__sitemap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8) var(--space-6);
  padding-block: var(--space-12);
}

.footer__brand,
.footer__col--local {
  grid-column: 1 / -1;
}

/* Desktop: un'unica riga di quattro colonne uguali: Brand, Navigation, Contact, Local. */
@media (min-width: 768px) {
  .footer__sitemap {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-8);
  }

  .footer__brand,
  .footer__col--local {
    grid-column: auto;
  }
}

/* BRAND */

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
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

.footer__col nav {
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
  /* Stringhe lunghe senza spazi (es. l'email) vanno a capo invece di sforare la colonna */
  min-width: 0;
  overflow-wrap: anywhere;

  &:hover {
    color: var(--color-accent);
  }

  /* Evita che il flex comprima l'icona quando l'etichetta va a capo */
  & > :first-child {
    flex-shrink: 0;
  }
}

/* COPYRIGHT */

/* Mobile: le tre parti (copyright, legale, social) impilate e centrate. */
.footer__copyright {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  padding-block: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.5);
  }

  /* Desktop: copyright a sinistra, legale al centro, social a destra.
     La griglia 1fr auto 1fr centra DAVVERO il blocco legale, a prescindere
     dalla larghezza diversa di copyright e social (con space-between si sposterebbe). */
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;

    & > p {
      justify-self: start;
    }

    .footer__copyright-legal {
      justify-self: center;
    }

    .footer__social {
      justify-self: end;
    }
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

.footer__social {
  display: flex;
  gap: var(--space-4);
}

.footer__social-icon {
  display: inline-flex;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.2s;

  &:hover {
    color: var(--color-accent);
  }
}
</style>
