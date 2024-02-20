import React from "react";
import Header from "./Header";
import ClientDetails from "./ClientDetails";
import TableData from "./Table";
import Notes from "./Notes";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function Print({
  name,
  address,
  number,
  date,
  ship,
  advance,
  time,
  list,
  total,
  show,
  setShow,
  billNo,
  discount,
}) {
  const navigation = useNavigate();
  return (
    <div className="p-5 m-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow-lg ani">
      <Header
        show={show}
        setShow={setShow}
        name={name}
        address={address}
        date={date}
        advance={advance}
        number={number}
        ship={ship}
        time={time}
        total={total}
        list={list}
        billNo={billNo}
        discount={discount}
      />
      <div className="flex flex-between w-full">
        <ClientDetails
          name={name}
          address={address}
          date={date}
          advance={advance}
          number={number}
          ship={ship}
          time={time}
          billNo={billNo}
        />
        {/* <Date date={date} advance={advance} /> */}
      </div>

      <TableData list={list} advance={advance} total={total} discount={discount}/>
      <Notes />
      {/* <Footer /> */}
      <div className="text-center text-sm">🏵️🏵️🏵️🏵️மீண்டும் ஆதரவு தருக நன்றி !!! 🏵️🏵️🏵️🏵️🏵️</div>
      {show && (
        <button
          className="bg-gray-500 mt-5 text-white font-bold  py-1 px-2 rounded   border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
          onClick={() => navigation("/bill")}
        >
          
          <EditOutlinedIcon />
        </button>
      )}
    </div>
  );
}
