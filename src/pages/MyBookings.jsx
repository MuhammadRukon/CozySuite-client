import MainLayout from "../layouts/MainLayout";
import Container from "../components/Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

import { Link } from "react-router-dom";
import BookingCard from "../components/BookingCard";

const MyBookings = () => {
  const { user, loading } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState(null);
  const [effect, setEffect] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setMyBookings(data))
      .catch((error) => console.log(error.message));
  }, [loading, effect]);
  return (
    <MainLayout>
      <Container>
        <div className="my-8 lg:my-20 px-5">
          <h2 className="text-center font-primary text-5xl">My Bookings</h2>
          {myBookings?.length ? (
            myBookings.map((room) => (
              <BookingCard
                effect={effect}
                setEffect={setEffect}
                room={room}
                key={room._id}
              />
            ))
          ) : (
            <div className="text-5xl text-center mt-28">
              <p>You haven't booked anything!</p>
              <Link
                to="/rooms"
                className="btn bg-primary mt-10 hover:border hover:border-primary hover:text-primary hover:bg-white text-white border-0"
              >
                Book now
              </Link>
            </div>
          )}
        </div>
      </Container>
    </MainLayout>
  );
};

export default MyBookings;
