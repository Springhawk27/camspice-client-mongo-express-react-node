import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = (props) => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-refuge-82973.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (

        <div >
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-blue-500 bg-blue-50 p-2">Check out what our customer says</h1>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4 ">
                        {
                            reviews.map(review => <SingleReview
                                key={review._id}
                                review={review}
                            ></SingleReview>)
                        }
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Reviews;



