import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="flex flex-row justify-center  gap-14 mt-10 rounded-xl bg-input text-gray-400  justify-self-center  text-nowrap max-w-fit ">
        <Link to={"/"}>
      <div className=' px-3 py-2 rounded-md  font-semibold text-lg'>Home</div>
      </Link>
        <Link to={"/Screen1"}>
      <div className=' px-3 py-2 rounded-md  font-semibold text-lg'>Date</div>
      </Link>
      <Link to={"/Screen2"}>
      <div className=' px-3 py-2 rounded-md  font-semibold text-lg'>E-mail</div>
      </Link>
      <Link to={"/OTP"}>
      <div className=' px-3 py-2 rounded-md  font-semibold text-lg'>OTP</div>
      </Link>
    </div>
  )
}

export default Header
