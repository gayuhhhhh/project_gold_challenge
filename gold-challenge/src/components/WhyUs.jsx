import React from "react";
import Jempol from "../images/thumbsup.png"
import PriceIcon from "../images/harga.png"
import Profesional from "../images/profesional.png"
import Service from "../images/layanan.png"


const WhyUs = () => {
    return( 
<div>

  
      
  <div className="grid grid-cols-2 mt-8">
    <div className="justify-self-center">
        <p className="font-bold text-3xl">Why Us ? </p>
    </div>
  </div>
    <div className="grid grid-cols-2 mt-8">
    <div className="justify-self-end mr-36">
        <p className="font-semibold text-xl">Mengapa Harus Pilih Binar Car Rental </p>
    </div>
    </div>
  <div className="grid grid-cols-4 ml-24 mr-24 mx-2 mt-8">
    <div className="w-auto px-2">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img className="lg\:w-auto h-30 object-contain" src={Jempol} alt="Card Image"></img>
        <div className="px-16 py-16">
          <h2 className="text-lg font-medium text-gray-900">Mobil Lengkap</h2>
          <p className="text-gray-700 mt-5">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
        </div>
      </div>
    </div>
    <div className="w-auto px-2">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img className="lg\:w-auto h-30 object-contain" src={PriceIcon} alt="Card Image"></img>
        <div className="px-16 py-16">
          <h2 className="text-lg font-medium text-gray-900">Harga Murah</h2>
          <p className="text-gray-700 mt-5">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
        </div>
      </div>
    </div>
    <div className="w-auto px-2">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img className="lg\:w-auto h-30 object-contain" src={Service} alt="Card Image"></img>
        <div className="px-16 py-16">
          <h2 className="text-lg font-medium text-gray-900">Layanan 24 Jam</h2>
          <p className="text-gray-700 mt-5">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
        </div>
      </div>
    </div>
    <div className="w-auto px-2">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img className="lg\:w-auto object-contain" src={Profesional} alt="Card Image"></img>
        <div className="px-16 py-16">
          <h2 className="text-lg font-medium text-gray-900">Sopir Profesional</h2>
          <p className="text-gray-700 mt-5">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
        </div>
      </div>
    </div>
  </div>

  

</div>
    
    
    
	
)};

export default WhyUs;