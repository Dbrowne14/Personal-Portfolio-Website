import { Switch } from "./switch";
import React from "react";

const switchShell = () => {
  return (
    <div className="w-fit h-fit sticky rounded-full top-5 dark:bg-[rgba(83,79,79,0.6)] bg-[rgba(228,217,217,0.37)] inline-flex flex-row gap-2 justify-center items-center">
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-current text-background"
        aria-hidden="true"
      >
        <path d="M12 22c5.523 0 10-4.523 10-10s-4.477-10-10-10-10 4.523-10 10 4.477 10 10 10zm0-1.5V3.5c4.694 0 8.5 3.806 8.5 8.5S16.694 20.5 12 20.5z" />
      </svg>
      <h3 className="text-[rgb(218, 170, 170)] text-foreground">
        <span className="hidden sm:block dark:hidden">Light Mode</span>
        <span className="hidden sm:hidden dark:sm:block">Dark Mode</span>
      </h3>
      <Switch
        onCheckedChange={(checked) => {
          document.documentElement.classList.toggle("dark", checked);
        }}
      />
    </div>
  );
};

export default switchShell;
