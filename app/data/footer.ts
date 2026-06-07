// Testi della CTA finale del footer (titolo, paragrafo, etichetta del pulsante).
export interface FooterCta {
  title: string
  text:  string
  label: string
}

// Due varianti linguistiche scambiate a runtime tramite useFooterCta():
// footerCtaEn è il default del sito, footerCtaIt viene attivata dalle pagine in italiano.
export const footerCtaEn: FooterCta = {
  title: "Let's work together",
  text:  "Have a project in mind? I'm available for freelance work and open to new opportunities.",
  label: "Get in touch",
}

export const footerCtaIt: FooterCta = {
  title: "Lavoriamo insieme",
  text:  "Hai un progetto in mente? Sono disponibile per lavori freelance e aperto a nuove opportunità.",
  label: "Contattami",
}
