import React from "react";
import { NavLink } from "react-router-dom";
import useCameras from "../../../hooks/useCameras";
import Camera from "../Camera/Camera";

const FeaturedCameras = () => {
  const [cameras, setCameras] = useCameras([]);

  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="lg:container px-5 pt-12 mx-auto ">
          <div className="flex flex-col text-center w-full mb-1 ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-blue-500 bg-blue-50 p-4 ">
              Discover our highlighted action camera
            </h1>
            <hr className="border-b-2 border-blue-500 w-full mx-auto " />
          </div>
        </div>
      </section>
      <div>
        <section className="text-gray-600 body-font">
          <div className="lg:container px-5 py-12 mx-auto">
            <div className="flex flex-wrap m-4 ">
              {cameras?.slice(0, 6).map((camera) => (
                <Camera key={camera._id} camera={camera}></Camera>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedCameras;
