import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  // State for Chat Visibility and Messages
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello 👋 How can we help you?' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatBodyRef = useRef(null);

  const featuresObj = [
    { name: "Certified Technicians", icon: "ri-medal-fill" },
    { name: "Eco-friendly Solutions", icon: "ri-leaf-fill" },
    { name: "Transparent Pricing", icon: "ri-wallet-3-fill" },
    { name: "Fast Service & Support", icon: "ri-flashlight-fill" },
    { name: "Guaranteed Protection", icon: "ri-shield-check-fill" },
    { name: "High Customer Satisfaction", icon: "ri-emotion-happy-fill" }
  ];

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
                className={`p-2 px-3 rounded-[12px] my-1.5 text-sm ${msg.type === 'bot'
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
            <h2 className="text-[#c60000] mb-3 text-[4rem] font-bold">Who We Are</h2>
            <p className="mb-4 text-[#222] text-[17px]">
              Aniruddha Pest Control Services is a trusted name in pest management,
              providing eco-friendly and effective pest solutions for homes,
              offices and industries. With our commitment to excellence and customer satisfaction,
              we have built a reputation for delivering outstanding results that protect your spaces
              from harmful pests while maintaining the safety and well-being of your family and employees.
            </p>
            <div className="why-choose-us">
              <h3 className='text-[3rem] font-bold text-[#c60000]'> Why Choose Us? </h3>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-5 md: gap-5 mt-4'>
                {featuresObj.map((feature) => (
                  <li className='font-medium text-gray-700'>
                    <i className={`${feature.icon} text-blue-600 text-2xl mr-2`}></i>
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='w-8/12 justify-self-end border-4 border-gray-200 rounded-[14px] overflow-hidden'>
            <img src="/service-man.png" alt="Our Team" className="w-full brightness-130" />
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

      {/* CTA */}
      <section className="text-center py-[60px] px-[10%]">
        <h2 className="text-2xl font-bold mb-2">Need Professional Pest Control?</h2>
        <p className="mb-6">Book a free inspection today.</p>
        <Link to="/booking" className="bg-[#c60000] text-white py-3.5 px-[34px] rounded-[30px] font-bold no-underline hover:opacity-90 transition-opacity">
          Book a Service
        </Link>
      </section>

    </div>
  );
};

export default AboutUs;