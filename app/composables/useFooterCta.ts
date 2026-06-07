import { footerCtaEn, type FooterCta } from "~/data/footer"

// Stato condiviso (useState = SSR-safe e unico per richiesta) che alimenta la CTA del footer.
// Parte sempre dalla versione inglese; le pagine in italiano lo sovrascrivono con footerCtaIt
// e ripristinano footerCtaEn in onUnmounted quando si esce dalla pagina.
// Vedi: pages/realizzazione-siti-web-napoli.vue e pages/blog/[slug].vue
export function useFooterCta() {
  return useState<FooterCta>("footerCta", () => footerCtaEn)
}
