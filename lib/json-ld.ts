import { SITE_CONFIG } from '@/config/site-config';

const siteConfig = {
  name: SITE_CONFIG.profile.name,
  url: SITE_CONFIG.SITE_INFO.url,
  description: SITE_CONFIG.profile.description,
  email: 'hello@yourdomain.com',
  jobTitle: SITE_CONFIG.profile.jobTitle,
  location: {
    city: 'Delhi',
    country: 'India',
  },
  sameAs: [
    `https://github.com/${SITE_CONFIG.profile.name}`,
    `https://www.linkedin.com/in/${SITE_CONFIG.profile.name}`,
  ],
};

export function createPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',

    '@id': `${siteConfig.url}/#person`,

    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,

    email: `mailto:${siteConfig.email}`,

    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.country,
    },

    sameAs: siteConfig.sameAs,
  };
}

export function createWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',

    '@id': `${siteConfig.url}/#website`,

    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,

    publisher: {
      '@id': `${siteConfig.url}/#person`,
    },
  };
}

type WebPageType = 'WebPage' | 'ContactPage' | 'AboutPage';

export function createWebPageSchema({
  name,
  description,
  path,
  type = 'WebPage',
}: {
  name: string;
  description: string;
  path: string;
  type?: WebPageType;
}) {
  const url = new URL(path, siteConfig.url).toString();

  return {
    '@context': 'https://schema.org',
    '@type': type,

    '@id': `${url}#webpage`,

    url,
    name,
    description,

    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },

    about: {
      '@id': `${siteConfig.url}/#person`,
    },
  };
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}
