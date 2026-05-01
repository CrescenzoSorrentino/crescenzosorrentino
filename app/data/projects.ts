// Forma di una singola card progetto. L'ordine dei campi rispecchia le props di Card.vue.
export interface Project {
  image: string
  tags: string[]
  title: string
  description: string
  to: string
  category: "Websites" | "Web Apps"
  slug: string
  year: number
  longDescription: string
  highlights: string[]
  liveUrl?: string
  githubUrl?: string
}

// Aggiungi un nuovo oggetto qui per aggiungere una card alla homepage e alla pagina progetti.
export const projects: Project[] = [
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
    liveUrl: "https://template-gym-one.vercel.app",
    githubUrl: "https://github.com/CrescenzoSorrentino/template-gym",
  },
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
    liveUrl: "https://grocerylist-ten.vercel.app",
    githubUrl: "https://github.com/CrescenzoSorrentino/grocerylist",
  },
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
      "My personal portfolio, designed and built from scratch with Nuxt.js. Every decision, from layout to typography to color, was made to communicate professionalism and trust to potential clients, while keeping the codebase lean and maintainable.",
    highlights: [
      "100/100 Lighthouse scores across Performance, Accessibility, Best Practices and SEO",
      "Zero dependencies for UI, every component built from scratch",
      "Fully responsive with a mobile-first approach",
    ],
    liveUrl: "https://crescenzosorrentino.com",
    githubUrl: "https://github.com/CrescenzoSorrentino/crescenzosorrentino.com",
  },
]

export const categories = ["Websites", "Web Apps"] as const
