// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.string().transform((str) => new Date(str)),
    link: z.string().optional(),
    banner: z.string().optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
};
