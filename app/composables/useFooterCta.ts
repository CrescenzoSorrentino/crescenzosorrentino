import { footerCtaEn, type FooterCta } from "~/data/footer"

// Stato condiviso (useState = SSR-safe e unico per richiesta) che alimenta la CTA del footer.
// Il middleware globale footer-cta.global.ts lo resetta a footerCtaEn a ogni navigazione;
// le pagine in italiano lo sovrascrivono con footerCtaIt nel proprio setup (eseguito dopo).
// Questo evita che una pagina IT uscente sovrascriva quella entrante (clobber su nav IT -> IT).
// Vedi: middleware/footer-cta.global.ts, components/app/VerticalLanding.vue,
// pages/realizzazione-siti-web-napoli.vue, pages/blog/[slug].vue
export function useFooterCta() {
  return useState<FooterCta>("footerCta", () => footerCtaEn)
}
