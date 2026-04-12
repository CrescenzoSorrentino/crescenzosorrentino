import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Next.js scarica i font da Google e li serve in locale automaticamente.
// Il parametro “variable” definisce il nome della variabile CSS che
// Next.js creerà per rendere il font disponibile in tutto il progetto.
// IMPORTANTE: questi nomi devono corrispondere esattamente a quelli
// usati nel globals.css — è il “filo” che collega i due file.

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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-code",
});

const description =
  "I build Next.js interfaces that turn visitors into customers. Freelance frontend developer available for landing pages, web apps, and UI implementation.";

export const metadata = {
  title: "Crescenzo Sorrentino — Frontend Developer",
  description,
  openGraph: {
    title: "Crescenzo Sorrentino — Frontend Developer",
    description,
    url: "https://crescenzosorrentino.com",
    siteName: "Crescenzo Sorrentino",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crescenzo Sorrentino — Frontend Developer",
    description,
  },
};

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
      // Queste tre classi “attivano” i font sull’elemento <html>.
      // Senza di esse, le variabili CSS --font-headings ecc. non esisterebbero
      // e il browser userebbe il font di fallback (Arial, serif…).
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Questo script gira PRIMA che React carichi la pagina.
Serve per leggere la preferenza del tema (chiaro/scuro)
salvata nel browser e applicarla immediatamente,
evitando il “flash” — quel fastidioso lampeggio bianco
che si vede quando la pagina parte sempre chiara
e poi scatta al tema scuro dopo un istante. */}
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
      <body>{children}</body>
    </html>
  );
}
