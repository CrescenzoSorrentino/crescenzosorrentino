// Struttura di un singolo progetto.
// I campi coincidono con le props di Card.vue e vengono usati sia in homepage che in /projects.
export interface Project {
  image:           string
  tags:            string[]
  title:           string
  description:     string
  to:              string
  category:        "Websites" | "Web Apps"
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
    category: "Websites",
    slug: "photographer-starter",
    year: 2026,
    longDescription:
      "The project was born from the need for a reusable template for professional photographers, with a design that showcases the client's visual work without getting in the way.\n\nThe architecture is built on Nuxt 4 with a dynamic configuration system: every aspect of the site, from colors and fonts to copy and event listings, is controlled by Vercel environment variables. This makes it possible to deploy the same template for different clients in minutes, without touching the code.\n\nThe site consists of two pages: a home with a full-screen video hero and an adaptive event grid (portrait/landscape), and an event detail page with a photo gallery. On mobile, the video is replaced by a static image to ensure compatibility across all devices. Every section animates on scroll via a custom Vue directive with progressive stagger.",
    highlights: [
      "Nuxt 4 + Vue 3 + TypeScript",
      "Configurazione 100% via Vercel env vars (colori, font, brand, eventi, gallerie)",
      "Hero video con fallback poster su mobile",
      "Griglia adattiva portrait/landscape con rilevamento automatico orientamento",
      "Animazioni scroll-based con IntersectionObserver e stagger",
      "Design system completo via CSS custom properties",
      "Mobile-first, ottimizzato per performance",
    ],
    featured: true,
    liveUrl:   "https://photographer-starter.vercel.app",
    githubUrl: "https://github.com/CrescenzoSorrentino/photographer-starter",
  },

  // Gym Template
  {
    image: "/projects/template-gym.png",
    tags: ["Nuxt.js"],
    title: "Gym Template",
    description:
      "Clean and modern website template for a fitness gym. Includes schedule, classes, FAQ, and a contact section, designed to convert visitors into members.",
    to: "/projects/template-gym",
    category: "Websites",
    slug: "template-gym",
    year: 2026,
    longDescription:
      "A ready-to-use website template built for fitness gyms. It covers everything a gym's web presence needs: weekly schedule, class offerings with instructors and times, an FAQ that handles the most common objections, and a contact section with phone, WhatsApp, and address. The layout is clean, fast, and focused on converting visitors into trial members.",
    highlights: [
      "Weekly schedule and class timetable with instructor details",
      "FAQ section covering sign-up, payments, and facilities",
      "Contact section with phone, WhatsApp link, and address",
    ],
    featured: true,
    liveUrl:   "https://template-gym-one.vercel.app",
    githubUrl: "https://github.com/CrescenzoSorrentino/template-gym",
  },

  // Portfolio personale
  {
    image: "/projects/crescenzosorrentino.png",
    tags: ["Nuxt.js"],
    title: "crescenzosorrentino.com",
    description:
      "Personal portfolio built from scratch with Nuxt.js. Focused on performance, accessibility, and clean design, achieving top Lighthouse scores across all metrics.",
    to: "/projects/crescenzosorrentino",
    category: "Websites",
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
    featured: true,
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
    category: "Web Apps",
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


// Categorie nell'ordine in cui appaiono nella pagina /projects.
export const categories = ["Websites", "Web Apps"] as const
