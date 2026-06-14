// Testi localizzati del footer: CTA finale (titolo, paragrafo, etichetta del
// pulsante) più la descrizione del brand sotto il logo.
export interface FooterCta {
  title:       string
  text:        string
  label:       string
  description: string
}

// Due varianti linguistiche: Footer.vue sceglie quella giusta in base a useLocale().
// footerCtaEn è il default del sito, footerCtaIt viene usata sulle pagine in italiano.
export const footerCtaEn: FooterCta = {
  title:       "Let's work together",
  text:        "Have a project in mind? I'm available for freelance work and open to new opportunities.",
  label:       "Get in touch",
  description: "Fast, modern websites and web apps, built with Nuxt.js to turn visitors into customers.",
}

export const footerCtaIt: FooterCta = {
  title:       "Lavoriamo insieme",
  text:        "Hai un progetto in mente? Sono disponibile per lavori freelance e aperto a nuove opportunità.",
  label:       "Contattami",
  description: "Siti web e web app veloci e moderni, costruiti con Nuxt.js per trasformare i visitatori in clienti.",
}
