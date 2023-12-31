import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <MainLayout>
        <div className="w-full text-center my-72 xl:my-[335px]">
          <span className="loading loading-dots w-24"></span>
        </div>
      </MainLayout>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
