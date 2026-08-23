'use client';

import { Calendar1, Mail } from 'lucide-react';
import { motion } from 'motion/react';

import SectionHeading from '@/components/section-heading';
import { ICONS } from '@/components/icons';
import Button from '@/components/ui/button';
import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <div className='space-y-10'>
      <SectionHeading
        title='I Love to hear from you.'
        description="Connect with Me Today. Let's Create Something Amazing Together!"
        icon={
          <ICONS.email
            width={30}
            height={30}
          />
        }
      >
        <div className='relative flex h-min w-full flex-none flex-nowrap items-start justify-start gap-3 p-0 sm:gap-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              stiffness: 200,
              type: 'spring',
            }}
          >
            <Button
              position='left'
              className='w-full sm:w-min'
              icon={<Mail size={18} />}
              title='Email Me'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              stiffness: 200,
              type: 'spring',
            }}
          >
            <Button
              position='left'
              className='w-full sm:w-min'
              icon={<Calendar1 size={18} />}
              title='Schedule Call'
            />
          </motion.div>
        </div>
      </SectionHeading>

      <ContactForm />
    </div>
  );
}
