import React from 'react'
import { useNavigate } from 'react-router-dom'


const Hero = ({text, title, image}) => {
  const navigate = useNavigate()

  const goTo = (nav) => {
    navigate(nav)
  }

  return (
    <div className='w-full'>
      <div className='w-full h-program relative flex items-center'>
        <div className='absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-80 z-10' />
        <img
          src={image}
          alt='KliNursing'
          className='object-cover w-full h-full'
        />
        <div className='absolute px-6 text-white z-20 flex flex-col gap-3 w-full '>
          <div className='text-lg flex gap-2 items-center uppercase tracking-about'>
            <span className='cursor-pointer' onClick={() => goTo('/')}>
              Home
            </span>
            <span>
              {/* <TbBackslash className='text-offset text-3xl' /> */}
              \
            </span>
            <span>{text}</span>
          </div>
          <div className='text-5xl font-semibold '>
           {title}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
