import React from "react";
import { NavLink } from "react-router-dom";
import banner_camera from "../../../images/banner/banner_camera.png";

const Banner = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gradient-to-b from-blue-200  to-blue-0">
        <div className="lg:container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              With all these{" "}
              <span className="text-blue-500 text-bold">Action Camera</span>
              <br className="hidden lg:inline-block" /> Seize every cherished
              moment
              <br className="hidden lg:inline-block" /> today, now....
            </h1>
            <p className="mb-8 leading-relaxed">
              Every moment holds value. Capture it anytime, anywhere, and at the
              most affordable price on the market with us.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                <NavLink to="/cameras">Explore Camera</NavLink>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={banner_camera}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
