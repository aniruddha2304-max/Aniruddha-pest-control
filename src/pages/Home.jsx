import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // --- Chat State Logic ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello 👋 How can we help you?' }
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatBodyRef = useRef(null);

  // Auto-scroll chat
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isChatOpen]);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleSendMsg = (e) => {
    if (e.key === 'Enter' && chatInput.trim() !== "") {
      setMessages(prev => [...prev, { type: 'user', text: chatInput }]);
      setChatInput("");
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: 'Thank you! Our team will contact you shortly.' }]);
      }, 600);
    }
  };

  const servicesData = [
    {
      title: "Cockroach Control",
      slug: "cockroach_control",
      desc: "Eliminate harmful cockroaches permanently.",
      img: "https://tse1.mm.bing.net/th/id/OIP.JMCuAkI-dYwHdUAnU7SmugHaE7"
    },
    {
      title: "Termite Control",
      slug: "termite_control",
      desc: "Protect your property from termites.",
      img: "https://tse2.mm.bing.net/th/id/OIP.tVInq_LoS7N6im_sfR8QXQHaE7"
    },
    {
      title: "Woodborer Control",
      slug: "woodborer_control",
      desc: "Save wooden furniture & structures.",
      img: "https://www.pepcopp.co.in/images/pest-control/pest-innerpage/wood-borer-control.jpg"
    },
    {
      title: "Commercial Pest Control",
      slug: "commercial_pest_control",
      desc: "Customized pest solutions for businesses.",
      img: "https://tse4.mm.bing.net/th/id/OIP.MU5GIRJNGtNP5vvNoG38XAHaEL?pid=Api&P=0&h=180"
    }
  ];

  return (
    <div className="font-sans m-0">
      {/* */}
      <section className="h-[90vh] bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://img.freepik.com/premium-photo/pest-control-hd-image-stock-images-pest-control-hd-image-stock-photo_1012565-47691.jpg')] bg-cover bg-center flex items-center justify-center text-center text-white">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Pest Control Solution</h1>
          <p className="text-lg md:text-xl mb-6">Protect Your Home & Business From Harmful Pests</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-[#c60000] text-white px-7 py-3.5 rounded-[30px] text-base font-bold inline-block hover:opacity-90 transition-opacity">
              View Services
            </Link>
            {/* TODO:- add free in url query */}
            <Link to="/booking" className="border-2 border-[#c60000] text-[#c60000] px-[26px] py-3 rounded-[30px] font-bold inline-block hover:bg-[#c60000] hover:text-white transition-colors">
              Get Free Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* */}
      <section className="py-[50px] px-[10%]">
        <h2 className="text-center text-[#c60000] text-3xl font-bold mb-8">Our Popular Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Service Card */}
          {servicesData.map((service, i) => (
            <div key={i} className="border border-[#f7f2f2] p-5 text-center shadow-sm hover:-translate-y-1 transition-transform duration-300 rounded-lg bg-[#f9f9f9]">
              <Link to={`/services/${service.slug}`}>
              <img src={service.img} alt="Cockroach" className="w-full h-[140px] object-cover rounded-md mb-3" />
              </Link>             
              <h3 className="text-xl font-bold mb-2"> {service.title} </h3>
              <p className="text-sm text-gray-600 mb-4"> {service.desc} </p>
              <Link to={"/booking"} className="bg-[#c60000] text-white px-5 py-2.5 rounded-[30px] font-bold text-sm inline-block hover:bg-[#a00000]">Book Now</Link>
            </div>
          ))}

        </div>
      </section>

      {/* */}
      <section className="py-[50px] px-[10%] bg-[#f9f9f9] text-center">
        <h2 className="text-3xl font-bold text-[#333] mb-2">Book a Service Now</h2>
        <p className="text-gray-600 mb-6">Fast response | Affordable price | Expert technicians</p>

        <a href="booking.html" className="bg-gradient-to-r from-[#c60000] to-[#ff4d4d] text-white px-[30px] py-3.5 rounded-[40px] text-[17px] font-bold inline-block hover:opacity-90 shadow-lg transition-all">
          Book Appointment
        </a>
      </section>

      {/* */}
      <a href="https://wa.me/917045420139" className="fixed right-5 bottom-[90px] bg-[#25D366] text-white py-3 px-[18px] rounded-[50px] font-bold z-[1000] shadow-lg hover:scale-105 transition-transform">
        💬 WhatsApp
      </a>
      <a href="tel:7045420139" className="fixed right-5 bottom-[30px] bg-[#c60000] text-white py-3 px-[18px] rounded-[50px] font-bold z-[1000] shadow-lg hover:scale-105 transition-transform">
        📞 Call Now
      </a>

      {/* */}
      <div
        className="fixed left-5 bottom-[30px] bg-[#c60000] text-white py-3 px-5 rounded-[30px] cursor-pointer z-[1000] shadow-lg hover:scale-105 transition-transform"
        onClick={toggleChat}
      >
        💬 Live Chat
      </div>

      {/* */}
      {isChatOpen && (
        <div className="fixed left-5 bottom-[90px] w-[260px] bg-white rounded-[10px] shadow-[0_8px_25px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden z-[1001]">
          <div className="bg-[#c60000] text-white p-2.5 flex justify-between items-center font-bold">
            Live Support
            <span onClick={toggleChat} className="cursor-pointer hover:text-gray-200">✖</span>
          </div>

          <div className="h-[160px] overflow-y-auto p-2 bg-[#f9f9f9] flex flex-col" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] py-1.5 px-2.5 my-1.5 text-sm rounded-lg ${msg.type === 'bot'
                    ? 'bg-white border border-[#ddd] self-start rounded-tl-none'
                    : 'bg-[#c60000] text-white self-end text-right rounded-tr-none'
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
            onKeyDown={handleSendMsg}
            className="border-none border-t border-[#ddd] p-2.5 w-full outline-none text-sm"
          />
        </div>
      )}
    </div>
  );
};

export default Home;