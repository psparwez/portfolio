import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site-config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: siteConfig.name,
    name: siteConfig.name,
    description: siteConfig.description,
    // TODO
    icons: [],
    id: '',
    start_url: '',
    display: 'standalone',
    scope: '/',
    screenshots: [],
  };
}
