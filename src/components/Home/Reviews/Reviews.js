import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://camspice-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="lg:container px-5 pt-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-1">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-blue-500 bg-blue-50 p-2">
              Explore the feedback from our satisfied customers.{" "}
            </h1>
            <hr className="border-b-2 border-blue-500 w-full mx-auto " />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            {reviews?.map((review) => (
              <SingleReview key={review._id} review={review}></SingleReview>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
