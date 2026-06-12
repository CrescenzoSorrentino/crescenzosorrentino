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
  // resendApiKey e contactToEmail arrivano da runtimeConfig, popolato a runtime dalle
  // env var NUXT_RESEND_API_KEY e NUXT_CONTACT_TO_EMAIL (locale via .env, prod su Vercel).
  const { resendApiKey, contactToEmail } = useRuntimeConfig(event)

  if (!resendApiKey) {
    throw createError({ statusCode: 500, statusMessage: "Email service not configured" })
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
