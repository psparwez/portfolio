'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';

import { myExperience } from '@/data';

import DynamicIcon from '../dynamic-icon';

export default function ExperienceItem() {
  return (
    <div className='w-full'>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-2.5 overflow-visible p-0'
      >
        {myExperience?.map((exp, index) => (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{
              once: true,
            }}
            key={exp.id}
            className='bg-very-dark-gray border-dark-gray-3 relative flex h-min w-full flex-col flex-nowrap justify-start gap-5 overflow-visible rounded-xl border p-4 sm:p-6'
          >
            <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-between overflow-visible p-0'>
              <div className='relative flex h-min flex-1 items-center justify-start gap-2 overflow-visible p-0'>
                <div className='bg-dark-gray-4 border-border-color relative float-none flex h-min w-min items-center justify-center gap-2.5 overflow-visible rounded-lg border p-2.5'>
                  <div className='relative aspect-square h-auto w-[30px] flex-none overflow-visible'>
                    <figure className='absolute inset-0 block'>
                      <DynamicIcon
                        width={30}
                        height={30}
                        darkImage={exp.logo}
                        lightImage={exp.logoLight}
                        altText={`${exp.company} logo`}
                        className='block h-full w-full rounded-[inherit] object-cover object-center'
                      />
                    </figure>
                  </div>
                </div>
                <div className='relative float-none flex h-min w-min flex-nowrap items-start justify-center gap-1.5 overflow-visible p-0'>
                  <div className='flex h-min flex-col flex-nowrap items-start justify-start gap-0 overflow-visible'>
                    <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre'>
                      <p className='text-light-gray-4 text-[20px] font-bold'>{exp.company}</p>
                    </div>
                    <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre'>
                      <Link
                        href={exp.link}
                        className='text-light-gray-2 cursor-pointer text-[15px] font-medium'
                        aria-label={`Visit ${exp.company} website`}
                      >
                        {exp.link}
                      </Link>
                    </div>
                  </div>

                  <div className='bg-dark-gray-2 border-dark-gray-3 relative flex h-min w-min flex-none flex-nowrap items-center justify-start gap-2.5 overflow-visible rounded-3xl border p-[4px_10px]'>
                    <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre'>
                      <p className='text-light-gray-2 text-xs font-medium sm:text-[14px]'>
                        {exp.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='hidden h-min w-min flex-none flex-nowrap items-center gap-2.5 overflow-visible p-0 whitespace-pre sm:flex'>
                <h3 className='text-light-gray-2 text-lg leading-[1.2em] font-bold'>{exp.year}</h3>
              </div>
            </div>
            <div className='border-dark-gray-3 bg-darkest-gray relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-1 overflow-visible rounded-xl border p-4'>
              <div className='relative flex w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                <p className='text-light-gray-4 text-base font-bold'>{exp.title}</p>
              </div>
              <div className='relative flex w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                <p className='text-light-gray-2 text-base text-[15px] font-medium'>
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
