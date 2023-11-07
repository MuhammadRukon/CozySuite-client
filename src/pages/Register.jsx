import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import SocialLogin from "../components/SocialLogin";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  // login with email and pass
  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setErrorMessage("Password needs to be at least six characters");
      return;
    }

    if (!/.*[A-Z].*/.test(password)) {
      setErrorMessage("Password needs at least one capital letter");
      return;
    }
    if (!/.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?].*/.test(password)) {
      setErrorMessage("Password needs at least one special character");
      return;
    } else {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          toast.success("successfully signed up", {
            autoClose: 3000,
          });
          updateUser(name, photo)
            .then(() => {
              navigate("/");
            })
            .catch((error) => console.log(error.message));
        })
        .catch((error) => console.log(error.message));
    }
  };
  return (
    <div className="hero py-10">
      <div className="hero-content lg:w-[30vw] flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body ">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="photo url"
                  className="input input-bordered focus:outline-none"
                />
              </div>
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
              <p className="text-red-700 ml-1 text-sm">{errorMessage}</p>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Register</button>
              </div>
            </form>
            <p className="text-center">
              Dont have account? Please{" "}
              <Link className="text-green-700 font-bold" to="/login">
                login
              </Link>
            </p>
            <hr className="w-[60%] mx-auto border mt-2" />
            <p className="text-center">or</p>
            <SocialLogin setErrorMessage={setErrorMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
