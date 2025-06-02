import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    order: z.number()
  })
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    impacts: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().default(false)
  })
});

const partnersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    order: z.number()
  })
});

const additionalServicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    order: z.number()
  })
});

export const collections = {
  'services': servicesCollection,
  'portfolio': portfolioCollection,
  'partners': partnersCollection,
  'additional-services': additionalServicesCollection
};