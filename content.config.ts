import { defineContentConfig, defineCollection, z } from "@nuxt/content"

// Schema del frontmatter degli articoli del blog (file Markdown in content/blog/*.md).
// Nuxt Content valida ogni file contro questo schema e ne tipizza i campi nelle query.
export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        dateModified: z.string().optional(), // se presente, aggiunge dateModified allo schema BlogPosting
        lang: z.enum(["en", "it"]).default("en"), // guida il filtro lingua del blog e la lingua/data dell'articolo
        faqs: z // se presenti, vengono renderizzate e generano lo schema FAQPage in blog/[slug].vue
          .array(z.object({ q: z.string(), a: z.string() }))
          .optional(),
      }),
    }),
  },
})
