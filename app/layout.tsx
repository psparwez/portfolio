import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import RootLayoutInternel from '@/components/layouts/root-layout';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Providers from '@/components/providers';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  creator: siteConfig.creator,
  authors: siteConfig.authors,
  publisher: siteConfig.publisher,

  keywords: siteConfig.keywords,

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
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
      className={cn('antialiased', fonts)}
      data-scroll-behavior='smooth'
    >
      <head>
        <link
          rel='icon'
          href='/favicon.ico'
          sizes='any'
          type='image/x-icon'
        />
      </head>
      <body>
        <Providers>
          <RootLayoutInternel>{children}</RootLayoutInternel>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
