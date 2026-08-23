'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ICONS } from './icons';
import SectionHeading from './section-heading';
import { TESTINOMIALS } from '@/config/site-config';

export default function Testimonials() {
  return (
    <section
      aria-labelledby='testimonials - Words From Happy Clients'
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-7.5 overflow-visible'
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          title='Words From Happy Clients'
          description='Discover what satisfied clients have to say about their experiences working with me.'
          icon={
            <ICONS.starlig
              width={30}
              height={30}
            />
          }
        />
      </div>

      <div className='relative grid h-min w-full flex-none grid-cols-1 justify-center gap-2.5 overflow-visible p-0 lg:grid-cols-[repeat(2,minmax(50px,1fr))] lg:grid-rows-[repeat(2,min-content)]'>
        {TESTINOMIALS?.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{
              once: true,
            }}
            className='relative h-auto w-full justify-self-start'
            key={testimonial.id}
          >
            <div className='bg-very-dark-gray border-dark-gray-3 relative flex h-min flex-col flex-nowrap items-start justify-start gap-5 overflow-visible rounded-xl border p-5'>
              <div className='relative flex h-min w-full flex-none flex-nowrap justify-start gap-2 overflow-visible p-0'>
                <div className='border-border-color bg-dark-gray-3 relative flex aspect-square h-auto w-12.5 flex-none flex-nowrap items-center justify-center gap-1 overflow-hidden rounded-lg border p-0'>
                  <div className='relative w-full flex-1 overflow-visible'>
                    <figure className='relative inset-0 h-full w-full rounded-[inherit]'>
                      <Image
                        width={50}
                        height={50}
                        src={testimonial.avatar}
                        alt={`${testimonial.name}'s avatar`}
                        className='block h-full w-full rounded-[inherit] object-cover object-center'
                      />
                    </figure>
                  </div>
                </div>

                <div className='relative flex h-min flex-1 flex-col flex-nowrap items-start justify-center gap-1 overflow-visible p-0'>
                  <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                    <p className='text-light-gray-4 text-[18px] font-bold'>{testimonial.name}</p>
                  </div>
                  <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-0.5 overflow-visible p-0'>
                    <span>
                      <ICONS.location fill='var(--light-gray-2)' />
                    </span>
                    <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                      <p className='text-light-gray-2 text-[12px] font-medium'>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='relative h-auto w-auto flex-none'>
                  <Link
                    href={`https://x.com`}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Visit ${testimonial.name}'s X profile`}
                    className='bg-almost-black border-dark-gray-3 custom-padding group hover:bg-dark-gray-4 relative flex h-min w-min cursor-pointer flex-col flex-nowrap items-center justify-end gap-2.5 overflow-visible rounded-[10px] border transition-all duration-500'
                  >
                    <div className='relative aspect-square h-auto w-5 overflow-visible opacity-70 transition-all duration-500 group-hover:opacity-100'>
                      <div className='relative inset-0 rounded-[inherit]'>
                        <ICONS.socials.x
                          width={20}
                          height={20}
                          className='block h-full w-full rounded-[inherit] object-cover object-center'
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className='w- relative flex h-auto flex-none shrink-0 justify-start wrap-break-word whitespace-pre-wrap'>
                {/* <p className='text-[15px] text-light-gray-2 font-medium '>{testimonial.description}</p> */}
                <blockquote className='text-light-gray-2 text-[15px] font-medium whitespace-pre-wrap'>
                  {testimonial.description}
                </blockquote>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
