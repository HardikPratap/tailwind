import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Screen1 from './components/screen1'
import Screen2 from './components/screen2'
import Otp from './components/Otp/Otp'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Layout from '../../Layout'
import Home from './Home'

function App() {
  

  return ( 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}/>
        <Route index element={<Home />} />
        <Route path='Screen1' element={<Screen1/>}/>
        <Route path='Screen2' element={<Screen2/>}/>
        <Route path='OTP' element={<Otp/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
