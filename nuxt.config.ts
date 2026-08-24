const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://crescenzosorrentino.com#person",
  name: "Crescenzo Sorrentino",
  jobTitle: "Frontend Developer",
  url: "https://crescenzosorrentino.com",
  sameAs: [
    "https://linkedin.com/in/crescenzo-sorrentino",
    "https://github.com/CrescenzoSorrentino",
    "https://share.google/vRN5AQIj3Paiurwgn",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Crescenzo Sorrentino",
  url: "https://crescenzosorrentino.com",
  author: {
    "@type": "Person",
    name: "Crescenzo Sorrentino",
  },
};

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  routeRules: {
    "/blog/**": { prerender: true },
    "/projects/**": { prerender: true },
    // Vecchio slug della pagina locale: redirect permanente al nuovo URL ottimizzato
    "/sviluppatore-web-napoli": { redirect: { to: "/realizzazione-siti-web-napoli", statusCode: 301 } },
    // Il progetto Wordle Arcade è stato rinominato Wordpace: redirect permanente al nuovo slug
    "/projects/wordle-arcade": { redirect: { to: "/projects/wordpace", statusCode: 301 } },
    // Progetti rimossi dal portfolio: redirect all'elenco progetti invece di lasciare un 404
    "/projects/tamagotchi": { redirect: { to: "/projects", statusCode: 301 } },
    "/projects/grocerylist": { redirect: { to: "/projects", statusCode: 301 } },
  },
  // Variabili solo lato server (non esposte al client): chiave Resend e destinatario
  // del form di contatto. I valori reali arrivano a runtime da NUXT_RESEND_API_KEY e
  // NUXT_CONTACT_TO_EMAIL (convenzione Nuxt: i default qui sotto vengono sovrascritti
  // automaticamente da quelle env var, sia in locale via .env sia su Vercel).
  runtimeConfig: {
    resendApiKey: "",
    contactToEmail: "crescenzo.sorrentino@icloud.com",
    // Credenziali Upstash Redis per il rate limiting del form di contatto.
    // Sovrascritte a runtime da NUXT_UPSTASH_REDIS_REST_URL e NUXT_UPSTASH_REDIS_REST_TOKEN.
    upstashRedisRestUrl: "",
    upstashRedisRestToken: "",
  },
  nitro: {
    prerender: {
      routes: [
        "/realizzazione-siti-web-napoli",
        "/realizzazione-siti-web-torre-del-greco",
        "/realizzazione-siti-web-ercolano",
        "/realizzazione-siti-web-portici",
        "/siti-web-per-fotografi-napoli",
        "/siti-web-per-palestre-napoli",
        "/blog/nuxtjs-vs-wordpress",
        "/blog/what-does-it-cost-to-hire-a-freelance-web-developer",
        "/blog/why-your-website-is-losing-customers",
        "/blog/what-to-look-for-when-you-hire-a-nuxtjs-developer",
        "/blog/quanto-costa-sito-web-napoli",
        "/blog/farsi-trovare-su-google-napoli",
        "/blog/scheda-google-attivita",
        "/blog/sito-web-o-pagina-instagram",
        "/projects/photographer-starter",
        "/projects/gym-starter",
        "/projects/nuxt-contact-hub",
        "/projects/nuxt-contact-form",
        "/projects/crescenzosorrentino",
        "/projects/wordpace",
      ],
    },
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    quality: 80,
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@vueuse/motion/nuxt",
    "@nuxt/content",
    "@nuxt/icon",
    "@vercel/analytics",
    "@vercel/speed-insights"
  ],

  sitemap: {
    urls: [
      { loc: "/realizzazione-siti-web-napoli", priority: 0.9 },
      { loc: "/realizzazione-siti-web-torre-del-greco", priority: 0.8 },
      { loc: "/realizzazione-siti-web-ercolano", priority: 0.8 },
      { loc: "/realizzazione-siti-web-portici", priority: 0.8 },
      { loc: "/siti-web-per-fotografi-napoli", priority: 0.8 },
      { loc: "/siti-web-per-palestre-napoli", priority: 0.8 },
      { loc: "/projects", priority: 0.8 },
      { loc: "/projects/photographer-starter", priority: 0.7 },
      { loc: "/projects/gym-starter", priority: 0.7 },
      { loc: "/projects/nuxt-contact-hub", priority: 0.7 },
      { loc: "/projects/nuxt-contact-form", priority: 0.7 },
      { loc: "/projects/crescenzosorrentino", priority: 0.7 },
      { loc: "/projects/wordpace", priority: 0.7 },
      { loc: "/blog", priority: 0.8 },
      { loc: "/blog/nuxtjs-vs-wordpress", priority: 0.6 },
      { loc: "/blog/what-does-it-cost-to-hire-a-freelance-web-developer", priority: 0.6 },
      { loc: "/blog/why-your-website-is-losing-customers", priority: 0.6 },
      { loc: "/blog/what-to-look-for-when-you-hire-a-nuxtjs-developer", priority: 0.6 },
      { loc: "/blog/quanto-costa-sito-web-napoli", priority: 0.7 },
      { loc: "/blog/farsi-trovare-su-google-napoli", priority: 0.7 },
      { loc: "/blog/scheda-google-attivita", priority: 0.7 },
      { loc: "/blog/sito-web-o-pagina-instagram", priority: 0.7 },
      { loc: "/contact", priority: 0.6 },
    ],
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    // Il template si applica automaticamente a tutte le pagine che impostano useSeoMeta({ title }).
    // La homepage sovrascrive titleTemplate a null per usare un titolo completo senza suffisso.
    head: {
      htmlAttrs: { lang: "en" },
      titleTemplate: "%s | Crescenzo Sorrentino",
      meta: [
        {
          name: "google-site-verification",
          content: "FAyWQtqOkK8VUoEwBgtneptZkQwnYYZ7StbM05mB7rg",
        },
        { property: "og:image", content: "https://crescenzosorrentino.com/og-image.png" },
        { property: "og:image:width", content: "1424" },
        { property: "og:image:height", content: "752" },
        { name: "twitter:image", content: "https://crescenzosorrentino.com/og-image.png" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      script: [
        // Anti-flash tema: gira prima di tutto il resto per evitare il lampeggio bianco
        {
          innerHTML: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.setAttribute('data-theme',s||(d?'dark':'light'));}catch(e){}})();`,
        },
        // Dati strutturati Schema.org — aiutano Google a capire chi sei e cosa fa il sito
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(personSchema),
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(websiteSchema),
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "preload",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
      ],
    },
  },
});
