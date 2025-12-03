import React, { useCallback, useEffect, useState } from 'react';

export default function LocalTime() {
  const [time, setTime] = useState<string>('');

  const formatTime = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  const convertTo12HourFormat = (hh: number): { hh: number; period: string } => {
    const period = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12;
    hh = hh ? hh : 12;
    return { hh, period };
  };

  const updateTime = useCallback(() => {
    const today = new Date();
    const hh = today.getHours();
    const mm = today.getMinutes();
    const ss = today.getSeconds();
    const { hh: formattedHH } = convertTo12HourFormat(hh);

    const formattedTime = `${formatTime(formattedHH)}:${formatTime(mm)}:${formatTime(ss)}`;
    setTime(formattedTime);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  return (
    <div
      className='hidden items-center gap-3 md:flex'
      aria-label={`Local time in IST is ${time}`}
    >
      <p className='text-light-gray-2 font-medium'>Local Time ( IST )</p>
      <div className='bg-dark-gray-1 flex w-[110px] items-center justify-center rounded-xl border-[rgb(24,24,26)] p-[14px_18px]'>
        <p
          className='text-light-gray-4 text-base leading-[1em] font-semibold tracking-[0.07em] tabular-nums'
          aria-hidden='true'
        >
          {time}
        </p>
      </div>
    </div>
  );
}
