import { defineContentConfig, defineCollection, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        dateModified: z.string().optional(),
        lang: z.enum(["en", "it"]).default("en"),
        faqs: z
          .array(z.object({ q: z.string(), a: z.string() }))
          .optional(),
      }),
    }),
  },
})
