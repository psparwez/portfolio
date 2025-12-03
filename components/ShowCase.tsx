'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  flyIcon as flyIconDark,
  flyIconLight,
  linkIcon as linkIconDark,
  linkIconLight,
  rightArrow as rightArrowDark,
  rightArrowLight,
} from '@/app/assets/assets';
import { myShowCases } from '@/data';

import DynamicIcon from './dynamic-icon';
import SectionHeading from './SectionHeading';

export default function ShowCase({
  isMore = true,
  showData = 2,
}: {
  isMore: boolean;
  showData: number;
}) {
  return (
    <section
      aria-labelledby='showcase-heading'
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-[30px] overflow-visible'
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          title='Creative Design Showcase'
          darkImage={flyIconDark}
          lightImage={flyIconLight}
          description='Explore a collection of my most innovative and visually stunning design works.'
        />
      </div>

      <div className='relative flex h-min w-full flex-none flex-wrap items-start justify-start gap-2.5 overflow-visible p-0'>
        {myShowCases?.slice(0, showData).map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{
              once: true,
            }}
            className='relative h-auto w-full flex-none'
            key={item.id}
          >
            <div className='bg-very-dark-gray border-dark-gray-3 relative flex h-min w-full flex-col flex-nowrap items-center justify-start gap-5 overflow-visible rounded-xl border p-4 lg:flex-row lg:p-[8px_24px_8px_8px]'>
              <div className='relative h-[180px] w-full rounded-xl lg:flex-1'>
                <figure className='relative inset-0 h-full w-full rounded-xl lg:absolute'>
                  <Image
                    src={item.image}
                    className='block h-full w-full rounded-[inherit] object-cover object-center'
                    height={180}
                    width={180}
                    alt={item.title}
                  />
                </figure>
              </div>

              <div className='relative flex h-min w-full flex-1 flex-col flex-nowrap items-start justify-start gap-5 overflow-visible p-0'>
                <div className='relative flex h-min w-full flex-1 flex-col flex-nowrap items-start justify-start gap-4 overflow-visible p-0'>
                  <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-between gap-5 overflow-visible p-0'>
                    <div className='relative h-auto flex-1 shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                      <h3 className='text-[22px] leading-[1.2em] font-bold text-white'>
                        {item.title}
                      </h3>
                    </div>

                    <div className='relative h-auto flex-none'>
                      <Link
                        href={'https://' + item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`Visit project website for ${item.title}`}
                        className='bg-almost-black border-dark-gray-4 custom-padding group hover:bg-dark-gray-4 relative flex h-min w-min cursor-pointer flex-nowrap items-center justify-center gap-1.5 overflow-visible rounded-lg border transition-all duration-500'
                      >
                        <div className='relative aspect-square h-auto w-5 flex-none overflow-visible opacity-70 transition-all duration-500 group-hover:opacity-100'>
                          <figure className='absolute inset-0 h-full w-full rounded-[inherit]'>
                            <DynamicIcon
                              lightImage={linkIconLight}
                              darkImage={linkIconDark}
                              height={20}
                              width={20}
                              altText='Link icon'
                              className='block h-full w-full rounded-[inherit] object-cover object-center'
                            />
                          </figure>
                        </div>

                        <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col whitespace-pre opacity-70 transition-all duration-500 group-hover:opacity-100'>
                          <p className='text-light-gray-3 text-[15px] leading-[100%] font-medium'>
                            {item.link}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className='border-dark-gray-3 relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-3 overflow-visible border-y px-0 py-3'>
                    <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col whitespace-pre'>
                      <p className='text-light-gray-2 text-[15px] font-medium'>{item.type}</p>
                    </div>
                    <div className='bg-medium-gray relative aspect-square h-[5px] w-[5px] flex-none rounded-full'></div>
                    <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col whitespace-pre'>
                      <p className='text-light-gray-2 text-[15px] font-medium'>
                        {item.pages} Pages
                      </p>
                    </div>
                    <div className='bg-medium-gray relative aspect-square h-[5px] w-[5px] flex-none rounded-full'></div>
                    <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col whitespace-pre'>
                      <p className='text-light-gray-2 text-[15px] font-medium'>
                        {item.theme} Theme
                      </p>
                    </div>
                  </div>
                </div>

                <div className='relative flex h-auto w-full flex-none flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                  <p className='text-light-gray-2 text-[15px] font-medium'>{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {isMore && (
        <div className='relative block h-auto w-full flex-1'>
          <Link
            href={`/services`}
            className='bg-almost-black border-dark-gray-4 group hover:bg-dark-gray-4 relative flex h-min w-full cursor-pointer flex-nowrap items-center justify-center gap-1.5 overflow-visible rounded-[10px] border p-[14px_18px] transition-all duration-500'
          >
            <div className='relative flex h-auto w-auto flex-none shrink-0 justify-start whitespace-pre opacity-70 transition-all duration-500 group-hover:opacity-100'>
              <p className='font-IBM_Plex_Mono text-very-light-gray text-[15px] font-medium uppercase'>
                View All projects
              </p>
            </div>
            <div className='relative aspect-square h-auto w-5 flex-none overflow-hidden opacity-70 transition-all duration-500 group-hover:opacity-100'>
              <figure className='absolute inset-0 rounded-[inherit]'>
                <DynamicIcon
                  lightImage={rightArrowLight}
                  darkImage={rightArrowDark}
                  height={10}
                  width={10}
                  altText='Right arrow icon'
                  className='block h-full w-full -rotate-45 rounded-[inherit] object-cover object-center'
                />
              </figure>
            </div>
          </Link>
        </div>
      )}
    </section>
  );
}
