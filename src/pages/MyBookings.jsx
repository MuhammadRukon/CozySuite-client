import MainLayout from "../layouts/MainLayout";
import Container from "../components/Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user, loading } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${user?.email}`).then((res) =>
      res.json().then((data) => setMyBookings(data))
    );
  }, [loading]);
  console.log(myBookings);
  return (
    <MainLayout>
      <Container>
        <div className="my-8 lg:my-20 px-5">
          <h2 className="text-center font-primary text-5xl">My Bookings</h2>
          {myBookings?.length ? (
            myBookings.map((room) => (
              <div className="card border sm:card-side mt-10" key={room._id}>
                <figure className="sm:w-1/3 xl:w-2/6 p-8 sm:pr-0 relative">
                  <img
                    src={room.image}
                    className="rounded-lg overflow-hidden "
                    alt="room"
                  />
                </figure>

                <div className="p-8 md:py-10 font-semibold flex flex-col justify-between flex-1">
                  <h2 className="text-4xl xl:text-5xl font-bold font-primary">
                    {room.name}
                  </h2>
                  <p className="italic py-2 text-md lg:text-lg xl:text-xl">
                    {room.description}
                  </p>
                  <div className="text-sm lg:text-base lg:space-y-2">
                    <p>
                      <span className="font-bold">Price:</span>{" "}
                      {room.pricePerNight}$
                    </p>
                    <p>
                      <span className="font-bold">Room Size:</span>{" "}
                      {room.roomSize}
                    </p>
                    <p>
                      <span className="font-bold">Booking Date:</span>{" "}
                      {room.bookingDate}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col pt-0 sm:pt-8  p-8 pl-8 sm:pl-0  sm:w-1/6 sm:justify-center gap-5">
                  <button
                    onClick={() => {
                      Swal.fire({
                        title: "show error message if bookedDate > tomorrow",
                        icon: "success",
                      });
                    }}
                    className="btn sm:w-[90px]   md:w-fit bg-secondary hover:bg-secondary text-white  font-bold"
                  >
                    update booking
                  </button>
                  <button
                    onClick={() => {
                      Swal.fire({
                        title: "show error message if bookedDate > tomorrow",
                        icon: "success",
                      });
                    }}
                    className="btn sm:w-[90px] md:w-fit hover:bg-red-600  bg-red-600 text-white  font-bold"
                  >
                    cancel booking
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No data</div>
          )}
        </div>
      </Container>
    </MainLayout>
  );
};

export default MyBookings;
