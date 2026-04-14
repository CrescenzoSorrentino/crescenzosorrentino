import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Next.js scarica i font da Google e li serve in locale — nessuna richiesta esterna a runtime.
// “variable” è il nome della variabile CSS che Next.js crea sull'elemento <html>.
// IMPORTANTE: deve corrispondere esattamente al nome usato in globals.css.

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-headings",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});


// Descrizione condivisa tra metadata, OpenGraph e Twitter — unica fonte di verità.
const description =
  "I build Next.js interfaces that turn visitors into customers. Freelance frontend developer available for landing pages, web apps, and UI implementation.";

// Metadati della pagina radice. Le route figlie possono sovrascrivere title e description
// usando il proprio `export const metadata`. Il template "%s | ..." si applica automaticamente.
export const metadata = {
  title: {
    template: "%s | Crescenzo Sorrentino",
    default: "Crescenzo Sorrentino — Next.js Freelance Developer",
  },
  description,
  alternates: {
    canonical: "https://crescenzosorrentino.com",
  },
  openGraph: {
    title: "Crescenzo Sorrentino — Next.js Freelance Developer",
    description,
    url: "https://crescenzosorrentino.com",
    siteName: "Crescenzo Sorrentino",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crescenzo Sorrentino — Next.js Freelance Developer",
    description,
  },
};

// Dati strutturati Schema.org — aiutano Google a capire chi sei e cosa fa il sito.
// Vengono iniettati come <script type="application/ld+json"> nel <head>.
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      // Le classi attivano le variabili CSS dei font sull’elemento <html>.
      // Senza, --font-headings e --font-body non esisterebbero e il browser userebbe i fallback.
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        {/*
          Script anti-flash per il tema: gira PRIMA che React idrati la pagina.
          Legge la preferenza salvata in localStorage (o la preferenza di sistema)
          e imposta data-theme sull'<html> immediatamente, evitando il lampeggio
          bianco che si vedrebbe se la pagina partisse sempre in modalità chiara.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() { try { var saved = localStorage.getItem('theme'); var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; var theme = saved || (prefersDark ? 'dark' : 'light'); document.documentElement.setAttribute('data-theme', theme); } catch(e) {} })();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
        {/* CookieYes — banner consenso cookie, caricato prima del resto per compliance GDPR */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/2d9d064aaa0864d4576af5f4c8d2a4e2/script.js"
          strategy="beforeInteractive"
        />
        {/* Google Analytics — caricato dopo l'idratazione per non bloccare il rendering */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9RSLWYMT3F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9RSLWYMT3F');
          `}
        </Script>
      </body>
    </html>
  );
}
