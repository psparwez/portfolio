import React from 'react';

import ThemeSwitcher from '../ui/ThemeSwitcher';

export default function Footer() {
  return (
    <footer
      className='bg-darkest-gray border-border-color relative flex h-min w-full flex-col flex-nowrap items-center justify-center gap-2.5 overflow-visible border-t px-0 py-10'
      aria-label='Main site footer'
    >
      <div className='relative flex h-min w-full flex-none flex-col flex-nowrap items-center justify-center gap-2.5 overflow-hidden p-0'>
        <div className='relative flex h-min w-[80%] flex-none flex-col-reverse flex-nowrap items-center justify-center gap-5 overflow-hidden p-0 sm:flex-row sm:items-start sm:gap-0'>
          <CopyrightText />
          {/* theme toggle */}
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}

const CopyrightText = () => {
  return (
    <div className='relative flex h-auto flex-1 shrink-0 justify-start wrap-break-word whitespace-pre-wrap'>
      <small
        className='text-light-gray-2 text-base font-medium sm:text-lg'
        aria-label={`Copyright ${new Date().getFullYear()} Parwez. All rights reserved.`}
      >
        &copy; {new Date().getFullYear()} Parwez. All rights reserved.
      </small>
    </div>
  );
};
