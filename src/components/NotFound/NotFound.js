import React from 'react';
import { NavLink } from 'react-router-dom';
import notfound from '../../images/notfound/notfound.png'

const NotFound = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-2 object-cover object-center rounded" alt="notfound" src={notfound} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h3 className="title-font sm:text-xl text-2xl mb-4 font-medium text-red-500">The page you are looking for is not found!!!</h3>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                <NavLink to="/home" >Home</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;