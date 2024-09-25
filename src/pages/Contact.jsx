import React from "react";
import bgImagr from "../assets/image/ContactImage.jpg";
import { IoLocation } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { IoCall } from "react-icons/io5"
export default function Contact() {
  const img = {
    backgroundImage: `url(${bgImagr})`,
  };
  return (
    <div>
      <div
        style={img}
        className=" bg-cover bg-no-repeat  w-[100%] h-[30vh] lg:h-[40vh] bg-center">
        <div className="">
          <h1 className=" flex justify-center items-center lg:pt-16 md:text-4xl font-bold md:pt-16 lg:text-[60px] pt-8">
            Contact Us
          </h1>
          <span className=" flex justify-start items-center pl-3 md:pl-6 lg:pl-8  pt-2 md:pt-10 lg:pt-18 text-[10px] md:text-[18px]">
            <a href="" className=" font-bold">
              Home
            </a>
            / <a href="">Contact</a>
          </span>
        </div>
      </div>

      <div className=" flex justify-center items-center flex-col gap-3 lg:gap-8 md:flex-row px-6 pt-8 md:pt-14">
        <div className="flex justify-center items-center flex-col h-32 w-40 md:h-[200px] md:w-[250px] lg:h-[250px] lg:w-[300px] border bg-red-400 rounded-lg">
          <div className=" lg:h-[60px] lg:w-[60px] md:h-[55px] md:w-[55px] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] border text-4xl mb-2"><IoLocation/></div>
          <h1 className=" lg:text-4xl md:text-2xl font-bold">Address</h1>
          <p className=" md:text-[18px] text-[12px]">klinusring@gmail.com</p>
        </div>
        <div className="flex justify-center items-center flex-col h-32 w-40 md:h-[200px] md:w-[250px] lg:h-[250px] lg:w-[300px] border bg-red-400 rounded-lg">
          <div className=" lg:h-[60px] lg:w-[60px] md:h-[55px] md:w-[55px] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] text-4xl mb-2 border"><MdEmail/></div>
          <h1 className=" lg:text-4xl md:text-2xl font-bold">Email Us</h1>
          <p className=" md:text-[18px] text-[12px]">klinusring@gmail.com</p>
        </div>
        <div className="flex justify-center items-center flex-col h-32 w-40 md:h-[200px] md:w-[250px] lg:h-[250px] lg:w-[300px] border bg-red-400 rounded-lg">
          <div className=" lg:h-[60px] lg:w-[60px] md:h-[55px] md:w-[55px] h-[40px] w-[40px] flex justify-center items-center rounded-[50%] text-4xl mb-2 border"><IoCall/></div>
          <h1 className=" lg:text-4xl md:text-2xl font-bold">Call Now</h1>
          <p className=" md:text-[18px] text-[12px]">klinusring@gmail.com</p>
        </div>
      </div>

      <div>
        <div className=" flex justify-center items-center flex-col md:pt-14 pt-8">
          <h1 className=" md:text-5xl pb-4 text-2xl">Have Any Question?</h1>
          <p className=" md:text-2xl md:w-[600px] lg:w-[800px] md:text-center w-[300px] text-center">it is long established fact that a reader will be distracted content of a page when looking</p>
        </div>
        

        <div className=" md:pt-14 pt-8 ">
          <form action="" className=" flex justify-center items-center flex-col">
            <div className="">
              <input className=" border pl-3 h-10 w-[300px] lg:h-14 lg:w-[400px] mx-8 my-2 md:my-3 md:mx-4" type="text" placeholder="Your Name"  />
              <input className=" border pl-3 h-10 w-[300px] lg:h-14 lg:w-[400px] mx-8 my-2 md:my-3 md:mx-4" type="text" placeholder="Your Email"/>
            </div>
            <div className="">
              <input className=" border pl-3 h-10 w-[300px] lg:h-14 lg:w-[400px] mx-8 my-2 md:my-3 md:mx-4" type="text" placeholder="Address" />
              <input className=" border pl-3 h-10 w-[300px] lg:h-14 lg:w-[400px] mx-8 my-2 md:my-3 md:mx-4" type="text" placeholder="Subject" />
            </div> 
            <div className="">
              <textarea name="" id="" className=" resize-none h-[180px] w-[300px] md:w-[630px] lg:w-[830px] border pl-3" placeholder="Message"></textarea>
            </div>
            <input className=" border px-8 py-2 hover:text-green-600 border-b-2 border-transparent hover:border-green-600 transition-all duration-300 cursor-pointer rounded-md" type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
}
