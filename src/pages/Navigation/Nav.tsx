import React from "react";
import NavLargeScreens from "./NavLargeScreens";
import NavSmallScreen from "./NavSmallScreen";
import OpenClose from "../../components/ui/open_Close";
import SwitchShell from "../../components/ui/switchShell";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="content-width flex flex-row justify-between">
      <SwitchShell />
      <NavLargeScreens />
      <div className="flex flex-1 justify-end items-center sm:hidden">
        {" "}
          <OpenClose toggle={toggle} setToggle={setToggle}/>
        <NavSmallScreen toggle={toggle} />
      </div>
    </div>
  );
};

export default Nav;

//<NavLargeScreens/>
// vbackground: white; display: block; height: 2px; width: 18px; border-radius: 2px; position: absolute; transition: 0.2s ease-out; top: 50%; transform: rotate(-45deg);/>
