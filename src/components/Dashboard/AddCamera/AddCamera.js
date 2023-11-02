import React from "react";
import axios from "axios";
import "./AddCamera.css";
import { useForm } from "react-hook-form";

const AddCamera = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://camspice-server.vercel.app/products", data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add__camera ">
      <h2 className="bg-blue-50 py-2 text-blue-700 font-bold mb-4">
        Add a New Camera Detail here
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 150 })}
          placeholder="name"
        />
        <input
          {...register("model", { required: true, maxLength: 100 })}
          placeholder="model"
        />
        <input
          {...register("brand", { required: true, maxLength: 100 })}
          placeholder="brand"
        />
        <input
          {...register("image", { required: true, maxLength: 100 })}
          placeholder="photo quality"
        />
        <input
          {...register("video", { required: true, maxLength: 100 })}
          placeholder="video quality"
        />
        <textarea {...register("description")} placeholder="description" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="put your img url" />
        <input className="cursor-pointer hover:bg-blue-500 " type="submit" />
      </form>
    </div>
  );
};

export default AddCamera;
