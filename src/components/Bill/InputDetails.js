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
}) {
  const today = dayjs();
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4">
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={name}
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="number"
          label="Number"
          variant="outlined"
          value={number}
          autoComplete="off"
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
          onChange={(e) => setAdvance(e.target.value)}
        />

        <TextField
          id="address"
          label="Address"
          variant="outlined"
          fullWidth
          value={address}
          autoComplete="off"
          onChange={(e) => setAddress(e.target.value)}
        />

        <TextField
          id="ship"
          label="Ship To"
          variant="outlined"
          fullWidth
          value={ship}
          autoComplete="off"
          onChange={(e) => setShip(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputDetails;
