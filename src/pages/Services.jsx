import React from 'react'
import Hero from '../component/services/Hero'
import image1 from "../assets/image/services.jpeg"
import OurServices from '../component/services/OurServices'

const Services = () => {
  return (
    <div>
        <Hero image={image1} text={"Services"} title={"Our Services"}/>
        <OurServices/>
    </div>
  )
}

export default Services
