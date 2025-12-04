'use client';
import { useTheme } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import React, { startTransition, useEffect, useState } from 'react';

export default function NextTopLoaderProvider() {
  const { resolvedTheme } = useTheme();
  const [loaderStyles, setLoaderStyles] = useState({
    color: '#1b1718',
    shadow: '0 0 10px #1b1718,0 0 5px #1b1718',
  });

  useEffect(() => {
    if (!resolvedTheme) return;

    const isDark = resolvedTheme === 'dark';

    startTransition(() => {
      setLoaderStyles({
        color: isDark ? '#ede9de9b' : '#1b1718',
        shadow: isDark
          ? '0 0 10px #ede9de9b,0 0 5px #ede9de9b'
          : '0 0 10px #1b1718,0 0 5px #1b1718',
      });
    });
  }, [resolvedTheme]);

  return (
    <NextTopLoader
      color={loaderStyles.color}
      showSpinner={false}
      shadow={loaderStyles.shadow}
    />
  );
}
