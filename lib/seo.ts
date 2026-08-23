import { SITE_CONFIG } from '@/config/site-config';
import type { Metadata } from 'next';

export const siteConfig = {
  name: `${SITE_CONFIG.profile.displayName}`,
  title: `${SITE_CONFIG.profile.displayName} • Developer Portfolio`,
  description: `The personal portfolio of ${SITE_CONFIG.profile.name} — Front-end developer specializing in building fast, accessible, and visually appealing web experiences with React, Next.js, and modern UI design.`,
  url: SITE_CONFIG.SITE_INFO.url,
  ogImage: `/opengraph-image.jpg`,
  creator: 'PS Parwez',
  publisher: 'PS Parwez',
  authors: [
    {
      name: 'PS Parwez',
      url: 'https://github.com/psparwez',
    },
  ],

  keywords: [
    'Next.js Developer',
    'React Developer',
    'Frontend Developer',
    'Frontend Engineer',
    'Web Developer',
    'TypeScript Developer',
    'Freelance Frontend Developer',
    'Web Development',

    // ──────────────── 🧑‍💻 Portfolio ────────────────
    'Portfolio Website',
    'Personal Portfolio',
    'Developer Portfolio',
    'Frontend Portfolio',
    'Creative Developer Portfolio',
    'Modern Portfolio Design',
    'Next.js Portfolio',
    'React Portfolio',
    'Professional Portfolio',
    'Software Engineer Portfolio',
  ],
};

type PageSEO = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = '/',
  noIndex = false,
}: PageSEO): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },

    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: new URL(siteConfig.ogImage, siteConfig.url).toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
