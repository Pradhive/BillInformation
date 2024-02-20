import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TableData({ list, advance, total, discount }) {
  const numberToWords = (num) => {
    const units = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const teens = [
      "",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "Ten",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    if (num === 0) return "Zero";

    const numToWordsHelper = (num) => {
      if (num < 10) return units[num];
      if (num < 20) return teens[num - 10];
      if (num < 100)
        return (
          tens[Math.floor(num / 10)] +
          (num % 10 !== 0 ? " " + units[num % 10] : "")
        );
      if (num < 1000)
        return (
          units[Math.floor(num / 100)] +
          " Hundred" +
          (num % 100 !== 0 ? " " + numToWordsHelper(num % 100) : "")
        );
      if (num < 10000)
        return (
          units[Math.floor(num / 1000)] +
          " Thousand" +
          (num % 1000 !== 0 ? " " + numToWordsHelper(num % 1000) : "")
        );
      if (num < 1000000)
        return (
          numToWordsHelper(Math.floor(num / 1000)) +
          " Thousand" +
          (num % 1000 !== 0 ? " " + numToWordsHelper(num % 1000) : "")
        );
      return "Number is too large";
    };

    return numToWordsHelper(num);
  };

  const totatWord = numberToWords(total);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="bg-gray-500" style={{ height: "20px" }}>
              <TableCell>S.No</TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list?.map((row, i) => (
              <TableRow key={i} style={{ height: "20px" }}>
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
      <div className="flex justify-between my-5">
        <div className="mt-10 space-y-3">
          <div className="font-bold">Invoice Amount in Words</div>
          <div className="text-sm">{totatWord + " Rupees Only"}</div>
        </div>
        <div className=" border-b-2 pb-2 text-sm md:text-lg mt-4">
          <div className="flex justify-between w-[20vw]">
            <div className="font-bold text-[16px]">Total </div>{" "}
            <div>{total}</div>
          </div>
          <div className="flex justify-between w-[20vw]">
            <div className="font-bold text-[16px]">Advance </div>{" "}
            <div>{advance}</div>
          </div>
          {discount?.length > 0 && (
            <div className="flex justify-between w-[20vw]">
              <div className="font-bold text-[16px]">Discount </div>{" "}
              <div>{discount}</div>
            </div>
          )}
          <div className="flex bg-gray-400  justify-between w-[20vw] ">
            <div className="font-bold text-[16px]">Balance </div>
            {discount?.length > 0 ? (
              <div>{total - advance - discount}</div>
            ) : (
              <div>{total - advance}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TableData;
