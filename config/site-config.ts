import { env } from '../env.mjs';

export const siteConfig = {
  title: 'PS Parwez • Developer Portfolio',
  name: 'PS Parwez',
  description:
    'The personal portfolio of PS Parwez — Front-end developer specializing in building fast, accessible, and visually appealing web experiences with React, Next.js, and modern UI design.',
  keywords: [
    // ──────────────── 🧑‍💻 Portfolio & Personal Brand ────────────────
    'PS Parwez',
    'PS Parwez Portfolio',
    'PS Portfolio',
    'PS Parwez Developer',
    'PS Parwez Website',
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

    // ──────────────── 🌐 Web Development & Frontend ────────────────
    'Front-end Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Web Developer',
    'Frontend Engineer',
    'UI Developer',
    'Web Development',
    'Frontend Development',
    'Responsive Web Design',
    'Website Development',
    'Web Applications',
    'Modern Web Apps',
    'Progressive Web Apps',
    'Web Performance Optimization',
    'Accessibility in Web Design',
    'Semantic HTML',
    'CSS Expert',

    // ──────────────── 🎨 UI / UX & Design ────────────────
    'UI/UX Design',
    'User Interface Engineer',
    'User Experience Designer',
    'Tailwind CSS',
    'Framer Motion',
    'Shadcn UI',
    'Responsive UI',
    'Design Systems',
    'Component Design',
    'Interactive UI',
    'Visual Design',
    'Aesthetic Web Design',
    'Creative UI Developer',

    // ──────────────── ⚙️ Tools, Frameworks & Tech Stack ────────────────
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Tailwind CSS',
    'Framer Motion',
    'Lucide Icons',
    'Vercel',
    'GitHub Actions',
    'Husky',
    'Prettier',
    'ESLint',
    'Mongoose',
    'Zod',
    'Env Validation',
    'Server Components',
    'Next.js App Router',
    'SEO Optimization',

    // ──────────────── 🚀 Career & Industry ────────────────
    'Front-end Engineer India',
    'Software Developer India',
    'Web Developer Delhi',
    'Tech Enthusiast',
    'Freelance Developer',
    'Freelance Frontend Developer',
    'Open Source Developer',
    'Next.js Freelancer',
    'React Freelancer',
    'Frontend Specialist',
    'Performance-Oriented Developer',
    'Full Stack Enthusiast',
    'UI Developer Delhi',

    // ──────────────── 💡 Soft Skills & Personal Traits ────────────────
    'Creative Problem Solver',
    'Clean Code Advocate',
    'Modern Design Thinker',
    'Tech Enthusiast',
    'Continuous Learner',
    'Innovative Developer',
    'Collaborative Engineer',
    'Design-minded Developer',

    // ──────────────── 🔍 SEO & Meta Context ────────────────
    'Portfolio Website SEO',
    'Personal Branding Developer',
    'Next.js SEO',
    'Open Graph Optimization',
    'Meta Tags Optimization',
    'Structured Data',
    'Schema.org Portfolio',
    'Google Search Optimization',
  ],

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },

  url: env.SITE_URL || 'https://dark-portfolio-site.vercel.app/',
  ogImage: `${env.SITE_URL || 'https://dark-portfolio-site.vercel.app/'}/og-image.png`,
  twitterHandle: '@psparwez',
  locale: 'en_IN',
  author: {
    name: 'PS Parwez',
    url: 'https://dark-portfolio-site.vercel.app/',
    email: process.env.CONTACT_EMAIL,
  },
  themeColor: '#0f172a',
  googleSiteVerificationId: '', // TODO

  //  <Metadata>
  metadata: {
    title: 'PS Parwez • Developer Portfolio',
    description:
      'Explore the work, projects, and achievements of PS Parwez — front-end developer crafting modern, responsive, and accessible web apps using Next.js and React.',
    openGraph: {
      type: 'website',
      url: env.SITE_URL,
      title: 'PS Parwez • Developer Portfolio',
      description:
        'Explore the work, projects, and achievements of PS Parwez — front-end developer crafting modern, responsive, and accessible web apps using Next.js and React.',
      siteName: 'PS Parwez',

      images: [
        {
          url: `${env.SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'PS Parwez Portfolio Preview',
        },
      ],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@psparwez',
      creator: '@psparwez',
      title: 'PS Parwez • Developer Portfolio',
      description:
        'Front-end developer building sleek and performant web experiences with Next.js, React, and Tailwind CSS.',
      images: [`${env.SITE_URL}/og-image.png`],
    },
  },
};
