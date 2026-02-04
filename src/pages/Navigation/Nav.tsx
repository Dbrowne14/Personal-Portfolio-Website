import NavLargeScreens from "./NavLargeScreens";
import NavSmallScreen from "./NavSmallScreen";
import OpenClose from "../../components/ui/open_Close";
import SwitchShell from "../../components/ui/switchShell";
import { useState } from "react";
import { useScrollStatus } from "../../hooks/useScrollStatus";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const scrollThreshold = useScrollStatus(30);

  return (
    <div className="content-width flex flex-row justify-between">
      <SwitchShell />
      <div className={`ml-auto hidden sm:flex ${scrollThreshold ? "opacity-0 pointer-events-none" : "opacity-100"}}`}>
        <NavLargeScreens />
      </div>
      <div className={`flex flex-1 justify-end items-center ${scrollThreshold ? "sm:flex" : "sm:hidden"}`}>
        {" "}
        <OpenClose toggle={toggle} setToggle={setToggle} />
        <NavSmallScreen toggle={toggle} />
      </div>
    </div>
  );
};

export default Nav;
