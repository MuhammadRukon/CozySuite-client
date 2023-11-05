const RoomCards = ({ image }) => {
  return (
    <div className="h-[250px]  relative hover:scale-110 hover:text-lg transition-all duration-300 overlay-container">
      <img src={image} className="w-full h-[210px] object-cover" alt="" />
      <p className="bg-secondary font-primary flex h-[40px] text-white items-center justify-center">
        Click to see details
      </p>
    </div>
  );
};

export default RoomCards;
