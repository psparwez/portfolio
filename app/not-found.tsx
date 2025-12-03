import { Undo2 } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center py-36'>
      <h2 className='text-light-gray-3 mb-1 text-7xl font-bold'>404</h2>
      <p className='text-light-gray-4 text-xl font-semibold'> Page Not Found</p>
      <div className='my-10'>
        <Link
          href='/'
          className='bg-almost-black border-border-color hover:bg-dark-gray-4 group flex w-min flex-nowrap items-center gap-2 rounded-3xl border px-3 py-2 transition-all duration-500'
        >
          <span className='text-light-gray-2 group-hover:text-light-gray-4 whitespace-nowrap transition-all duration-500'>
            <Undo2 size={17} />
          </span>
          <span className='text-light-gray-2 group-hover:text-light-gray-4 whitespace-nowrap transition-all duration-500'>
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
