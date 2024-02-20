import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import { useState } from "react";
import Bill from "./components/Bill/Bill";
import Print from "./components/Print/Print";
import Login from "./components/Login/pages/Login";
import Listing from "./components/List/Listing";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./components/Firebase/firebase";

export default function Routing() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [ship, setShip] = useState("");
  const [advance, setAdvance] = useState("");
  const [discount, setDiscount] = useState(0);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(true);
  const [time, setTime] = useState("");
  const [billNo, setBillNo] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchPost = async () => {
    let baseQuery = collection(db, "billData");
    let finalQuery = baseQuery;

    await getDocs(finalQuery).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBillNo(newData.length + 1);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        {isLoggedIn ? (
          <>
            <Route path="/">
              <Route
                index
                element={
                  <Home
                    setName={setName}
                    setAddress={setAddress}
                    setNumber={setNumber}
                    setDate={setDate}
                    setShip={setShip}
                    setAdvance={setAdvance}
                    setTime={setTime}
                    setList={setList}
                    setBillNo={setBillNo}
                  />
                }
              />
              <Route
                path="bill"
                element={
                  <Bill
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
                    list={list}
                    setList={setList}
                    total={total}
                    setTotal={setTotal}
                    discount={discount}
                    setDiscount = {setDiscount}
                  />
                }
              />
              <Route
                path="print"
                element={
                  <Print
                    name={name}
                    address={address}
                    number={number}
                    date={date}
                    ship={ship}
                    advance={advance}
                    time={time}
                    list={list}
                    total={total}
                    show={show}
                    setShow={setShow}
                    billNo={billNo}
                    discount={discount}
                    setDiscount = {setDiscount}
                  />
                }
              />
            </Route>
            <Route
              path="list"
              element={
                <Listing
                  setName={setName}
                  setAddress={setAddress}
                  setNumber={setNumber}
                  setDate={setDate}
                  setShip={setShip}
                  setAdvance={setAdvance}
                  setTime={setTime}
                  setList={setList}
                  setBillNo={setBillNo}
                  setDiscount = {setDiscount}
                />
              }
            />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
