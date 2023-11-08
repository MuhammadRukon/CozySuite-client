import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import promo from "/promoSmall.mp4";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="hero ">
      <div className="w-full h-[400px] sm:[600px] lg:h-[700px]  overflow-hidden">
        <video
          src={promo}
          autoPlay
          loop
          muted
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content p-0 text-center text-neutral-content">
        <div className="max-w-sm md:max-w-lg">
          <h1 className="mb-5 text-7xl font-bold font-primary">Stay Cozy</h1>
          <p className="mb-5 text-lg ">
            spend your days and vacation in the best way possible by staying in
            the best looking suites at the best budget possible. Book your suite
            now!
          </p>
          {!user && (
            <Link
              to="/register"
              className="btn bg-primary hover:text-black hover:bg-white text-white border-0"
            >
              Register Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
