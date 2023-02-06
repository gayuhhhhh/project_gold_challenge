import React from "react";
import EmailIcon from "../images/Email.png"
import FacebookIcon from "../images/facebook.png"
import InstagramIcon from "../images/instagram.png"
import TwitterIcon from "../images/twitter.png"
import TwitchIcon from "../images/twitch.png"
import Kotak from "../images/Rectangle 74.png"

const Footer = () => {
    return( 
<div>
<footer className="text-center lg:text-left bg-white text-black">
  
  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="">
        <h6 className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          ">
        
        </h6>
     <p className="font-bold text-sm "> Jalan Suroyo No. 161 Mayangan Kota</p>
     <p className="font-bold text-sm"> Probolonggo 67200</p>
     <p className="font-bold text-sm mt-5">binarcarrental@gmail.com</p>
     <p className="font-bold text-sm mt-5">081-233-334-808</p>
      </div>
      <div className="">
        <h6 className="uppercase font-bold mb-4 flex justify-center md:justify-start">
        </h6>
        <p className="mb-4">
          <a href="#!" className="font-bold text-black">Our Services</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="font-bold text-black">Why Us</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="font-bold text-black">Testimonial</a>
        </p>
        <p>
          <a href="#!" className="font-bold text-black">FAQ</a>
        </p>
      </div>
      <div className="">
        <h6 className="uppercase font-bold mb-4 flex justify-center md:justify-start">
          Connect With Us
        </h6>
      <div className="grid grid-cols-5">
      <img className="w-[32px] h-[32px]" src={FacebookIcon}></img>
      <img className="w-[32px] h-[32px]" src={InstagramIcon}></img>
      <img className="w-[32px] h-[32px]" src={TwitterIcon}></img>
      <img className="w-[32px] h-[32px]" src={EmailIcon}></img>
      <img className="w-[32px] h-[32px]" src={TwitchIcon}></img>
      </div>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        Copyright Binar 2022
        </h6>
        <p className="flex items-center justify-center md:justify-start mb-4">
        <img className="mt-5" src={Kotak}></img>
        </p>
        
      </div>
    </div>
  </div>

</footer>
{/* <footer>
  <div className="grid grid-cols-4 mt-10 gap-12 mx-auto mb-5 ml-40 md:shrink-0">
  <div className="justify-self-start">
     <p className="font-bold text-sm ml-10"> Jalan Suroyo No. 161 Mayangan Kota</p>
     <p className="font-bold text-sm ml-10"> Probolonggo 67200</p>
     <p className="font-bold text-sm ml-10 mt-5">binarcarrental@gmail.com</p>
     <p className="font-bold text-sm ml-10 mt-5">081-233-334-808</p>
  </div>
  <div className="justify-self-auto mb-5">
    <p className="font-normal text-sm "> Our Services</p>
    <p className="font-normal text-sm mt-5 "> Why Us</p>
    <p className="font-normal text-sm mt-5">Testimonial</p>
    <p className="font-normal text-sm mt-5">FAQ</p>
  </div>
  <div className="justify-self-auto mb-5 mr-20">
    <p className="font-bold text-sm mr-5"> Connect with us </p>
    <div className="grid grid-cols-5 mt-5">
      <img className="w-[32px] h-[32px]" src={FacebookIcon}></img>
      <img className="w-[32px] h-[32px]" src={InstagramIcon}></img>
      <img className="w-[32px] h-[32px]" src={TwitterIcon}></img>
      <img className="w-[32px] h-[32px]" src={EmailIcon}></img>
      <img className="w-[32px] h-[32px]" src={TwitchIcon}></img>
    </div>
    
  </div>
  <div className="justify-self-auto mb-5">
    <p className="font-bold text-sm "> Copyright Binar 2022</p>
    <img className="mt-5" src={Kotak}></img>
  </div>
  </div>

</footer> */}

</div>
        
    
	
)};

export default Footer;