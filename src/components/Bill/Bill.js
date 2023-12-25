import React from "react";
import InputDetails from "./InputDetails";
import ItemDetails from "./ItemDetails";
import { useNavigate } from "react-router-dom";

export default function Bill({
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
  time,
  setTime,
  list,
  setList,
  total,
  setTotal,
}) {
  const navigation = useNavigate();
  return (
    <>
      <button
        className="bg-gray-500 mt-5 text-white font-bold  py-2 px-8 rounded shadow-xl border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
        onClick={() => navigation("/")}
      >
        Home
      </button>
      <InputDetails
        name={name}
        setName={setName}
        address={address}
        setAddress={setAddress}
        number={number}
        setNumber={setNumber}
        date={date}
        setDate={setDate}
        ship={ship}
        setShip={setShip}
        advance={advance}
        setAdvance={setAdvance}
        time={time}
        setTime={setTime}
      />

      <ItemDetails
        list={list}
        setList={setList}
        total={total}
        setTotal={setTotal}
        advance={advance}
      />

      <div className="flex justify-between w-full">
        <div className="mt-5">
          <button
            className="bg-blue-500  text-white font-bold  py-2 px-8 rounded shadow-xl border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            onClick={() => navigation("/print")}
          >
            Preview Invoice
          </button>
        </div>
      </div>
    </>
  );
}
