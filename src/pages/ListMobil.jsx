import React from "react";
import HeroSectionNoRent from "../components/HeroSectionNoRent";
import MobilCard from "../images/innova.png"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ListMobil = () => {

    return( 
<div>
  
  <HeroSectionNoRent />
      
  <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-5">
  <img className="w-full" src={MobilCard} alt="Product Image"></img>
  <div className="px-6 py-4">
    <p className="text-gray-700 text-xs mb-2">Product Description</p>
    <div className="font-bold text-xl mb-2">Product Title</div>
    <p className="text-gray-700 text-xs font-bold mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consequatur facilis itaque ipsum nostrum obcaecati quis corporis, accusamus tenetur. Rerum?</p>
  </div>
  <div className="px-6 py-4">
    <Link to={'/detailmobil'}>
    <p className="w-full px-32 py-2 text-center text-white bg-green-600 rounded-md dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 hover:bg-teal-400">
    Pilih Mobil
    </p>
     </Link>
  </div>
    </div>

   <Footer />

</div>
        
    
	
)};

export default ListMobil;