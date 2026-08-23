import type { ComponentPropsWithRef } from 'react';
import React from 'react';
import { cn } from '@/lib/utils';
import LeftSidebarInternal from '../left-sidebar';
import RightSidebarInternal from '../right-sidebar';
import SiteFooter from '../site-footer';
import SiteHeader from '../site-header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative flex w-full min-w-0 items-start gap-4 px-3 md:gap-0 lg:px-0'>
      <LeftSidebar />
      <MainContent>{children}</MainContent>
      <RightSidebar />
    </div>
  );
}

export const LeftSidebar = () => {
  return (
    <>
      <LeftSidebarInternal />
    </>
  );
};

export const MainContent = ({ children, className, ...props }: ComponentPropsWithRef<'div'>) => {
  return (
    <div className='flex min-w-0 flex-1 flex-col'>
      <SiteHeader />
      <main
        className={cn(
          'relative mx-auto flex h-min w-full flex-col flex-wrap items-center justify-center gap-(--gap) overflow-hidden p-[80px_0px] [--gap:100px] sm:px-5 md:px-4 lg:w-[80%] lg:max-w-187.5 lg:flex-1 lg:flex-nowrap lg:px-0',
          className
        )}
        {...props}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};

export const RightSidebar = ({ className, ...props }: ComponentPropsWithRef<'aside'>) => {
  return (
    <aside
      className={cn(
        'sticky top-0 z-10 hidden h-screen w-full max-w-[13%] flex-none md:block',
        className
      )}
      {...props}
    >
      <RightSidebarInternal />
    </aside>
  );
};
