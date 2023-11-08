import { useLoaderData } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Container from "../components/Container";
import RoomCards from "../components/RoomCards";
import Head from "../components/Head";
import { useState } from "react";
import ReactSlider from "react-slider";
import Lottie from "lottie-react";
import noData from "../assets/noData.json";

const Rooms = () => {
  const loadedDatas = useLoaderData();
  const [loadedData, setLoadedData] = useState(loadedDatas);
  const max = 450;
  const min = 50;
  const [maxValue, setMaxValue] = useState(450);
  const [minValue, setMinValue] = useState(50);

  const handleFilter = () => {
    const data = loadedDatas.filter(
      (data) => data.pricePerNight >= minValue && data.pricePerNight <= maxValue
    );
    setLoadedData(data);
  };
  return (
    <MainLayout>
      <Head title={"Rooms"} />
      <Container>
        <div className="my-8 lg:my-20 px-5 xl:px-0">
          <h2 className="text-center font-primary text-5xl">Rooms</h2>
          <div className="flex items-center flex-col lg:flex-row gap-5 lg:items-start mt-4 lg:mt-10 justify-between">
            <div className="border p-6 rounded-xl">
              {/*  */}
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[200, 450]}
                value={[minValue, maxValue]}
                max={max}
                min={min}
                ariaLabel={["Lower thumb", "Upper thumb"]}
                ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                onChange={(value, index) => {
                  setMaxValue(value[1]);
                  setMinValue(value[0]);
                }}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
                pearling
                minDistance={10}
              />
              {/* min */}
              <div>
                <p className="ml-1 my-3">Enter | Select price :</p>
                <div className="flex gap-3 lg:gap-8">
                  <div className="form-control ">
                    <label className="input-group ">
                      <span className="px-[10px]">min</span>
                      <input
                        type="number"
                        value={minValue}
                        max={max}
                        min={min}
                        onChange={(e) => {
                          if (e.target.value > 50) {
                            setMinValue(e.target.value);
                          }
                        }}
                        className="input px-2 lg:pl-5 input-bordered focus:outline-none w-12 lg:w-[70px]"
                      />
                      <span className="px-3">$</span>
                    </label>
                  </div>
                  {/* max */}
                  <div className="form-control">
                    <label className="input-group ">
                      <span className="px-[10px]">max</span>
                      <input
                        type="number"
                        value={maxValue}
                        max={max}
                        min={min}
                        onChange={(e) => {
                          if (e.target.value < 450) {
                            setMaxValue(e.target.value);
                          }
                        }}
                        className="input px-2 lg:pl-5 input-bordered focus:outline-none w-12 lg:w-[70px]"
                      />
                      <span className="px-3">$</span>
                    </label>
                  </div>
                </div>
              </div>
              <button
                onClick={handleFilter}
                className="btn bg-primary text-white mt-3 w-24"
              >
                filter
              </button>
            </div>

            <div className=" flex-auto grid grid-cols-1 sm:grid-cols-2  gap-5">
              {loadedData.length ? (
                loadedData.map((data) => (
                  <RoomCards
                    data={data}
                    key={data._id}
                    buttonText={"click to see details"}
                  />
                ))
              ) : (
                <div className="col-span-full text-3xl text-center">
                  <Lottie
                    className="w-1/2 mx-auto"
                    loop={true}
                    animationData={noData}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Rooms;
