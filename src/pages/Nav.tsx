import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-(--content-width) mt-4 fixed bottom-0 left-1/2 -translate-x-1/2 mx-auto">
      <ul className="flex flex-row flex-wrap gap-[clamp(1rem,4vw,6rem)] justify-center w-full mb-5 pb-2 text-[clamp(1rem,4vw,1.8rem)]">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `inline-flex items-center justify-center ${
                isActive ? "selected" : "nav-link"
              }`
            }
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[1em] w-[1em] fill-current"
              aria-hidden="true"
            >
              <path d="M12 3l9 8h-3v9a1 1 0 0 1-1 1h-4v-6H11v6H7a1 1 0 0 1-1-1v-9H3z" />
            </svg>
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
            projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "selected" : "nav-link")}
          >
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
