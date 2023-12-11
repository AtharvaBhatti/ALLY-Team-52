import React, { useEffect, useState } from "react";

import { logo, userimg } from "../assets/images";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";



const user = { username: "Harshith Chunduri", avatar: userimg };


const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  
return (
  
  <nav className="bg-[#F3F6FF] sticky top-0 z-50 p-4 drop-shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      {/* Left side */}
      <a href="/uni1">
        <div className="flex items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />

          {/* Name */}
          <span class="text-sky-600 text-xl md:text-2xl font-semibold font-['Inter']">
            University of Technology
          </span>
        </div>
      </a>

      {/* Right side */}
      <div className="flex z-50 items-center cursor-pointer" onClick={toggleDropdown}
        onBlur={closeDropdown}>
        {/* Greeting and Avatar */}
        <div className="flex p-2 md:p-4 rounded-full bg-white items-center mr-4">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="h-8 w-8 mx-2 rounded-full"
          />
          <span class="text-sky-600 mx-0 text-sm md:text-xl md:mx-2 text-[17px] font-semibold font-['Inter']">
            Hi, {user.username}
          </span>

          {/* Dropdown */}
          <div className="z-50 relative">
            <button

              className="text-[#0065C1] focus:outline-none"
            >
              &#x25BE;{" "}
              {/* Downward pointing triangle for dropdown indicator */}
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 z-[100] mt-6 w-48 bg-white rounded shadow-lg">
                <ul><Link to="/uni1/profile">
                  <li className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer" >
                    Your Profile
                  </li></Link>
                  <Link to="/uni1/message"><li
                    className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer"

                  >
                    Messages
                  </li></Link>
                  <li className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer">
                    Settings
                  </li>
                  <li
                    className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer"

                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </nav>
);
};

export default Navbar;
