import React from 'react';
import axios from 'axios';
import './AddCamera.css';
import { useForm } from "react-hook-form";


const AddCamera = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://scary-demon-31223.herokuapp.com/picnicSpots', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add__camera ">
            <h2 className="bg-blue-300 py-2 text-blue-700 font-bold mb-4">Add a New Camera Detail here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })} placeholder="name" />
                <input {...register("location", { required: true, maxLength: 30 })} placeholder="location" />
                <input {...register("guideName", { required: true, maxLength: 30 })} placeholder="guide name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="img url" />
                <input type="submit" />

            </form>
        </div>
    );
};

export default AddCamera;