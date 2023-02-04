import React from "react";
import HeroSectionNoRent from "../components/HeroSectionNoRent";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



const SearchMobil = () => {
    return( 
<div>

   <HeroSectionNoRent />
      
  <div className="w-[1500px] border border-slate-200 h-24 bg-gray-50 mt-8 mx-auto mb-8">
  <div className="grid grid-cols-5 gap-4 my-auto">
    <div>
      <div className="w-32">
        <label for="exampleSearch2" className="form-label inline-block mb-2 text-gray-700">Nama Mobil</label>
        <input
          type="search"
          className="
            form-control
            block
            w-[208px]
            px-3
            h-[48px]
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          id="exampleSearch2"
          placeholder="Nama Mobil"
        />
      </div>
    </div>
    <div>
      <div className="w-32">
        <label for="exampleSearch2" className="form-label inline-block mb-2 text-gray-700">Kategori</label>
        <input
          type="search"
          className="
            form-control
            block
            w-[208px]
            px-3
            h-[48px]
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          id="exampleSearch2"
          placeholder="Kategori"
        />
      </div>
    </div>
    <div>
      <div className="w-32">
        <label for="exampleSearch2" className="form-label inline-block mb-2 text-gray-700">Harga</label>
        <input
          type="search"
          className="
            form-control
            block
            w-[208px]
            px-3
            h-[48px]
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          id="exampleSearch2"
          placeholder="Harga"
        />
      </div>
    </div>
    <div>
      <div className="w-32">
        <label for="exampleSearch2" className="form-label inline-block mb-2 text-gray-700">Status</label>
        <input
          type="search"
          className="
            form-control
            block
            w-[208px]
            px-3
            h-[48px]
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          id="exampleSearch2"
          placeholder="Status"
        />
      </div>
    </div>
    <div className="mt-8">
      <Link to={'/listmobil'} >
      <p  className="inline-flex items-center justify-center px-8 py-3 text-gray-100 bg-green-600 rounded-md shadow hover:text-gray-100 hover:bg-green-500 ">Cari Mobil</p>
      </Link>
      
    </div>
  </div>
  </div>

  <Footer />

</div>
    
    
    
	
)};

export default SearchMobil;