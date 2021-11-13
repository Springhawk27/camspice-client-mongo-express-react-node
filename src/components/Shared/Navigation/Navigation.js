import React from 'react';
import action_camera from '../../../images/action_camera.png'
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';



const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <header style={{ backgroundColor: '#4299E1' }} className="text-white body-font ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <NavLink to="/home" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <img src={action_camera} alt="" />

                    <span className="ml-3 text-xl">CamSpice</span>
                </NavLink>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#48BB78"
                        }}
                        to="/cameras"
                        className="mr-5 hover:text-green-700">Cameras</NavLink>
                    <NavLink
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#48BB78"
                        }}
                        to="/accessories"
                        className="mr-5 hover:text-green-700">Accessories</NavLink>
                    <NavLink
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#48BB78"
                        }}
                        to="/dashboard"
                        className="mr-5 hover:text-green-700">Dashboard</NavLink>

                </nav>

                {user?.email ?


                    <button onClick={logout} variant="light" className="inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-white mt-4 md:mt-0">Logout
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> :
                    <NavLink to="/login" className="inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-white mt-4 md:mt-0">Login

                    </NavLink>
                }
            </div>
        </header>
    );
};

export default Navigation;