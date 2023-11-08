import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import RoomCards from "./RoomCards";

const FeaturedRooms = () => {
  const { loading } = useContext(AuthContext);
  const [reviewedRooms, setReviewedRoom] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/rooms")
      .then((res) => {
        const loadedData = res?.data;
        const filteredData = loadedData.filter(
          (data) => data?.reviews.length > 0
        );

        setReviewedRoom(filteredData.slice(0, 6));
      })
      .catch((error) => console.log(error));
  }, [loading]);

  return (
    <Container>
      <div className="my-8 lg:my-10 px-5">
        <h2 className="text-center font-primary text-5xl">Featured Rooms</h2>
        <h2 className="text-center text-md mt-4 italic">
          Rooms that are most reviewed.
        </h2>
        <div className="gap-14 grid grid-cols-1 mt-10 sm:grid-cols-2">
          {reviewedRooms?.map((room) => (
            <RoomCards key={room?._id} data={room} buttonText={"Book Now"} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedRooms;
