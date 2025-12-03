import React from 'react';

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Tooltip({ content, position = 'right' }: TooltipProps) {
  return (
    <div
      className={`border-border-color bg-almost-black pointer-events-none invisible absolute z-10 items-center rounded-lg border px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:flex group-hover:opacity-100 ${
        position === 'top'
          ? '-top-12 left-1/2 mb-2 -translate-x-1/2'
          : position === 'bottom'
            ? 'top-full left-1/2 mt-2 -translate-x-1/2'
            : position === 'left'
              ? 'top-1/2 right-full mr-2 -translate-y-1/2'
              : 'top-1/2 left-full ml-6 -translate-y-1/2'
      } ${position === 'right' ? '-translate-x-5 transform group-hover:translate-x-0' : ''} ${position === 'left' ? 'translate-x-5 transform group-hover:-translate-x-4' : ''} ${position === 'top' ? 'translate-y-5 transform group-hover:translate-y-0' : ''} ${position === 'bottom' ? '-translate-y-5 transform group-hover:translate-y-4' : ''} `}
      data-title='tooltip'
      aria-describedby='tooltip'
      role='tooltip'
    >
      {content}

      {/* Arrow */}
      <span
        className={`bg-almost-black border-border-color absolute -z-10 h-4 w-4 rotate-45 ${position === 'bottom' ? 'bottom-[75%] left-1/2 -translate-x-1/2 border-t border-l' : ''} ${position === 'top' ? 'top-[65%] left-1/2 -translate-x-1/2 border-r border-b' : ''} ${position === 'right' ? 'top-1/2 right-full -left-1.5 -translate-y-1/2 border-b border-l' : ''} ${position === 'left' ? 'top-1/2 left-[90%] -translate-y-1/2 border-t border-r' : ''} `}
      />
    </div>
  );
}
