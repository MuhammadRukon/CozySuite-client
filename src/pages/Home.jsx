import { useEffect } from "react";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import GoogleMap from "../components/GoogleMap";
import Head from "../components/Head";
import Testimonials from "../components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: "1500",
      delay: "100",
    });
  }, []);
  return (
    <>
      <Head title={"Home"} />
      <div data-aos="zoom-in">
        <Banner />
      </div>
      <div data-aos="fade-left" data-aos-offset="300">
        <FeaturedRooms />
      </div>
      <div data-aos="fade-right" data-aos-offset="400">
        <Testimonials />
      </div>
      <div data-aos="fade-up" data-aos-offset="200">
        <GoogleMap />
      </div>
    </>
  );
};

export default Home;
