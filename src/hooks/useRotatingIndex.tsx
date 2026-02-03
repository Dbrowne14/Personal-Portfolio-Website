import { useEffect, useState } from "react";

const useRotatingIndex = (length: number, delays = 2000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!length) {
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, delays);

    return () => clearInterval(interval);
  }, [length, delays]);
  return index;
};

export default useRotatingIndex;
