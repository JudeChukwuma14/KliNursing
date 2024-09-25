import { IoLocation, IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import backgroundImage from "../assets/image/ContactImage.jpg";

const ContactUs = () => {
  const img = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div>
      {/* Background Section */}
      <div
        style={img}
        className="bg-cover bg-no-repeat w-full h-[30vh] lg:h-[40vh] bg-center"
      >
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-center lg:pt-16 md:text-4xl font-bold md:pt-16 lg:text-[60px] pt-8 text-[#15803D]">
            Contact Us
          </h1>
          <span className="flex justify-start items-center pl-3 md:pl-6 lg:pl-8 pt-2 md:pt-10 lg:pt-18 text-[10px] md:text-[18px] text-[#72D85A]">
            <a href="/" className="font-bold">Home</a> / <a href="/contact">Contact</a>
          </span>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-8 px-6 pt-8 md:pt-14">
        {/* Address Card */}
        <div className="flex flex-col justify-center items-center h-32 w-40 md:h-[200px] md:w-[250px] lg:h-[250px] lg:w-[300px] bg-gradient-to-r from-[#15803D] to-[#72D85A] text-white rounded-lg shadow-lg">
          <div className="lg:h-[60px] lg:w-[60px] md:h-[55px] md:w-[55px] h-[40px] w-[40px] flex justify-center items-center rounded-full border text-4xl mb-2 border-white">
            <IoLocation />
          </div>
          <h1 className="lg:text-4xl md:text-2xl font-bold">Address</h1>
          <p className="md:text-[18px] text-[12px]">1234 Main Street</p>
        </div>

        {/* Email Card */}
        <div className="flex flex-col justify-center items-center h-32 w-40 md:h-[200px] md:w-[250px] lg:h-[250px] lg:w-[300px] bg-gradient-to-r from-[#15803D] to-[#72D85A] text-white rounded-lg shadow-lg">
          <div className="lg:h-[60px] lg:w-[60px] md:h-[55px] md:w-[55px] h-[40px] w-[40px] flex justify-center items-center rounded-full border text-4xl mb-2 border-white">
            <MdEmail />
          </div>
          <h1 className="lg:text-4xl md:text-2xl font-bold">Email Us</h1>
          <p className="md:text-[18px] text-[12px]">example@example.com</p>
        </div>

        {/* Call Card */}
        <div className="flex flex-col justify-center items-center h-32 w-40 md:h-[200px] md:w-[250px] lg:h-[250px] lg:w-[300px] bg-gradient-to-r from-[#15803D] to-[#72D85A] text-white rounded-lg shadow-lg">
          <div className="lg:h-[60px] lg:w-[60px] md:h-[55px] md:w-[55px] h-[40px] w-[40px] flex justify-center items-center rounded-full border text-4xl mb-2 border-white">
            <IoCall />
          </div>
          <h1 className="lg:text-4xl md:text-2xl font-bold">Call Now</h1>
          <p className="md:text-[18px] text-[12px]">+123 456 7890</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="pt-8 md:pt-14">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl md:text-5xl pb-4 text-[#15803D]">Have Any Questions?</h1>
          <p className="text-center w-[300px] md:w-[600px] lg:w-[800px] md:text-2xl">
            It is a long established fact that a reader will be distracted by the readable content of a page.
          </p>
        </div>

        <form className="flex flex-col items-center justify-center mt-8">
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Your Name"
              className="border pl-3 h-10 w-[300px] lg:h-14 lg:w-[400px] mx-8 my-2 md:my-3 md:mx-4 border-[#15803D] focus:ring-2 focus:ring-[#72D85A]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border pl-3 h-10 w-[300px] lg:h-14 lg:w-[400px] mx-8 my-2 md:my-3 md:mx-4 border-[#15803D] focus:ring-2 focus:ring-[#72D85A]"
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Address"
              className="border pl-3 h-10 w-[300px] lg:h-14 lg:w-[400px] mx-8 my-2 md:my-3 md:mx-4 border-[#15803D] focus:ring-2 focus:ring-[#72D85A]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border pl-3 h-10 w-[300px] lg:h-14 lg:w-[400px] mx-8 my-2 md:my-3 md:mx-4 border-[#15803D] focus:ring-2 focus:ring-[#72D85A]"
            />
          </div>
          <textarea
            placeholder="Message"
            className="resize-none h-[180px] w-[300px] md:w-[630px] lg:w-[830px] border pl-3 border-[#15803D] focus:ring-2 focus:ring-[#72D85A]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#15803D] text-white px-8 py-2 hover:bg-[#72D85A] hover:text-white transition-all duration-300 cursor-pointer rounded-md mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
