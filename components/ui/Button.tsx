import clsx from 'clsx';
import React from 'react';

interface ButtonProps {
  icon?: React.ReactNode;
  title: string;
  onClick?: () => void;
  position?: 'left' | 'right';
  href?: string;
  className?: string;
}

export default function Button({
  icon,
  title,
  position = 'left',
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-almost-black hover:bg-dark-gray-4 border-dark-gray-4 group relative flex cursor-pointer flex-nowrap items-center justify-center gap-1.5 overflow-visible rounded-[10px] border p-[14px_18px] transition-all duration-300',
        position === 'left' ? 'flex-row' : 'flex-row-reverse',
        !/w-(\S+)/.test(className) && 'w-full',
        className
      )}
    >
      {icon && (
        <div>
          <span className='text-very-light-gray opacity-70'>{icon}</span>
        </div>
      )}
      <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre opacity-70 group-hover:opacity-100'>
        <p className='text-very-light-gray font-IBM_Plex_Mono text-[15px] leading-[100%] font-medium whitespace-pre uppercase'>
          {title}
        </p>
      </div>
    </button>
  );
}
