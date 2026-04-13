export const faq = [
  {
    q: "How much does it cost to build a website in Next.js?",
    a: "Pricing depends on scope. A focused landing page typically ranges from €800 to €2,500, while a full web application starts from €4,000. Every project begins with a free consultation to define requirements and give you an accurate, no-surprise quote.",
  },
  {
    q: "What is the difference between a WordPress site and a Next.js site?",
    a: "WordPress is a PHP-based CMS: quick to set up but limited in performance and flexibility. Next.js gives you full control over code, speed, and architecture. If your business depends on conversions, load time, and custom interactions, Next.js consistently outperforms WordPress on every measurable metric.",
  },
  {
    q: "How long does it take to build a landing page?",
    a: "A focused landing page (one goal, one audience) takes 1 to 2 weeks from kickoff to delivery. A multi-page site or web application takes 3 to 8 weeks depending on complexity. Every timeline starts with a clear brief.",
  },
  {
    q: "What are Core Web Vitals and why do they matter for my business?",
    a: "Core Web Vitals are Google's metrics for measuring real user experience: load speed (LCP), interactivity (INP), and visual stability (CLS). Sites that score well rank higher on Google and convert better. Users are 24% less likely to abandon a page that loads in under 2 seconds. Every project I deliver is optimized to pass Core Web Vitals.",
  },
  {
    q: "Do I need a designer before hiring a frontend developer?",
    a: "Not necessarily. If you already have a Figma file or brand guidelines, I translate them directly into production code. If you're starting from scratch, I can work from a mood board or reference sites and handle both the visual direction and the implementation.",
  },
  {
    q: "When does it make sense to hire a freelance developer instead of an agency?",
    a: "A freelance developer is the right choice when you need speed, direct communication, and lean costs: no account managers, no overhead. You work directly with the person writing your code. Agencies are better when you need a large coordinated team or a very wide scope all under one roof.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const progetti = [
  {
    title: "crescenzosorrentino.com",
    slug: "crescenzosorrentino",
    description:
      "Personal portfolio and blog built from scratch. Focused on performance, accessibility, and clean design — achieving top Lighthouse scores across all metrics.",
    longDescription:
      "Built from scratch with Next.js App Router and CSS Modules. Every decision — from typography to component structure — was made with performance and accessibility as primary constraints. No UI libraries, no unnecessary dependencies: just clean, handwritten code optimized for the web.",
    image: "/projects/crescenzosorrentino.png",
    tags: ["Next.js", "CSS Modules"],
    href: "/projects/crescenzosorrentino",
    category: "Websites",
    year: "2026",
    liveUrl: "https://crescenzosorrentino.com",
    githubUrl: "https://github.com/CrescenzoSorrentino/crescenzosorrentino",
    highlights: [
      "Lighthouse 100/100 on Accessibility, Best Practices, and SEO — 99 Performance on desktop, 95 on mobile",
      "Fully static — all pages prerendered at build time with zero runtime data fetching",
      "Dark mode with no-flash script — theme applied before React hydrates, no visible flicker",
      "Auto-generated sitemap and structured data (Person, WebSite, FAQPage schemas)",
      "No UI libraries — every component handwritten with CSS Modules",
    ],
  },
];

export const servizi = [
  {
    title: "Next.js Development",
    description:
      "Scalable, maintainable Next.js applications, from a single interactive widget to a full web application.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Landing Pages & Conversion",
    description:
      "Pages built to convert. Every layout decision, copy placement, and CTA is designed to move visitors to action.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
  },
  {
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect translation of Figma designs into production code, with smooth animations and accessible markup.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Performance & Core Web Vitals",
    description:
      "Fast load times, optimized images, and clean scores on Lighthouse, because slow sites lose customers.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];
