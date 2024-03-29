import React from "react";
import moment from "moment";

function ClientDetails({ name, address, number, ship, date, time, billNo }) {

  return (
    <>
      <section className="flex text-[14px] flex-col w-full mb-4">
      <div className="font-bold text-lg w-full text-center">Cash Bill</div>
        <div className="flex justify-between">
          <div className="w-1/3">
            <h2 className=" font-semibold uppercase">{name}</h2>
            <p>{number}</p>
            <p>{address}</p>
          </div>
          
          <div className="flex flex-col  items-end ">
            <div className="font-bold">
              Invoice No : <span className="font-normal">{billNo}</span> 
            </div>
            <div className="font-bold">
              Date : <span className="font-normal">{moment(date).format("DD-MM-YYYY")}</span>
            </div>

            <div className="font-bold">
              Time : <span className="font-normal">{time}</span>
            </div>
            <div>
              <span className="font-bold">Deliver-</span>
              {ship}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientDetails;
