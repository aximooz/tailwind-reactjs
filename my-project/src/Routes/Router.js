import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from '../components/Signup';
import Hero from '../components/Hero';
import Login from '../components/Login';
import Contactus from '../components/Contactus';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Services from '../components/Services';
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      
    
      <Route path="/" element={<Hero/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/contactus" element={<Contactus/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/services" element={<Services/>} />

     

     
    </Routes>
  </BrowserRouter>
  )
}

export default Router
