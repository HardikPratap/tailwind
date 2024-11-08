import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-row justify-center gap-20 m-10 '>
        <Link to={"/Screen1"}>
      <div className='bg-para px-3 py-2 rounded-md text-black font-semibold text-lg'>Date</div>
      </Link>
      <Link to={"/Screen2"}>
      <div className='bg-para px-3 py-2 rounded-md text-black font-semibold text-lg'>E-mail</div>
      </Link>
      <Link to={"/OTP"}>

      <div className='bg-para px-3 py-2 rounded-md text-black font-semibold text-lg'>OTP</div>
      </Link>
    </div>
  )
}

export default Header
