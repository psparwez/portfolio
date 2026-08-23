'use client';

import type { HTMLAttributes } from 'react';
import type { MarqueeProps as FastMarqueeProps } from 'react-fast-marquee';
import FastMarquee from 'react-fast-marquee';

import { cn } from '@/lib/utils';

export type MarqueeProps = HTMLAttributes<HTMLDivElement>;

export const Marquee = ({ className, ...props }: MarqueeProps) => (
  <div
    className={cn('relative w-full overflow-hidden', className)}
    {...props}
  />
);

export type MarqueeContentProps = FastMarqueeProps;

export const MarqueeContent = ({
  loop = 0,
  autoFill = false,
  pauseOnHover = true,
  ...props
}: MarqueeContentProps) => (
  <FastMarquee
    autoFill={autoFill}
    loop={loop}
    pauseOnHover={pauseOnHover}
    {...props}
  />
);

export type MarqueeFadeProps = HTMLAttributes<HTMLDivElement> & {
  side: 'left' | 'right';
};

export const MarqueeFade = ({ className, side, ...props }: MarqueeFadeProps) => (
  <div
    data-side={side}
    className={cn(
      'from-darkest-gray pointer-events-none absolute inset-y-0 z-10 h-full w-16 to-transparent',
      'data-[side=left]:left-0 data-[side=left]:bg-linear-to-r',
      'data-[side=right]:right-0 data-[side=right]:bg-linear-to-l',
      'data-[side=left]:mask-linear-[to_right,var(--background)_25%,transparent]',
      'data-[side=right]:mask-linear-[to_left,var(--background)_25%,transparent]',
      'backdrop-blur-[1px]',
      className
    )}
    {...props}
  />
);

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div
    className={cn('mx-4 shrink-0 object-contain', className)}
    {...props}
  />
);
