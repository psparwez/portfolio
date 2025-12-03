import React from 'react';

import LocalTime from '../local-time';
import AvailableForWorkBtn from '../ui/AvailableForWorkBtn';

export default function DesktopNav() {
  return (
    <div className='hidden w-full items-center justify-between sm:flex'>
      <AvailableForWorkBtn />
      <LocalTime />
    </div>
  );
}
