<template>
  <main>
    <AppHeroSection
      title="Crescenzo Sorrentino"
      subtitle="Freelance Nuxt.js developer. I build fast websites and web apps that turn your visitors into customers."
      :primary-cta="{ label: 'Get a free quote', to: '/contact' }"
      :secondary-cta="{ label: 'View my work', to: '/projects' }"
    />

    <AppAboutSection
      title="A website that works as hard as you do"
      :paragraphs="[
        'I\'m a freelance developer working with Nuxt.js, a modern tool for building fast, reliable websites. I help startups, small businesses, and professionals who know that a great website is not a nice-to-have. It is what brings in customers.',
        'When you work with me, you talk directly to the person who designs, builds, and delivers your site. No middlemen, no surprises on the invoice, and support that continues after launch.',
      ]"
      :cta="{ label: 'Let\'s talk about your project', to: '/contact' }"
      alt
    />

    <!-- PROJECTS -->
    <section class="section">
      <div class="container">
        <div class="projects__head">
          <h2>Selected Work</h2>
          <p>A few projects that show what I can do for your business.</p>
        </div>
        <div class="projects__grid">
          <div
            v-for="(project, i) in featuredProjects"
            :key="project.to"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 150 } }"
          >
            <BaseCard v-bind="project" />
          </div>
        </div>
        <div class="projects__cta">
          <BaseButton to="/projects" variant="secondary" size="md">View all projects</BaseButton>
        </div>
      </div>
    </section>

    <AppServicesSection
      title="What I can do for you"
      subtitle="From the first idea to launch and beyond, I handle the whole website for you."
      :services="services"
      alt
    />

    <AppFaqSection
      title="Frequently Asked Questions"
      subtitle="Everything you need to know before we start working together."
      :items="faqs"
    />
  </main>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects"

const description = "Freelance Nuxt.js developer building fast websites, landing pages, and web apps that turn visitors into customers. Clear pricing, free quote, available worldwide."

useSeoMeta({
  title: "Crescenzo Sorrentino — Nuxt.js Freelance Developer",
  description,
  ogType: "website",
  ogTitle: "Crescenzo Sorrentino — Nuxt.js Freelance Developer",
  ogDescription: description,
  ogUrl: "https://crescenzosorrentino.com",
  ogImage: "https://crescenzosorrentino.com/og-image.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Crescenzo Sorrentino — Nuxt.js Freelance Developer",
  twitterDescription: description,
  twitterImage: "https://crescenzosorrentino.com/og-image.png",
})

// Solo i progetti con featured: true compaiono in homepage; la lista completa vive in /projects.
const featuredProjects = computed(() => projects.filter(p => p.featured))

// services e faqs sono la fonte unica: vengono renderizzati nelle sezioni della pagina
// e contemporaneamente trasformati nello schema JSON-LD più in basso.
const services = [
  {
    iconPaths: '<rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>',
    title: "Websites for Businesses & Professionals",
    description: "Fast, modern websites that make you look credible and turn visitors into clients. Built to load quickly and rank well on Google.",
  },
  {
    iconPaths: '<path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path>',
    title: "Landing Pages That Convert",
    description: "Pages built around one goal: turning visitors into customers. Every section and button is placed to move people to action.",
  },
  {
    iconPaths: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    title: "Web Apps & Custom Tools",
    description: "Interactive tools, dashboards, and web apps that do exactly what your business needs, with no template limits.",
  },
  {
    iconPaths: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>',
    title: "Speed & Google Ranking",
    description: "Fast load times and clean technical setup, because slow sites lose customers and rank lower on Google.",
  },
]

const faqs = [
  {
    q: "How much does a website cost?",
    a: "It depends on what you need. A landing page or simple website usually costs between €800 and €2,500. A web app or custom tool starts from €4,000. Every project begins with a free call to understand your goals and give you a clear, fixed quote with no surprises.",
  },
  {
    q: "How long does it take?",
    a: "A focused landing page takes 1 to 2 weeks. A full business website takes 2 to 4 weeks. A web app takes 4 to 8 weeks, depending on how many features it needs. We agree on the timeline before any work starts.",
  },
  {
    q: "What happens after my website goes live?",
    a: "I don't disappear after launch. You can keep your site on a simple monthly plan that covers updates, content changes, and support, so you never have to worry about the technical side.",
  },
  {
    q: "Why does website speed matter for my business?",
    a: "More than half of mobile visitors leave a site that takes longer than 3 seconds to load. A fast site keeps people on the page and ranks higher on Google. Every site I build is made to load fast and pass Google's speed checks (Core Web Vitals).",
  },
  {
    q: "Why Nuxt.js instead of WordPress?",
    a: "WordPress is quick to start, but it slows down and gets harder to control as you add plugins. Nuxt.js lets me build a site that is faster, safer, and made exactly for your business. If speed and conversions matter to you, it wins on every measure that counts.",
  },
  {
    q: "Do I need a designer before we start?",
    a: "Not necessarily. If you already have a design, I turn it into a real, working website. If you're starting from scratch, I can handle both the look and the build together.",
  },
  {
    q: "Why hire a freelancer instead of an agency?",
    a: "With a freelancer you get speed, a direct line to the person actually building your site, and a leaner price: no account managers, no overhead. Agencies make more sense when you need a large team for a very big project.",
  },
]

const siteUrl = "https://crescenzosorrentino.com"

// Dati strutturati per Google: FAQPage (rich result delle domande) + un nodo Service per ogni servizio.
// Ogni Service punta al nodo #person globale definito in nuxt.config.ts (provider del servizio).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}#faq`,
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    ...services.map((s, i) => ({
      "@type": "Service",
      "@id": `${siteUrl}#service-${i}`,
      name: s.title,
      description: s.description,
      serviceType: s.title,
      provider: { "@id": `${siteUrl}#person` },
      areaServed: { "@type": "Place", name: "Worldwide" },
    })),
  ],
}

useHead({
  titleTemplate: null,
  link: [{ rel: "canonical", href: "https://crescenzosorrentino.com" }],
  script: [{ type: "application/ld+json", innerHTML: JSON.stringify(jsonLd) }],
})
</script>


<style scoped>
.projects__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
  text-align: center;
}

.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .projects__grid { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 1024px) {
  .projects__grid { grid-template-columns: repeat(3, 1fr); }
}

.projects__cta {
  display: flex;
  justify-content: center;
  margin-top: var(--space-8);
}
</style>
