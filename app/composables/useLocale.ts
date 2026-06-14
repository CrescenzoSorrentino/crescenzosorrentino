// Lingua della pagina corrente come stato condiviso (useState = SSR-safe e unico per richiesta).
// Il middleware globale locale.global.ts la resetta a "en" a ogni navigazione;
// le pagine in italiano la impostano a "it" nel proprio setup (eseguito dopo).
// Questo evita che una pagina IT uscente sovrascriva quella entrante (clobber su nav IT -> IT).
// Footer.vue ne deriva i testi localizzati. Vedi: middleware/locale.global.ts,
// components/app/VerticalLanding.vue, components/app/LocalLanding.vue, pages/blog/[slug].vue
export type Locale = "en" | "it"

export function useLocale() {
  return useState<Locale>("locale", () => "en")
}
