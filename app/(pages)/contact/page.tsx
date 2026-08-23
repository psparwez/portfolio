import ContactSection from './_components/contact-client';
import FAQsSection from '@/components/faqs';
import SectionHeading from '@/components/section-heading';
import { ICONS } from '@/components/icons';

import { createMetadata } from '@/lib/seo';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/json-ld';
import { JsonLd } from '@/components/json-ld';

export const metadata = createMetadata({
  title: 'Contact',
  description:
    'Get in touch with Your Name for freelance projects, web development, collaborations, and software development opportunities.',
  path: '/contact',
});

export default function ContactPage() {
  const schema = createWebPageSchema({
    name: 'Contact | PS Parwez',
    description:
      'Contact PS Parwez for web development, frontend development, and collaboration opportunities.',
    path: '/contact',
    type: 'ContactPage',
  });
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema} />

      <ContactSection />
      <div className='space-y-10'>
        <SectionHeading
          title='Common Queries'
          description='Get Answers to Common Queries. Your Questions, Addressed Simply.'
          icon={
            <ICONS.questionMark
              width={30}
              height={30}
            />
          }
        />
        <FAQsSection />
      </div>
    </>
  );
}

const breadcrumbSchema = createBreadcrumbSchema([
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]);
