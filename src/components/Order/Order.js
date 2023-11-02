import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Order.css";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";

const Order = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://camspice-server.vercel.app/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  const onSubmit = (data) => {
    const id = productId;
    data.orderId = id;
    data.productName = product?.name;
    data.productPrice = product?.price;
    data.productModel = product?.model;
    data.productBrand = product?.brand;
    data.img = product?.img;
    data.status = "Pending";

    fetch("https://camspice-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order placed successfully");
          reset();
        }
      });

    // console.log(data)
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="lg:w-1/1 md:w-1/1 p-4 w-full hover:shadow-xl min-h-screen">
        <div className="block relative h-48 rounded overflow-hidden">
          <img
            alt="order"
            className="object-contain object-left w-full h-full block"
            src={product?.img}
          />
        </div>
        <div className="mt-2 text-left">
          <h2 className="text-blue-600 title-font text-lg font-medium">
            {product?.name}
          </h2>
          <h2 className="text-grey-600 title-font text-lg ">
            Model: {product?.model}
          </h2>
          <h2 className="text-grey-600 title-font text-lg ">
            Brand: {product?.brand}
          </h2>
          <h2 className="text-grey-600 title-font text-lg ">
            Photo: {product?.image}
          </h2>
          <h2 className="text-grey-600 title-font text-lg ">
            Video: {product?.video}
          </h2>
          <p className="mt-1">Description: {product?.description}</p>
          <p className="mt-1 text-red-700">Cost: {product?.price} taka</p>
        </div>
        <div className="order__form sm:pt-8 pt-4">
          <h1 className="pt-4 text-blue-500 bg-blue-50 text-lg">
            Please submit the form below to place your order
          </h1>
          <hr className="border-b-2 border-blue-500 w-full mx-auto " />

          <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user?.displayName}
              {...register("name", { required: true })}
            />
            {errors.displayName && (
              <span className="error">This field is required</span>
            )}
            <input
              defaultValue={user?.email}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <input
              placeholder="Address"
              defaultValue=""
              {...register("address", { required: true })}
            />

            <input
              placeholder="City"
              defaultValue=""
              {...register("city", { required: true })}
            />
            <input
              placeholder="phone number"
              defaultValue=""
              {...register("phone", { required: true })}
            />

            {/* <input className="cursor-pointer" type="submit" /> */}
            <button
              className=" text-white cursor-pointer hover:bg-blue-600 bg-blue-500  py-2 px-8 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Order;
