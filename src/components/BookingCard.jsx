import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BookingCard = ({ effect, room, setEffect }) => {
  return (
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
            <span className="font-bold">Booked Date:</span> {room.bookingDate}
          </p>
          <p>
            <span className="font-bold">Price:</span> {room.pricePerNight}$
          </p>
          <p>
            <span className="font-bold">Room Size:</span> {room.roomSize}
          </p>
          <p>
            <span className="font-bold">Booking Date:</span> {room.bookingDate}
          </p>
        </div>
      </div>

      <div className="flex sm:flex-col pt-0 sm:pt-8  p-8 pl-8 sm:pl-0  sm:w-1/6 sm:justify-center gap-5">
        <Link
          to={`/mybooking/update/${room._id}`}
          className="btn sm:w-[90px]   md:w-fit bg-secondary hover:bg-secondary text-white  font-bold"
        >
          update booking
        </Link>
        <button
          onClick={() => {
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
              confirmButtonColor: "#d33",
              cancelButtonColor: "#003FBA",
              confirmButtonText: "Cancel Booking!",
            }).then((result) => {
              if (result.isConfirmed) {
                console.log(room._id);
                fetch(`http://localhost:5000/booking/${room._id}`, {
                  method: "DELETE",
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                  })
                  .catch((error) => console.log(error.message));
                Swal.fire({
                  title: "Cancelled!",
                  icon: "success",
                });
              }
              setEffect(!effect);
            });
          }}
          className="btn sm:w-[90px] md:w-fit hover:bg-red-600  bg-red-600 text-white  font-bold"
        >
          cancel booking
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
