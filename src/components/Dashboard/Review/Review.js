import React from 'react';
import axios from 'axios';
import './review.css';
import { useForm } from "react-hook-form";


const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://mysterious-refuge-82973.herokuapp.com/reviews', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Review added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add__accessory ">
            <h2 className="bg-blue-300 py-2 text-blue-700 font-bold mb-4">Add a New Accessory here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 150 })} placeholder="your name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="rating: 1 to 5" />
                <input type="submit" />

            </form>
        </div>
    );
};

export default Review;