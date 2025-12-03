'use client';

import { Calendar1, Mail } from 'lucide-react';

import { emailIcon, emailIconLight } from '@/app/assets/assets';
import ContactForm from '@/components/ContactForm/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/ui/Button';

export default function ContactSection() {
  return (
    <>
      <SectionHeading
        darkImage={emailIcon}
        lightImage={emailIconLight}
        title='I Love to hear from you.'
        description="Connect with Me Today. Let's Create Something Amazing Together!"
      >
        <div className='relative flex h-min w-full flex-none flex-nowrap items-start justify-start gap-3 p-0 sm:gap-4'>
          <Button
            position='left'
            className='w-full sm:w-min'
            icon={<Mail size={18} />}
            title='Email Me'
          />
          <Button
            position='left'
            className='w-full sm:w-min'
            icon={<Calendar1 size={18} />}
            title='Schedule Call'
          />
        </div>
      </SectionHeading>

      <ContactForm />
    </>
  );
}
