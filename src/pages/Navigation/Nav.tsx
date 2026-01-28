import React from "react";
import NavLargeScreens from "./NavLargeScreens";
import NavSmallScreen from "./NavSmallScreen";
import CloseTag from "../../assets/icons/close-x-svgrepo-com.svg";
import OpenTag from "../../assets/icons/hamburger-menu-svgrepo-com.svg";
import SwitchShell from "../../components/ui/switchShell";

const Nav = () => {
  return (
    <div className="content-width flex flex-row justify-between">
      <SwitchShell />
      <div className="flex flex-1 justify-end place-items-center">
        {" "}
        <img src={OpenTag} className="w-4 h-4 relative" />
        <NavSmallScreen />
      </div>
    </div>
  );
};

export default Nav;

//<NavLargeScreens/>
//      <img src={CloseTag} className="w-4 h-4"/>
