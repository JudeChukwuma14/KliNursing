import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "../assets/image/KliLogo.jpg";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div className=" gap-2 flex lg:items-center lg:px-[120px] bg-white lg:w-[100%] h-[20px] pl-8">
        <div className=" flex items-center gap-1 cursor-pointer">
          <FaPhone className=" text-[10px]" />
          <span className=" text-[10px]">+2402813574</span>
        </div>
        <div className=" flex items-center gap-1 cursor-pointer">
          <MdEmail className=" text-[10px]" />
          <span className=" text-[10px]">klinusring@gmail.com</span>
        </div>
      </div>
      <div className=" flex lg:justify-between lg:items-center lg:px-[120px] bg-[#72D85A] lg:w-[100%] h-14">
       <NavLink>
       <div>
          <img src={logo} alt="" className=" w-[100px]" />
        </div>
       </NavLink>
        <div className=" lg:flex lg:gap-4 lg:items-center">
          <NavLink to="/">
            <nav className="text-[15px] font-semibold transition-all duration-300 ease-in-out transform hover:text-white hover:scale-105 hover:border-b-2 hover:border-white cursor-pointer">
              HOME
            </nav>
          </NavLink>
          <NavLink to="/">
            <nav className="text-[15px] font-semibold transition-all duration-300 ease-in-out transform hover:text-white hover:scale-105 hover:border-b-2 hover:border-white cursor-pointer">
              ABOUT US
            </nav>
          </NavLink>
          <NavLink to="/">
            <nav className="text-[15px] font-semibold transition-all duration-300 ease-in-out transform hover:text-white hover:scale-105 hover:border-b-2 hover:border-white cursor-pointer">
              SERVICES
            </nav>
          </NavLink>
          <NavLink to="/">
            <nav className="text-[15px] font-semibold transition-all duration-300 ease-in-out transform hover:text-white hover:scale-105 hover:border-b-2 hover:border-white cursor-pointer">
              CAREERS
            </nav>
          </NavLink>
          <NavLink to="/contact-us">
            <nav className="text-[15px] font-semibold transition-all duration-300 ease-in-out transform hover:text-white hover:scale-105 hover:border-b-2 hover:border-white cursor-pointer">
              CONTACT
            </nav>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
