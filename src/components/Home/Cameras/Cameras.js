import React from 'react';
import useCameras from '../../../hooks/useCameras';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Camera from '../Camera/Camera';

const Cameras = (props) => {
    const [cameras] = useCameras([]);

    return (
        <>
            <Navigation></Navigation>
            <div >
                <section className="text-gray-600 body-font">
                    <div className="container px-5 pt-8 mx-auto">
                        <div className="flex flex-col text-center w-full mb-1">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-blue-500">Check Out Our Available Action Camera</h1>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-8 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                cameras.map(camera => <Camera
                                    key={camera.id}
                                    spot={camera}
                                ></Camera>)
                            }
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Cameras;





