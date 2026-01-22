import React, { useState, useRef, useEffect } from 'react';

const AboutUs = () => {
  // State for Chat Visibility and Messages
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello 👋 How can we help you?' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatBodyRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isChatOpen]);

  // Toggle Chat Box
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Handle Sending Message
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== "") {
      // Add User Message
      const newMessages = [...messages, { type: 'user', text: inputValue }];
      setMessages(newMessages);
      setInputValue("");

      // Simulate Bot Response
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { type: 'bot', text: 'Thank you! Our team will contact you shortly.' }
        ]);
      }, 600);
    }
  };

  return (
    <div className="font-sans text-[#222]">
      {/* Custom Animations for Pulse and Bounce to match original CSS */}
      <style>{`
        @keyframes custom-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes custom-pulse {
          0% { box-shadow: 0 0 0 0 rgba(198,0,0,0.6); }
          70% { box-shadow: 0 0 0 15px rgba(198,0,0,0); }
        }
        .animate-custom-bounce { animation: custom-bounce 2s infinite; }
        .animate-custom-pulse { animation: custom-pulse 2s infinite; }
      `}</style>

      {/* NAVBAR */}
      <header className="sticky top-0 z-[1000] bg-white py-3 px-[8%] flex justify-between items-center shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
        <div className="flex items-center gap-3">
          <img src="https://aniruddhapestcontrol.com/oglogo.jpg" alt="Logo" className="w-[55px] rounded-md" />
          <span className="text-xl font-bold text-[#c60000]">Aniruddha Pest Control</span>
        </div>

        <nav className="flex gap-5 items-center">
          <a href="index.html" className="font-bold text-[#222] py-2 px-3.5 rounded-md transition-all duration-300 hover:bg-[#c60000] hover:text-white">Home</a>
          
          {/* DROPDOWN */}
          <div className="relative group">
            <a href="services.html" className="font-bold text-[#222] py-2 px-3.5 rounded-md transition-all duration-300 hover:bg-[#c60000] hover:text-white block">
              Services ▾
            </a>
            <div className="absolute top-[45px] left-0 w-[240px] bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.25)] opacity-0 invisible translate-y-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
              <a href="services.html#cockroach" className="block py-3.5 px-[18px] border-l-4 border-transparent hover:bg-[#f7f7f7] hover:border-[#c60000] hover:text-[#c60000]">Cockroach Control</a>
              <a href="services.html#termite" className="block py-3.5 px-[18px] border-l-4 border-transparent hover:bg-[#f7f7f7] hover:border-[#c60000] hover:text-[#c60000]">Termite Control</a>
              <a href="services.html#commercial" className="block py-3.5 px-[18px] border-l-4 border-transparent hover:bg-[#f7f7f7] hover:border-[#c60000] hover:text-[#c60000]">Commercial Pest Control</a>
              <a href="services.html#bedbug" className="block py-3.5 px-[18px] border-l-4 border-transparent hover:bg-[#f7f7f7] hover:border-[#c60000] hover:text-[#c60000]">Bed Bug Control</a>
            </div>
          </div>

          <a href="about.html" className="font-bold text-[#222] py-2 px-3.5 rounded-md transition-all duration-300 hover:bg-[#c60000] hover:text-white">About</a>
          <a href="booking.html" className="font-bold text-[#222] py-2 px-3.5 rounded-md transition-all duration-300 hover:bg-[#c60000] hover:text-white">Booking</a>
          <a href="login.html" className="font-bold text-[#222] py-2 px-3.5 rounded-md transition-all duration-300 hover:bg-[#c60000] hover:text-white">Login</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-[linear-gradient(rgba(198,0,0,0.85),rgba(198,0,0,0.85)),url('images/about-banner.jpg')] bg-cover bg-center py-[90px] px-[10%] text-white text-center">
        <h1 className="text-[42px] mb-[15px] font-bold">About Aniruddha Pest Control Services</h1>
        <p className="text-lg max-w-[850px] mx-auto">Trusted pest control experts delivering safe & effective solutions.</p>
      </section>

      {/* FLOATING BUTTONS */}
      <a 
        href="https://wa.me/917045420139" 
        className="fixed right-5 bottom-[100px] py-3.5 px-[22px] rounded-[50px] text-white font-bold z-[1200] bg-[#25D366] animate-custom-bounce"
        target="_blank" 
        rel="noreferrer"
      >
        💬 WhatsApp
      </a>
      <a 
        href="tel:7045420139" 
        className="fixed right-5 bottom-[35px] py-3.5 px-[22px] rounded-[50px] text-white font-bold z-[1200] bg-[#c60000] animate-custom-bounce"
      >
        📞 Call Now
      </a>

      {/* LIVE CHAT LAUNCHER */}
      <div 
        className="fixed left-5 bottom-[35px] bg-[#c60000] text-white py-3.5 px-[22px] rounded-[30px] cursor-pointer z-[1200] animate-custom-pulse" 
        onClick={toggleChat}
      >
        💬 Live Chat
      </div>

      {/* CHAT BOX (Conditionally Rendered) */}
      {isChatOpen && (
        <div className="fixed left-5 bottom-[95px] w-[280px] bg-white rounded-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden z-[1300]">
          <div className="bg-[#c60000] text-white p-3 flex justify-between font-bold">
            Live Support
            <span onClick={toggleChat} className="cursor-pointer hover:opacity-80">✖</span>
          </div>
          <div className="h-[180px] p-2.5 overflow-auto bg-[#f7f7f7] flex flex-col" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`p-2 px-3 rounded-[12px] my-1.5 text-sm ${
                  msg.type === 'bot' 
                    ? 'bg-white self-start' 
                    : 'bg-[#c60000] text-white self-end text-right ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown} 
            className="border-none border-t border-[#ddd] p-3 outline-none"
          />
        </div>
      )}

      {/* WHO WE ARE */}
      <section className="py-[60px] px-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-[#c60000] mb-3 text-2xl font-bold">Who We Are</h2>
            <p className="mb-4 text-[#222]">
              Aniruddha Pest Control Services is a trusted name in pest management,
              providing eco-friendly and effective pest solutions for homes,
              offices and industries.
            </p>
            <p className="text-[#222]">
              Our trained professionals use government-approved chemicals to ensure
              safety, hygiene and long-lasting protection.
            </p>
          </div>
          <div>
            <img src="https://lh3.googleusercontent.com/p/AF1QipM3-d_jRTzIyIk3LeYuQ28tq2SIBMrYiwT2BxN7=s1360-w1360-h1020-rw" alt="Our Team" className="w-full rounded-[14px]" />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#f6f6f6] py-[60px] px-[10%]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[25px]">
          {['Mission', 'Vision', 'Values', 'Experience'].map((item, idx) => (
            <div key={idx} className="bg-white p-[25px] border-t-[5px] border-[#c60000] text-center shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
              <h3 className="text-[#c60000] mb-2.5 text-lg font-bold">Our {item}</h3>
              <p className="text-sm">
                {item === 'Mission' && "Deliver safe, effective and affordable pest control solutions."}
                {item === 'Vision' && "Become the most trusted pest control brand in India."}
                {item === 'Values' && "Integrity, professionalism and customer satisfaction."}
                {item === 'Experience' && "Years of expertise with thousands of satisfied customers."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gradient-to-br from-[#c60000] to-[#ff4d4d] py-[60px] px-[10%] text-white">
        <h2 className="text-center mb-[35px] text-2xl font-bold">Why Choose Us?</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[25px]">
          {[
            "Certified & trained technicians",
            "Eco-friendly & safe solutions",
            "Affordable transparent pricing",
            "Fast service & emergency support",
            "Guaranteed long-term protection",
            "High customer satisfaction"
          ].map((text, i) => (
            <div key={i} className="bg-white text-black p-[25px] rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.2)] font-medium">
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-[60px] px-[10%]">
        <h2 className="text-2xl font-bold mb-2">Need Professional Pest Control?</h2>
        <p className="mb-6">Book a free inspection today.</p>
        <a href="booking.html" className="bg-[#c60000] text-white py-3.5 px-[34px] rounded-[30px] font-bold no-underline hover:opacity-90 transition-opacity">
          Book a Service
        </a>
      </section>

    </div>
  );
};

export default AboutUs;