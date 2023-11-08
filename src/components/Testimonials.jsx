import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import "react-awesome-slider/dist/styles.css";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Testimony from "./Testimony";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Testimonials = () => {
  const { loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <GrFormNext className="h-20" />,
    prevArrow: <GrFormPrevious />,
  };
  useEffect(() => {
    axios
      .get("https://booking-server-jet.vercel.app/rooms")
      .then((res) => {
        const loadedData = res?.data;
        const filteredData = loadedData.filter(
          (data) => data?.reviews.length > 0
        );
        const fiveDatas = filteredData.slice(0, 5);

        const datas = fiveDatas.map((data) => data.reviews[0]);

        setReviews(datas);
      })
      .catch((error) => console.log(error));
  }, [loading]);
  return (
    <Container>
      <div className="my-8 lg:my-20 w-[350px] sm:w-[92%] mx-auto">
        <h2 className="text-center font-primary text-5xl">Testimonials</h2>
        <h2 className="text-center text-md mt-4 italic">
          Clients that already booked from us and reviewed.
        </h2>
        <div className="mt-10">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <Testimony key={index} review={review} />
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
