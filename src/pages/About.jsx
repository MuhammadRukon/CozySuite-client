import React from "react";
import MainLayout from "../layouts/MainLayout";
import Container from "../components/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "../components/Head";
import { useEffect } from "react";
import Lottie from "lottie-react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: "1200",
    });
  }, []);
  return (
    <MainLayout>
      <Head title={"About"} />
      <Container>
        <div className="my-8 mt-24 sm:my-24 md:my-28 text-center px-5 lg:px-0 overflow-hidden">
          <div data-aos="zoom-in">
            <h2 className="text-center font-primary text-5xl">About Us</h2>
            <p className="pt-14 tracking-wider text-[28px] font-semibold font-primary">
              Welcome to Cozy Suite, where comfort meets convenience!
            </p>
            <p className="pt-6 tracking-wider lg:w-4/6 mx-auto ">
              At Cozy Suite, we're more than just a room renting website. We're
              your trusted partner in finding the perfect place to stay,
              creating memorable experiences, and feeling at home away from
              home.
            </p>
            <p className="pt-14 tracking-wider text-2xl font-semibold font-primary">
              Our Story
            </p>
            <p className="pt-6 tracking-wider lg:w-4/6 mx-auto ">
              Our journey began with a simple idea to provide travelers with a
              warm and welcoming place to stay, ensuring that every moment spent
              away from home is comfortable and memorable. The founders,
              passionate globetrotters themselves, envisioned a platform that
              offers a diverse selection of rooms, each designed to provide a
              cozy, unique, and personalized experience for every traveler.
            </p>
            <p className="pt-14 tracking-wider text-2xl font-semibold font-primary">
              Our Mission
            </p>
            <p className="pt-6 tracking-wider lg:w-4/6 mx-auto ">
              Cozy Suite's mission is to connect travelers with remarkable
              places to stay, making their trips as enjoyable as possible. We
              aim to create a world where accommodation isn't just a place to
              sleep, but an integral part of the travel experience. Our
              commitment is to make every guest feel valued, ensuring they have
              an unforgettable journey.
            </p>
            <div data-aos="fade-up">
              <p className="pt-14 tracking-wider text-2xl font-semibold font-primary">
                Our Values
              </p>
              <p className="pt-6 tracking-wider lg:w-4/6 mx-auto text-justify">
                <span className="font-bold">Hospitality:</span> We believe in
                the power of a warm welcome and exceptional service. Our hosts
                share the same values, ensuring you receive the best care during
                your stay.
              </p>

              <p className="pt-6 tracking-wider lg:w-4/6 mx-auto text-justify">
                <span className="font-bold">Diversity:</span> We celebrate the
                diversity of accommodations and travelers. From cozy cabins to
                luxurious suites, there's something for everyone on Cozy Suite.
              </p>
              <p className="pt-6 tracking-wider lg:w-4/6 mx-auto text-justify">
                <span className="font-bold">Transparency:</span> We're committed
                to transparency in pricing, policies, and information, so you
                can make informed decisions.
              </p>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row-reverse gap-10  mt-20 lg:w-4/6 mx-auto justify-between items-center">
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              className="flex-1 relative"
            >
              <img src="https://i.ibb.co/HhRLFhZ/techteam.jpg" alt="" />
              <div className="bg-black opacity-30 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div
              className="flex-1 text-justify"
              data-aos="fade-right"
              data-aos-offset="100"
            >
              <p className=" tracking-wider text-2xl font-semibold font-primary">
                Tech team
              </p>
              <p className="pt-6 tracking-wider mx-auto ">
                Cozy Suite is powered by a dedicated team of travel enthusiasts
                who work tirelessly to ensure that your experience is smooth and
                enjoyable. From our customer support team to our tech wizards,
                we're here to assist you at every step of your journey.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row lg:w-4/6 mx-auto gap-10 mt-20 justify-between items-center">
            <div
              className="flex-1 relative "
              data-aos="fade-up-right"
              data-aos-offset="100"
            >
              <img src="https://i.ibb.co/JvcVqkc/management.jpg" alt="" />
              <div className="bg-black opacity-30 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div
              className="flex-1 text-left md:text-right"
              data-aos="fade-up-left"
              data-aos-offset="100"
            >
              <p className="tracking-wider text-2xl font-semibold font-primary">
                Management
              </p>
              <p className="pt-6 tracking-wider  mx-auto text-justify">
                Our management team brings a wealth of experience in the travel
                and hospitality industry. They ensure that our platform is safe,
                reliable, and continuously improving to meet your evolving
                needs.
              </p>
            </div>
          </div>

          <div className="lg:w-4/6 mx-auto mt-16" data-aos="fade-up">
            <h2 className=" font-primary mt-20 text-4xl lg:text-6xl">
              Thank You!
            </h2>
            <Lottie loop={true} animationData="" />
            <p className="pt-6 w-5/6 tracking-wider text-sm mx-auto text-center">
              We're here to make your stay exceptional, so you can focus on
              creating unforgettable memories during your trips. Explore,
              experience, and enjoy with Cozy Suite!
            </p>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default About;
