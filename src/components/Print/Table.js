import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TableData({list, advance, total}) {
  return (
    <>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow className="bg-gray-300" style={{ height: '20px' }}>
                <TableCell>S.No</TableCell>
                  <TableCell>Item Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list?.map((row, i) => (
                  <TableRow key={i} style={{ height: '20px' }}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{row?.description}</TableCell>
                    <TableCell align="right">{row?.price}</TableCell>
                    <TableCell align="right">{row?.quantity}</TableCell>
                    <TableCell align="right">{row?.amount}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="flex flex-col border-b-2 pb-2 text-sm md:text-lg  items-end mt-4">
            <div className="flex justify-between w-1/4">
              <div className="font-bold text-[16px]">Total </div>  <div>{total}</div>
            </div>
            <div className="flex justify-between w-1/4">
              <div className="font-bold text-[16px]">Advance </div>  <div>{advance}</div>
            </div>
            <div className="flex bg-gray-400  justify-between w-1/4 ">
              <div className="font-bold text-[16px]">Balance </div> 
              <div>{total - advance}</div>
            </div>
          </div>
    </>
  )
}

export default TableData