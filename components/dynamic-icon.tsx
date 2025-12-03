'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import type { ComponentProps } from 'react';
import { useEffect, useState } from 'react';

type Props = {
  className?: string;
  lightImage: string | StaticImageData;
  darkImage: string | StaticImageData;
  altText: string;
} & Omit<ComponentProps<typeof Image>, 'src' | 'alt'>;

export default function DynamicIcon({
  lightImage,
  darkImage,
  altText,
  className,
  ...props
}: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  if (!resolvedTheme) return null;

  const image = resolvedTheme === 'dark' ? darkImage : lightImage;

  return (
    <Image
      src={image}
      alt={altText}
      className={className}
      {...props}
    />
  );
}
