// Validazione del contact form condivisa tra client (ContactForm) e server (/api/contact).
// Vive in shared/ perché è l'unico codice che attraversa il confine app/server: un'unica
// fonte di verità, così non si rischia di aggiornarne una copia e non l'altra. Importabile
// da entrambi i lati con l'alias #shared/contact.

// Regex email centralizzata.
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Limiti di lunghezza dei campi: validati lato client per UX e ripetuti lato server
// per evitare che payload enormi finiscano a Resend (costi + abuso).
export const FIELD_LIMITS = {
  name:    100,
  email:   200,
  message: 5000,
} as const
