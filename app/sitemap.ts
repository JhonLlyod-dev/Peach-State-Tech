import { MetadataRoute } from 'next'
import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2026-01-29',
  useCdn: false, // IMPORTANT: always get fresh content for sitemap
})

type Post = {
  slug: string
  _updatedAt: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.peachstate.tech'

  const posts: Post[] = await sanityClient.fetch(`
    *[_type == "post" && defined(slug.current)] | order(_updatedAt desc){
      "slug": slug.current,
      _updatedAt
    }
  `)

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/browse`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }, 
  ]


  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const pageCount = posts.length / 6;
  
  for (let i = 1; i <= pageCount; i++) {
    if(i > 1){
      blogPages.push({
        url: `${baseUrl}/browse?page=${i}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  }

  return [...staticPages, ...blogPages]
}