/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { motion } from 'motion/react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type React from 'react';
import { useEffect, useState } from 'react';

interface AnimatedImageGridProps {
  image: string | StaticImageData;
}

const AnimatedImageGrid: React.FC<AnimatedImageGridProps> = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className='bg-image-bg border-border-color/20 relative aspect-auto h-auto w-44 flex-none rounded-xl border sm:w-65'>
      <Image
        src={image}
        alt='Profile image'
        width={300}
        height={300}
        className='h-full w-full object-cover'
        preload
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />

      {/* Grids */}
      <div className='absolute inset-0 grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,auto)]'>
        {Array.from({ length: 100 }).map((_, index) => (
          <motion.div
            key={index}
            className='bg-image-bg rounded-xl'
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoaded ? 0 : 1 }}
            transition={{
              duration: 0.5,
              delay: (index % 10) * 0.05,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedImageGrid;
