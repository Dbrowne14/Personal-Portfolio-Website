import React from "react";
import { Switch } from "./switch";

const MovingBanner = () => {
  return (
    <div>
      <div className="wave"></div>
      <div className="w-48 h-7 fixed bottom-4 rounded-full dark:bg-[rgba(33,32,32,0.37)] bg-[rgba(228,217,217,0.37)] inline-flex flex-row gap-2 justify-center items-center">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current text-background"
          aria-hidden="true"
        >
          <path d="M12 22c5.523 0 10-4.523 10-10s-4.477-10-10-10-10 4.523-10 10 4.477 10 10 10zm0-1.5V3.5c4.694 0 8.5 3.806 8.5 8.5S16.694 20.5 12 20.5z" />
        </svg>
        <h3 className="text-[rgb(218, 170, 170)] text-foreground">
          <span className="dark:hidden">Light Mode</span>
          <span className="hidden dark:inline">Dark Mode</span>
        </h3>
        <Switch
          onCheckedChange={(checked) => {
            document.documentElement.classList.toggle("dark", checked);
          }}
        />
      </div>
    </div>
  );
};

export default MovingBanner;
