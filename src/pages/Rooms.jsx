import { useLoaderData } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Container from "../components/Container";
import RoomCards from "../components/RoomCards";
import Head from "../components/Head";

const Rooms = () => {
  const loadedData = useLoaderData();
  return (
    <MainLayout>
      <Head title={"Rooms"} />
      <Container>
        <div className="my-8 lg:my-20 px-5">
          <h2 className="text-center font-primary text-5xl">Rooms</h2>
          <div className="mt-4 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {loadedData.map((data) => (
              <RoomCards
                data={data}
                key={data._id}
                buttonText={"click to see details"}
              />
            ))}
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Rooms;
