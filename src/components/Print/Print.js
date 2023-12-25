import React from 'react'
import Header from './Header'
import ClientDetails from './ClientDetails'
import TableData from './Table'
import Notes from './Notes'
import { useNavigate } from 'react-router-dom'

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
    billNo
  }) {
    const navigation = useNavigate();
  return (
    <div>
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
              total = {total}
              list = {list}
              billNo={billNo}
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
                billNo = {billNo}
              />
              {/* <Date date={date} advance={advance} /> */}
            </div>

            <TableData list={list} advance={advance} total={total} />
            <Notes />
            {/* <Footer /> */}
            {show && (
              <button
                className="bg-gray-500 mt-5 text-white font-bold  py-2 px-8 rounded shadow-xl border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
                onClick={()=>navigation("/bill")}
              >
                Edit Information
              </button>
            )}
          </div>
  )
}