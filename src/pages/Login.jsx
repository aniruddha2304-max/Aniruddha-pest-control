import React from 'react';

const Login = () => {
  
  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    alert("✅ Login Successful! (Backend can be connected later)");
  };

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

          <h2 className="text-center text-[#c60000] text-2xl font-bold mb-2.5">Welcome Back 👋</h2>
          <p className="text-center text-sm text-[#555] mb-[25px]">Login to manage your pest control services</p>

          <form onSubmit={handleLogin}>

            <div className="relative mb-[18px]">
              <span className="absolute left-[15px] top-1/2 -translate-y-1/2 text-lg text-[#c60000]">📧</span>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                className="w-full py-[14px] pr-[14px] pl-[44px] rounded-[30px] border border-[#ccc] text-[15px] outline-none transition-all duration-300 focus:border-[#c60000] focus:ring-[3px] focus:ring-[#c60000]/15"
              />
            </div>

            <div className="relative mb-[18px]">
              <span className="absolute left-[15px] top-1/2 -translate-y-1/2 text-lg text-[#c60000]">🔒</span>
              <input 
                type="password" 
                placeholder="Password" 
                required 
                className="w-full py-[14px] pr-[14px] pl-[44px] rounded-[30px] border border-[#ccc] text-[15px] outline-none transition-all duration-300 focus:border-[#c60000] focus:ring-[3px] focus:ring-[#c60000]/15"
              />
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
              className="w-full p-[14px] rounded-[30px] border-none text-base font-bold cursor-pointer bg-[linear-gradient(45deg,#c60000,#ff4d4d)] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(198,0,0,0.4)]"
            >
              Login Securely
            </button>
          </form>

          {/* TODO:- Need to change Redirect link */}
          <div className="text-center mt-5 text-sm">
            New user? <a href="signup.html" className="text-[#c60000] font-bold no-underline hover:underline">Create Account</a>
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