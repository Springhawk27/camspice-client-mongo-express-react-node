import React from 'react';

const SingleReview = (props) => {
    const { name, description, rating } = props.review;
    const rate = parseInt(rating)

    return (
        <div className="lg:w-1/3 md:w-1/2 p-4 w-full hover:shadow-xl border-2 border-blue-200 p-2 border-dashed rounded">
            <div className="mt-2 text-left ">
                <h2 className="text-gray-900 title-font text-lg font-medium">{description}</h2>
                <p className="mt-1">by {name}</p>
                {[...Array(rate)].map((star) => {
                    return (
                        <span className="star text-yellow-500">&#9733;</span>
                    );
                })}




            </div>
        </div >
    );
};

export default SingleReview;