import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaTwitter, FaGooglePlus, FaPhone } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'; // For mobile menu
import logo from '../assets/image/KliLogo.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = React.useState(false);

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#15803D] text-white flex justify-between items-center py-2 px-4 text-sm">
        <div className="flex items-center space-x-2">
          <FaEnvelope className=" text-[12px]" />
          <span className=" text-[12px]">klinusring@gmail.com</span>
          <span>|</span>
          <FaPhone className=" text-[12px]" />
          <span className=" text-[12px]">+2402813574</span>
        </div>
        <div className="hidden sm:flex space-x-3">
          <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-red-600"><FaGooglePlus /></a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white shadow-md flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <GiHamburgerMenu size={38} className='text-[#15803D]' />
          </button>
        </div>

        {/* Navbar for Large Screens */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6 text-gray-800 font-semibold">
            <li>
              <NavLink
                to="/"
                exact
                className="hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/careers"
                className="hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
              >
                Careers
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/services"
                className="hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
                onMouseEnter={toggleServiceDropdown}
                onMouseLeave={toggleServiceDropdown}
              >
                Services
              </NavLink>
              {/* Dropdown for Services */}
              {isServiceDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md p-4 space-y-2 w-[200px]">
                  <li>
                    <NavLink to="/services/need-assessment" className="block text-gray-800 hover:text-green-600">
                      Need Assessment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/skilled-nursing" className="block text-gray-800 hover:text-green-600">
                      Skilled Nursing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/private-duty" className="block text-gray-800 hover:text-green-600">
                      Private Duty
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/personal-care" className="block text-gray-800 hover:text-green-600">
                      Personal Care
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/couples-care" className="block text-gray-800 hover:text-green-600">
                      Couples Care
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/media"
                className="hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
              >
                Media
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start p-4 space-y-2 text-gray-800 font-semibold">
            <li>
              <NavLink
                to="/"
                exact
                className="block w-full hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="block w-full hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/careers"
                className="block w-full hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block w-full hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
                onClick={toggleServiceDropdown}
              >
                Services
              </NavLink>
              {/* Dropdown for Services (Mobile) */}
              {isServiceDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <NavLink to="/services/need-assessment" className="block text-gray-800 hover:text-green-600">
                      Need Assessment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/skilled-nursing" className="block text-gray-800 hover:text-green-600">
                      Skilled Nursing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/private-duty" className="block text-gray-800 hover:text-green-600">
                      Private Duty
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/personal-care" className="block text-gray-800 hover:text-green-600">
                      Personal Care
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/couples-care" className="block text-gray-800 hover:text-green-600">
                      Couples Care
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/media"
                className="block w-full hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
              >
                Media
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="block w-full hover:text-green-600 border-b-2 text-xl border-transparent hover:border-green-600 transition-all duration-300"
                activeClassName="text-green-600 border-green-600"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
