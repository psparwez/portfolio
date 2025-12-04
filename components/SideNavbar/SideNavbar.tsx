'use client';

import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AvatarMe } from '@/app/assets/assets';
import { pagesLists } from '@/data';
import { cn } from '@/lib/utils';

import Tooltip from '../ui/Tooltop';

interface SideNavbarProps {
  isMenuOpen?: boolean;
}

export default function SideNavbar({ isMenuOpen }: SideNavbarProps) {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5, type: 'spring' }}
      className='border-border-color absolute top-0 z-10 h-screen w-full max-w-[13%] flex-none border-r md:sticky lg:block'
      style={{
        left: isMenuOpen ? '0' : '-100%',
        maxWidth: isMenuOpen ? '140px' : '13%',
      }}
    >
      <div className='relative flex h-full flex-none flex-col flex-nowrap items-end justify-between p-[20px_30px_40px_0px]'>
        <Logo />
        <NavigationListsItem />
        <BackToTop />
      </div>
    </motion.div>
  );
}

const Logo = () => {
  return (
    <Link
      href='/'
      aria-label='Go to homepage'
      className='bg-border-color relative flex aspect-square h-auto w-[50px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 p-1 transition-all duration-300 hover:scale-95'
    >
      <div className='absolute inset-0 rounded-full'>
        <Image
          src={AvatarMe}
          fill
          quality={100}
          alt='Avatar'
          className='block h-full w-full object-fill object-center opacity-80'
        />
      </div>
    </Link>
  );
};

const NavigationListsItem = () => {
  const pathname = usePathname();

  return (
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='relative z-10 flex h-min w-min flex-none flex-col flex-nowrap items-start justify-start gap-4 p-0'
    >
      {pagesLists.map((page, index) => {
        const isActive = pathname === page.href;
        return (
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{
              once: true,
            }}
            key={page.id}
          >
            <Link
              href={page.href}
              aria-label={page.title}
              className={cn(
                'group relative flex h-min w-min cursor-pointer items-center justify-center rounded-xl border border-transparent p-3.5 transition-all duration-300',
                isActive
                  ? 'bg-almost-black border-dark-gray-5 text-white'
                  : 'hover:bg-very-dark-gray hover:border-dark-gray-3'
              )}
            >
              <span className={` ${isActive ? 'text-light-gray-3' : 'text-light-gray-2'} `}>
                {page.icon}
              </span>

              <Tooltip
                content={page.title}
                position='right'
              />
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

const BackToTop = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        type: 'spring',
        stiffness: 120,
      }}
      className='group relative flex w-full max-w-max items-center justify-end'
    >
      <Link
        href='#top'
        aria-label='Go to top'
        className={`hover:bg-very-dark-gray hover:border-dark-gray-3} relative flex h-min w-min cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-transparent p-3.5`}
      >
        <span className='text-light-gray-2'>
          <ArrowUp size={24} />
        </span>
      </Link>
      <Tooltip
        content='Go to Top'
        position='top'
      />
    </motion.div>
  );
};
