import React, { useState, useRef, useEffect } from 'react';

const Signup = () => {
  // State for Chat Visibility
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // State for Chat Messages
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello 👋 Need help?' }
  ]);
  
  // State for Chat Input
  const [chatInput, setChatInput] = useState("");

  // Ref to auto-scroll chat to bottom
  const chatBodyRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isChatOpen]);

  // Handle Form Submission
  const handleSignup = (e) => {
    e.preventDefault();
    alert("✅ Signup Successful!");
  };

  // Toggle Chat
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Handle Chat Message Sending
  const handleChatKeyDown = (e) => {
    if (e.key === "Enter" && chatInput.trim() !== "") {
      // 1. Add User Message
      setMessages(prev => [...prev, { type: 'user', text: chatInput }]);
      
      setChatInput(""); // Clear input

      // 2. Simulate Bot Response after delay
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: 'Our team will reply soon.' }]);
      }, 600);
    }
  };

  return (
    // Main Container with background color and full height
    <div className="min-h-screen bg-[#f4f4f4] font-sans flex items-start justify-center pt-[60px] pb-10">
      
      {/* SIGNUP CARD */}
      <div className="w-full max-w-[420px] bg-white p-[30px] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] mx-4">
        <h2 className="text-center text-[#c60000] text-2xl font-bold mb-2.5">Create Account</h2>
        <p className="text-center text-[#666] text-sm mb-5">Register to book pest control services</p>

        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Full Name" 
            required 
            className="w-full p-3 my-2.5 border border-[#ccc] rounded-md text-sm outline-none focus:border-[#c60000] focus:ring-1 focus:ring-[#c60000]"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
            className="w-full p-3 my-2.5 border border-[#ccc] rounded-md text-sm outline-none focus:border-[#c60000] focus:ring-1 focus:ring-[#c60000]"
          />
          <input 
            type="tel" 
            placeholder="Mobile Number" 
            required 
            className="w-full p-3 my-2.5 border border-[#ccc] rounded-md text-sm outline-none focus:border-[#c60000] focus:ring-1 focus:ring-[#c60000]"
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            className="w-full p-3 my-2.5 border border-[#ccc] rounded-md text-sm outline-none focus:border-[#c60000] focus:ring-1 focus:ring-[#c60000]"
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            required 
            className="w-full p-3 my-2.5 border border-[#ccc] rounded-md text-sm outline-none focus:border-[#c60000] focus:ring-1 focus:ring-[#c60000]"
          />
          
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-[#c60000] to-[#ff4d4d] text-white p-3.5 border-none rounded-[30px] text-base font-bold cursor-pointer mt-2.5 hover:opacity-90 transition-opacity duration-300"
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-[15px] text-sm">
          Already have an account? <a href="login.html" className="text-[#c60000] font-bold no-underline hover:underline">Login</a>
        </div>
      </div>

      {/* LIVE CHAT LAUNCHER */}
      <div 
        className="fixed left-5 bottom-[30px] bg-[#c60000] text-white px-5 py-3 rounded-[30px] cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-[1000] hover:scale-105 transition-transform" 
        onClick={toggleChat}
      >
        💬 Live Chat
      </div>

      {/* CHAT BOX (Conditional Rendering) */}
      {isChatOpen && (
        <div className="fixed left-5 bottom-[90px] w-[260px] bg-white rounded-[10px] shadow-[0_8px_25px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden z-[1001]">
          {/* Chat Header */}
          <div className="bg-[#c60000] text-white p-2.5 flex justify-between items-center">
            Support 
            <span onClick={toggleChat} className="cursor-pointer font-bold hover:text-gray-200">✖</span>
          </div>
          
          {/* Chat Body */}
          <div className="h-[160px] overflow-y-auto p-2 bg-[#f9f9f9] flex flex-col scroll-smooth" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`max-w-[85%] px-2.5 py-1.5 my-1.5 text-sm ${
                  msg.type === 'user' 
                    ? 'bg-[#c60000] text-white rounded-t-[10px] rounded-bl-[10px] self-end text-right' 
                    : 'bg-white border border-[#ddd] text-black rounded-t-[10px] rounded-br-[10px] self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <input 
            type="text" 
            placeholder="Type message..." 
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={handleChatKeyDown}
            className="border-none border-t border-[#ddd] p-2.5 w-full outline-none text-sm"
          />
        </div>
      )}

    </div>
  );
};

export default Signup;