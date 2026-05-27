const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Crescenzo Sorrentino",
  jobTitle: "Frontend Developer",
  url: "https://crescenzosorrentino.com",
  sameAs: [
    "https://linkedin.com/in/crescenzo-sorrentino",
    "https://github.com/CrescenzoSorrentino",
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
  routeRules: {
    "/blog/**": { prerender: true },
    "/projects/**": { prerender: true },
  },
  nitro: {
    prerender: {
      routes: [
        "/blog/nuxtjs-vs-wordpress",
        "/blog/what-does-it-cost-to-hire-a-freelance-web-developer",
        "/blog/why-your-website-is-losing-customers",
        "/projects/photographer-starter",
        "/projects/template-gym",
        "/projects/crescenzosorrentino",
        "/projects/grocerylist",
      ],
    },
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
      { loc: "/projects", priority: 0.8 },
      { loc: "/projects/photographer-starter", priority: 0.7 },
      { loc: "/projects/template-gym", priority: 0.7 },
      { loc: "/projects/crescenzosorrentino", priority: 0.7 },
      { loc: "/projects/grocerylist", priority: 0.7 },
      { loc: "/blog", priority: 0.8 },
      { loc: "/blog/nuxtjs-vs-wordpress", priority: 0.6 },
      { loc: "/blog/what-does-it-cost-to-hire-a-freelance-web-developer", priority: 0.6 },
      { loc: "/blog/why-your-website-is-losing-customers", priority: 0.6 },
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
