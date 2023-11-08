import ReactStars from "react-stars";

const Testimony = ({ review }) => {
  return (
    <div className="bg-white border ">
      <div className="flex flex-col md:flex-row w-[90%] md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto items-center gap-4 md:gap-8 p-8">
        <div className="h-[300px] flex-1 md:w-[300px]">
          <img
            src={review.userImg}
            className="rounded-lg w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex-1 flex gap-4 flex-col justify-center">
          <h2 className="text-3xl font-bold">{review.user}</h2>

          <p className="text-lg ">{review.reviewText}</p>

          <ReactStars
            count={5}
            edit={false}
            value={review.rating}
            size={24}
            color2={"#ffd700"}
            className="mt-[-5px]"
          />
          <p className="italic text-sm ml-1">{review.timeStamp}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
