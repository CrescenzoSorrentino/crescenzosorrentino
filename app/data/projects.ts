// Struttura di un singolo progetto.
// I campi coincidono con le props di Card.vue e vengono usati sia in homepage che in /projects.
export interface Project {
  image:           string
  tags:            string[]
  title:           string
  description:     string
  to:              string
  slug:            string
  year:            number
  longDescription: string
  highlights:      string[]
  featured:        boolean
  liveUrl?:        string
  githubUrl?:      string
}


// Lista completa dei progetti.
// L'ordine determina la sequenza nella pagina /projects.
// Imposta featured: true per far apparire un progetto anche in homepage.
export const projects: Project[] = [

  // Photographer Starter
  {
    image: "/projects/photographer-starter.png",
    tags: ["Nuxt.js"],
    title: "Photographer Starter",
    description:
      "Reusable portfolio template for professional photographers built on Nuxt 4. Dark, minimal design, fully customizable per client via Vercel environment variables: zero code changes to update colors, fonts, copy, video, and galleries.",
    to: "/projects/photographer-starter",
    slug: "photographer-starter",
    year: 2026,
    longDescription:
      "Photographer Starter is a reusable website template for professional photographers, designed to showcase visual work without getting in the way. The goal was a dark, minimal layout that puts the client's imagery first, while being completely redeployable for different clients without touching the source code.\n\nAll site content, including colors, fonts, copy, video, event listings, and galleries, is configurable via NUXT_PUBLIC_* environment variables. On Vercel, setting variables in the project panel is enough to fully rebrand the site on the next deploy. Colors are applied as CSS custom properties, making the theme switchable without any rebuild.\n\nThe project is built on Nuxt 4 with file-based routing, shared layouts, and auto-import. It includes two pages: a homepage with a full-screen video hero and an adaptive event grid (portrait/landscape), and an event detail page with a photo gallery. On mobile, the video is replaced by a static image for compatibility. Every section animates on scroll via a custom Vue directive with progressive stagger.\n\nIt's designed as a commercial starting point: a photographer or studio can purchase the template and configure it entirely from the Vercel dashboard, without needing a developer for content or branding updates.",
    highlights: [
      "Multi-page template (Home, Event Detail) with shared Nuxt layout",
      "100% configurable content via NUXT_PUBLIC_* environment variables: no code changes needed",
      "Full-screen video hero with static image fallback on mobile",
      "Adaptive event grid with automatic portrait/landscape detection",
      "Scroll animations via IntersectionObserver with progressive stagger",
      "CSS custom properties design system: fully rebrandable per client",
      "One-click deploy on Vercel with Nuxt auto-detection",
    ],
    featured: true,
    liveUrl:   "https://photographer-starter.vercel.app",
    githubUrl: "https://github.com/CrescenzoSorrentino/photographer-starter",
  },

  // Gym Starter
  {
    image: "/projects/gym-starter.png",
    tags: ["Nuxt.js"],
    title: "Gym Starter",
    description:
      "Website template for gyms, dark-themed and fully configurable via Vercel environment variables: zero code changes needed to customize content, colors, and images.",
    to: "/projects/gym-starter",
    slug: "gym-starter",
    year: 2026,
    longDescription:
      "GymStarter is a modern website template for gyms, designed for a young urban audience. The goal was to build something visually strong, dark layout, impactful typography, yellow and red accent palette, while being completely reusable by anyone without touching the source code.\n\nAll site content, including text, images, colors, contacts, hours, statistics, and team, is configurable via NUXT_PUBLIC_* environment variables. On Vercel, just set the variables in the project panel and the site updates on the next deploy. Colors are injected as CSS custom properties at runtime by a client-side plugin, making the theme dynamic without any rebuild.\n\nThe project is built on Nuxt 4 with file-based routing, shared layouts, and auto-import. Pages cover Home, About, and Contact. Styling is entirely Vanilla CSS with design tokens, no UI framework: mobile-first and responsive. Icons come from @nuxt/icon with Heroicons and MDI sets.\n\nIt's designed as a commercial starting point: a client can purchase the template and customize it directly from Vercel, without needing a developer for content updates.",
    highlights: [
      "Multi-page template (Home, About, Contact) with shared Nuxt layout",
      "100% configurable content via NUXT_PUBLIC_* environment variables: no code changes needed",
      "Dynamic theming: colors injected at runtime as CSS custom properties via client-side plugin",
      "Dark theme design with Impact + Inter typography and customizable accent palette",
      "Vanilla CSS with design tokens: zero dependencies on UI frameworks like Tailwind or Bootstrap",
      "One-click deploy on Vercel with Nuxt auto-detection",
      "Modular and scalable component structure: mobile navbar, footer, reusable hero, base button",
    ],
    featured: false,
    liveUrl:   "https://gym-starter-psi.vercel.app",
    githubUrl: "https://github.com/CrescenzoSorrentino/gym-starter",
  },

  // Nuxt Contact Hub
  {
    image: "/projects/nuxt-contact-hub.svg",
    tags: ["Nuxt.js"],
    title: "Nuxt Contact Hub",
    description:
      "Full-stack lead-management app for Nuxt 4: every contact submission is saved to a Supabase database and surfaced in a password-protected admin area, with optional email delivery via Resend.",
    to: "/projects/nuxt-contact-hub",
    slug: "nuxt-contact-hub",
    year: 2026,
    longDescription:
      "Nuxt Contact Hub is a complete example app that extends the Nuxt Contact Form component into a full lead-management workflow: form, persistence, and a protected admin area. Where the form is a reusable component you drop into any project, the hub shows one way to build on top of it.\n\nEvery submission flows through the same shared client/server validation, then gets persisted to a Supabase (Postgres) leads table with an auto-generated id and created_at timestamp. Row Level Security is enabled with no policies, so the table is reachable only with the server-side service_role key, never from the browser. If Resend is configured the endpoint also emails the message; if not, it simply saves the lead and skips email, so the app works with or without an email provider.\n\nThe admin area at /admin is protected by a single-password login built on nuxt-auth-utils, with a sealed session cookie. Once authenticated, it lists every lead most-recent-first with a one-click mailto: reply. Spam is handled with a honeypot field and abuse is contained with Upstash Redis rate limiting, both inherited from the contact form. All secrets live in environment variables: nothing sensitive is committed.",
    highlights: [
      "Full-stack lead workflow: contact form, database persistence, and protected admin",
      "Submissions saved to Supabase (Postgres) with Row Level Security and server-only service_role key",
      "Password-protected /admin area via nuxt-auth-utils with a sealed session cookie",
      "Leads list, most-recent-first, with one-click mailto: reply",
      "Optional email via Resend: saves the lead with or without an email provider configured",
      "Reuses Nuxt Contact Form: shared validation, honeypot, and Upstash rate limiting",
    ],
    featured: true,
    githubUrl: "https://github.com/CrescenzoSorrentino/nuxt-contact-hub",
  },

  // Nuxt Contact Form
  {
    image: "/projects/nuxt-contact-form.svg",
    tags: ["Nuxt.js"],
    title: "Nuxt Contact Form",
    description:
      "Production-ready, drop-in contact form for Nuxt 3/4 with built-in validation, honeypot spam protection, IP rate limiting, and email delivery via Resend.",
    to: "/projects/nuxt-contact-form",
    slug: "nuxt-contact-form",
    year: 2026,
    longDescription:
      "Nuxt Contact Form is a production-ready contact form solution for Nuxt 3 and Nuxt 4 applications. Rather than an npm package, it's a copy-paste implementation: you drop the files into your project, install the dependencies, set a few environment variables, and you have a fully working, secure contact form.\n\nValidation logic is shared between client and server, so the same rules run in the browser for instant real-time feedback and on the server as the source of truth. Spam is handled with a honeypot field, and abuse is contained with Upstash Redis rate limiting at 5 requests per hour per IP, failing gracefully when the limit is hit. Emails are delivered through Resend, with HTML-escaped bodies to prevent injection and reply-to support so you can answer directly.\n\nThe form is fully accessible, with ARIA labels, linked fields, and live status messages, and it's themeable through CSS custom properties without touching the markup. Field limits, the email regex, rate limits, and styling are all configurable.",
    highlights: [
      "Drop-in contact form for Nuxt 3/4: copy the files, set env vars, done",
      "Validation logic shared between client and server, with real-time feedback",
      "Honeypot anti-spam plus Upstash Redis rate limiting (5 req/hour per IP) with graceful failure",
      "Email delivery via Resend, HTML-escaped bodies, and reply-to support",
      "Fully accessible: ARIA labels, linked fields, and live status messages",
      "CSS custom properties theming and configurable field limits, regex, and rate limits",
    ],
    featured: false,
    githubUrl: "https://github.com/CrescenzoSorrentino/nuxt-contact-form",
  },

  // Portfolio personale
  {
    image: "/projects/crescenzosorrentino.png",
    tags: ["Nuxt.js"],
    title: "crescenzosorrentino.com",
    description:
      "Personal portfolio built from scratch with Nuxt.js. Focused on performance, accessibility, and clean design, achieving top Lighthouse scores across all metrics.",
    to: "/projects/crescenzosorrentino",
    slug: "crescenzosorrentino",
    year: 2026,
    longDescription:
      "My personal portfolio, designed and built from scratch with Nuxt 4. No external UI libraries: every component is handwritten with scoped CSS and custom properties. The theming system handles light and dark mode via a data-theme attribute on the root element, with an inline script to eliminate flash on load. SEO is treated as a first-class concern: every page has JSON-LD structured data, canonical URLs, Open Graph, and Twitter Card meta.",
    highlights: [
      "100/100 Lighthouse scores across Performance, Accessibility, Best Practices, and SEO",
      "Zero external UI dependencies: Avatar, Button, and Card components built from scratch",
      "Dark mode via CSS custom properties and data-theme on the root, no flash on load",
      "Schema.org structured data on every page: Person, BlogPosting, BreadcrumbList, CreativeWork",
      "Blog powered by Nuxt Content v3 with MDC: articles are Markdown files, no CMS or database",
    ],
    featured: false,
    liveUrl:   "https://crescenzosorrentino.com",
    githubUrl: "https://github.com/CrescenzoSorrentino/crescenzosorrentino.com",
  },

  // Wordpace
  {
    image: "/projects/wordpace.svg",
    tags: ["Nuxt.js"],
    title: "Wordpace",
    description:
      "An endless, time-pressured five-letter word game that doubles as vocabulary practice: answers are graded by CEFR level from a pool that widens as you climb, every word is explained with spoken pronunciation, and the ones you get wrong come back on their own. A monthly global leaderboard runs on Upstash Redis.",
    to: "/projects/wordpace",
    slug: "wordpace",
    year: 2026,
    longDescription:
      "Wordpace reworks the familiar five-letter guessing game into an endless run against the clock. You guess the hidden word in six tries; solving one advances a level, banks points, and hands you a fresh word. Every level runs on a countdown that starts at five minutes and hands out 8% less than the one before, and time left over carries into the next level, so solving fast is worth more than the points alone. Each guess refunds time for the useful letters it reveals, but only the first time you discover each one, and when you get stuck you can spend points on hints that reveal part of the word or burn one of three per-run skips at an escalating price. The run ends when you run out of guesses or time, and a top-ten score for the current month earns a spot on the leaderboard.\n\nWhat makes it more than a Wordle clone is that it teaches while you play. Every answer is graded by the CEFR level at which a learner is expected to know it, and the answers come from a pool that widens as you climb: A1 to A2 at the start, then B1, B2, and C1 to C2 unlocking at higher levels, so the level you reach is a rough read on your own English. After each word it's explained with part of speech, spoken IPA pronunciation, its CEFR level, a definition written in deliberately simpler words, and an example sentence. And because a word met once is a word lost, one answer in four is a spaced review drawn from the last twenty words you've seen, weighted so the ones you got wrong return more often than the ones you got right. Your best level, best score, and the number of distinct words you've met are kept in the browser and shown on the home page, and a finished run can be shared as four CEFR-band squares.\n\nA second board, the Vault, opens at any time: a ladder of four hidden words, one per CEFR band you've unlocked, cracked using words you've already solved in the run rather than typed cold, with the run clock still ticking. Under the hood, the pure game rules, evaluating a guess, validating a word, and the timer formula, live in a shared module reused on the client for instant feedback and re-run on the server as the source of truth. The 440 KB dictionary and the CEFR grades never reach the browser, served one entry at a time from a server route; the leaderboard is a per-month Upstash Redis sorted set that resets on its own; and every finished run logs a single line so the game can be tuned on real data instead of one player's impressions. Built on Nuxt 4 and Vue 3 with script setup and vanilla scoped CSS in BEM, no UI framework.",
    highlights: [
      "Endless run against an exponential-decay countdown, with leftover time carrying into the next level and time refunded only on a letter's first discovery",
      "Answers graded by CEFR level from a pool that widens as you climb (A1-A2, then B1, B2, C1-C2), so the level you reach reflects your own English",
      "Spaced review: one answer in four returns from your last twenty words, weighted so the ones you got wrong come back more often than the ones you got right",
      "Every word explained with part of speech, spoken IPA pronunciation, CEFR level, and a definition written in deliberately simpler words",
      "The Vault: a second board of four hidden words, one per unlocked CEFR band, cracked with words you already solved in the run",
      "Monthly global leaderboard on Upstash Redis, personal records in localStorage, and a run shareable as four CEFR-band squares",
      "Pure game rules in shared/ run on the client and re-validated on the server; the 440 KB dictionary and CEFR grades served one entry at a time, never shipped to the browser",
    ],
    featured: true,
    liveUrl:   "https://wordpace.vercel.app",
    githubUrl: "https://github.com/CrescenzoSorrentino/wordpace",
  },

]