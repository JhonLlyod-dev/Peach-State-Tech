import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.peachstate.tech'

  const disallow = ['/thankyou', '/404', '/410']

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}