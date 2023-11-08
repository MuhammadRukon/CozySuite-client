import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className="btn   hover:bg-white hover:text-black border-0 h-[38px] min-h-[38px]  px-3"
      >
        Home
      </NavLink>
      <NavLink
        to="/rooms"
        className="btn  hover:bg-white hover:text-black border-0 h-[38px] min-h-[38px]  px-3"
      >
        Rooms
      </NavLink>
      <NavLink
        to="/mybookings"
        className="btn hover:bg-white hover:text-black border-0 h-[38px] min-h-[38px] whitespace-nowrap px-3"
      >
        My Bookings
      </NavLink>
      <NavLink
        to="/about"
        className="btn hover:bg-white hover:text-black border-0 h-[38px] min-h-[38px]  px-3"
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="btn hover:bg-white hover:text-black border-0 h-[38px] min-h-[38px]  px-3"
      >
        Contact
      </NavLink>
    </>
  );
};

export default NavbarLinks;
