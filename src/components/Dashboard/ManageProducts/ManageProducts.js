import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://camspice-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete")

        if (proceed) {
            const url = `https://camspice-server.vercel.app/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert("Deleted")
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining);
                    }

                })
        }
    }


    return (
        <div>
            <h2 className="bg-blue-500 py-2 text-white font-bold mb-4">Manage your  Product  here</h2>

            {
                products.map(product => <div
                    className="flex flex-col justify-center  items-center"
                    key={product._id}
                >
                    <div className="border-2 border-yellow-200 p-2 m-2 rounded w-2/5 bg-yellow-50">
                        <h3>{product.name}</h3>
                        <button className=" bg-yellow-300 py-1 px-2 border-0 rounded" onClick={() => handleDelete(product._id)}>Delete</button>

                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;


// Moinot Ghat, Dohar
// Location: Dhaka
// Guide Name: Al Helal
// Description: Mainot Ghat is a place in Doha upazila of Dhaka District. Across the river Bhadrasan of Faridpur on the river.

// Cost: 4500 taka