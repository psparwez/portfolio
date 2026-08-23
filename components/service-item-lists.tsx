'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';
import { SERVICES } from '@/config/site-config';
import { ICONS } from './icons';

export default function ServiceItemLists() {
  return (
    <div className='w-full'>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='relative grid h-min w-full flex-none auto-rows-min grid-cols-1 justify-center gap-2.5 overflow-visible p-0 lg:grid-cols-[repeat(2,minmax(50px,1fr))] lg:grid-rows-[repeat(2,min-content)]'
      >
        {SERVICES?.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.li
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{
                once: true,
              }}
              className='w-full'
            >
              <Link
                href={'/services'}
                aria-label={`Read more about ${service.title}`}
                className='bg-very-dark-gray border-dark-gray-3 group relative flex h-min w-full cursor-pointer flex-col flex-nowrap items-start justify-start gap-3.5 overflow-visible rounded-xl border p-5'
              >
                {/* top  */}
                <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-2.5 overflow-visible p-0'>
                  <div className='border-border-color bg-dark-gray-3 relative flex h-min w-min flex-none flex-nowrap items-center justify-center gap-2.5 overflow-hidden rounded-lg border p-2'>
                    <div className='relative aspect-square h-auto w-7.5 flex-none overflow-hidden'>
                      <Icon
                        width={30}
                        height={30}
                        className='text-very-light-gray! block h-full w-full rounded-[inherit] object-cover object-center'
                      />
                    </div>
                  </div>

                  <div className='relative flex h-auto flex-1 shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                    <p className='text-[20px] leading-[1.2em] font-bold text-white'>
                      {service.title}
                    </p>
                  </div>

                  <div className='relative aspect-square h-auto w-7.5 flex-none overflow-hidden opacity-0 transition-all duration-500 group-hover:opacity-100'>
                    <div className='absolute top-0 right-0 bottom-0 left-0 rounded-[inherit]'>
                      <ICONS.rightArrow
                        width={20}
                        height={20}
                        className='block h-full w-full rounded-[inherit] object-cover object-center transition-all duration-500 group-hover:-rotate-45'
                      />
                    </div>
                  </div>
                </div>
                {/* bottom */}
                <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                  <p className='text-light-gray-2 text-[15px] font-medium'>{service.description}</p>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
