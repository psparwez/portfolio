import { SITE_CONFIG } from '@/config/site-config';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/contact'].map((route) => ({
    url: `${SITE_CONFIG.SITE_INFO.url}${route}`,
    lastModified: new Date(),
  }));

  return [...routes];
}
