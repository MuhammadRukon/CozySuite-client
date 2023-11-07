import { useLoaderData, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Container from "../components/Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Datepicker from "../components/DatePicker";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const loadedData = useLoaderData();
  const [allBookings, setAllBookings] = useState([]);
  const [effect, setEffect] = useState(false);
  const { user, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [room] = loadedData;
  const [availability, setAvailability] = useState(room?.availability);
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setAllBookings(data))
      .catch((error) => console.log(error.message));
  }, [effect, loading]);

  const booked = allBookings?.find((booking) => booking?.roomId === room?._id);
  const handleOpenGallery = () => {
    setOpen(!open);
  };

  const booking = {
    email: user?.email,
    roomId: room._id,
    name: room.name,
    image: room.image,
    description: room.description,
    pricePerNight: room.pricePerNight,
    availability: availability - 1,
    roomSize: room.roomSize,
    bookingDate: date,
    specialOffers: room.specialOffers,
  };
  const handleBooking = () => {
    if (!date) {
      toast.error("please select date/s");
      return;
    }
    if (date) {
      Swal.fire({
        title: room.name,
        html:
          `<p>${room.description}</p>` +
          `<br/>` +
          `<p>Price: ${room.pricePerNight}$</p>` +
          `<br/>` +
          `<p>Offers: ${room.specialOffers}</p>`,

        imageUrl: room.image,
        imageWidth: 350,
        imageHeight: 200,
        showCancelButton: true,
        confirmButtonColor: "#003FBA",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm Booking!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(booking),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setEffect(!effect);
              // update seat
              fetch(`http://localhost:5000/rooms/${room?._id}`, {
                method: "PATCH",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ availability: room.availability - 1 }),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  setAvailability(availability - 1);
                })
                .catch((error) => console.log(error.message));
            })
            .catch((error) => console.log(error.message));
          Swal.fire({
            title: "Booked!",
            icon: "success",
          });
        }
      });
    }
  };
  return (
    <MainLayout>
      <Container>
        <div className=" my-8 lg:my-20 px-5">
          <h2 className="text-center font-primary text-5xl">Room details</h2>
          {loading ? (
            <h1>loading</h1>
          ) : (
            <div className="card border lg:card-side mt-10">
              <figure className="w-full lg:w-1/2 xl:w-3/5 p-8 relative">
                <img
                  src={room.image}
                  className="rounded-lg overflow-hidden "
                  alt="room"
                />
                {open && (
                  <>
                    <div className="absolute flex flex-wrap gap-3 sm:gap-5 w-auto h-auto bottom-12">
                      {room?.roomImages?.map((image, index) => (
                        <img
                          className="h-[50px] md:h-[100px] lg:h-[60px]  xl:h-[100px] w-[80px] md:w-[140px] lg:w-[90px] xl:w-[140px]  rounded-lg hover:scale-[1.5] transition-all"
                          src={image}
                          key={index}
                        />
                      ))}
                    </div>
                    <span className="absolute h-fit w-fit bottom-2 left-10 opacity-50 text-xs italic">
                      hover over the small images to zoom
                    </span>
                  </>
                )}
              </figure>

              <div className="p-8 py-10 font-semibold flex flex-col justify-between flex-1">
                <h2 className="mb-5 2xl:mb-0 text-5xl font-bold font-primary">
                  {room.name}
                </h2>
                <p className="mb-5 2xl:mb-0 italic text-lg">
                  {room.description}
                </p>
                <Datepicker setDate={setDate} />
                <div className="mt-5 2xl:mt-0 space-y-4">
                  <p>Available: {availability}</p>
                  <p>Price: {room.pricePerNight}$</p>
                  <p>Offers: {room.specialOffers}</p>
                </div>

                {!booked ? (
                  <div className="flex gap-5 my-5 2xl:my-0">
                    <button
                      onClick={handleBooking}
                      className="btn w-fit hover:border-primary hover:text-primary bg-primary text-white hover:bg-white font-bold"
                    >
                      book now
                    </button>
                    <button className="btn btn-disabled w-fit  font-bold">
                      Add Review
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-5 my-5 2xl:my-0">
                    <button className="btn w-fit btn-disabled">booked</button>
                    <button className="btn w-fit hover:border-primary hover:text-primary bg-primary text-white hover:bg-white font-bold">
                      Add Review
                    </button>
                  </div>
                )}

                <p
                  onClick={handleOpenGallery}
                  className="capitalize text-xs italic underline font-bold opacity-70 text-primary cursor-pointer"
                >
                  {open ? "click to hide images" : "Click to see more images"}
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </MainLayout>
  );
};

export default RoomDetails;
