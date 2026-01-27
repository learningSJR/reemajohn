import React from "react";
import { menuItems } from "../data/navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start flex gap-2">
          <span>
            <img src="/reema.png" className="h-10 w-[auto]" />
          </span>
          <NavLink className="text-xl font-bold">Reema John</NavLink>
        </div>
        <div className="hidden navbar-end lg:flex">
          <ul className="px-1 menu menu-horizontal">
            {menuItems.map((menuli, indx) => (
              <li key={indx}>
                <NavLink
                  to={menuli.path}
                  className={({ isActive }) =>
                    isActive ? "font-bold btn btn-primary" : "btn btn-ghost"
                  }
                >
                  {menuli.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems.map((menuli, indx) => (
                <li key={indx}>
                  <NavLink to={menuli.path}>{menuli.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
