import Nav from "./Navigation/Nav";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import MovingBanner from "../components/ui/movingBanner";

const MainLayout = () => {
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div className="w-full h-full">
      <div className="mx-auto min-h-screen grid grid-rows-[90px_minmax(0,10fr)_minmax(0,1fr)] place-items-center">
        <nav className="w-full h-full flex justify-center sticky top-0 z-50 items-center ">
          <Nav />
        </nav>
        <main className="content-width pb-6 sm:pt-10 h-full">
          <Outlet />
        </main>
      </div>
      <MovingBanner />
    </div>
  );
};

export default MainLayout;

//find a wayu to add a bottom margin
