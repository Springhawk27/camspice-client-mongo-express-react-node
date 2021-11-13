import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch('https://mysterious-refuge-82973.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const myOrders = data.filter(order => order.email == user?.email)

                setOrders(myOrders);
            })
    }, [orders])

    return (
        <div>
            <h2>Welcome to dashboard <span className="text-blue-500 font-bold">{user.displayName}</span></h2>
            <p>Your Email:  <span className=" font-bold">{user.email}</span></p>
            <p>Your Total Order:  <span className=" font-bold">{orders.length}</span></p>
            <br />
            <p>To get the order details click on the left menu(My Orders)</p>
        </div>
    );
};

export default Profile;