import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

const HeroSection = () => {
    return( 
		<div>
         <section className="shadow-sm font-poppins dark:bg-gray-800 mb-8">
            <div className="max-w-6xl px-4 mx-auto " x-data="{open:false}">
                <nav className="flex items-center justify-between py-4">
                    <Link className="text-3xl font-semibold leading-none dark:text-gray-400" to="/landing-page">Binar Car Rental</Link>
                    <div className="flex justify-between lg:space-x-9">
                        <div className="lg:hidden">
                            <button
                                className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded dark:text-gray-400 navbar-burger hover:text-blue-800 hover:border-blue-300 lg:hidden"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    className="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </button>
                        </div>
                        <ul className="hidden lg:w-auto lg:space-x-9 lg:items-center lg:flex ">
                            <li> <a href=""
                                    className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">Our Services</a>
                            </li>
                            <li> <a href=""
                                    className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">Why
                                    us</a>
                            </li>
                            <li><a href=""
                                    className="text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">Testimonial</a>
                            </li>
                            <li><a href=""
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
              
                <div className="fixed inset-0 w-full bg-gray-900 opacity-25 dark:bg-gray-400 lg:hidden">
                </div>
                <div className="absolute inset-0 z-40 h-screen p-3 text-gray-400 duration-500 transform bg-blue-50 dark:bg-gray-800 w-80 lg:hidden lg:transform-none lg:relative">
                    <div className="flex justify-between lg:">
                        <a className="p-2 text-2xl font-bold text-gray-700 dark:text-gray-400" href="#">Binar Car Rental</a>
                        <button className="p-2 text-gray-700 rounded-md dark:text-gray-400 hover:text-blue-300 lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                className="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <ul className="px-4 text-left mt-7">
                        <li className="pb-3">
                            <a  className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-100">Our Services</a>
                        </li>
                        <li className="pb-3">
                            <a href="" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">Why</a>
                        </li>
                        <li className="pb-3">
                            <a href="" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">Testimonials</a>
                        </li>
                        <li className="pb-3">
                            <a href="" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">FAQ</a>
                        </li>
                    </ul>
                    <div className="block mt-5 lg:hidden">
                        <a href=""
                            className="inline-block w-full px-4 py-3 mr-2 text-xs font-semibold leading-none text-center text-gray-100 bg-blue-600 rounded-full dark:hover:bg-blue-400 dark:bg-blue-300 dark:text-gray-700 hover:bg-blue-700">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div class="py-20 dark:bg-gray-700">
            <div class="max-w-6xl px-4 mx-auto md:px-0 font-poppins">
                <div class="flex flex-wrap items-center px-20">
                    <div class="w-full px-4 mb-16 md:w-1/2 md:mb-0">
                        
                        <h2
                            class="mb-6 text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-300 md:text-5xl lg:text-6xl">
                            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu!).
                        </h2>
                        <p class="mb-6 font-medium tracking-wide text-gray-600 dark:text-gray-400 md:text-lg">
                            Selamat datang di Binar car rental. Kami menyediakan mobil berkualitas terbaik dengan harga terjangkau.selalu melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                        <a href="#"
                            class="inline-flex items-center justify-center px-8 py-3 text-gray-100 bg-green-600 rounded-md shadow hover:text-gray-100 hover:bg-green-500 ">
                            Mulai Sewa Mobil</a>
                    </div>
                    <div class="w-full px-4 md:w-1/2">
                        <div class="relative mx-auto md:mr-0 max-w-max">
                            <div
                                class="absolute z-50 text-blue-500 transform -translate-y-1/2 cursor-pointer top-1/2 left-1/2 hover:text-blue-600">
                               
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg>
                            </div>
                            <div class="relative overflow-hidden rounded-7xl">
                                <img src="./IMAGES/binarcar.png" alt=""
                                    class="relative z-10 object-cover w-full h-full rounded-md">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       )
   
};

export default HeroSection;