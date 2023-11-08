import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
// import promo from "/promoSmall.mp4";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="hero ">
      <div className="w-full h-[450px]  lg:h-[850px]  overflow-hidden">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/coffee-project-efe39.appspot.com/o/promoSrink.mp4?alt=media&token=292901b0-179a-46a8-80c0-e36602a824c3&_gl=1*shylax*_ga*MTgzMjgxNzY0NC4xNjk5MTI4Mzgx*_ga_CW55HF8NVT*MTY5OTQ0NDI1NS4xMC4xLjE2OTk0NDQ3NjYuMjguMC4w"
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
