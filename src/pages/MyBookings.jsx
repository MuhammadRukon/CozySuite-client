import { useLoaderData } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const MyBookings = () => {
  const loadedData = useLoaderData();
  return (
    <MainLayout>
      <div>
        {loadedData.map((data) => (
          <p>{data.email}</p>
        ))}
      </div>
    </MainLayout>
  );
};

export default MyBookings;
