import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './Navbar/Header'
import ContactUs from './pages/ContactUs'
import Careers from './pages/Careers'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  )
}
