import { footerCtaEn } from "~/data/footer"

// Reset della CTA del footer a ogni cambio rotta: il default torna sempre inglese.
// Le pagine in italiano la reimpostano su footerCtaIt nel proprio setup, che gira DOPO il middleware.
// Così una pagina IT uscente non può più sovrascrivere quella entrante nelle navigazioni IT -> IT
// (es. dall'hub dei settori a una landing verticale, o da un vertical alla pagina madre).
export default defineNuxtRouteMiddleware(() => {
  useFooterCta().value = footerCtaEn
})
