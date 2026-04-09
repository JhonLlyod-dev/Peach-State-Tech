import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.peachstate.tech'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/thankyou',
          '/404',
          '/410',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}