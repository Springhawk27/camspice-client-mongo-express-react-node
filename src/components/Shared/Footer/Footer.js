import React from 'react';
import { NavLink } from 'react-router-dom';
import action_camera from '../../../images/action_camera.png'

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-12 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col border-t-2">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <NavLink to="/home" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src={action_camera} alt="" />

                            <span style={{ color: '#4299E1' }} className="ml-3 text-lg ">CamSpice</span>
                        </NavLink>
                        <p className="mt-2 text-sm text-gray-700">We are here to serve you and ensuring a cheerful, sound and beautiful journey ahead of you.</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-2/3 md:w-1/3 w-full px-4">
                            <h2 className="title-font font-medium text-green-600 tracking-widest text-sm mb-3">Contact Us</h2>
                            <nav className="list-none mb-4">
                                <p className="mt-2 text-sm text-gray-700">Road #02, Sector #04, Uttara, Dhaka-1230, Bangladesh
                                </p>
                                <p className="mt-2 text-sm text-gray-700">Phone : 09621 123456, 09621 123457
                                </p>
                                <p className="mt-2 text-sm text-gray-700">E-mail : info@camspice.com
                                </p>

                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 w-full px-4">
                            <h2 className="title-font font-medium text-green-600 tracking-widest text-sm mb-3">Quick Links</h2>
                            <nav className="list-none mb-2">
                                <li>
                                    <NavLink to="/spots" className="text-gray-600 hover:text-green-500">Camera</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/guides" className="text-gray-600 hover:text-green-500">Accessories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className="text-gray-600 hover:text-green-500">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="text-gray-600 hover:text-green-500">Contact</NavLink>
                                </li>

                            </nav>
                        </div>

                    </div>
                </div>
                <div style={{ backgroundColor: '#4299E1' }} className="">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white text-sm text-center sm:text-left">© 2021 CamSpice
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a href="/" className="text-blue-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href="/" className="ml-3 text-blue-400">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href="/" className="ml-3 text-red-600">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a href="/" className="ml-3 text-blue-500">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;