'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useCloseOnResize } from '@/hooks/use-close-on-resize';

import SideNavbar from '../SideNavbar/SideNavbar';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useCloseOnResize(() => setIsMenuOpen(false), 768);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    <>
      <nav className='border-border-color bg-darkest-gray fixed top-0 left-0 z-20 w-full border-b p-6 px-4 shadow-[0_10px_40px_var(--darkest-gray)] sm:static sm:bg-transparent sm:px-6 md:shadow-none'>
        <MobileNav
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
        <DesktopNav />
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <LeftMobileSidebar
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
        />
      )}
    </>
  );
}

const LeftMobileSidebar = ({
  toggleMenu,
  isMenuOpen,
}: {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <>
      {createPortal(
        <>
          <div
            className='bg-opacity-50 bg-darkest-gray fixed inset-0 z-30'
            onClick={toggleMenu}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
            }}
            id='mobile-menu'
            role='button'
            tabIndex={0}
            aria-label='Close menu overlay'
          >
            <SideNavbar isMenuOpen={isMenuOpen} />
          </div>
        </>,
        document.body
      )}
    </>
  );
};
