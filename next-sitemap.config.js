import { createClient } from '@sanity/client';

const ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;


export const sanityClient = createClient({
  projectId: ID,
  dataset: dataset,
  apiVersion: '2026-01-29',
  useCdn: true
})

export default {
  siteUrl: 'https://peachstate.tech',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,

  additionalPaths: async () => {
    const posts = await sanityClient.fetch(`
      *[_type == "post" && defined(slug.current)]{
        "slug": slug.current,
        _updatedAt
      }
    `);

    return posts.map((post) => ({
      loc: `/blog/${post.slug}`,
      lastmod: post._updatedAt,
    }));
  },
};
