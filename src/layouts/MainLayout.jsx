import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Link, NavLink } from "react-router-dom";
import NavbarLinks from "../components/NavbarLinks";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/favicon.png";

const MainLayout = ({ children }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="drawer overflow-hidden">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content  flex flex-col">
          <div className="w-full p-0 px-4 xl-px-0 navbar h-[80px] min-h-[80px] bg-primary">
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
            <Link
              to="/register"
              className={` ${
                user ? "btn-disabled" : ""
              } btn bg-primary hover:text-black hover:bg-white text-white border-0`}
            >
              Register Now
            </Link>
          </ul>
        </div>
      </div>
      <footer className="footer gap-0 flex min-w-full justify-center footer-center p-4 bg-primary text-white">
        <img className="w-10" src={logo} alt="" />
        <aside>
          <p>Copyright © 2023 - All right reserved by PH Tech Ltd.</p>
        </aside>
      </footer>
    </>
  );
};

export default MainLayout;
