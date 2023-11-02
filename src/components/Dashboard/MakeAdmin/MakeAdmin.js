import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://camspice-server.vercel.app/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2 className="bg-blue-300 py-2 text-blue-700 font-bold mb-4">Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    className="w-1/2 mr-2 border-2 border-blue-200 rounded p-2 "
                    label="Email"
                    type="email"
                    id="standard-basic"
                    onBlur={handleOnBlur}
                    variant="standard"
                    placeholder="type email" />
                <button className="bg-blue-500 p-2 rounded text-white" type="submit" variant="contained">Make Admin</button>

            </form>
            {success && <p severity="success">Admin added successfully</p>
            }

        </div>
    );
};

export default MakeAdmin;