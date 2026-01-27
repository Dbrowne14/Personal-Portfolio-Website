import React from "react";
import Nav from "./Navigation/Nav";
import { Outlet } from "react-router-dom";
import MovingBanner from "../components/ui/movingBanner";
import SwitchShell from "../components/ui/switchShell";

const MainLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="content-width mx-auto p-0.5 h-full grid grid-rows-[minmax(0,1fr)_minmax(0,10fr)_minmax(0,1.5fr)]">
        <nav className="flex flex-row place-items-center sticky top-2">
          <SwitchShell />
          <Nav />
        </nav>
        <main className="pt-6">
          <Outlet />
        </main>
      </div>
      <MovingBanner />
    </div>
  );
};

export default MainLayout;
