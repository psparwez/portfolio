import type { MetadataRoute } from 'next';

import { env } from '@/env.mjs';

// TODO
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/private', '/admin', '/login'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/restricted', '/login'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/'],
        disallow: ['/login', '/signup'],
      },
      {
        userAgent: 'Yandex',
        allow: ['/'],
        disallow: ['/private-data'],
      },
    ],
    sitemap: `${env.SITE_URL}/sitemap.xml`,
    host: env.SITE_URL,
  };
}
