import React from "react";
import NavLargeScreens from "./NavLargeScreens";
import NavSmallScreen from "./NavSmallScreen";
import CloseTag from "../../assets/icons/close-x-svgrepo-com.svg";
import OpenTag from "../../assets/icons/hamburger-menu-svgrepo-com.svg";
import SwitchShell from "../../components/ui/switchShell";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="content-width flex flex-row justify-between">
      <SwitchShell />
      <NavLargeScreens />
      <div className="flex flex-1 justify-end place-items-center sm:hidden">
        {" "}
        <img
          src={toggle ? CloseTag : OpenTag}
          className="w-4 h-4 relative"
          onClick={() => setToggle((prev) => !prev)}
        />
        <NavSmallScreen toggle={toggle} />
      </div>
    </div>
  );
};

export default Nav;

//<NavLargeScreens/>
//      <img src={CloseTag} className="w-4 h-4"/>
