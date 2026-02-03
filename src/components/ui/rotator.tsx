import useRotatingIndex from "../../hooks/useRotatingIndex";
import { useEffect, useState } from "react";

type RotatorProps = {
  array: string[];
};

export function Rotator({ array }: RotatorProps) {
  const index = useRotatingIndex(array.length, 2000);
  const currentMusic = array[index];
    const [visible, setVisible] = useState(true);

  // Fade effect every time index changes
  useEffect(() => {
    // Start fade out
    setVisible(false);

    // Fade in after a short delay (matches CSS transition duration)
    const timeout = setTimeout(() => setVisible(true), 1000);

    return () => clearTimeout(timeout);
  }, [index]);
  return <span className={`text-highlightColor font-medium transition-opacity duration-1000 ease-in-out ${
        visible ? "opacity-0" : "opacity-100"
      }`}>{currentMusic}</span>;
}