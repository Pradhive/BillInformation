import React from "react";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

function InputDetails({
  name,
  setName,
  address,
  setAddress,
  number,
  setNumber,
  date,
  setDate,
  ship,
  setShip,
  advance,
  setAdvance,
  setTime,
  time,
  discount,
  setDiscount,
}) {
  const today = dayjs();
  return (
    <div className="p-4 bg-[#4f4e4e] rounded-xl mt-2">
      <div className="grid md:grid-cols-4 gap-4">
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={name}
          autoComplete="off"
          className="bg-white"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="number"
          label="Number"
          variant="outlined"
          value={number}
          autoComplete="off"
          className="bg-white"
          onChange={(e) => setNumber(e.target.value)}
        />

        <div>
          <input
            type="date"
            name="text"
            min={today}
            id="date"
            className="w-64 p-3 border-2"
            placeholder="Enter your Date"
            value={date}
            autoComplete="off"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <input
            type="time"
            name="text"
            id="time"
            className="w-64 p-3 border-2"
            placeholder="Enter your Date"
            value={time}
            autoComplete="off"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        
        <TextField
          id="advance"
          label="Advance"
          variant="outlined"
          value={advance}
          autoComplete="off"
          className="bg-white"
          onChange={(e) => setAdvance(e.target.value)}
        />

        <TextField
          id="discount"
          label="Discount"
          variant="outlined"
          value={discount}
          autoComplete="off"
          className="bg-white"
          onChange={(e) => setDiscount(e.target.value)}
        />

        <TextField
          id="address"
          label="Address"
          variant="outlined"
          fullWidth
          value={address}
          autoComplete="off"
          className="bg-white"
          onChange={(e) => setAddress(e.target.value)}
        />

        <TextField
          id="ship"
          label="Ship To"
          variant="outlined"
          fullWidth
          value={ship}
          autoComplete="off"
          className="bg-white"
          onChange={(e) => setShip(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputDetails;
