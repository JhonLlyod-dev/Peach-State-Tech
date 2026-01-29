import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url';

const ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;


export const sanityClient = createClient({
  projectId: ID,
  dataset: dataset,
  apiVersion: '2026-01-29',
  useCdn: true
})

const builder = createImageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)