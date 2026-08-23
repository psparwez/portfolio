/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from '@/components/icons';
import { FOLLOWERS_DATA } from '@/config/site-config';
import { itemVariants, listVariants } from '@/lib/animations/varients';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function FollowerLists() {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={listVariants as any}
      viewport={{ once: true }}
      className='flex flex-col gap-4'
    >
      <ul className='flex flex-col gap-4'>
        {FOLLOWERS_DATA.map((data, index) => {
          const Icon = data.icon;
          return (
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
                  <Icon
                    width={30}
                    height={30}
                    className='object-contain'
                  />
                </div>
                {/* Follower Info */}
                <div className='flex flex-col'>
                  <p className='text-light-gray-4 text-lg font-semibold'>{data.followers}</p>
                  <p className='text-light-gray-2 text-sm font-medium capitalize'>
                    {data.platform}
                  </p>
                </div>
                {/* Right Arrow */}
                <div className='ml-auto h-6 w-6 opacity-50 transition-all group-hover:opacity-100'>
                  <ICONS.rightArrow
                    width={24}
                    height={24}
                    className='transition-all duration-500 group-hover:-rotate-45'
                  />
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}
