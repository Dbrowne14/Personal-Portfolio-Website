import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import MovingBanner from "../components/ui/movingBanner";

const MainLayout = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-3xl mx-auto p-0.5">
        <Nav />
        <Outlet />
      </div>
      <MovingBanner />
    </div>
  );
};

export default MainLayout;
