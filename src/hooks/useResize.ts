import { useEffect } from 'react';

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const useResize = (onResize: () => void, debounceTime: number = 100) => {
  useEffect(() => {
    const debouncedResize = debounce(onResize, debounceTime);
    window.addEventListener('resize', debouncedResize);
    onResize(); // 初回のリサイズ

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [onResize, debounceTime]);
};
