import React from "react";
import CardTestimoni from "../components/CardTestimoni";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import OurService from "../components/OurService";
import WhyUs from "../components/WhyUs";
import BlueKotakSewa from "../components/BlueKotakSewa";
import FAQSection from "../components/FAQSection";

const LandingPage = () => {
    return( 
		 <div>
      <HeroSection />

      <OurService />
      
      <WhyUs />

  <div className="mx-auto text-center mt-8">
    <p className="font-bold text-3xl">Testimonial</p>
    <div className="mx-auto text-center mt-5">
        <p className="font-bold text-lg">Berbagai Review Positif Dari Pelanggan Kami</p>
    </div>
  </div>

      <CardTestimoni />

      <BlueKotakSewa />
  
      <FAQSection />
   

  <Footer />


</div>


  
    
	
)};

export default LandingPage;