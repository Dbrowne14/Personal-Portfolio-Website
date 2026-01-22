import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import MovingBanner from "../components/ui/movingBanner";
import SwitchShell from "../components/ui/switchShell";

const MainLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="content-width mx-auto p-0.5 h-full grid grid-rows-[1fr_10fr_1.5fr]">
        <SwitchShell />
        <Outlet />
        <Nav />
      </div>
      <MovingBanner />
    </div>
  );
};

export default MainLayout;
