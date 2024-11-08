import React from 'react'
import { Link } from 'react-router-dom'
import { EvervaultCardDemo } from './test'

function Home() {
  return (
    <div className='text-white h-screen flex  justify-center items-center '>
     
      <Link to='/Screen1' className='m-10'>
        <EvervaultCardDemo title="Screen 1" description={" Date Component"}/> 
      </Link>
      <Link to='/Screen2' className='m-10'>
        <EvervaultCardDemo title="Screen 2" description={" Email Component"}/>
      </Link>
      <Link to='/OTP' className='m-10'>
        <EvervaultCardDemo title="Screen 3" description={" OTP Component"}/>
      </Link>
      
    </div>
  )
}

export default Home
