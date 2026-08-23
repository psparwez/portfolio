import ExperienceSection from '@/components/experience-section';
import HeroSection from '@/components/hero-section';
import { JsonLd } from '@/components/json-ld';
import ServicesSection from '@/components/services-section';
import ShowCaseProjects from '@/components/show-case-projects';
import StackSection from '@/components/stack-section';
import Testimonials from '@/components/testimonials';
import { SITE_CONFIG } from '@/config/site-config';
import { createPersonSchema, createWebsiteSchema } from '@/lib/json-ld';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: `${SITE_CONFIG.profile.displayName} • Developer Portfolio`,
  description: `The personal portfolio of ${SITE_CONFIG.profile.name} — Front-end developer specializing in building fast, accessible, and visually appealing web experiences with React, Next.js, and modern UI design.`,
  path: '/',
});

export default function Home() {
  const personSchema = createPersonSchema();
  const websiteSchema = createWebsiteSchema();
  return (
    <>
      <JsonLd data={[personSchema, websiteSchema]} />

      <HeroSection />
      <ExperienceSection />
      <StackSection />
      <ServicesSection />
      <ShowCaseProjects
        isMore
        showData={2}
      />
      <Testimonials />
    </>
  );
}
