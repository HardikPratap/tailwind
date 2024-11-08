import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='text-white max-w-fit mx-auto max-h-fit my-auto gap-7'>
      <Link to='/Screen1' className='m-10'>
            Scrren1
      </Link>
      <Link to='/Screen2' className='m-10'>
            Scrren2
      </Link>
      <Link to='/OTP' className='m-10'>
            Otp
      </Link>
    </div>
  )
}

export default Home
