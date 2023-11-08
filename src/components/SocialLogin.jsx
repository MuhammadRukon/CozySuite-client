import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const SocialLogin = ({ setErrorMessage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signWithGoogle } = useContext(AuthContext);
  const handleLoginWithGoogle = () => {
    setErrorMessage("");
    signWithGoogle()
      .then((res) => {
        const email = res.user.email;
        toast.success("Successfully Signed In", {
          position: "top-right",
          autoClose: 2000,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <>
      <div
        onClick={handleLoginWithGoogle}
        className="mx-auto  text-4xl cursor-pointer"
      >
        <AiFillGoogleCircle />
      </div>
    </>
  );
};

export default SocialLogin;
