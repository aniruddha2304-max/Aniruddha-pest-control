import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth, useAuth } from '../config/firebase';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const { user } = useAuth(); // Use custom hook instead
  const navigate = useNavigate();
  const servicesData = [
    { "title": "Cockroach Control", "slug": "cockroach_control" },
    { "title": "Termite Treatment", "slug": "termite_control" },
    { "title": "Bed Bug Removal", "slug": "bed_bug_control" },
    { "title": "Rodent Control", "slug": "rodent_control" },
    { "title": "Commercial Pest Control", "slug": "commercial_pest_control" }
  ];
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate("/services/" + e.target.value);
      e.target.value = "";
    }
  }

  const navLinkStyles = ({ isActive }) => {
    return `font-bold mx-3 transition-colors duration-300 no-underline ${isActive ? "text-[#c60000] border-b-3 border-b-[#c60000]" : "text-[#111] hover:text-[#c60000]"
      }`;
  };  

  return (
    <nav className="bg-white py-1.5 px-6 flex justify-between items-center shadow-sm sticky top-0 z-[1000]">
      {/* 1. Left Section: Logo */}
      <div className="flex-1">
        <div className="w-[140px]">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-full rounded-md" />
          </Link>
        </div>
      </div>

      {/* 2. Center Section: Main Navigation */}
      <div className="flex-[2] flex justify-center items-center gap-2">
        <NavLink to="/" className={navLinkStyles}>Home</NavLink>

        <div
          className="relative group py-2"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="flex items-center gap-1 cursor-pointer">
            <NavLink to="/services" className={navLinkStyles}>Services</NavLink>
            <i className={`ri-arrow-down-s-line transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
          </div>

          {isDropdownOpen && (
            <ul className="absolute left-1/2 -translate-x-1/2 top-full w-64 p-2 bg-white rounded-lg shadow-xl border border-gray-100 z-[1000]">
              {servicesData.map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c60000] rounded-md transition-colors font-medium"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <NavLink to="/booking" className={navLinkStyles}>Booking</NavLink>
        <NavLink to="/about" className={navLinkStyles}>About Us</NavLink>
      </div>

      {/* 3. Right Section: Search & Auth */}
      <div className="flex-1 flex items-center justify-end gap-4">
        {/* Search Bar */}
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 border-none rounded-full py-2 px-4 pl-10 text-sm focus:ring focus:ring-[#c60000] outline-none w-56"
            onKeyDown={handleSearch}
          />
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </div>

        {/* Auth Buttons */}
        {user ? (<div className="flex items-center gap-6">
          <button onClick={()=>{signOut(auth)}} className="px-4 py-2 border border-gray-300 text-gray-600 rounded-full text-sm font-medium hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200">
            Logout
          </button>
          <NavLink 
          to="/account"
          className={navLinkStyles}
          >
            <i className="ri-account-circle-line text-3xl text-gray-600 hover:text-[#c60000] transition-all duration-200"></i>
          </NavLink>
          </div>) :
          (<div className="flex items-center gap-6">
            <NavLink to="/login" className="text-sm font-bold text-[#111] hover:text-[#c60000] transition-colors">
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="bg-[#c60000] text-white text-sm font-bold py-2 px-5 rounded-full hover:bg-[#a00000] transition-colors"
            >
              Signup
            </NavLink>
          </div>)}
        </div>
    </nav>
  );
};

export default Navbar;