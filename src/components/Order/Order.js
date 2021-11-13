import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Order.css';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';


const Order = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();


    useEffect(() => {
        fetch(`https://mysterious-refuge-82973.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const onSubmit = data => {
        const id = productId;
        data.orderId = id;
        data.productName = product?.name;
        data.productPrice = product?.price;
        data.productModel = product?.model;
        data.productBrand = product?.brand;
        data.img = product?.img;
        data.status = "Pending";

        fetch('https://mysterious-refuge-82973.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order placed successfully');
                    reset();
                }
            })

        // console.log(data)
    };



    return (
        <>
            <Navigation></Navigation>
            <div className="lg:w-1/1 md:w-1/1 p-4 w-full hover:shadow-xl">
                <div className="block relative h-48 rounded overflow-hidden">
                    <img alt="order" className="object-contain object-left w-full h-full block" src={product?.img} />
                </div>
                <div className="mt-2 text-left">
                    <h2 className="text-blue-600 title-font text-lg font-medium">{product?.name}</h2>
                    <h2 className="text-grey-600 title-font text-lg ">Model: {product?.model}</h2>
                    <h2 className="text-grey-600 title-font text-lg ">Brand: {product?.brand}</h2>
                    <p className="mt-1">Description: {product?.description}</p>
                    <p className="mt-1 text-red-700">Cost: {product?.price} taka</p>
                    <NavLink to="/home" className="flex justify-start mt-2">
                        < button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Proceed to Checkout</button>
                    </NavLink>

                </div>
                <div className="order__form">
                    <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user?.displayName} {...register("name", { required: true })} />
                        {errors.displayName && <span className="error">This field is required</span>}
                        <input defaultValue={user?.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />

                        <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                        <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />

                        <input type="submit" />
                    </form>
                </div>
            </div >
            <Footer></Footer>
        </>
    );
};

export default Order;