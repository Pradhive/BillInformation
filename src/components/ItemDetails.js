import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { v4 as uuidv4 } from "uuid";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import collect from "collect.js";

function ItemDetails({ list, setList, advance, total, setTotal }) {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);

  const items = [
    { label: "இட்லி", value: "இட்லி" },
    { label: "பொங்கல்", value: "பொங்கல்" },
    { label: "தோசை", value: "தோசை" },
    { label: "சாப்பாடு", value: "சாப்பாடு" },
    { label: "பிரியாணி ", value: "பிரியாணி " },
    { label: "கேசரி", value: "கேசரி" },
    { label: "வடை ", value: "வடை " },
    { label: "புளி சாதம் ", value: "புளி சாதம் " },
  ];

  const handleSave = () => {
    const cur = {
      id: uuidv4(),
      description: description,
      price: price,
      quantity: quantity,
      amount: amount,
    };
    setList((prevList) => [...prevList, cur]);
  };

  const handleClick = () => {
    setDescription("");
    setAmount(0);
    setPrice(0);
    setQuantity(0);
  };

  useEffect(() => {
    setAmount(price * quantity);
  }, [price, quantity]);

  const editRow = (id) => {
    const editingRow = list.find((row) => row?.id === id);
    setList(list?.filter((row) => row?.id !== id));
    setDescription(editingRow?.description);
    setQuantity(editingRow?.quantity);
    setPrice(editingRow?.price);
    setAmount(editingRow?.amount);
  };

  const deleteRow = (id) => {
    setList(list.filter((row) => row?.id !== id));
  };

  const calculateTotal = () => {
    const allItems = list.map((item) => item?.amount);

    setTotal(collect(allItems)?.sum());
  };

  useEffect(() => {
    calculateTotal();
  });

  return (
    <div>
      <div className="mt-5">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          value={description}
          options={items}
          fullWidth
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Description" />
          )}
          onInputChange={(event, newInputValue) => {
            setDescription(newInputValue);
          }}
        />
        <div className="space-y-2 md:flex items-center justify-between mt-5">
          <TextField
            id="price"
            label="Price"
            variant="outlined"
            value={price}
            autoComplete="off"
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            id="quantity"
            label="Quantity"
            variant="outlined"
            value={quantity}
            autoComplete="off"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            id="amount"
            label="Amount"
            variant="outlined"
            value={amount}
            autoComplete="off"
          />
        </div>
        <div className="w-full text-right">
          <button
            className=" mt-5 bg-green-500  text-white font-bold  py-2 px-8 rounded shadow-xl border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
            onClick={handleSave}
          >
            <DownloadDoneIcon />
            Save
          </button>
        </div>
      </div>

      <button
        className=" mt-5 bg-yellow-500  text-white font-bold  py-2 px-8 rounded shadow-xl border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-all duration-300"
        onClick={handleClick}
      >
        <AddShoppingCartIcon />
        Add Item
      </button>

      {list?.length ? (
        <>
          <div className="mt-5">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="bg-gray-300">
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Delete</TableCell>
                    <TableCell align="right">Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list?.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row?.description}</TableCell>
                      <TableCell align="right">{row?.price}</TableCell>
                      <TableCell align="right">{row?.quantity}</TableCell>
                      <TableCell align="right">{row?.amount}</TableCell>
                      <TableCell align="right">
                        <span
                          className="text-red-600"
                          onClick={() => deleteRow(row?.id)}
                        >
                          <DeleteIcon />
                        </span>
                      </TableCell>
                      <TableCell align="right">
                        <span
                          className="text-gray-400"
                          onClick={() => editRow(row?.id)}
                        >
                          <EditIcon />
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="flex flex-col items-end mt-4">
            <div className="flex justify-between w-1/4 text-lg mr-10">
              <div className="font-bold">SubTotal </div>  <div>{total}</div>
            </div>
            <div className="flex justify-between w-1/4 text-lg mr-10">
              <div className="font-bold">Advance </div>  <div>{advance}</div>
            </div>
            <div className="flex justify-between w-1/4 text-lg mr-10">
              <div className="font-bold">Total </div> 
              <div>{total - advance}</div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ItemDetails;
