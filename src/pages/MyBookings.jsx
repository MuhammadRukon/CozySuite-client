import MainLayout from "../layouts/MainLayout";
import Container from "../components/Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

import { Link } from "react-router-dom";
import BookingCard from "../components/BookingCard";
import Head from "../components/Head";

const MyBookings = () => {
  const { user, loading } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState(null);
  const [effect, setEffect] = useState(false);
  useEffect(() => {
    fetch(`https://booking-server-jet.vercel.app/booking/${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setMyBookings(data))
      .catch((error) => console.log(error.message));
  }, [loading, effect]);
  return (
    <MainLayout>
      <Head title={"My bookings"} />
      <Container>
        <div className="my-8 mt-24 sm:my-24 md:my-28  px-5">
          <h2 className="text-center font-primary text-5xl">My Bookings</h2>
          {myBookings?.length ? (
            <div className="sm:pb-[35px] pt-14 md:pb-[70px]">
              {myBookings.map((room) => (
                <BookingCard
                  effect={effect}
                  setEffect={setEffect}
                  room={room}
                  key={room._id}
                />
              ))}
            </div>
          ) : (
            <div className="text-5xl text-center my-20 xl:my-[180px]">
              <p>You haven't booked anything!</p>
              <Link
                to="/rooms"
                className="btn bg-primary mt-20 mb-40 xl:mb-20 hover:border hover:border-primary hover:text-primary hover:bg-white text-white border-0"
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
