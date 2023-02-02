import React, {useState, useEffect} from "react";
import EmailEmployeDesc from "../components/EmailEmployeDesc";
import EmailEmployees from "../components/EmailEmployees";
import EmployeeTable from "../components/EmployeeTable";
// import { useEffect, useState } from "react";


const EmployeePage = () => {
    const [employees, setEmployees] = useState([]);
    const [emailList, setEmailList] = useState([]);
    const [emailListAsc, setEmailAsc] = useState([]);
    const [employeeSummaries, setEmployeeSumaries] = useState([]);
    // const [foods, setFoods] = useState([]);

    // function createData(
    //     name,
    //     calories,
    //     fat,
    //     carbs,
    //     protein,
    //   ) {
    //     return { name, calories, fat, carbs, protein };
    //   }
    
    function getEmployeeData() {
        try {
            fetch("https://jsonplaceholder.typicode.com/users")
             .then(resp => resp.json())
             .then ((data) => {
                 setEmployees(data);
                // console.log("users", data);
             });
        } catch (error){
            console.log("Error", error.message);
        }
    }

    useEffect(() => {
        console.log("useEffect once terpanggil");
        getEmployeeData();
    }, []);

    useEffect(() => {
        console.log("Employees terpanggil");
        if (employees.length > 0) {
            //Email
            const list = employees.map((item) => item.email);
            const desc = list.sort((a, b) => {
                const emailA = a.toLowerCase();
                const emailB = b.toLowerCase();
                if (emailA < emailB) {
                  return 1;
                }
                if (emailA > emailB) {
                  return -1;
                }
                return 0;
            })
            setEmailList(desc);

            const ascList = employees.map((item) => item.email)
            const asc = ascList.sort((a, b) => {
                const emailA = a.toLowerCase();
                const emailB = b.toLowerCase();
                if (emailA < emailB) {
                  return -1;
                }
                if (emailA > emailB) {
                  return 1;
                }
                return 0;
            })
            setEmailAsc(asc)
            //Summary
            const temp = employees.map((item => {
                return {
                    id: item.id,
                    name: item.name,
                    email: item.email,
                    companyName: item.company.name,
                    address: item.address,
                    street: item.address.street,
                    suite: item.address.suite,
                    city: item.address.city,
                    zipcode: item.address.zipcode,
                    geo: item.address.geo,
                    long: item.address.geo.lng,
                    lat: item.address.geo.lat
                }
            }));
            setEmployeeSumaries(temp);
        }
    }, [employees]);

    useEffect(() => {
    //     // if (emailList.length > 0) {
    //     //     const emailSortDesc = emailList.sort((a, b) => {
    //     //         const emailA = a.toLowerCase();
    //     //         const emailB = b.toLowerCase();
    //     //         if (emailA < emailB) {
    //     //           return 1;
    //     //         }
    //     //         if (emailA > emailB) {
    //     //           return -1;
    //     //         }
    //     //         return 0;
    //     //     });
    //     //     setEmailList(emailSortDesc);

    //     //     console.log("Sort descending", emailSortDesc);
    //     //     console.log(emailList, );
    //     // }
    }, [emailList]);

    useEffect(() => {
    }, [emailListAsc])

      useEffect(() => {
        getEmployeeData();
        // const rows = [
        //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        //     createData('Eclair', 262, 16.0, 24, 6.0),
        //     createData('Cupcake', 305, 3.7, 67, 4.3),
        //     createData('Gingerbread', 356, 16.0, 49, 3.9),
        //   ];

        //   setFoods(rows);
      }, []);

    //   console.log("Employee Page : ", foods);
    return( 
		<div>
          <EmployeeTable
        //   foods={foods}
        //   judulKolomPertama="Dessert"
             listPegawai={employees}
             HeaderPertama="ID"
             HeaderKedua="Nama"
             HeaderKetiga="Email" 
             HeaderKeempat="Company-Name"
             HeaderKelima="Street"
             HeaderKeenam="Suite" 
             HeaderKetujuh="City"
             HeaderDelapan="Zipcode"
             HeaderSembilan="Long" 
             HeaderSepuluh="Lat"
           
             />

    <EmailEmployees
        //   foods={foods}
        //   judulKolomPertama="Dessert"
             listEmail={emailListAsc}
             HeaderPertama="Email Ascending" 
             />
		  {/* {employeeSummaries.length > 0 && JSON.stringify(employeeSummaries)} */}

          <EmailEmployeDesc
        //   foods={foods}
        //   judulKolomPertama="Dessert"
             listEmail={emailList}
             HeaderPertama="Email Descending" 
             />
		</div>
       )
   
};

export default EmployeePage;