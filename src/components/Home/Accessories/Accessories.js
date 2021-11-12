import React from 'react';
import useAccessories from '../../../hooks/useAccessories';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Accessory from '../Accessory/Accessory';

const Accessories = (props) => {
    const [accessories] = useAccessories([]);

    return (
        <>
            <Navigation></Navigation>

            <div >
                <section className="text-gray-600 body-font">
                    <div className="container px-5 pt-8 mx-auto">
                        <div className="flex flex-col text-center w-full mb-1">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-blue-500 bg-blue-50 p-2">Get all the available Accessories for your Action Camera</h1>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-8 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                accessories.map(accessory => <Accessory
                                    key={accessory._id}
                                    accessory={accessory}
                                ></Accessory>)
                            }
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>

        </>
    );
};

export default Accessories;





