import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './Navbar/Header'
import ContactUs from './pages/ContactUs'
import Careers from './pages/Careers'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
  )
}
