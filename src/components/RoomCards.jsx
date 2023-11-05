import { Link } from "react-router-dom";

const RoomCards = ({ data }) => {
  return (
    <Link
      to={`/rooms/details/${data._id}`}
      className="h-[250px] overflow-hidden relative hover:scale-110 hover:text-lg transition-all duration-300 overlay-container"
    >
      <img src={data.image} className="w-full h-[210px] object-cover" alt="" />
      <p className="bg-secondary font-primary flex h-[40px] text-white items-center justify-center">
        Click to see details
      </p>
    </Link>
  );
};

export default RoomCards;
