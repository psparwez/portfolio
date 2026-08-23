import { SITE_CONFIG } from '@/config/site-config';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const SITE_NAME = SITE_CONFIG.profile.name;

  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_CONFIG.SITE_INFO.description,
    id: '/',
    start_url: '/',
    display: 'standalone',
    scope: '/',
    icons: [
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/opengraph-image.jpg',
        type: 'image/webp',
        sizes: '1764x998',
        form_factor: 'wide',
      },
    ],
  };
}
