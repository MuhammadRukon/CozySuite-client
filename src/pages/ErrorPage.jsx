import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div>Error Page</div>
      <Link to="/" className="btn btn-neutral">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
