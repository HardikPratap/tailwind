import React from 'react'
import { useState } from 'react'

function Screen2() {
    const [changed, setChanged]= useState(false)

    function handleChange(e){
        if(e.target.value){
            setChanged(true)
        }
    }
  return <div className='content-center'>
         <div className='text-center m-20 text-3xl'>
            <span className='text-heading'>Webinar</span><span  className='text-white'>.gg</span>
        </div> 
        <div className='text-white text-center text-xl font-medium m-10'>
    Verify Your Age
  </div>
  <div className='text-center text-para text-xs flex flex-col'>
    Please confirm your birth year. This data will not be saved
    <input className='w-64 mt-3 px-4 py-3 self-center rounded-md text-gray-300 bg-input text-s' 
    placeholder='Enter email' 
    type="email" 
    onChange={handleChange}
    />
  </div>
  <div  className={`max-w-fit mx-auto mt-3 px-24 py-1 text-center text-neutral-300 bg-button rounded-md cursor-pointer 
    ${
        changed ?'bg-heading text-red-950':''
    }  transition-all ease-in-out delay-100 duration-200`}>
      <span className='font-medium'>Continue</span>
    </div>
    </div>
}

export default Screen2
