import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    start_date: z.date(),
    end_date: z.date(),
    technologies: z.array(z.string()),
    image: z.string().optional(),
    description: z.string()
  })
});