import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-area">
        <img src="/logo.png" alt="" />
      </div>

      <div>
        <a href="index.html" className="active">Home</a>
        <a href="services.html">Services</a>
        <a href="booking.html">Booking</a>
        <a href="about.html">About Us</a>
        <a href="signup.html">Signup</a>
        <a href="login.html">Login</a>
      </div>
    </div>
  )
}

export default Navbar