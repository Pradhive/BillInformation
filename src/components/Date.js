import React from "react";

function Date({date, advance}) {
  return (
    <>
      <article className="my-5 w-full flex items-end justify-end">
        <ul>
          <li>
            <span className="font-bold">Date : </span> {date}
          </li>
        </ul>
      </article>
      
    </>
  );
}

export default Date;
