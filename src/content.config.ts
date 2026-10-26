import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional().default('Fexaris Studio'),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    className: z.string().optional().describe('Additional CSS classes for the content container'),
    style: z.enum(['default', 'colored-tables', 'minimal', 'highlighted']).optional().describe('Predefined style presets'),
  }),
});

export const collections = { blog };
