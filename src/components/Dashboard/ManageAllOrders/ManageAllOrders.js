import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();






    useEffect(() => {
        fetch('https://camspice-server.vercel.app/orders')
            .then(res => res.json())
            .then(data => {
                // const myOrders = data.filter(order => order.email == user?.email)
                setOrders(data);
            })
    }, [orders])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete")

        if (proceed) {
            const url = `https://camspice-server.vercel.app/orders/${id}`
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

    const handleStatus = id => {
        const url = `https://camspice-server.vercel.app/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    alert("Status Updated")
                }

            })

    }






    return (
        <div>
            <h2 className="bg-blue-500 py-2 text-white font-bold mb-4">Manage All order</h2>

            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Customer Name</th>
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
                            <td> {order.name}</td>
                            <td >
                                <button className="bg-yellow-200 px-2 py-2 rounded" onClick={() => handleStatus(order._id)}>{order.status}</button>
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

export default ManageAllOrders;