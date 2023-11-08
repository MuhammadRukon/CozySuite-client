import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className="btn  hover:bg-white hover:text-black border-0 h-10 min-h-[40px]"
      >
        Home
      </NavLink>
      <NavLink
        to="/rooms"
        className="btn  hover:bg-white hover:text-black border-0 h-10 min-h-[40px]"
      >
        Rooms
      </NavLink>
      <NavLink
        to="/mybookings"
        className="btn hover:bg-white hover:text-black border-0 h-10 min-h-[40px]"
      >
        My Bookings
      </NavLink>
    </>
  );
};

export default NavbarLinks;
