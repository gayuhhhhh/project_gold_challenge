import React, { useState } from "react";
import HeroSectionNoRent from "../components/HeroSectionNoRent";
import Footer from "../components/Footer";

import Mobil from "../components/Mobil";


const SearchMobil = () => {

  const [listCars, setListCars] = useState([])

  const [nameCar, setName] = useState({
    name: ""
  });
  const [categoryCar, setCategory] = useState({
    category: ""
  });
  console.log(nameCar, 'dari name as')
  
  const [statusCar, setStatusCar] = useState({
    status: ""
  });
  const [priceCar, setPriceCar] = useState({
    price: ""
  });

//mengisi sebua
  const handleChangeName = (e) => {
    const name = e.target.name
    const value = e.target.value
    setName({
      ...nameCar,
      [name] : value
    })
  };

  const handleChangeCategory = (e) => {
    const name = e.target.name
    const value = e.target.value
    setCategory({
      ...categoryCar,
      [name] : value
    })
  };

  const handleChangeStatus = (e) => {
    const name = e.target.name
    const value = e.target.value
    setStatusCar({
      ...statusCar,
      [name] : value
    })
  };

  const handleChangePrice = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPriceCar({
      ...priceCar,
      [name] : value
    })
  };

  function getListMobil() {
    try {
          const requestOptions = {
            method: 'GET',
            headers: { 'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc' }
          };
    
        fetch(`https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?name=${nameCar.name}&category=${categoryCar.category}&isRented=${statusCar.status}&maxPrice=${priceCar.price}`, requestOptions)
         .then(resp => resp.json())
         .then ((data) => {
            console.log("hasil dari serachhhhhhhhhhhhhhh" , data);
            setListCars(data.cars)
         });
    } catch (error){
        console.log("Error", error.message);
    }
  }

  // useEffect(() => {
  //   console.log("useEffect once terpanggil");
  //   getDetailCar();
  // }, []);

    return( 
<div>
    
   <HeroSectionNoRent />
  <div className="w-[1500px] border border-slate-200 h-24 bg-gray-50 mt-8 mx-auto mb-8">
  <div className="grid grid-cols-5 gap-4 my-auto">
    <div className="my-auto p-3">
      <div className="">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Nama Mobil</label>
        <input
        name="name"
          onChange={handleChangeName}
          value={nameCar.name}
          type="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="exampleSearch2"
          placeholder="Nama Mobil"
        />
      </div>
    </div>
    <div className="my-auto p-3">
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori</label>
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="category"
      value={categoryCar.category}
      onChange={handleChangeCategory}>
        <option selected>Masukkan kapasitas mobil</option>
        <option value="small">2-4 Orang</option>
        <option value="medium">4-6 Orang</option>
        <option value="large">6-8 Orang</option>
        <option value="big">8-10 Orang</option>
    </select>
    </div>
    <div className="my-auto p-3">
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga</label>
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="price"
      value={priceCar.price}
      onChange={handleChangePrice}>
        <option selected>Masukkan Harga</option>
        <option value="1000000">Rp. 0 - Rp. 1.000.000</option>
        <option value="1000000000"> Rp. 1.000.000 - Rp. 1.000.000.000 </option>
    </select>
    </div>
    <div className="my-auto p-3">
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori</label>
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="status"
      value={statusCar.status}
      onChange={handleChangeStatus}>
        <option selected>Masukkan Status</option>
        <option value="true">Sudah Disewakan</option>
        <option value="false">Belum Disewakan</option>
    </select>
    </div>    
    <div className="cursor-pointer my-auto mt-6 p-3">
      {/* <Link to={`/listmobil/search/${nameCar.name}`} > */}
      <p 
      onClick={getListMobil}
      className="inline-flex items-center justify-center px-8 py-3 text-gray-100 bg-green-600 rounded-md shadow hover:text-gray-100 hover:bg-green-500 ">Cari Mobil</p>
      {/* </Link> */}
      
    </div>

  </div>
  </div>
  <div className="flex flex-row-3 flex-wrap justify-center gap-4 mt-8 mb-8">
        {listCars.length > 0 && listCars.map(item => <Mobil mobil={item}/> )}
        </div>

  <Footer />

</div>
    
    
    
	
)};

export default SearchMobil;