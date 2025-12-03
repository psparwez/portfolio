'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';

import { RightSidebar } from '@/components/layouts/page-layout';
import { socialLists } from '@/data';

export default function SocialLists() {
  return (
    <RightSidebar aria-label='Social media links'>
      <div className='relative flex h-full flex-col flex-nowrap items-start justify-center gap-2 overflow-hidden p-0'>
        {/* middle  */}
        <div className='border-border-color relative flex h-full flex-1 flex-col flex-nowrap items-start justify-center overflow-hidden border-l p-[20px_0px_40px_30px]'>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='flex flex-col items-center gap-5'
          >
            {socialLists.map((social, index) => (
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{
                  once: true,
                }}
                key={social.id}
                className='flex items-center gap-10'
              >
                <Link
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Visit ${social.title}`}
                  className='bg-very-dark-gray hover:bg-dark-gray-3 border-dark-gray-3 group rounded-xl border p-3 transition-all duration-300'
                >
                  <span className='text-light-gray-1 group-hover:text-light-gray-3 text-sm transition-all duration-300'>
                    {social.icon}
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </RightSidebar>
  );
}
