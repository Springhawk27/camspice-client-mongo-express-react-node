import React from "react";
import useAccessories from "../../../hooks/useAccessories";
import Accessory from "../Accessory/Accessory";

const HomeAccessories = (props) => {
  const [accessories] = useAccessories([]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="lg:container px-5 pt-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-1">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-blue-500 bg-blue-50 p-2">
              Enhance your action camera with available accessories.{" "}
            </h1>
            <hr className="border-b-2 border-blue-500 w-full mx-auto " />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="lg:container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4">
            {accessories?.map((accessory) => (
              <Accessory key={accessory._id} accessory={accessory}></Accessory>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAccessories;
