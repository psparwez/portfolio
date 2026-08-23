import StackSection from '@/components/stack-section';
import ServicesSection from './_components/services-client';
import Testimonials from '@/components/testimonials';
import ShowCaseProjects from '@/components/show-case-projects';
import { createMetadata } from '@/lib/seo';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/json-ld';
import { JsonLd } from '@/components/json-ld';

export const metadata = createMetadata({
  title: 'Services',
  description:
    'Explore web development, full-stack development, UI engineering, and custom software development services.',
  path: '/services',
});

export default function SearvicesPage() {
  const schema = createWebPageSchema({
    name: 'Services | PS Parwez',
    description: 'Web development and frontend development services by PS Parwez.',
    path: '/services',
  });
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema} />

      <ServicesSection />
      <StackSection />
      <ShowCaseProjects />
      <Testimonials />
    </>
  );
}

const breadcrumbSchema = createBreadcrumbSchema([
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
]);
