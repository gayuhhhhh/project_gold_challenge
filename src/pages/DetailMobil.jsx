import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import HeroSectionNoRent from "../components/HeroSectionNoRent";

import MobilCard from "../images/innova.png"


const DetailMobil = () => {
  let {id} = useParams()
  
  const [detailCar, setDetailCar] = useState([])

  function getDetailCar() {
    try {
          const requestOptions = {
            method: 'GET',
            headers: { 'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc' }
          };
    
        fetch(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`, requestOptions)
         .then(resp => resp.json())
         .then ((data) => {
            console.log("hasil detail car " , data);
            setDetailCar(data)
         });
    } catch (error){
        console.log("Error", error.message);
    }
  }

  useEffect(() => {
    console.log("useEffect once terpanggil");
    getDetailCar();
  }, []);

    return( 
<div>
    
  <HeroSectionNoRent />
      
  <div className="grid grid-cols-2 mt-8 gap-16 mx-auto mb-5">
  <div className="w-[605px] h-[618px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-self-end">
      <p className="font-bold text-sm mt-5 ml-5"> Tentang Paket </p>
      <p className="font-bold text-sm mt-5 ml-5"> Include </p>
      <ul className="list-disc list-outside font-semibold text-sm mt-5 ml-5 text-gray-500">
        <li className="ml-5"> Apa saja yang termasuk dalam paket misal durasi max 12 jam </li>
        <li className="ml-5"> Sudah termasuk bensin selama 12 jam </li>
        <li className="ml-5"> Sudah termasuk Tiket Wisata </li>
        <li className="ml-5"> Sudah termasuk pajak </li>
      </ul>
      <p className="font-bold text-sm mt-5 ml-5"> Exclude </p>
      <ul className="list-disc list-outside font-semibold text-sm mt-5 ml-5 text-gray-500">
        <li className="ml-5"> Tidak termasuk biaya makan sopir Rp. 75000/hari </li>
        <li className="ml-5"> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam </li>
        <li className="ml-5"> Tidak termasuk akomodasi penginapan </li>
      </ul>
        <div  className="relative mt-5">
        <span className="flex items-center w-full px-4 py-2 font-semibold text-black ml-1">Refund,Reschedule,Overtime </span>
            {/* <button
                className="flex items-center w-full px-4 py-2 font-semibold text-black bg-white rounded dark:bg-white dark:focus:bg-white focus:bg-white focus:text-black focus:outline-none "
                type="button">
                <span className="ml-1">Refund,Reschedule,Overtime </span>
                <svg className="w-4 h-4 ml-80 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    style="margin-top:3px">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </button> */}
            <ul 
                className="list-disc list-outside absolute w-full  font-medium text-sm text-gray-500 bg-white rounded shadow-lg dark:text-gray-400 dark:bg-gray-700">
                <li className="ml-10">
                    <a href="#" className="block py-1 whitespace-no-wrap dark:hover:bg-gray-600 hover:bg-blue-100">
                        Tidak Termasuk Biaya makan sopir Rp. 75.000/hari
                    </a>
                </li>
                <li className="ml-10">
                    <a href="#" className="block py-1 whitespace-no-wrap dark:hover:bg-gray-600 hover:bg-blue-100">
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam
                    </a>
                </li>
                <li className="ml-10">
                    <a href="#" className="block py-1 whitespace-no-wrap dark:hover:bg-gray-600 hover:bg-blue-100">
                        Tidak termasuk akomodasi penginapan
                    </a>
                </li>
                <li className="ml-10">
                  <a href="#" className="block py-1 whitespace-no-wrap dark:hover:bg-gray-600 hover:bg-blue-100">
                      Tidak termasuk biaya makan sopir Rp. 75000/hari
                  </a>
                </li>
                <li className="ml-10">
                  <a href="#" className="block py-1 whitespace-no-wrap dark:hover:bg-gray-600 hover:bg-blue-100">
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                  </a>
              </li>
              <li className="ml-10">
                  <a href="#" className="block py-1 whitespace-no-wrap dark:hover:bg-gray-600 hover:bg-blue-100">
                      Tidak termasuk akomodasi penginapan
                  </a>
              </li>
              <li className="ml-10">
                  <a href="#" className="block py-1 whitespace-no-wrap dark:hover:bg-gray-600 hover:bg-blue-100">
                      Tidak termasuk biaya makan sopir Rp. 75000/hari
                  </a>
              </li>
              <li className="ml-10">
                <a href="#" className="block py-1 whitespace-no-wrap dark:hover:bg-gray-600 hover:bg-blue-100">
                   Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                </a>
              </li>
              <li className="ml-10">
                <a href="#" className="block py-1 whitespace-no-wrap dark:hover:bg-gray-600 hover:bg-blue-100">
                   Tidak termasuk biaya penginapan
                </a>
              </li>
            </ul>
        </div>
   
     
  </div>
  <div className="justify-self-start">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-5">
          <img className="w-full" src={detailCar.image} alt="Product Image"></img>
          <div className="px-6 py-4">
            <p className="text-gray-700 font-bold text-xl mb-2">{detailCar.name}</p>
            <div className=" text-sm mb-2">{detailCar.category}</div>
            <p className="text-gray-700 text-xs font-bold mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consequatur facilis itaque ipsum nostrum obcaecati quis corporis, accusamus tenetur. Rerum?</p>
          </div>
          <div className="grid grid-cols-2 mt-8 gap-16 mx-auto mb-5">
            <div className="justify-self-start ml-5 font-bold">
               <p> Total </p>
            </div>
            <div className="justify-self-end mr-5 font-bold"> 
              <p> RP. {detailCar.price} </p>
            </div>
          </div>
        </div>
  </div>

  </div>

  <Footer />

</div>

        
    
	
)};

export default DetailMobil;