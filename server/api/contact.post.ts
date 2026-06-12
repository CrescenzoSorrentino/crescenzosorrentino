import { Resend } from "resend"

// Endpoint del form di contatto: valida i dati lato server, scarta i bot via honeypot
// e inoltra il messaggio via Resend. Il destinatario è sempre crescenzo.sorrentino@icloud.com,
// quindi non serve verificare un dominio: si usa il mittente di prova onboarding@resend.dev
// e si imposta reply-to sull'email del visitatore per poter rispondere con un clic.

interface ContactBody {
  name?: string
  email?: string
  message?: string
  // Campo trappola: invisibile agli umani, se valorizzato il mittente e' un bot.
  company?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  // Recupero robusto della chiave: prima da runtimeConfig (popolata via NUXT_RESEND_API_KEY),
  // poi fallback diretto a process.env accettando sia il nome con prefisso NUXT_ sia quello
  // senza. Cosi' funziona a prescindere da come e' nominata la variabile su Vercel.
  const resendApiKey =
    config.resendApiKey || process.env.NUXT_RESEND_API_KEY || process.env.RESEND_API_KEY
  const contactToEmail =
    config.contactToEmail || process.env.NUXT_CONTACT_TO_EMAIL || "crescenzo.sorrentino@icloud.com"

  if (!resendApiKey) {
    // DIAGNOSTICA TEMPORANEA: restituisce nella risposta i nomi delle env viste dalla
    // funzione (mai i valori), per capire se/come la chiave e' configurata su Vercel.
    // Da rimuovere una volta risolto.
    throw createError({
      statusCode: 500,
      statusMessage: "Email service not configured",
      data: {
        seenResendKeys: Object.keys(process.env).filter((k) => k.toUpperCase().includes("RESEND")),
        seenNuxtKeys: Object.keys(process.env).filter((k) => k.toUpperCase().startsWith("NUXT")),
      },
    })
  }

  const body = await readBody<ContactBody>(event)

  // Honeypot: i bot compilano tutti i campi, gli umani non vedono "company".
  // Rispondiamo 200 per non far capire al bot che e' stato scartato.
  if (body.company) {
    return { ok: true }
  }

  const name = body.name?.trim() ?? ""
  const email = body.email?.trim() ?? ""
  const message = body.message?.trim() ?? ""

  if (!name || !EMAIL_RE.test(email) || !message) {
    throw createError({ statusCode: 400, statusMessage: "Invalid form data" })
  }

  const resend = new Resend(resendApiKey)

  const { error } = await resend.emails.send({
    from: "Contact form <onboarding@resend.dev>",
    to: contactToEmail,
    replyTo: email,
    subject: `Project inquiry from ${name}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `,
  })

  if (error) {
    throw createError({ statusCode: 502, statusMessage: "Failed to send message" })
  }

  return { ok: true }
})

// Neutralizza l'HTML nei dati utente prima di inserirli nel corpo dell'email.
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
