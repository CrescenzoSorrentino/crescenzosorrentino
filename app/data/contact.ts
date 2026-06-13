// Indirizzo email centralizzato: usato sia nei dati sottostanti che nel ContactForm.
export const EMAIL = "crescenzo.sorrentino@icloud.com"

// Regex email centralizzata: usata sia dal ContactForm (client) che dall'endpoint
// /api/contact (server), così non si rischia di aggiornarne una copia e non l'altra.
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Limiti di lunghezza dei campi: validati lato client per UX e ripetuti lato server
// per evitare che payload enormi finiscano a Resend (costi + abuso).
export const FIELD_LIMITS = {
  name:    100,
  email:   200,
  message: 5000,
} as const


export interface ContactItem {
  label:     string
  value:     string
  href?:     string
  external?: boolean
}


// L'ordine rispecchia la disposizione visiva su mobile.
// Su desktop il CSS grid riposiziona gli elementi via grid-column/grid-row.
export const CONTACT_INFO: ContactItem[] = [
  { label: "Email",         value: EMAIL,                             href: `mailto:${EMAIL}` },
  { label: "Phone",         value: "+39 324 130 1276",                href: "tel:+393241301276" },
  { label: "LinkedIn",      value: "crescenzo-sorrentino",            href: "https://linkedin.com/in/crescenzo-sorrentino", external: true },
  { label: "Location",      value: "Naples, Italy · Remote worldwide" },
  { label: "Working hours", value: "Mon–Fri, 9:00–18:00 CET" },
]
