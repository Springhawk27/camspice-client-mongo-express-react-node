import React from 'react';
import action_camera from '../../../images/action_camera.png'


const Navigation = () => {
    return (
        <header style={{ backgroundColor: '#4299E1' }} class="text-white body-font ">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/#" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <img src={action_camera} alt="" />

                    <span class="ml-3 text-xl">CamSpice</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/#" class="mr-5 hover:text-black">Explore</a>
                    <a href="/#" class="mr-5 hover:text-black">Accessories</a>
                    <a href="/#" class="mr-5 hover:text-black">Dashboard</a>

                </nav>
                <button class="inline-flex items-center bg-red-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Logout
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navigation;