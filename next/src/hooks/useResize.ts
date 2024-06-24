import { useState, useEffect, useCallback } from "react";

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const useResize = (
  onResize?: () => void,
  debounceTime: number = 100
) => {
  const [isPC, setIsPC] = useState<boolean>(true);

  const handleResize = useCallback(() => {
    const windowWidth = window.innerWidth;
    setIsPC(windowWidth >= 780); // Assuming 780px is the breakpoint between PC and SP
    if (onResize) {
      onResize();
    }
  }, [onResize]);

  useEffect(() => {
    const debouncedResize = debounce(handleResize, debounceTime);
    window.addEventListener("resize", debouncedResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [handleResize, debounceTime]);

  return { isPC, isSP: !isPC };
};
