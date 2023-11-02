import React from "react";
import { NavLink } from "react-router-dom";

const Camera = (props) => {
  const { _id, name, img, price } = props?.camera;

  return (
    <div className="lg:w-1/3 md:w-1/2 p-4 w-full hover:shadow-xl shadow-md ">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="spot"
          className="object-contain object-center w-full h-full block"
          src={img}
        />
      </div>
      <div className="mt-2 text-left">
        <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
        <p className="mt-1 text-red-500">{price} Taka</p>
        <NavLink to={`/orders/${_id}`} className="flex justify-start mt-2">
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Buy Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Camera;
