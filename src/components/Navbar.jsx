import React from "react";
import Container from "./Container";
import NavbarLinks from "./NavbarLinks";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 text-white stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <Link to="/">
          <img src="logo.png" className="w-40 lg:w-48" alt="" />
        </Link>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal gap-5">
          {/* Navbar menu content here */}
          <NavbarLinks />
          <NavLink
            to="/login"
            className="btn bg-primary hover:bg-white hover:text-black text-white h-10 min-h-[40px]"
          >
            Login
          </NavLink>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
