import { Link } from "react-router-dom";

const RoomCards = ({ data, buttonText }) => {
  return (
    <Link
      to={`/rooms/details/${data._id}`}
      className="h-[250px] overflow-hidden relative hover:scale-110 hover:text-lg transition-all duration-300 overlay-container"
    >
      <div className="w-full h-[210px] bg-[#00000050] opacity-0 hover:opacity-100 transition-all duration-300 absolute">
        <h2 className="text-white font-semibold text-xl h-full flex justify-center items-center">
          {data.name}
        </h2>
      </div>
      <img src={data.image} className="w-full h-[210px] object-cover" alt="" />
      <p className="bg-secondary font-primary flex h-[40px] text-white items-center justify-center">
        {buttonText}
      </p>
    </Link>
  );
};

export default RoomCards;
