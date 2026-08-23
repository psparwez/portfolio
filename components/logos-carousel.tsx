import React from 'react';
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from './kibo-ui/marquee';
import { LOGOS_CAROUSEL } from '@/config/site-config';

export default function LogosCarousel() {
  return (
    <section className='relative flex h-min w-full flex-none flex-nowrap gap-7.5 overflow-hidden p-[0px_0px_10px]'>
      <div className='maskImage flex max-h-full w-full max-w-full justify-between overflow-hidden p-2.5'>
        <MerqueeItems />
      </div>
    </section>
  );
}

const MerqueeItems = () => {
  return (
    <Marquee className='w-full gap-7'>
      <MarqueeFade side='left' />
      <MarqueeFade side='right' />

      <MarqueeContent>
        {LOGOS_CAROUSEL.map((brand) => {
          const Icon = brand.icon;

          return (
            <MarqueeItem
              key={brand.name}
              className='h-10 w-auto shrink-0'
            >
              <a
                className='relative block h-10 w-25 shrink-0 cursor-pointer overflow-hidden'
                href={brand.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon
                  fill='#666'
                  height={35}
                  width={100}
                />
              </a>
            </MarqueeItem>
          );
        })}
      </MarqueeContent>
    </Marquee>
  );
};
