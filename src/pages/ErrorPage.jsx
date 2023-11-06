import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorSvg from "../assets/errorSvg.json";
const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <Lottie loop={true} animationData={errorSvg} />
      <Link
        to="/"
        className="btn bg-primary text-white hover:border hover:border-primary hover:text-primary"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
