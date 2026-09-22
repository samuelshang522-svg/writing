import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    category: z.string().default('Essay'),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});

export const collections = { writing };
