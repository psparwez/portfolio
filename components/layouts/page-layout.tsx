import type { ComponentPropsWithRef } from 'react';
import React from 'react';

import SideNavbar from '@/components/SideNavbar/SideNavbar';
import SocialLists from '@/components/Socials/SocialLists';
import { cn } from '@/lib/utils';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex items-start gap-4 px-3 md:gap-0 lg:px-0'>
      <SideNavbar />
      <Content>{children}</Content>
      <SocialLists />
    </div>
  );
}

export const LeftSidebar = ({ children, className, ...props }: ComponentPropsWithRef<'aside'>) => {
  return (
    <aside
      className={cn('', className)}
      {...props}
    >
      {children}
    </aside>
  );
};

export const Content = ({ children, className, ...props }: ComponentPropsWithRef<'main'>) => {
  return (
    <main
      className={cn(
        'relative flex h-min w-full flex-col flex-wrap items-center justify-start gap-0 overflow-hidden p-0 sm:px-5 lg:flex-1 lg:flex-nowrap lg:px-0',
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
};

export const RightSidebar = ({ children, className, ...props }: ComponentPropsWithRef<'aside'>) => {
  return (
    <aside
      className={cn(
        'sticky top-0 z-10 hidden h-screen w-full max-w-[13%] flex-none md:block',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
};
