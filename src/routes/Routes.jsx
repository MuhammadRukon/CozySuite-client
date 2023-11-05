import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import MyBookings from "../pages/MyBookings";
import Rooms from "../pages/Rooms";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../pages/RoomDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <h1>contact</h1>,
      },
      {
        path: "about",
        element: <h1>about</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/mybookings",
    element: (
      <PrivateRoute>
        <MyBookings />
      </PrivateRoute>
    ),
    loader: () => fetch(`http://localhost:5000/booking`),
  },
  {
    path: "/rooms",
    element: <Rooms />,
    loader: () => fetch("http://localhost:5000/rooms"),
  },
  {
    path: "/rooms/details/:id",
    element: <RoomDetails />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/rooms/details/${params.id}`),
  },
]);
