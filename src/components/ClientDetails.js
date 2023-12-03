import React from 'react'

function ClientDetails({name, address,  number, ship, date}) {
  return (
    <>
        <section className='flex flex-col w-full  mt-5'>
          <div className='flex justify-between'>
            <div>
              <h2 className="text-xl font-bold uppercase">{name}</h2>
              <h2>{number}</h2>
              <p>{address}</p>
              <p><span className='font-bold'>Deliver-</span>{ship}</p>
            </div>
            <div><span className='font-bold'>Date : </span>{date}</div>
          </div>
        </section>
    </>
  )
}

export default ClientDetails