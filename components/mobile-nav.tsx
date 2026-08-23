import { Equal, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { SITE_CONFIG } from '@/config/site-config';
import AvailableForWorkBtn from './available-for-work-btn';

interface MobileNavProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileNav({ isMenuOpen, toggleMenu }: MobileNavProps) {
  return (
    <div className='flex w-full items-center justify-between sm:hidden'>
      <MobileLogo />
      <div className='flex items-center gap-2'>
        <AvailableForWorkBtn />
        <ToogleMenuButton
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      </div>
    </div>
  );
}

const MobileLogo = () => {
  return (
    <Link
      href='/'
      aria-label='Go to homepage'
      className='dark:bg-border-color! border-border-color! relative flex aspect-square h-auto w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-transparent! p-1 transition-all duration-300 hover:scale-95 sm:hidden dark:border-zinc-800!'
    >
      <div className='absolute inset-0 rounded-full'>
        <Image
          src={SITE_CONFIG.profile.avatar}
          fill
          quality={100}
          alt='Avatar'
          className='block h-full w-full object-fill object-center opacity-80'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
    </Link>
  );
};

const ToogleMenuButton = ({
  toggleMenu,
  isMenuOpen,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <button
      onClick={toggleMenu}
      className='bg-almost-black hover:bg-dark-gray-4 border-dark-gray-4 relative z-2000 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-all duration-500 md:hidden'
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMenuOpen}
      aria-controls='mobile-menu'
    >
      <span>
        {isMenuOpen ? (
          <X
            size={24}
            className='text-light-gray-3'
          />
        ) : (
          <Equal
            size={24}
            className='text-light-gray-3'
          />
        )}
      </span>
    </button>
  );
};
