import { Resend } from "resend"
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import { EMAIL_RE, FIELD_LIMITS } from "#shared/contact"

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

// Rate limiting per IP: massimo RATE_LIMIT_MAX richieste nella finestra RATE_LIMIT_WINDOW.
// Lo stato vive su Upstash Redis, condiviso tra tutte le invocazioni serverless (la memoria
// locale del processo su Vercel non lo sarebbe). Usiamo una sliding window.
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = "1 h" as const

// Il client va creato una sola volta e riusato tra le richieste (lazy singleton),
// non a ogni invocazione. Le credenziali arrivano dal runtimeConfig.
let ratelimit: Ratelimit | null = null
function getRatelimit(url: string, token: string): Ratelimit {
  if (!ratelimit) {
    ratelimit = new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(RATE_LIMIT_MAX, RATE_LIMIT_WINDOW),
      prefix: "contact-ratelimit",
    })
  }
  return ratelimit
}

export default defineEventHandler(async (event) => {
  // resendApiKey e contactToEmail arrivano da runtimeConfig, popolato a runtime dalle
  // env var NUXT_RESEND_API_KEY e NUXT_CONTACT_TO_EMAIL (locale via .env, prod su Vercel).
  const { resendApiKey, contactToEmail, upstashRedisRestUrl, upstashRedisRestToken } =
    useRuntimeConfig(event)

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

  // Limiti di lunghezza: evitano che payload enormi finiscano a Resend (costi + abuso).
  if (
    name.length > FIELD_LIMITS.name ||
    email.length > FIELD_LIMITS.email ||
    message.length > FIELD_LIMITS.message
  ) {
    throw createError({ statusCode: 413, statusMessage: "Form data too large" })
  }

  // Rate limiting per IP. Se Upstash e' configurato, conta le richieste per IP nella
  // finestra; oltre la soglia rispondiamo 429. Se le credenziali mancano o Redis non
  // risponde, lasciamo passare (fail-open): meglio un form senza limite che un form rotto.
  if (upstashRedisRestUrl && upstashRedisRestToken) {
    const ip = getRequestIP(event, { xForwardedFor: true }) ?? "unknown"
    try {
      const { success } = await getRatelimit(upstashRedisRestUrl, upstashRedisRestToken).limit(ip)
      if (!success) {
        throw createError({ statusCode: 429, statusMessage: "Too many requests, please try again later" })
      }
    } catch (err) {
      // Rilancia il 429 voluto; ingoia solo gli errori di rete verso Redis.
      if (isError(err) && "statusCode" in err) throw err
      console.error("Rate limit check failed, allowing request:", err)
    }
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
