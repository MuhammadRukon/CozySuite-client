import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import NavbarLinks from "../components/NavbarLinks";

const MainLayout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <div className="w-full p-0 navbar min-h-[80px] bg-primary">
          <Navbar />
        </div>
        {/* Page content here */}
        {children}
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu pt-4 w-80 min-h-full gap-1 bg-base-200">
          <NavbarLinks />
          <NavLink
            to="/login"
            className="btn -mx-[1px] bg-primary hover:bg-white hover:text-black text-white h-10 min-h-[40px]"
          >
            Login
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;
