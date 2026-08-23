import { useEffect, useRef } from 'react';

export function useCloseOnResize(onClose: () => void, breakpoint = 768, debounceMs = 0) {
  const callbackRef = useRef(onClose);
  const wasMobileRef = useRef(false);

  useEffect(() => {
    callbackRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const checkBreakpoint = () => {
      const isMobile = window.innerWidth < breakpoint;

      // Only close when crossing mobile → desktop
      if (wasMobileRef.current && !isMobile) {
        callbackRef.current();
      }

      wasMobileRef.current = isMobile;
    };

    let timeout: ReturnType<typeof setTimeout> | undefined;

    const handleResize = () => {
      if (debounceMs > 0) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(checkBreakpoint, debounceMs);
      } else {
        checkBreakpoint();
      }
    };

    // Establish initial state
    wasMobileRef.current = window.innerWidth < breakpoint;

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeout) clearTimeout(timeout);
    };
  }, [breakpoint, debounceMs]);
}
