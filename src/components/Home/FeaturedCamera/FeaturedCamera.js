import React from 'react';
import { NavLink } from 'react-router-dom';
import useCameras from '../../../hooks/useCameras';
import Camera from '../Camera/Camera';


const FeaturedCameras = () => {
    const [cameras, setCameras] = useCameras([]);





    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1 ">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-blue-500 bg-blue-50 p-2">Check out our featured Action Camera</h1>
                    </div>
                </div>
            </section>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <NavLink to="/spots" className="flex flex-wrap -m-4">
                            {
                                cameras.slice(0, 6).map(camera => <Camera
                                    key={camera._id}
                                    spot={camera}

                                ></Camera>)
                            }

                        </NavLink>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FeaturedCameras;