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
import UpdateBooking from "../pages/UpdateBooking";

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
  {
    path: "/mybooking/update/:id",
    element: <UpdateBooking />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/mybookings/update/${params.id}`, {
        credentials: "include",
      }),
  },
  //
]);
