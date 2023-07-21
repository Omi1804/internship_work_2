import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1 className="title">TheAdzPlug</h1>
      </div>
      <div className="navbar_icons">
        <ul className="navlist">
          <li className="navLinks">Home</li>
          <li className="navLinks">AboutUs</li>
          <li className="navLinks">Services</li>
          <li className="navLinks">Products</li>
        </ul>
      </div>
      <a href="#contact" style={{ scrollBehavior: "smooth" }}>
        <button>Contact Us</button>
      </a>
    </div>
  );
};

export default Navbar;
