import React from 'react'

function Header() {
  return (
    <div className='flex flex-row justify-center gap-20 m-10 '>
      <div className='bg-para px-3 py-2 rounded-md text-black font-semibold text-lg'>Date</div>
      <div className='bg-para px-3 py-2 rounded-md text-black font-semibold text-lg'>E-mail</div>
      <div className='bg-para px-3 py-2 rounded-md text-black font-semibold text-lg'>OTP</div>
    </div>
  )
}

export default Header
