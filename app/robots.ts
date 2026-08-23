import { SITE_CONFIG } from '@/config/site-config';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_CONFIG.SITE_INFO.url}/sitemap.xml`,
  };
}
