import React from "react";
import { NavLink } from "react-router-dom";

const Accessory = (props) => {
  const { name, model, brand, img } = props?.accessory;

  return (
    <div className="lg:w-1/3 md:w-1/2 p-4 w-full hover:shadow-xl">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="spot"
          className="object-contain object-center w-full h-full block"
          src={img}
        />
      </div>
      <div className="mt-2 text-left">
        <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
        <p className="mt-1">Model: {model}</p>
        <p className="mt-1">Brand: {brand}</p>
      </div>
    </div>
  );
};

export default Accessory;
