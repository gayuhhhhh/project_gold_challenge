import React, { useEffect, useState } from "react";
import HeroSectionNoRent from "../components/HeroSectionNoRent";
import MobilCard from "../images/innova.png"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Mobil from "../components/Mobil";

const ListMobilView = () => {
  const [listCars, setListCars] = useState([])

  function getListMobil() {
    try {
          const requestOptions = {
            method: 'GET',
            headers: { 'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc' }
          };
    
        fetch("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=1&pageSize=10", requestOptions)
         .then(resp => resp.json())
         .then ((data) => {
            console.log("hasil " , data);
            setListCars(data.cars)
         });
    } catch (error){
        console.log("Error", error.message);
    }
  }

  useEffect(() => {
    console.log("useEffect once terpanggil");
    getListMobil();
  }, []);

  return( 
      <div>
        <HeroSectionNoRent />
        <div className="grid grid-cols-4 gap-4 mt-8 mb-8">
        {listCars.length > 0 && listCars.map(item => <Mobil mobil={item}/> )}

        </div>
     
        <Footer />
      </div>
  )
};

export default ListMobilView;