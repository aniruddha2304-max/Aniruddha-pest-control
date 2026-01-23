import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-area">
        <img src="/logo.png" alt="" />
      </div>

      <div>
        {/* MAIN.JSX KA CONST ROUTE DEKH AND USMAI path:"" LINK KAR YOU'LL UNDERSTAND THE LOGIC */}
        <NavLink to="/" className="active">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  )
}

export default Navbar