import { progetti } from "./data.js";

const BASE_URL = "https://crescenzosorrentino.com";

const staticRoutes = [
  { url: "/", priority: 1, changeFrequency: "monthly" },
  { url: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap() {
  const projectRoutes = progetti.map((p) => ({
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
