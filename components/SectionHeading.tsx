'use client';
import { motion } from 'motion/react';
import type { StaticImageData } from 'next/image';
import React from 'react';

import DynamicIcon from './dynamic-icon';
interface Props {
  darkImage: string | StaticImageData;
  lightImage: string | StaticImageData;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function SectionHeading({
  darkImage,
  lightImage,
  title,
  description,
  children,
}: Props) {
  return (
    <div className='border-dark-gray-4 relative float-start flex h-min w-full flex-col flex-nowrap justify-start gap-2.5 overflow-visible border-b border-dashed p-[0px_0px_30px]'>
      <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-1.5 overflow-visible p-0'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          viewport={{ once: true }}
          className='relative aspect-auto w-[30px] flex-none overflow-hidden'
        >
          <figure className='relative top-0 right-0 bottom-0 left-0 rounded-[inherit] text-white'>
            <DynamicIcon
              width={30}
              height={30}
              altText={`${title} icon`}
              darkImage={darkImage}
              lightImage={lightImage}
              className='block h-full w-full rounded-[inherit] object-cover object-center'
            />
          </figure>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          viewport={{ once: true }}
          className='relative h-auto w-full flex-1 shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'
        >
          <h2 className='text-2xl leading-[1.2em] font-bold text-white sm:text-[26px]'>{title}</h2>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className='text-light-gray-2 text-lg font-medium'>{description}</p>
      </motion.div>
      {children}
    </div>
  );
}
