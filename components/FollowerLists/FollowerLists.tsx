import { motion } from 'motion/react';
import Link from 'next/link';

import { itemVariants, listVariants } from '@/animation/varients';
import { rightArrowLight } from '@/app/assets/assets';
import type { FollowerData } from '@/types';

import DynamicIcon from '../dynamic-icon';

interface ContactFormProps {
  followerData: FollowerData[];
  rightArrow: string;
}

export default function FollowerLists({ followerData, rightArrow }: ContactFormProps) {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={listVariants as any}
      viewport={{ once: true }}
      className='flex flex-col gap-4'
    >
      <ul className='flex flex-col gap-4'>
        {followerData.map((data, index) => (
          <motion.li
            key={index}
            variants={itemVariants as any}
          >
            <Link
              href={data.url}
              className='bg-very-dark-gray border-dark-gray-3 hover:bg-almost-black group flex items-center gap-4 rounded-xl border p-4 transition-all'
            >
              {/* Icon */}
              <div className='bg-dark-gray-4 border-border-color flex h-12 w-12 items-center justify-center rounded-lg border'>
                <DynamicIcon
                  darkImage={data.icon}
                  lightImage={data.lightIcon}
                  altText={data.platform}
                  width={30}
                  height={30}
                  className='object-contain'
                />
              </div>
              {/* Follower Info */}
              <div className='flex flex-col'>
                <p className='text-light-gray-4 text-lg font-semibold'>{data.followers}</p>
                <p className='text-light-gray-2 text-sm font-medium capitalize'>{data.platform}</p>
              </div>
              {/* Right Arrow */}
              <div className='ml-auto h-6 w-6 opacity-50 transition-all group-hover:opacity-100'>
                <DynamicIcon
                  darkImage={rightArrow}
                  lightImage={rightArrowLight}
                  altText='Right Arrow'
                  width={24}
                  height={24}
                  className='transition-all duration-500 group-hover:-rotate-45'
                />
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
