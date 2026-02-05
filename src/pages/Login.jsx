import React, { useState } from 'react';
import { useFirebase } from '../context/FirebaseContext';
import { Link, useNavigate } from 'react-router-dom';

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const firebase = useFirebase();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await firebase.loginWithEmailAndPassword(email, password);
      console.log("Login Success");
      navigate("/");
    } catch (error) {
      const errorMessage = getFirebaseErrorMessage(error.code);
      setError(errorMessage);
      console.log("LOGIN ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await firebase.signinWithGoogle();
      console.log("Login Success", res);
      navigate("/");
    } catch (error) {
      const errorMessage = getFirebaseErrorMessage(error.code);
      setError(errorMessage);
      console.log("LOGIN ERROR:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    // Main Page Container with Background Image & Gradient Overlay
    <div className="min-h-screen font-sans bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9mo7e7anBbx2kKfG4P9blcnzIIcCxmnXPg&s')] bg-cover bg-center">

      {/* Styles for the SlideUp Animation */}
      <style>
        {`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* LOGIN WRAPPER */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">

        {/* LOGIN CARD */}
        <div
          className="w-full max-w-[420px] bg-white/95 p-[35px] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
          style={{ animation: 'slideUp 0.8s ease' }}
        >

          <h2 className="text-center text-[#c60000] text-2xl font-bold mb-2.5">Welcome Back</h2>
          <p className="text-center text-sm text-[#555] mb-[25px]">Login to manage your pest control services</p>

          {error && (
            <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-sm mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="relative mb-[18px]">
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                className="w-full py-[14px] px-4 rounded-[30px] border border-[#ccc] text-[15px] outline-none transition-all duration-300 focus:border-[#c60000] focus:ring-[3px] focus:ring-[#c60000]/15"
              />
            </div>

            {/* Password */}
            <div className="relative mb-[18px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                className="w-full py-[14px] px-4 rounded-[30px] border border-[#ccc] text-[15px] outline-none transition-all duration-300 focus:border-[#c60000] focus:ring-[3px] focus:ring-[#c60000]/15"
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#c60000] transition-colors cursor-pointer bg-transparent border-none outline-none"
                aria-label={showPassword.password ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <i className="ri-eye-line"></i>
                ) : (
                  <i className="ri-eye-off-line"></i>
                )}
              </button>
            </div>

            <div className="flex justify-between text-sm my-3 text-[#555]">
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" className="accent-[#c60000]" /> Remember me
              </label>
              {/* TODO need to create Forgot password page and link it */}
              <a href="#" className="no-underline text-[#c60000] font-bold hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full p-[14px] rounded-[30px] border-none text-base font-bold cursor-pointer bg-[linear-gradient(45deg,#c60000,#ff4d4d)] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(198,0,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login Securely"}
            </button>

            {/* Google SignIn logic */}
            <div className="relative my-5 flex items-center">
              <div className="flex-grow border-t border-[#ccc]"></div>
              <span className="px-3 text-[#666] text-sm">OR</span>
              <div className="flex-grow border-t border-[#ccc]"></div>
            </div>
          </form>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full bg-white border border-[#ccc] text-[#333] p-3.5 rounded-[30px] text-base font-bold cursor-pointer hover:bg-[#f9f9f9] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="/google-logo.png" alt="" className='h-5 w-5' />
            Sign Up with Google
          </button>

          {/* TODO:- Need to change Redirect link */}
          <div className="text-center mt-5 text-sm">
            New user? <Link to="/signup" className="text-[#c60000] font-bold no-underline hover:underline">Create Account</Link>
          </div>

          <div className="mt-[18px] text-center text-[13px] text-[#555]">
            🔐 Secured by <span className="text-[#c60000] font-bold">Aniruddha Pest Control</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;