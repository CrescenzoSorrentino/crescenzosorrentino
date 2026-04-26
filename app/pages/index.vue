<script setup lang="ts">
import { projects } from "~/data/projects"

const description = "I build Nuxt.js interfaces that turn visitors into customers. Freelance frontend developer available for landing pages, web apps, and UI implementation."

// La homepage bypassa il titleTemplate globale per usare un titolo completo senza suffisso
useHead({
  titleTemplate: null,
  link: [{ rel: "canonical", href: "https://crescenzosorrentino.com" }],
})

useSeoMeta({
  title: "Crescenzo Sorrentino — Nuxt.js Freelance Developer",
  description,
  ogTitle: "Crescenzo Sorrentino — Nuxt.js Freelance Developer",
  ogDescription: description,
  ogUrl: "https://crescenzosorrentino.com",
  twitterTitle: "Crescenzo Sorrentino — Nuxt.js Freelance Developer",
  twitterDescription: description,
})
</script>

<template>
  <main>
    <!-- ── Hero ── -->
    <header class="hero">
      <div class="hero__content">
        <h1 class="hero__title">Crescenzo Sorrentino</h1>
        <p class="hero__subtitle">
          I build Nuxt.js interfaces with one goal: turning your visitors into
          customers.
        </p>
        <Button to="/projects" variant="primary" size="lg">View my work</Button>
      </div>
      <a href="#about" class="hero__scroll" aria-label="Scroll to next section">
        <div class="hero__mouse">
          <div class="hero__wheel"></div>
        </div>
      </a>
    </header>

    <!-- ── About ── -->
    <section id="about" class="section section--alt">
      <div class="container">
        <div class="about">
          <Avatar src="/crescenzo-sorrentino.png" alt="Crescenzo Sorrentino" :size="280" />
          <div class="about__text">
            <h2>I build the frontend your product deserves</h2>
            <p>
              I'm a frontend developer specializing in Nuxt.js. I work with
              startups and professionals who know that a great interface isn't a
              nice-to-have. It's what drives growth.
            </p>
            <p>
              I care about every visual detail and performance metric, because I
              know that user experience is what decides whether a customer stays
              or leaves.
            </p>
            <div class="about__cta">
              <Button to="/contact" variant="primary" size="md">Let's talk about your project</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Projects ── -->
    <section class="section">
      <div class="container">
        <div class="projects__head">
          <h2>Selected Work</h2>
          <p>A few projects that show what I can do for your business.</p>
        </div>
        <div class="projects__grid">
          <Card
            v-for="project in projects"
            :key="project.to"
            v-bind="project"
          />
        </div>
        <div class="projects__cta">
          <Button to="/projects" variant="secondary" size="md"
            >View all projects</Button
          >
        </div>
      </div>
    </section>

    <!-- ── Services ── -->
    <section class="section section--alt">
      <div class="container">
        <div class="services__head">
          <h2>What I can do for you</h2>
          <p>From concept to deployment: I cover the full frontend stack.</p>
        </div>
        <div class="services__grid">
          <div class="service">
            <div class="service__icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>Nuxt.js Development</h3>
            <p>
              Scalable, maintainable Nuxt.js applications, from a single
              interactive widget to a full web application.
            </p>
          </div>

          <div class="service">
            <div class="service__icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M12 20V10" />
                <path d="M18 20V4" />
                <path d="M6 20v-4" />
              </svg>
            </div>
            <h3>Landing Pages &amp; Conversion</h3>
            <p>
              Pages built to convert. Every layout decision, copy placement, and
              CTA is designed to move visitors to action.
            </p>
          </div>

          <div class="service">
            <div class="service__icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            <h3>UI/UX Implementation</h3>
            <p>
              Pixel-perfect translation of Figma designs into production code,
              with smooth animations and accessible markup.
            </p>
          </div>

          <div class="service">
            <div class="service__icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3>Performance &amp; Core Web Vitals</h3>
            <p>
              Fast load times, optimized images, and clean scores on Lighthouse,
              because slow sites lose customers.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FAQ ── -->
    <section class="section">
      <div class="container container--narrow">
        <div class="faq__head">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before we start working together.</p>
        </div>
        <div class="faq__list">
          <details class="faq__item">
            <summary class="faq__question">
              How much does it cost to build a website in Nuxt.js?
            </summary>
            <p class="faq__answer">
              Pricing depends on scope. A focused landing page typically ranges
              from €800 to €2,500, while a full web application starts from
              €4,000. Every project begins with a free consultation to define
              requirements and give you an accurate, no-surprise quote.
            </p>
          </details>

          <details class="faq__item">
            <summary class="faq__question">
              What is the difference between a WordPress site and a Nuxt.js
              site?
            </summary>
            <p class="faq__answer">
              WordPress is a PHP-based CMS: quick to set up but limited in
              performance and flexibility. Nuxt.js gives you full control over
              code, speed, and architecture. If your business depends on
              conversions, load time, and custom interactions, Nuxt.js
              consistently outperforms WordPress on every measurable metric.
            </p>
          </details>

          <details class="faq__item">
            <summary class="faq__question">
              How long does it take to build a landing page?
            </summary>
            <p class="faq__answer">
              A focused landing page (one goal, one audience) takes 1 to 2 weeks
              from kickoff to delivery. A multi-page site or web application
              takes 3 to 8 weeks depending on complexity. Every timeline starts
              with a clear brief.
            </p>
          </details>

          <details class="faq__item">
            <summary class="faq__question">
              What are Core Web Vitals and why do they matter for my business?
            </summary>
            <p class="faq__answer">
              Core Web Vitals are Google's metrics for measuring real user
              experience: load speed (LCP), interactivity (INP), and visual
              stability (CLS). Sites that score well rank higher on Google and
              convert better. Users are 24% less likely to abandon a page that
              loads in under 2 seconds. Every project I deliver is optimized to
              pass Core Web Vitals.
            </p>
          </details>

          <details class="faq__item">
            <summary class="faq__question">
              Do I need a designer before hiring a frontend developer?
            </summary>
            <p class="faq__answer">
              Not necessarily. If you already have a Figma file or brand
              guidelines, I translate them directly into production code. If
              you're starting from scratch, I can work from a mood board or
              reference sites and handle both the visual direction and the
              implementation.
            </p>
          </details>

          <details class="faq__item">
            <summary class="faq__question">
              When does it make sense to hire a freelance developer instead of
              an agency?
            </summary>
            <p class="faq__answer">
              A freelance developer is the right choice when you need speed,
              direct communication, and lean costs: no account managers, no
              overhead. You work directly with the person writing your code.
              Agencies are better when you need a large coordinated team or a
              very wide scope all under one roof.
            </p>
          </details>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ── Hero ── */

.hero {
  position: relative;
  overflow: hidden;
  background-color: var(--color-primary);
  min-height: 90svh;
  display: flex;
  align-items: center;
  padding-block: var(--space-24);
}

[data-theme="dark"] .hero {
  background-color: var(--footer-bg);
}

.hero::before,
.hero::after {
  content: '';
  position: absolute;
  inset: -50%;
  pointer-events: none;
  z-index: 0;
}

.hero::before {
  background: radial-gradient(ellipse at 20% 60%, color-mix(in srgb, var(--color-accent) 60%, transparent) 0%, transparent 55%);
  animation: glow-a 7s ease-in-out infinite alternate;
}

.hero::after {
  background: radial-gradient(ellipse at 75% 30%, color-mix(in srgb, white 35%, transparent) 0%, transparent 50%);
  animation: glow-b 10s ease-in-out infinite alternate;
}

@keyframes glow-a {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(20%, -30%) scale(1.4); }
}

@keyframes glow-b {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(-18%, 25%) scale(1.5); }
}

.hero__scroll {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.hero__mouse {
  width: 26px;
  height: 42px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 13px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.hero__wheel {
  width: 4px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 2px;
  animation: wheel 1.8s ease-in-out infinite;
}

@keyframes wheel {
  0%   { transform: translateY(0);   opacity: 1; }
  80%  { transform: translateY(10px); opacity: 0; }
  100% { transform: translateY(0);   opacity: 0; }
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--space-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .hero__content {
    padding-inline: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .hero__content {
    padding-inline: var(--space-12);
  }
}

.hero__title {
  font-size: var(--text-4xl);
  font-weight: 300;
  color: #fff;
  line-height: 1.1;
}

@media (min-width: 768px) {
  .hero__title {
    font-size: var(--text-hero);
  }
}

.hero__subtitle {
  font-size: var(--text-md);
  color: rgba(255, 255, 255, 0.75);
  max-width: 52ch;
}

@media (min-width: 768px) {
  .hero__subtitle {
    font-size: var(--text-lg);
  }
}

/* ── About ── */

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-12);
}

@media (min-width: 768px) {
  .about {
    flex-direction: row;
    align-items: flex-start;
    gap: var(--space-16);
  }
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  text-align: center;

  .about__cta {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    text-align: left;

    .about__cta {
      justify-content: flex-start;
    }
  }
}

/* ── Projects ── */

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
  .projects__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .projects__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.projects__cta {
  display: flex;
  justify-content: center;
  margin-top: var(--space-8);
}

/* ── Services ── */

.services__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .services__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.service {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background-color: var(--bg-page);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: var(--space-6);
}

.service__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background-color: var(--bg-section-alt);
  color: var(--color-accent);
  flex-shrink: 0;
}

/* ── FAQ ── */

.faq__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.faq__list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}

.faq__item {
  border-bottom: 1px solid var(--border);
}

.faq__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding-block: var(--space-4);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  list-style: none;
  transition: color 0.2s;

  &:hover {
    color: var(--color-accent);
  }

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: "+";
    font-size: var(--text-xl);
    font-weight: 300;
    color: var(--color-accent);
    flex-shrink: 0;
    transition: transform 0.2s;
  }
}

details[open] .faq__question::after {
  transform: rotate(45deg);
}

.faq__answer {
  padding-bottom: var(--space-4);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.7;
}
</style>
