import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import BinarCard from '../images/binarcar.png'


const HeroSection = () => {
    return (
     <div>
        < div className="bg-cover bg-[#F1F3FF]">
        <section className="shadow-sm font-poppins dark:bg-gray-800 mb-8">
            <div className="max-w-6xl px-4 mx-auto " x-data="{open:false}" >
                <nav className="flex items-center justify-between py-4">
                <Link className="text-3xl font-semibold leading-none dark:text-gray-400" to="/">Binar Car Rental</Link>
                    <div className="flex justify-between lg:space-x-9">
                        <div className="lg:hidden">
                            <button
                                className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded dark:text-gray-400 navbar-burger hover:text-blue-800 hover:border-blue-300 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    className="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </button>
                        </div>
                        <ul className="hidden lg:w-auto lg:space-x-9 lg:items-center lg:flex ">
                            <li><a href="#"
                                    className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">Our Services</a>
                            </li>
                            <li><a href="#"
                                    className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">Why
                                    us</a>
                            </li>
                            <li><a href="#"
                                    className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">Testimonial</a>
                            </li>
                            <li><a href="#"
                                    className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">FAQ
                                </a>
                            </li>
                            
                        </ul>
                        <div className="hidden lg:block">
                            <a href=""
                                className="inline-block px-4 py-3 mr-2 text-xs font-medium leading-none text-gray-100 bg-green-600 rounded-full dark:hover:bg-blue-500 dark:hover:text-gray-200 dark:text-gray-900 dark:bg-green-400 hover:bg-green-700">
                                Contact us
                            </a>
                        </div>
                    </div>
                </nav>
            
                
            </div>
        </section>
        <div className="py-20 dark:bg-gray-700">
            <div className="max-w-6xl px-4 mx-auto md:px-0 font-poppins">
                <div className="flex flex-wrap items-center px-20">
                    <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
                        <h2
                            className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-300 md:text-5xl lg:text-6xl">
                            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu!).
                        </h2>
                        <p className="mb-6 font-medium tracking-wide text-gray-600 dark:text-gray-400 md:text-lg">
                            Selamat datang di Binar car rental. Kami menyediakan mobil berkualitas terbaik dengan harga terjangkau.selalu melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                        <Link to={'/search'} >
                        <p  className="inline-flex items-center justify-center px-8 py-3 text-gray-100 bg-green-600 rounded-md shadow hover:text-gray-100 hover:bg-green-500 ">
                            Mulai Sewa Mobil
                        </p>
                        </Link>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <div className="relative mx-auto md:mr-0 max-w-max">
                            <div
                                className="absolute z-50 text-blue-500 transform -translate-y-1/2 cursor-pointer top-1/2 left-1/2 hover:text-blue-600">
                                
                                    {/* <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg> */}
                            </div>
                            <div className="relative overflow-hidden rounded-7xl">
                                <img src={BinarCard} className="relative z-10 object-cover w-full h-full rounded-md"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>     
   )
   
};

export default HeroSection;