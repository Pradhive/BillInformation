import React from "react";
import InputDetails from "./InputDetails";
import ItemDetails from "./ItemDetails";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import Logo from "../../assests/Logo.jpeg";

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
  discount,
  setDiscount,
}) {
  const navigation = useNavigate();
  return (
    <div className="bg-[#1e1e1e] h-fit p-2 py-8 ani">
      <div className="flex items-center justify-between py-4">
        <button
          className="text-white text-lg hover:tracking-widest font-bold rounded py-2 px-4 hover:bg-white hover:text-black transition-all duration-700"
          onClick={() => navigation("/")}
        >
          <ArrowBackIosOutlinedIcon />
          <HomeOutlinedIcon />
        </button>
        <div className="text-[20px] md:text-[30px] font-bold  flex items-center justify-center text-white ani">
          Bill
        </div>
        <img src={Logo} alt="" className="h-[8vh] w-[8vw] pr-10" />
      </div>
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
        discount={discount}
        setDiscount = {setDiscount}
      />

      <ItemDetails
        list={list}
        setList={setList}
        total={total}
        setTotal={setTotal}
        advance={advance}
        discount={discount}
        setDiscount = {setDiscount}
      />

      <div className="flex justify-center items-center w-full py-10">
        <div className="mt-5">
          <button
            className="text-white text-lg hover:tracking-widest font-bold rounded py-2 px-4 hover:bg-white hover:text-black transition-all duration-700"
            onClick={() => navigation("/print")}
          >
            Preview Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
