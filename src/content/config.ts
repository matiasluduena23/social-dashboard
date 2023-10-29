// 1. Import utilities from `astro:content`

import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const social = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    user: z.string(),
    total: z.string(),
    days: z.number(),
    description: z.string(),
    image: z.string(),
    arrow: z.boolean()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'social': social,
};