import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  // Helper function to keep JSX clean
  // It applies base styles and conditionally adds active/inactive styles
  const navLinkStyles = ({ isActive }) => {
    return `ml-[18px] font-bold py-1.5 px-3 rounded-md transition-colors duration-300 no-underline ${isActive
        ? "bg-[#c60000] text-white"       // Active State
        : "text-[#111] hover:bg-[#c60000] hover:text-white" // Inactive State
      }`;
  };

  return (
    // Navbar Container
    <nav className="bg-white py-2.5 px-6 flex justify-between items-center shadow-sm">
      {/* Logo Area */}
      <div className="w-[140px] bg-white p-1.5 rounded-md">
        <Link to={"/"}>
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full rounded-md"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div>
        <NavLink to="/" className={navLinkStyles}>Home</NavLink>
        <NavLink to="/services" className={navLinkStyles}>Services</NavLink>
        <NavLink to="/booking" className={navLinkStyles}>Booking</NavLink>
        <NavLink to="/about" className={navLinkStyles}>About Us</NavLink>
        <NavLink to="/signup" className={navLinkStyles}>Signup</NavLink>
        <NavLink to="/login" className={navLinkStyles}>Login</NavLink>
      </div>

    </nav>
  );
};

export default Navbar;