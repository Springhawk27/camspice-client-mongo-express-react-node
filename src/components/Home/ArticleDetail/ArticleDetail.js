import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const ArticleDetail = () => {
    return (
        <>
            <Navigation></Navigation>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-2 items-center justify-center flex-col">
                        <img className="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero10detail" src="https://i.ibb.co/jbDGW0w/hero10-01-500x500.jpg" />
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">GoPro Hero10

                            </h1>
                            <p className="mb-8 leading-relaxed text-left">GoPro HERO7 Black is designed to capture super-smooth footage of your latest serene adventures. This camera HyperSmooth stabilization produces a gimbal-like flow without the added bulk of a gimbal. Camera updates include direct streaming to Facebook Live, an intelligent still photo mode, and stabilized time-lapse video. A vertical portrait mode enables you to add social media-style video and stills to your Instagram and other accounts.
                            </p>

                        </div>
                        <div className="text-center lg:w-2/3 w-full">
                            <p className="mb-8 leading-relaxed text-left">The HERO7 Black supports up to UHD 4K60/50 video resolutions, and captures 2.7K120/100 slow-motion and super-slow motion video at rates up to 1080p240/200. Still images can be captured in up to 12MP resolution in bursts of up to 30 images per second. HERO7 Black is waterproof to 33', suiting it for surfing, snorkeling, and swimming activities. A housing is available separately for even deeper underwater activities. Choose the SuperPhoto function to apply intelligent HDR, local tone-mapping, or noise reduction for optimal still shots. While the HERO7 Black retains the size of its predecessor, both touch and vocal control have been enhanced. The touchscreen has been streamlined to more closely resemble smartphone navigating; and when your hands are full, 16 voice commands enable you to verbally control.

                            </p>

                        </div>

                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ArticleDetail;