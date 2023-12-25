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
    { label: "இட்லி", value: "இட்லி" , price : 7.5},
    { label: "ஆட்டோ வாடகை", value: "ஆட்டோ வாடகை", price : 100 },
    { label: "பொங்கல்", value: "பொங்கல்", price : 35 },
    { label: "தோசை", value: "தோசை", price : 25 },
    { label: "வெஜ் பிரியாணி", value: "வெஜ் பிரியாணி", price : 60 },
    { label: "காளான் பிரியாணி", value: "காளான் பிரியாணி", price : 70 },
    { label: "சாப்பாடு", value: "சாப்பாடு", price : 85 },
    { label: "கேசரி", value: "கேசரி", price : 15 },
    { label: "ஊத்தாப்பம்", value: "ஊத்தாப்பம்", price : 35 },
    { label: "இடியாப்பம்", value: "இடியாப்பம்", price : 20 },
    { label: "பூரி (set)", value: "பூரி", price : 30 },
    { label: "சப்பாத்தி (set)", value: "சப்பாத்தி", price : 30 },
    { label: "புரோட்டா", value: "புரோட்டா", price : 15 },
    { label: "சர்க்கரை பொங்கல்(kg) ", value: "சர்க்கரை பொங்கல் ", price : 450 },
    { label: "புளி சாதம் (kg)", value: "புளி சாதம் ", price : 300 },
    { label: "தக்காளி சாதம்(kg)", value: "தக்காளி சாதம்", price : 300 },
    { label: "தயிர் சாதம்(kg)", value: "தயிர் சாதம்", price : 300 },
    { label: "லெமன் சாதம்(kg)", value: "லெமன் சாதம்", price : 300 },
    { label: "தேங்காய் சாதம்(kg)", value: "தேங்காய் சாதம்", price : 300 },
    { label: "மல்லி சாதம்(kg)", value: "மல்லி சாதம்", price : 300 },
    { label: "வளைகாப்பு சாப்பாடு ", value: "வளைகாப்பு சாப்பாடு ", price : 150 },
    { label: "குஸ்கா (kg)", value: "குஸ்கா", price : 350 },
    { label: "சிக்கன் பிரியாணி", value: "சிக்கன் பிரியாணி", price : 100 },
    { label: "சிக்கன் கிரேவி(kg)", value: "சிக்கன் கிரேவி", price : 120 },
    { label: "மட்டன் கிரேவி(kg)", value: "மட்டன் கிரேவி", price : 150 },
    { label: "பிரியாணி(kg)", value: "பிரியாணி", price : 600 },
    { label: "அப்பளம்", value: "அப்பளம்", price : 3 },
    { label: "காய் கூட்டு ", value: "காய் கூட்டு ", price : 12 },
    { label: "கோதுமை கிச்சடி ", value: "கோதுமை கிச்சடி ", price : 35 },
    { label: "சுண்டல் (kg) ", value: "சுண்டல்  ", price : 250 },
    { label: "தண்ணீர் கேன் ", value: "தண்ணீர் கேன் ", price : 40 },
    { label: "பாயாசம் ", value: "பாயாசம் ", price : 10 },
    { label: "ரவா தோசை ", value: "ரவா தோசை ", price : 35 },
    { label: "முட்டை ", value: "முட்டை ", price : 10 },
    { label: "சாம்பார் ", value: "சாம்பார் ", price : 100 },
    { label: "வடை ", value: "வடை ", price : 5 },
    { label: "கலக்கி  ", value: "கலக்கி  ", price : 20 },
    { label: "ஆம்லெட்  ", value: "ஆம்லெட்  ", price : 15 },
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
            const selectedItem = items.find(
              (item) => item.label === newInputValue
            );
            if (selectedItem) {
              setDescription(selectedItem.label);
              setPrice(selectedItem.price);
            } else {
              setDescription(newInputValue);
            }
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
