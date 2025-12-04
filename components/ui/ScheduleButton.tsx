'use client';
import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

import DynamicIcon from '../dynamic-icon';

interface ScheduleButtonProps {
  lightIcon: string;
  darkIcon: string;
  label: string;
}

export default function ScheduleButton({ lightIcon, darkIcon, label }: ScheduleButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '15min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);
  return (
    <button
      data-cal-namespace='15min'
      data-cal-link='psparwez/15min'
      data-cal-config='{"layout":"month_view"}'
      className='bg-almost-black hover:bg-dark-gray-4 border-dark-gray-4 group group relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border p-[14px_18px] transition-all duration-300'
    >
      <div className='flex items-center justify-center gap-2'>
        {/* Icon */}
        <div className='relative aspect-square h-5 w-5 overflow-hidden opacity-70 transition-all duration-500 group-hover:opacity-100'>
          <figure className='absolute inset-0 h-full w-full rounded-[inherit]'>
            <DynamicIcon
              darkImage={darkIcon}
              lightImage={lightIcon}
              altText='calendarIcon'
              className='block h-full w-full object-cover object-center'
              width={20}
              height={20}
            />
          </figure>
        </div>

        {/* Text */}
        <div className='h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre opacity-70 group-hover:opacity-100'>
          <p className='text-very-light-gray font-IBM_Plex_Mono text-[15px] leading-[100%] font-medium uppercase'>
            {label}
          </p>
        </div>
      </div>
    </button>
  );
}
