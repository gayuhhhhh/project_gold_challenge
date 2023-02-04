import React from "react";
import Checklist from "../images/check.svg"
import BinarGirl from "../images/binar.png"


const OurService = () => {
    return( 
<div>

   
      
      <div className="grid grid-cols-2 mt-8 gap-16 mx-auto">
        <div className="justify-self-end">
            <img  className="w-96 h-75" src={BinarGirl} alt=""></img>
        </div>
        <div className="justify-self-start">
            <div className="flex w-80 mt-4">
                <p className="font-bold text-xl">Best Car Rental for any kind of trip in (Lokasimu) ! </p>
            </div>
              <div className="flex w-96 mt-4">
                <p className="font-bold text-sm">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata</p>
            </div>
              <div className="flex mt-4">
                <img src={Checklist} className="mr-4"></img>
                <p> <strong>Sewa Mobil Dengan Supir di Bali 12 Jam</strong></p>
            </div>  
            <div className="flex mt-4">
                <img src={Checklist}  className="mr-4"></img>
                <p> <strong>Sewa Mobil Lepas Kunci di Bali 24 Jam</strong> </p>
            </div> 
             <div className="flex mt-4">
                <img src={Checklist}  className="mr-4"></img>
                <p> <strong>Sewa Mobil Jangka Panjang Bulanan</strong> </p>
            </div>  
            <div className="flex mt-4">
                <img src={Checklist}  className="mr-4"></img>
                <p> <strong>Gratis Antar - Jemput Mobil di Bandara</strong></p>
            </div>
            <div className="flex mt-4">
                <img src={Checklist}  className="mr-4"></img>
                <p> <strong>Layanan Airport Transfer / Drop In Out</strong></p>
            </div>
            </div>
      </div>

 

</div>
    
    
    
	
)};

export default OurService;