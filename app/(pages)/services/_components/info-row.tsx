import React from 'react';
type InfoRowProps = {
  label: string;
  value: string | number;
};
export default function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className='border-dark-gray-3 flex w-full items-center justify-between border-b px-4 py-2 last:border-transparent'>
      <div className='flex-1'>
        <p className='text-light-gray-2 text-[15px] font-medium'>{label}</p>
      </div>
      <div className='flex-1 text-right'>
        <p className='text-light-gray-4 text-[18px] font-bold'>{value}</p>
      </div>
    </div>
  );
}
