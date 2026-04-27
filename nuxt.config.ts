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
  modules: ["@nuxt/image", "@nuxtjs/sitemap"],

  sitemap: {
    urls: [
      { loc: "/projects/grocerylist", priority: 0.7 },
      { loc: "/projects/crescenzosorrentino", priority: 0.7 },
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
        { name: "google-site-verification", content: "FAyWQtqOkK8VUoEwBgtneptZkQwnYYZ7StbM05mB7rg" },
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
        // CookieYes: defer per non bloccare il rendering, il consent manager gira prima dei cookie analytics
        {
          id: "cookieyes",
          defer: true,
          src: "https://cdn-cookieyes.com/client_data/2d9d064aaa0864d4576af5f4c8d2a4e2/script.js",
        },
        // Google Analytics: caricato in defer per non bloccare il rendering
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-9RSLWYMT3F",
          defer: true,
        },
        {
          id: "google-analytics",
          defer: true,
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-9RSLWYMT3F');`,
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://cdn-cookieyes.com" },
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
