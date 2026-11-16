import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// Blog: un archivo Markdown por artículo en src/content/blog/.
// Los archivos que empiezan con "_" (como _plantilla.md) no se publican.
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70),
      description: z.string().max(170),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Mijalys Silva'),
      category: z.enum(['IA', 'Automatización', 'Ciberseguridad', 'Desarrollo de Software', 'Staffing']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
})

export const collections = { blog }
