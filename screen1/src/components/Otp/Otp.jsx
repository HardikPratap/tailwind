import React from 'react'
import OtpBox from './OtpBox'
import { useState } from 'react'

function Otp() {
    const [value , setValue] = useState('');

    function onChange(newValue){
        setValue(newValue)
        console.log(newValue)
    }

  return (
    <div>
      <div className='text-center m-20 text-3xl'>
            <span className='text-heading'>Webinar</span><span  className='text-white'>.gg</span>
        </div> 
        <div className='text-white text-center text-xl font-medium m-10'>
            OPT SENT ON EMAIL
        </div>
        <div className='text-center text-para text-xs flex flex-col'>
            Please Enter OTP sent to your Email address
        </div>
         
         {/* Otp Box */}
         <div className='max-w-fit mx-auto'>
            <OtpBox onChange={onChange} value={value} valueLength={6} />

         </div>

    </div>
  )
}

export default Otp
