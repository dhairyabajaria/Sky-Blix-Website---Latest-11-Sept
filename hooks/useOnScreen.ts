import { useState, useEffect, RefObject } from 'react';

interface UseOnScreenOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

const defaultOptions: UseOnScreenOptions = {
  threshold: 0.1,
  triggerOnce: true,
};

export function useOnScreen(ref: RefObject<HTMLElement>, options: UseOnScreenOptions = defaultOptions): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (options.triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, options]);

  return isIntersecting;
}
