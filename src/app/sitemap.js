import fs from "fs";
import path from "path";

const BASE_URL = "https://crescenzosorrentino.com";
const APP_DIR = path.join(process.cwd(), "src/app");

// Priorità e frequenza personalizzate per rotte specifiche
const routeConfig = {
  "/": { priority: 1, changeFrequency: "monthly" },
  "/blog": { priority: 0.6, changeFrequency: "weekly" },
};

const defaultConfig = { priority: 0.8, changeFrequency: "monthly" };

function getRoutes(dir, base = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes = [];

  for (const entry of entries) {
    // Ignora file/cartelle speciali di Next.js
    if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
    if (["components", "api"].includes(entry.name)) continue;
    if (!entry.isDirectory()) continue;

    const segment = entry.name;

    // Ignora route groups (parentesi) e route dinamiche (parentesi quadre)
    if (segment.startsWith("(") || segment.startsWith("[")) continue;

    const route = `${base}/${segment}`;
    const pageFile =
      fs.existsSync(path.join(dir, segment, "page.js")) ||
      fs.existsSync(path.join(dir, segment, "page.jsx")) ||
      fs.existsSync(path.join(dir, segment, "page.tsx"));

    if (pageFile) {
      routes.push(route);
    }

    // Ricorsione nelle sottocartelle
    routes.push(...getRoutes(path.join(dir, segment), route));
  }

  return routes;
}

export default function sitemap() {
  const routes = ["/", ...getRoutes(APP_DIR)];

  return routes.map((route) => {
    const config = routeConfig[route] ?? defaultConfig;
    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      ...config,
    };
  });
}
