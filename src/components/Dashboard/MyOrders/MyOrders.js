import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();






    useEffect(() => {
        fetch('https://mysterious-refuge-82973.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const myOrders = data.filter(order => order.email == user?.email)
                setOrders(myOrders);
            })
    }, [orders])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete")

        if (proceed) {
            const url = `https://mysterious-refuge-82973.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert("Deleted")
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining);
                    }

                })
        }
    };






    return (
        <div>
            <h2 className="bg-blue-500 py-2 text-white font-bold mb-4">Review your order</h2>

            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Model</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <tbody
                        // className="flex flex-col justify-center  items-center"
                        key={order._id}
                    >


                        <tr className="bg-blue-50">
                            <td>
                                <img className="w-32" src={order.img} alt="" />
                            </td>
                            <td>{order.productName}</td>
                            <td>{order.productPrice} taka</td>
                            <td> {order.productModel}</td>
                            <td >
                                <span className="bg-yellow-200 px-2 py-3   rounded">{order.status}</span>
                            </td>
                            <td >
                                <button className="bg-red-400 px-3   py-2 rounded" onClick={() => handleDelete(order._id)}>Delete</button>
                            </td>
                        </tr>

                        <hr className="h-2" />
                    </tbody>
                    )}
            </table>

        </div>
    );
};

export default MyOrders;