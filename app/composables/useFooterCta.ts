import { footerCtaEn, type FooterCta } from "~/data/footer"

export function useFooterCta() {
  return useState<FooterCta>("footerCta", () => footerCtaEn)
}
