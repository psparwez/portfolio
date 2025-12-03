import type { MetadataRoute } from 'next';

import { env } from '@/env.mjs';
import type { SitemapPage } from '@/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: SitemapPage[] = [
    { url: '/', lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: '/services', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/contact', lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ];

  const sitemapEntries = pages.map((page) => ({
    url: `${env.SITE_URL}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return sitemapEntries;
}
