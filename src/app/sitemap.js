import { projects } from "./data.js";

const BASE_URL = "https://crescenzosorrentino.com";

// priority: scala 0–1. La home vale 1 (massimo), le pagine principali 0.8,
// le pagine legali 0.3 perché non portano traffico organico rilevante.
// changeFrequency: suggerisce a Google ogni quanto rivisitare la pagina.
const staticRoutes = [
  { url: "/", priority: 1,   changeFrequency: "monthly" },
  { url: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { url: "/contact",  priority: 0.8, changeFrequency: "monthly" },
  { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { url: "/cookie-policy",  priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
  // Le pagine di dettaglio progetto hanno priority 0.9 — più alta delle pagine
  // principali perché contengono contenuto specifico indicizzabile da Google.
  const projectRoutes = projects.map((p) => ({
    url: `/projects/${p.slug}`,
    priority: 0.9,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...projectRoutes].map((r) => ({
    ...r,
    url: `${BASE_URL}${r.url}`,
    lastModified: new Date(),
  }));
}
