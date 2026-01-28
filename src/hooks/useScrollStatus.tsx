import { useState, useEffect } from 'react';

export function useScrollStatus(threshold = 0) {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, [threshold]);

  return isScrolledDown; // Just returns the data, no JSX
}
