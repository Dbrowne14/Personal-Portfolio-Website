import { Switch } from "./switch";
import { useScrollStatus } from "../../hooks/useScrollStatus";
import { useEffect, useState } from "react";

const switchShell = () => {
  const scrollThreshold = useScrollStatus(30);

  const [dark, setDark] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    document.documentElement.classList.toggle("dark", dark);

    const handler = (e: MediaQueryListEvent) => {
      setDark(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [dark]);

  const toggleDark = (checked: boolean) => {
    setDark(checked);
    document.documentElement.classList.toggle("dark", checked);
  };

  return (
    <div
      className={`w-fit h-fit transition-all duration-500 ease-in-out inline-flex ${scrollThreshold ? "opacity-0 pointer-events-none" : "opacity-100"} rounded-full dark:bg-[rgba(83,79,79,0.6)] bg-[rgba(228,217,217,0.54)] flex-row gap-2 justify-center items-center`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-current text-background"
        aria-hidden="true"
      >
        <path d="M12 22c5.523 0 10-4.523 10-10s-4.477-10-10-10-10 4.523-10 10 4.477 10 10 10zm0-1.5V3.5c4.694 0 8.5 3.806 8.5 8.5S16.694 20.5 12 20.5z" />
      </svg>
      <h3 className="text-[rgb(218, 170, 170)] ">
        <span className="hidden sm:block dark:hidden">Light Mode</span>
        <span className="hidden sm:hidden dark:sm:block">Dark Mode</span>
      </h3>
      <Switch checked={dark} onCheckedChange={toggleDark} />
    </div>
  );
};

export default switchShell;
