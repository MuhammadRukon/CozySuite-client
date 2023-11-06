import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Container from "../components/Container";
import Datepicker from "../components/DatePicker";
import Swal from "sweetalert2";

const UpdateBooking = () => {
  const navigate = useNavigate();
  const loadedDate = useLoaderData();
  const [room] = loadedDate;
  const [date, setDate] = useState("");
  const handleUpdate = () => {
    if (date === room.bookingDate) {
      Swal.fire({
        title: "Pick a valid date!",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    fetch(`http://localhost:5000/mybookings/update/${room._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ date }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/mybookings");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <MainLayout>
      <Container>
        <div className=" my-8 lg:my-20 px-5">
          <h2 className="text-center font-primary text-5xl">Room details</h2>
          <div className="card border lg:card-side mt-10">
            <figure className="w-full lg:w-1/2 xl:w-3/5 p-8 relative">
              <img
                src={room.image}
                className="rounded-lg overflow-hidden "
                alt="room"
              />
            </figure>

            <div className="p-8 py-10 font-semibold flex flex-col justify-between flex-1">
              <h2 className="mb-5 2xl:mb-0 text-5xl font-bold font-primary">
                {room.name}
              </h2>
              <p className="mb-5 2xl:mb-0 italic text-lg">{room.description}</p>
              <Datepicker setDate={setDate} />
              <div className="mt-5 2xl:mt-0 space-y-4">
                <p className="font-bold ">Booked Date: {room.bookingDate}</p>
                <p className="font-bold ">
                  Updated Date:{" "}
                  {date ? (
                    <span>{date}</span>
                  ) : (
                    <span className="font-normal">DD-MM-YYYY</span>
                  )}
                </p>
                <p>Available: {room.availability}</p>
                <p>Price: {room.pricePerNight}$</p>
                <p>Offers: {room.specialOffers}</p>
              </div>

              <div className="flex gap-5 my-5 2xl:my-0">
                <button
                  onClick={handleUpdate}
                  className="btn w-fit hover:border-primary hover:text-primary bg-primary text-white hover:bg-white font-bold"
                >
                  Update Date
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default UpdateBooking;
