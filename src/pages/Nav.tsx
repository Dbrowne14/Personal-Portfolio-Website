import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full">
      <ul className="flex flex-row gap-[min(8vw,8rem)] w-full mb-5 pb-2 text-[min(5vw,1.3rem)]">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects"> Projects </NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Contact </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
