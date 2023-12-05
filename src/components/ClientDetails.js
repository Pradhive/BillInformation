import React from "react";
import moment from "moment";

function ClientDetails({ name, address, number, ship, date, time }) {
  return (
    <>
      <section className="flex flex-col w-full  my-5">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold uppercase">{name}</h2>
            <p>{number}</p>
            <p>{address}</p>
          </div>
          <div className="flex flex-col">
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
