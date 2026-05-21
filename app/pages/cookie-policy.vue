<script setup lang="ts">
// v-html è l'equivalente di dangerouslySetInnerHTML di React.
// Sicuro in questo caso perché il contenuto è statico e scritto da noi.
const content = `
<h1 class="cp-h1">Cookie Policy</h1>
<div class="cp-dates">
  <p>Effective date: April 14, 2026</p>
  <p>Last updated: April 14, 2026</p>
</div>

<h2>What are cookies?</h2>
<div class="cp-p">
  <p>This Cookie Policy explains what cookies are, how we use them, the types of cookies we use (i.e., the information we collect using cookies and how that information is used), and how to manage your cookie settings.</p>
  <p>Cookies are small text files used to store small pieces of information. They are stored on your device when a website loads in your browser. These cookies help ensure that the website functions properly, enhance security, provide a better user experience, and analyse performance to identify what works and where improvements are needed.</p>
</div>

<h2>How do we use cookies?</h2>
<div class="cp-p">
  <p>Like most online services, our website uses both first-party and third-party cookies for various purposes. First-party cookies are primarily necessary for the website to function properly and do not collect any personally identifiable data.</p>
  <p>The third-party cookies used on our website primarily help us understand how the website performs, track how you interact with it, keep our services secure, deliver relevant advertisements, and enhance your overall user experience while improving the speed of your future interactions with our website.</p>
</div>

<h2>Cookies used on this site</h2>
<div class="cp-p">
  <p>This website does not use cookies for tracking or analytics purposes. We use Vercel Analytics, a privacy-first analytics solution that collects only aggregated, anonymised data without placing any cookies on your device.</p>
  <p>The only data stored locally on your device is a <strong>theme preference</strong> (light or dark mode) saved in <code>localStorage</code>. This is a browser feature, not a cookie, and contains no personally identifiable information.</p>
</div>
`

useHead({ link: [{ rel: "canonical", href: "https://crescenzosorrentino.com/cookie-policy" }] })

useSeoMeta({
  title: "Cookie Policy",
  description: "Cookie policy for crescenzosorrentino.com: how we use cookies and how to manage your preferences.",
  ogTitle: "Cookie Policy — Crescenzo Sorrentino",
  ogDescription: "Cookie policy for crescenzosorrentino.com: how we use cookies and how to manage your preferences.",
  ogUrl: "https://crescenzosorrentino.com/cookie-policy",
  twitterTitle: "Cookie Policy — Crescenzo Sorrentino",
  twitterDescription: "Cookie policy for crescenzosorrentino.com: how we use cookies and how to manage your preferences.",
})
</script>

<template>
  <main>
    <section class="section">
      <div class="container container--narrow">
        <!-- v-html renderizza HTML grezzo — usare solo con contenuto fidato -->
        <div class="content" v-html="content" />
      </div>
    </section>
  </main>
</template>

<style scoped>
/* :deep() è l'equivalente di :global() dei CSS Modules di React:
   raggiunge gli elementi generati da v-html ignorando lo scoping. */

.content :deep(.cp-h1) {
  font-family: var(--font-headings);
  font-size: var(--text-3xl);
  font-weight: 300;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
  line-height: 1.3;
}

.content :deep(.cp-dates) {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}

.content :deep(h2) {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-primary);
  margin-block: var(--space-6) var(--space-3);
}

.content :deep(.cp-p p),
.content :deep(.cp-p) {
  font-size: var(--text-sm);
  color: var(--text-primary);
  line-height: 1.7;
  margin-bottom: var(--space-4);
}

.content :deep(a) {
  color: var(--color-accent);
  text-decoration: underline;
}

</style>
