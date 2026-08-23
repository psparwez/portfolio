import React from 'react';

import AvailableForWorkBtn from './available-for-work-btn';
import LocalTime from './local-time';

export default function DesktopNav() {
  return (
    <div className='hidden w-full items-center justify-between sm:flex'>
      <AvailableForWorkBtn />
      <LocalTime />
    </div>
  );
}
