import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Navbar/Navbar'
import Contact from './pages/Contact'
import Header from './Navbar/Header'
import Careers from './pages/Careers'
export default function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Header/>
    <Routes>

      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/careers' element={<Careers/>}/>
    </Routes>
    </BrowserRouter>
  )
}
