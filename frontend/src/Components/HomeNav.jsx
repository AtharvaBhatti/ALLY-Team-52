// Navbar.js

import React, { useState } from 'react';
import { logo, userimg } from '../assets/images';

const HomeNav = () => {

 

  return (
    <nav className="bg-[#F3F6FF]   p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-8 w-12" />
          <span className='font-inter text-2xl font-bold leading-9 tracking-wider text-left text-[#0065C1]'>ALLY</span>

          
          <div className="hidden lg:flex space-x-12 font-inter text-base font-semibold leading-5 text-left text-[#0065C1]">
            <a href="#" className='ml-12' >About Us</a>
            <a href="#" >Why Us?</a>
            <a href="#" >Our Partners</a>
          </div>
        </div>

        
        <div className="flex items-center space-x-4">
          
          <button class="w-24 h-10 px-4 py-1.5 rounded-md gap-2 bg-gradient-to-r from-blue-600 to-blue-400">
  <span class="font-inter text-base font-bold leading-5 text-left text-white">
    Login
  </span>
</button>       
         
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
