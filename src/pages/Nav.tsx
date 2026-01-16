import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full mt-4 sticky">
      <ul className="flex flex-row gap-[clamp(1rem,4vw,6rem)] justify-center w-full mb-5 pb-2 text-[min(10vw,1.3rem)]">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "selected" : "nav-link")}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "selected" : "nav-link")}
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "selected" : "nav-link")}
          >
            {" "}
            projects{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "selected" : "nav-link")}
          >
            {" "}
            contact{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
