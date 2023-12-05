import Header from "./components/Header";
import ClientDetails from "./components/ClientDetails";
import Notes from "./components/Notes";
import { useState } from "react";
import InputDetails from "./components/InputDetails";
import ItemDetails from "./components/ItemDetails";
import TableData from "./components/Table";
import { useEffect } from "react";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [ship, setShip] = useState("");
  const [advance, setAdvance] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(true);
  const [time, setTime] = useState("");

  

  return (
    <>
      <main className="p-5 m-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow-lg">
        {showInvoice ? (
          <div>
            <Header show={show} setShow={setShow} />
            <div className="flex flex-between w-full">
              <ClientDetails
                name={name}
                address={address}
                date={date}
                advance={advance}
                number={number}
                ship={ship}
                time={time}
              />
              {/* <Date date={date} advance={advance} /> */}
            </div>
            
            <TableData list={list} advance={advance} total={total} />
            <Notes />
            {/* <Footer /> */}
            {show && <button
              className="bg-gray-500 mt-5 text-white font-bold  py-2 px-8 rounded shadow-xl border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
              onClick={() => setShowInvoice(false)}
            >
              Edit Information
            </button>}
          </div>
        ) : (
          <>
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

            <div className="w-full text-right mt-5">
              <button
                className="bg-blue-500  text-white font-bold  py-2 px-8 rounded shadow-xl border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
                onClick={() => setShowInvoice(true)}
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
