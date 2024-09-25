import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Navbar/Navbar'
// import Contact from './pages/Contact'
import Header from './Navbar/Header'
import ContactUs from './pages/ContactUs'
export default function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Header/>
    <Routes>

      <Route path='/contact-us' element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
  )
}
