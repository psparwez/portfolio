import { useCallback, useEffect, useRef } from 'react';

export function useCloseOnResize(
  onClose: () => void,
  breakpoint: number = 768,
  debounceMs: number = 0
) {
  const callbackRef = useRef(onClose);

  useEffect(() => {
    callbackRef.current = onClose;
  }, [onClose]);

  const handler = useCallback(() => {
    if (window.innerWidth >= breakpoint) {
      callbackRef.current();
    }
  }, [breakpoint]);

  useEffect(() => {
    if (debounceMs > 0) {
      let timeout: NodeJS.Timeout | null = null;

      const debounced = () => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(handler, debounceMs);
      };

      window.addEventListener('resize', debounced);
      return () => window.removeEventListener('resize', debounced);
    }

    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [handler, debounceMs]);
}
