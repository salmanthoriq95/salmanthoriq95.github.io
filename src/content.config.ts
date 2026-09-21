import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  // Deliberately scoped to `publish`: files under `private` never enter the
  // content collection and therefore can never generate a public page.
  loader: glob({
    base: "./src/content/writing/publish",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    language: z.enum(["id", "en"]).default("id"),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    translationKey: z.string().optional(),
  }),
});

export const collections = { writing };
