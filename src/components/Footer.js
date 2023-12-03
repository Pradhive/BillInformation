import React from 'react'

function Footer() {
  return (
    <>
        <footer className='border-t-2 border-gray-300 p-2'>
          <ul className="flex flex-col flex-wrap items-center justify-center">
            <li>
              <span className="font-bold">Name : </span>
            </li>
            <li>
              <span className="font-bold">Address : </span>
            </li>
            <li>
              <span className="font-bold">Phone Number : </span>
            </li>
            <li>
              <span className="font-bold">Email : </span>
            </li>
            <li>
              <span className="font-bold">Website : </span>
            </li>
          </ul>
        </footer>
    </>
  )
}

export default Footer