import React from "react";
import CloseTag from "../../assets/icons/close-x-svgrepo-com.svg";
import OpenTag from "../../assets/icons/hamburger-menu-svgrepo-com.svg";
import { NavLink } from "react-router-dom";

type Toggle = {
    toggle: boolean;
}

const NavSmallScreen = ({toggle} : Toggle) => {
  return (
    <div className={`bg-white text-highlightColor font-bold absolute shadow-2xl flex ${toggle ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} ease-in-out overflow-hidden transition-[max-height,opacity] duration-600 justify-center z-50 items-center right-0 top-15 rounded-2xl w-[clamp(6rem,15vw,15rem)] p-4`}>
      <ul className="flex flex-col gap-[clamp(1rem,1vw,3rem)] justify-around text-[clamp(0.8rem,2vw,1.6rem)]">
        <li>
          <NavLink
            to="/"
            className="nav-link"> home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="nav-link">
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavSmallScreen;
