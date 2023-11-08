import React from "react";
import Container from "./Container";
import Lottie from "lottie-react";
import errorSvg from "../assets/maps.json";

const GoogleMap = () => {
  return (
    <Container>
      <div className="my-8 pt-24 lg:my-20 px-5">
        <h2 className="text-center font-primary text-5xl">Find Us</h2>

        <div className="flex flex-col lg:flex-row mt-10 items-center gap-7">
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8251926797993!2d90.36795747594269!3d23.753612288651805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf782ac89d25%3A0xe72b9ea6d6f1c839!2sHerfy%20-%20Dhanmondi!5e0!3m2!1sen!2sbd!4v1699419267442!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Responsive Google Map"
              className="w-full h-[300px] md:h-[500px] lg:pr-10"
            ></iframe>
          </div>
          <div className="flex-1">
            <Lottie loop={true} animationData={errorSvg} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GoogleMap;
