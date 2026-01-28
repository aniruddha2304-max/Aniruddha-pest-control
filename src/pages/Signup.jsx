import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Chatbox from '../Components/Chatbox';
import { useFirebase } from '../context/Firebase';

// Firebase error messages
const getFirebaseErrorMessage = (code) => {
  const errorMessages = {
    'auth/email-already-in-use': 'Email is already registered. Please login or use another email.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/weak-password': 'Password must be at least 6 characters long.',
    'auth/user-not-found': 'No account found with this email address.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/operation-not-allowed': 'Sign up is currently disabled. Please try again later.',
    'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
    'auth/network-request-failed': 'Network error. Please check your internet connection.',
  };
  return errorMessages[code] || 'An error occurred. Please try again.';
};

const Signup = () => {
  // State for Chat Visibility
  const [userData, setUserData] = useState({
    "name": "",
    "email": "",
    "phone": "",
    "addresss": "Borivali west, mumbai"
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const firebase = useFirebase();

  // State for Password Visibility
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });


  const changeInput = (name, value)=>{
    setUserData((prev)=>({...prev, [name]: value}));
  }

  // Toggle Password Visibility
  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  // Handle Form Submission
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate passwords match
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        setLoading(false);
        return;
      }

      // Validate password strength
      if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        setLoading(false);
        return;
      }

      const userCredential = await firebase.signupWithEmailAndPassword(userData.email, password);
      console.log("User signup success", userCredential);
      
      try {
        await firebase.addUser(userData);
        console.log("User data added");
        navigate("/");
      } catch (err) {
        // setError("Account created but failed to save profile. Please contact support.");
        console.log("Error storing user data:", err);
      }
    } catch (err) {
      const errorMessage = getFirebaseErrorMessage(err.code);
      setError(errorMessage);
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };


  // HANDLE GOOGLE SIGNUP
  const handleGoogleSignup = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await firebase.signinWithGoogle();
      console.log("Success Google Signup");
      navigate("/");
    } catch (error) {
      const errorMessage = getFirebaseErrorMessage(error.code);
      setError(errorMessage);
      console.log("Google signup error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    // Main Container with background color and full height
    <div className="min-h-screen bg-[#f4f4f4] font-sans flex items-start justify-center pt-[60px] pb-10">
      
      {/* SIGNUP CARD */}
      <div className="w-full max-w-[420px] bg-white p-[30px] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] mx-4">
        <h2 className="text-center text-[#c60000] text-2xl font-bold mb-2.5">Create Account</h2>
        <p className="text-center text-[#666] text-sm mb-5">Register to book pest control services</p>

        {error && (
          <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-sm mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Full Name"
            name="name" 
            value={userData.name}
            required 
            className="w-full p-3 my-2.5 border border-[#ccc] rounded-md text-sm outline-none focus:border-[#c60000] focus:ring-1 focus:ring-[#c60000]"
            onChange={(e)=>{changeInput(e.target.name, e.target.value)}}
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            name="email"
            value={userData.email}
            required 
            className="w-full p-3 my-2.5 border border-[#ccc] rounded-md text-sm outline-none focus:border-[#c60000] focus:ring-1 focus:ring-[#c60000]"
            onChange={(e)=>{changeInput(e.target.name, e.target.value)}}
          />
          <input 
            type="tel" 
            placeholder="Mobile Number" 
            name="phone"
            value={userData.phone}
            required 
            className="w-full p-3 my-2.5 border border-[#ccc] rounded-md text-sm outline-none focus:border-[#c60000] focus:ring-1 focus:ring-[#c60000]"
            onChange={(e)=>{changeInput(e.target.name, e.target.value)}}
          />
          {/* Password Field with Eye Toggle */}
          <div className="relative my-2.5">
            <input 
              type={showPassword.password ? "text" : "password"} 
              placeholder="Password" 
              name="password"
              value={password}
              required 
              className="w-full p-3 pr-10 border border-[#ccc] rounded-md text-sm outline-none focus:border-[#c60000] focus:ring-1 focus:ring-[#c60000]"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('password')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#c60000] transition-colors cursor-pointer bg-transparent border-none outline-none"
              aria-label={showPassword.password ? "Hide password" : "Show password"}
            >
              {showPassword.password ? (
                <i className="ri-eye-line"></i>
              ) : (
                <i className="ri-eye-off-line"></i>
              )}
            </button>
          </div>

          {/* Confirm Password Field with Eye Toggle */}
          <div className="relative my-2.5">
            <input 
              type={showPassword.confirmPassword ? "text" : "password"} 
              placeholder="Confirm Password" 
              name="confirmPassword"
              value={confirmPassword}
              required 
              className="w-full p-3 pr-10 border border-[#ccc] rounded-md text-sm outline-none focus:border-[#c60000] focus:ring-1 focus:ring-[#c60000]"
              onChange={(e)=>{setConfirmPassword(e.target.value)}}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('confirmPassword')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#c60000] transition-colors cursor-pointer bg-transparent border-none outline-none"
              aria-label={showPassword.confirmPassword ? "Hide password" : "Show password"}
            >
              {showPassword.confirmPassword ? (
                <i className="ri-eye-line"></i>
              ) : (
                <i className="ri-eye-off-line"></i>
              )}
            </button>
          </div>


          
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#c60000] to-[#ff4d4d] text-white p-3.5 border-none rounded-[30px] text-base font-bold cursor-pointer mt-2.5 hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="relative my-5 flex items-center">
            <div className="flex-grow border-t border-[#ccc]"></div>
            <span className="px-3 text-[#666] text-sm">OR</span>
            <div className="flex-grow border-t border-[#ccc]"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignup}
            disabled={loading}
            className="w-full bg-white border border-[#ccc] text-[#333] p-3.5 rounded-[30px] text-base font-bold cursor-pointer hover:bg-[#f9f9f9] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="/google-logo.png" alt="" className='h-5 w-5'/>
            Sign Up with Google
          </button>
        </form>

        <div className="text-center mt-[15px] text-sm">
          Already have an account? <Link to="/login" className="text-[#c60000] font-bold no-underline hover:underline">Login</Link>
        </div>
      </div>

      <Chatbox />

    </div>
  );
};

export default Signup;