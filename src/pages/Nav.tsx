import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="flex flex-row gap-3">
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
          <NavLink to="/contact"> Contact Page </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
