import Promo from "/promo.mp4";

const Banner = () => {
  return (
    <div className="hero ">
      <div className="w-full max-h-[91.3vh] overflow-hidden">
        <video
          src={Promo}
          autoPlay
          loop
          muted
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-7xl font-bold font-primary">Stay Cozy</h1>
          <p className="mb-5 text-lg">
            spend your days and vacation in the best way possible by staying in
            the best looking suites at the best budget possible. <br />
            <strong>Book your suite now!</strong>
          </p>
          <button className="btn bg-primary text-white border-0">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
