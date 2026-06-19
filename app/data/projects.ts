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
    featured: true,
    liveUrl:   "https://gym-starter-psi.vercel.app",
    githubUrl: "https://github.com/CrescenzoSorrentino/gym-starter",
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
    featured: true,
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

  // Grocery List
  {
    image: "/projects/grocerylist.png",
    tags: ["Nuxt.js"],
    title: "Grocery List",
    description:
      "Simple and fast grocery list app. Add, check off, and remove items on the fly, with data persisted in the browser's local storage.",
    to: "/projects/grocerylist",
    slug: "grocerylist",
    year: 2026,
    longDescription:
      "A lightweight grocery list app built with Nuxt.js. The goal was to create a frictionless tool that anyone can open on their phone and use immediately: no account, no loading screen, no friction.",
    highlights: [
      "Instant add, check off, and delete with no page reloads",
      "Data persisted in localStorage, survives page refresh",
      "Fully responsive, optimized for one-handed mobile use",
    ],
    featured: false,
    liveUrl:   "https://grocerylist-ten.vercel.app",
    githubUrl: "https://github.com/CrescenzoSorrentino/grocerylist",
  },

]