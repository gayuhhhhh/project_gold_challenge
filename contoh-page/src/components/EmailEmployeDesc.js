import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function EmailEmployeDesc({
    //  foods = [],
    // judulKolomPertama = ""
    // listPegawai = [],
    listEmail = [],
    HeaderPertama="",
    HeaderKedua="",
    HeaderKetiga="",
    
    }) {

       
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, margin: '20px', marginTop: '60px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{HeaderPertama}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {listEmail.length > 0 && listEmail.map((email, index) => (
            <TableRow
          
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {/* {row.name} */}
                {email}
              </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

