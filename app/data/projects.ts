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
    category: "Websites",
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
