import React from "react";
import "./LandingNavbar.css";
import logo from "../assets/images/logo.png"; // Replace with the actual path to your logo image

const LandingNavbar = () => {
  return (
    <div className="Landing-navbar">
      <div className="Landing-Logo">
        <img src={logo} alt="Logo" /> 
      </div>
      <nav className="Landing-navbar-links">
        <a href="https://trumio.ai/about/">About Us</a>
        <a href="https://trumio.ai/why-trumio/">Why Us?</a>
        <a href="https://trumio.ai/how-it-works/">How it Works</a>
      </nav>
      <div className="Landing-Login-button text-white font-bold">
        <a href="https://trumio.ai/login">Login</a>
      </div>
    </div>
  );
};

export default LandingNavbar;
