# crescenzosorrentino.com

Personal portfolio and blog of Crescenzo Sorrentino, freelance frontend developer specialising in Nuxt.js.

## Stack

- **Framework:** Nuxt 4
- **Content:** @nuxt/content v3 (Markdown, SQLite at build time)
- **Styling:** Custom CSS (no utility framework)
- **Icons:** @nuxt/icon
- **Images:** @nuxt/image
- **Animations:** @vueuse/motion
- **Sitemap:** @nuxtjs/sitemap
- **Analytics:** @vercel/analytics (cookieless, privacy-first)
- **Deployment:** Vercel (SSR + prerender for dynamic routes)

## Project structure

```
app/
  assets/        # Global CSS
  components/
    app/         # Layout-level components (header, footer, nav)
    base/        # Reusable UI components (button, card, avatar)
  data/          # Static data (projects, contact info)
  layouts/       # Default layout
  pages/         # File-based routing
  plugins/       # client-side plugins
content/
  blog/          # Markdown blog posts
public/
  robots.txt
  favicon.svg
content.config.ts  # @nuxt/content collection schema
nuxt.config.ts
```

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## SEO

- `useSeoMeta` on every page (title, description, OG, Twitter Card)
- Canonical link on every page
- Schema.org: `Person` + `WebSite` globally, `BlogPosting` + `BreadcrumbList` on blog posts
- Sitemap via `@nuxtjs/sitemap` — update `nuxt.config.ts` when adding new pages
- `robots.txt` allows all, points to sitemap
- Google Search Console verified via meta tag

## Analytics

- **Vercel Analytics** via the `@vercel/analytics` Nuxt module
- Cookieless and privacy-first — no consent banner required
- No personally identifiable data collected; aggregated metrics only

## Theme

Dark/light mode via `data-theme` attribute on `<html>`. Preference stored in `localStorage`. Anti-flash script runs synchronously in `<head>` before page renders.

## Adding a blog post

1. Create a new `.md` file in `content/blog/`
2. Add the required frontmatter:

```yaml
---
title: "Your post title"
description: "Short description for SEO and previews."
date: YYYY-MM-DD
category: Guides # Guides | Opinion | Case Studies
---
```

3. Add the route to the sitemap in `nuxt.config.ts`
4. Deploy — Vercel pre-renders the route automatically via `routeRules`
