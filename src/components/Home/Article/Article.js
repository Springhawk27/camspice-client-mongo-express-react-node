import React from "react";
import { NavLink } from "react-router-dom";

const Article = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://i.ibb.co/jbDGW0w/hero10-01-500x500.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h5>Article</h5>
            <h1
              //   style={{ color: "#028FDD" }}
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-500"
            >
              GoPro Hero10 is out
              <br className="hidden lg:inline-block" /> everthing you need to
              know
            </h1>
            <NavLink to="/articledetail" className="flex justify-center">
              <button className="inline-flex text-blue-800  border-0 py-2  focus:outline-none hover:text-green-700 rounded text-lg">
                Read here
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
