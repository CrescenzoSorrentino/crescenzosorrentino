<script setup lang="ts">
import { projects } from "~/data/projects"

const description = "I build Nuxt.js interfaces that turn visitors into customers. Freelance frontend developer available for landing pages, web apps, and UI implementation."

useHead({
  titleTemplate: null,
  link: [{ rel: "canonical", href: "https://crescenzosorrentino.com" }],
})

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

const featuredProjects = computed(() => projects.filter(p => p.featured))

const services = [
  {
    iconPaths: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    title: "Nuxt.js Development",
    description: "Scalable, maintainable Nuxt.js applications, from a single interactive widget to a full web application.",
  },
  {
    iconPaths: '<path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path>',
    title: "Landing Pages & Conversion",
    description: "Pages built to convert. Every layout decision, copy placement, and CTA is designed to move visitors to action.",
  },
  {
    iconPaths: '<rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>',
    title: "UI/UX Implementation",
    description: "Pixel-perfect translation of Figma designs into production code, with smooth animations and accessible markup.",
  },
  {
    iconPaths: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>',
    title: "Performance & Core Web Vitals",
    description: "Fast load times, optimized images, and clean scores on Lighthouse, because slow sites lose customers.",
  },
]

const faqs = [
  {
    q: "How much does it cost to build a website in Nuxt.js?",
    a: "Pricing depends on scope. A focused landing page typically ranges from €800 to €2,500, while a full web application starts from €4,000. Every project begins with a free consultation to define requirements and give you an accurate, no-surprise quote.",
  },
  {
    q: "What is the difference between a WordPress site and a Nuxt.js site?",
    a: "WordPress is a PHP-based CMS: quick to set up but limited in performance and flexibility. Nuxt.js gives you full control over code, speed, and architecture. If your business depends on conversions, load time, and custom interactions, Nuxt.js consistently outperforms WordPress on every measurable metric.",
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
]
</script>

<template>
  <main>
    <AppHeroSection
      title="Crescenzo Sorrentino"
      subtitle="I build Nuxt.js interfaces with one goal: turning your visitors into customers."
      :primary-cta="{ label: 'Let\'s work together', to: '/contact' }"
      :secondary-cta="{ label: 'View my work', to: '/projects' }"
    />

    <AppAboutSection
      title="I build the frontend your product deserves"
      :paragraphs="[
        'I\'m a frontend developer specializing in Nuxt.js. I work with startups and professionals who know that a great interface isn\'t a nice-to-have. It\'s what drives growth.',
        'I care about every visual detail and performance metric, because I know that user experience is what decides whether a customer stays or leaves.',
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
      subtitle="From concept to deployment: I cover the full frontend stack."
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

<style scoped>
.projects__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
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
