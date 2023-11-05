import { useLoaderData, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Container from "../components/Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Datepicker from "../components/DatePicker";
import { toast } from "react-toastify";

const RoomDetails = () => {
  const { id } = useParams();
  const loadedData = useLoaderData();

  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState({});
  const handleOpenGallery = () => {
    setOpen(!open);
  };
  const [room] = loadedData;

  const booking = {
    email: user?.email,
    roomId: room?._id,
    duration: date,
  };

  const handleBooking = () => {
    if (!date.bookingDate) {
      toast.error("please select date/s");
      return;
    }
    if (date.bookingDate) {
      toast.success("successfully booked");
    }
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  };
  return (
    <MainLayout>
      <Container>
        <div className="card border lg:card-side mt-20">
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
            <h2 className="text-5xl font-bold font-primary">{room.name}</h2>
            <p className="italic text-lg">{room.description}</p>
            <Datepicker setDate={setDate} />
            <div className="space-y-4">
              <p className="">Available: {room.availability}</p>
              <p className="">Price: {room.pricePerNight}$</p>
              <p className="">Offers: {room.specialOffers}</p>
            </div>

            <div className="flex gap-5 mt-5 xl:mt-0">
              <button
                onClick={handleBooking}
                className="btn hover:border-primary hover:text-primary bg-primary text-white hover:bg-white font-bold"
              >
                book now
              </button>
            </div>
            <p
              onClick={handleOpenGallery}
              className="capitalize text-xs italic underline font-bold opacity-70 text-primary cursor-pointer"
            >
              {open ? "click to hide images" : "Click to see more images"}
            </p>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default RoomDetails;
