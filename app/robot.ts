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
          '/thank-you',
          '/404',
          '/410',
          '/api/',
          '/admin/',
          '/dashboard/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}