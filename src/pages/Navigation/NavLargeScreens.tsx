import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLargeScreens = () => {
  return (
    <div className="ml-auto">
      <ul className="flex flex-row flex-wrap min-w-full gap-[clamp(1rem,1vw,3rem)] justify-around text-[clamp(0.8rem,3vw,1.3rem)]">
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
  )
}

export default NavLargeScreens
