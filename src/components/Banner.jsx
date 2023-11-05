const Banner = () => {
  return (
    <div className="hero ">
      <div className="w-full max-h-[91.3vh] overflow-hidden">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/cozysuite-15955.appspot.com/o/promo.mp4?alt=media&token=e6f84cc1-0076-40af-9792-6a95858a0258&_gl=1*1f6xzbi*_ga*MTgzMjgxNzY0NC4xNjk5MTI4Mzgx*_ga_CW55HF8NVT*MTY5OTE5OTUwMi41LjEuMTY5OTE5OTcyMS4zOC4wLjA."
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
          <button className="btn bg-primary hover:text-black hover:bg-white text-white border-0">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
