import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function EmployeeTable({
    //  foods = [],
    // judulKolomPertama = ""
    listPegawai = [],
    HeaderPertama="",
    HeaderKedua="",
    HeaderKetiga="",
    HeaderKeempat="",
    HeaderKelima="",
    HeaderKeenam="",
    HeaderKetujuh="",
    HeaderDelapan="",
    HeaderSembilan="", 
    HeaderSepuluh="",
   
    }) {

        // console.log("EmployeeTable", foods);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, margin: '20px', marginTop: '60px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{HeaderPertama}</TableCell>
            <TableCell>{HeaderKedua}</TableCell>
            <TableCell>{HeaderKetiga}</TableCell>
            <TableCell>{HeaderKeempat}</TableCell>
            <TableCell>{HeaderKelima}</TableCell> 
            <TableCell>{HeaderKeenam}</TableCell>
            <TableCell>{HeaderKetujuh}</TableCell>
            <TableCell>{HeaderDelapan}</TableCell>
            <TableCell>{HeaderSembilan}</TableCell>
            <TableCell>{HeaderSepuluh}</TableCell>
            {/* <TableCell>{judulKolomPertama}</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell> */}
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {foods.map((row) => ( */}
            {listPegawai.length > 0 && listPegawai.map((pegawai) => (
            <TableRow
            //   key={row.name}
              key={pegawai.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {/* {row.name} */}
                {pegawai.id}
              </TableCell>
              <TableCell>{pegawai.name}</TableCell>
              <TableCell>{pegawai.email}</TableCell>
              <TableCell>{pegawai.company.name}</TableCell>
              <TableCell>{pegawai.address.street}</TableCell>
              <TableCell>{pegawai.address.suite}</TableCell>
              <TableCell>{pegawai.address.city}</TableCell>
              <TableCell>{pegawai.address.zipcode}</TableCell>
              <TableCell>{pegawai.address.geo.lng}</TableCell>
              <TableCell>{pegawai.address.geo.lat}</TableCell> 
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

