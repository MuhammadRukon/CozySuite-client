import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import SocialLogin from "../components/SocialLogin";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logInUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  // login with email and pass
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Signed In", {
          autoClose: 2000,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content  flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="text-red-700 ml-1 text-sm">{errorMessage}</p>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
              </div>
            </form>
            <p className="text-center">
              Dont have account? Please{" "}
              <Link className="text-green-700 font-bold" to="/register">
                register
              </Link>
            </p>
            <hr className="w-[60%] mx-auto border" />
            <p className="text-center">or</p>
            <SocialLogin setErrorMessage={setErrorMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
