import React from "react";
import Jempol from "../images/thumbsup.png"
import PriceIcon from "../images/harga.png"
import Profesional from "../images/profesional.png"
import Service from "../images/layanan.png"


const WhyUs = () => {
    return( 
<div>
<div className="mx-auto text-left ml-10 mt-8">
    <p className="font-bold text-3xl">Why Us </p>
    <div className="mx-auto text-left ml-5 mt-5">
        <p className="font-bold text-lg">Mengapa Harus Pilih Binar Car Rental</p>
    </div>
  </div>
       <div className="flex flex-row-4 flex-wrap justify-center mt-8 mb-8">
               <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-5">
                <img className="lg\:w-auto h-30 object-contain" src={Jempol} alt="Product Image"></img>
                <div className="px-16 py-16">
                    <div className="font-bold text-xl mb-2">Mobil Lengkap</div>
                    <p className="text-gray-700 text-xs font-bold mt-5 break-words">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
               </div> 
               <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-5">
                <img className="lg\:w-auto h-30 object-contain" src={PriceIcon} alt="Product Image"></img>
                <div className="px-16 py-16">
                    <div className="font-bold text-xl mb-2">Harga Murah</div>
                    <p className="text-gray-700 text-xs font-bold mt-5 break-words">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>
               </div> 
               <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-5">
                <img className="lg\:w-auto h-30 object-contain" src={Profesional} alt="Product Image"></img>
                <div className="px-16 py-16">
                    <div className="font-bold text-xl mb-2">Layanan 24 Jam</div>
                    <p className="text-gray-700 text-xs font-bold mt-5 break-words">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </div>
               </div> 
               <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-5">
                <img className="lg\:w-auto h-30 object-contain" src={Service} alt="Product Image"></img>
                <div className="px-16 py-16">
                    <div className="font-bold text-xl mb-2">Sopir Profesional</div>
                    <p className="text-gray-700 text-xs font-bold mt-5 break-words">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </div>
               </div> 
       </div>
</div>
  
)};

export default WhyUs;