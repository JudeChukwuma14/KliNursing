import React from 'react'
import bgImagr from "../assets/image/Contact-us.jpg"
export default function Contact() {
    const img = {
        backgroundImage: `url(${bgImagr})`
    }
  return (
    <div>
        <div style={img} className=' bg-center bg-no-repeat  w-[100%] h-[45vh]  bg-cover'></div>
    </div>
  )
}
