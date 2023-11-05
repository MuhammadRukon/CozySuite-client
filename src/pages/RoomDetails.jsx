import { useLoaderData } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Container from "../components/Container";

const RoomDetails = () => {
  const loadedData = useLoaderData();
  const [room] = loadedData;
  console.log(room);
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
          </figure>

          <div className="p-8 py-10 font-semibold flex flex-col justify-between flex-1">
            <h2 className="text-5xl font-bold font-primary">{room.name}</h2>
            <p className="italic text-lg">{room.description}</p>
            <div className="space-y-4">
              <p className="">Available: {room.availability}</p>
              <p className="">Price: {room.pricePerNight}$</p>
              <p className="">Offers: {room.specialOffers}</p>
            </div>

            <div className="flex gap-5 mt-5 xl:mt-0">
              <button className="btn btn-primary font-bold">book now</button>
              <button className="btn btn-primary font-bold">date picker</button>
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default RoomDetails;
