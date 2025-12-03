'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { rightArrow } from '@/app/assets/assets';
import { myServices } from '@/data';

import DynamicIcon from '../dynamic-icon';

export default function ServiceItemLists() {
  return (
    <div className='w-full'>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='relative grid h-min w-full flex-none auto-rows-min grid-cols-1 justify-center gap-2.5 overflow-visible p-0 lg:grid-cols-[repeat(2,minmax(50px,1fr))] lg:grid-rows-[repeat(2,min-content)]'
      >
        {myServices?.map((service, index) => (
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
              href={service.link}
              aria-label={`Read more about ${service.title}`}
              className='bg-very-dark-gray border-dark-gray-3 group relative flex h-min w-full cursor-pointer flex-col flex-nowrap items-start justify-start gap-3.5 overflow-visible rounded-xl border p-5'
            >
              {/* top  */}
              <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-2.5 overflow-visible p-0'>
                <div className='border-border-color bg-dark-gray-3 relative flex h-min w-min flex-none flex-nowrap items-center justify-center gap-2.5 overflow-hidden rounded-lg border p-2'>
                  <div className='relative aspect-square h-auto w-[30px] flex-none overflow-hidden'>
                    <figure className='absolute inset-0 h-full w-full rounded-[inherit]'>
                      <DynamicIcon
                        width={30}
                        height={30}
                        darkImage={service.icon}
                        lightImage={service.lightIcon}
                        altText={`${service.title} icon`}
                        className='block h-full w-full rounded-[inherit] object-cover object-center'
                      />
                    </figure>
                  </div>
                </div>

                <div className='relative flex h-auto flex-1 shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                  <p className='text-[20px] leading-[1.2em] font-bold text-white'>
                    {service.title}
                  </p>
                </div>

                <div className='relative aspect-square h-auto w-[30px] flex-none overflow-hidden opacity-0 transition-all duration-500 group-hover:opacity-100'>
                  <figure className='absolute top-0 right-0 bottom-0 left-0 rounded-[inherit]'>
                    <Image
                      width={20}
                      height={20}
                      src={rightArrow}
                      alt='icon'
                      className='block h-full w-full rounded-[inherit] object-cover object-center transition-all duration-500 group-hover:-rotate-45'
                    />
                  </figure>
                </div>
              </div>
              {/* bottom */}
              <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                <p className='text-light-gray-2 text-[15px] font-medium'>{service.description}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
