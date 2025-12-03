import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import Script from 'next/script';
import type { WebSite, WithContext } from 'schema-dts';

import Footer from '@/components/Footer/Footer';
import PageLayout from '@/components/layouts/page-layout';
import Navbar from '@/components/Navbar/Navbar';
import { siteConfig } from '@/config/site-config';
import developerConfig from '@/data/developer.config.json';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import NextTopLoaderProvider from '@/providers/nexttop-loader-provider';
import { ThemeProvider } from '@/providers/theme-provider';

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    alternateName: [developerConfig.username],
  };
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: Array.isArray(siteConfig.keywords)
    ? siteConfig.keywords.join(', ')
    : siteConfig.keywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: siteConfig.icons,

  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview of PS Parwez Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/opengraph-image.jpg'],
    creator: siteConfig.twitterHandle,
  },

  alternates: {
    canonical: siteConfig.url,
  },
  authors: [
    {
      name: siteConfig.author?.name ?? 'PS Parwez',
      url: siteConfig.author?.url ?? siteConfig.url,
    },
  ],
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <head>
        <link
          rel='icon'
          href='/favicon.ico'
          sizes='any'
          type='image/x-icon'
        />

        <Script
          id='website-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className={cn('antialiased', fonts)}>
        <ThemeProvider
          attribute='data-theme'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoaderProvider />
          <PageLayout>
            <Navbar />
            {children}
            <Footer />
          </PageLayout>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
