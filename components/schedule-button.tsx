'use client';
import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { ICONS } from './icons';
import { SITE_CONFIG } from '@/config/site-config';

interface ScheduleButtonProps {
  label: string;
}

export default function ScheduleButton({ label }: ScheduleButtonProps) {
  const { calUsername, namespace, defaultLayout } = SITE_CONFIG.booking;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '15min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);
  return (
    <button
      data-cal-namespace={namespace}
      data-cal-link={`${calUsername}/${namespace}`}
      data-cal-config={`{"layout":"${defaultLayout}"}`}
      className='bg-almost-black hover:bg-dark-gray-4 border-dark-gray-4 group group relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border p-[14px_18px] transition-all duration-300'
    >
      <div className='flex items-center justify-center gap-2'>
        {/* Icon */}
        <div className='relative aspect-square h-5 w-5 overflow-hidden opacity-70 transition-all duration-500 group-hover:opacity-100'>
          <ICONS.calendar size={20} />
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
