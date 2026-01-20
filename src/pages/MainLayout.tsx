import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import MovingBanner from "./MovingBanner";


const MainLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <MovingBanner />
    </div>
  );
};

export default MainLayout;
