import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <div className="wave">
        
      </div>
    </div>
  );
};

export default MainLayout;
