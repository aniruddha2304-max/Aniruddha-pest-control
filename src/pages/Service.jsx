import React, { useState, useRef, useEffect } from 'react';

const Services = () => {
  // --- Data: List of Services ---
  const servicesList = [
    {
      title: "Cockroach Control",
      desc: "Eliminate harmful cockroaches permanently.",
      img: "https://tse3.mm.bing.net/th/id/OIP.SUGBCGmnS8gkeI9Q-F906wHaE8?pid=Api&P=0&h=180",
      link: "booking.html?service=Cockroach Control"
    },
    {
      title: "Termite Control",
      desc: "Protect your property from termites.",
      img: "https://tse3.mm.bing.net/th/id/OIP.PDbdhk7Qo6LO5lDUbCI7zgHaDt?pid=Api&P=0&h=180",
      link: "booking.html?service=Termite Control"
    },
    {
      title: "Mosquito Control",
      desc: "Prevent dengue & malaria effectively.",
      img: "https://tse4.mm.bing.net/th/id/OIP.4F4kld9_3afkoht_Ii3aGQHaD4?pid=Api&P=0&h=180",
      link: "booking.html?service=Mosquito Control"
    },
    {
      title: "Woodborer Control",
      desc: "Save wooden furniture & structures.",
      img: "https://tse2.mm.bing.net/th/id/OIP.RXwuZsyJ6U1u9Z8uNPeFwQHaE7?pid=Api&P=0&h=180",
      link: "booking.html?service=Woodborer Control"
    },
    {
      title: "Bed Bug Control",
      desc: "Get rid of bed bugs completely.",
      img: "https://tse2.mm.bing.net/th/id/OIP.Ly35qjKyqK9YRtvDnomzbwHaE8?pid=Api&P=0&h=180",
      link: "booking.html?service=Bed Bug Control"
    },
    {
      title: "Rodent Control",
      desc: "Control rats & mice safely.",
      img: "https://wallpaperaccess.com/full/10678027.jpg",
      link: "booking.html?service=Rodent Control"
    },
    {
      title: "Ant Control",
      desc: "Remove ants from home & office.",
      img: "https://cdn.rentokil.com/content/local/gb-pro/images/desktop/main_ant-control.jpg",
      link: "booking.html?service=Ant Control"
    },
    {
      title: "Fly Control",
      desc: "Hygienic solutions for flies.",
      img: "https://tse3.mm.bing.net/th/id/OIP.BKdhtoSqSIZTbYmj5hqK3gHaEK?pid=Api&P=0&h=180",
      link: "booking.html?service=Fly Control"
    },
    {
      title: "Spider Control",
      desc: "Spider-free safe environment.",
      img: "https://tse1.mm.bing.net/th/id/OIP.PP7mTCQrB8FZq1SoS9PFSgHaHa?pid=Api&P=0&h=180",
      link: "booking.html?service=Spider Control"
    },
    {
      title: "Commercial Pest Control",
      desc: "Customized pest solutions for businesses.",
      img: "https://tse2.mm.bing.net/th/id/OIP.ZtFf3MvPIdAyObP1T3_psQHaCx?pid=Api&P=0&h=180",
      link: "booking.html?service=Commercial Pest Control"
    }
  ];

  // --- Chat Logic ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello 👋 How can we help you?' }
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatBodyRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isChatOpen]);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleSendMsg = (e) => {
    if (e.key === 'Enter' && chatInput.trim() !== "") {
      // Add User Message
      setMessages(prev => [...prev, { type: 'user', text: chatInput }]);
      setChatInput(""); // Clear input

      // Simulate Bot Response
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { type: 'bot', text: 'Our team will contact you shortly.' }
        ]);
      }, 500);
    }
  };

  return (
    <div className="bg-[#ede9e9] font-sans min-h-screen">
      
      {/* NAVBAR */}
      <div className="bg-[#f4f5f6] py-2.5 px-6 flex justify-between items-center">
        <div className="w-[140px] bg-white py-1.5 px-2.5 rounded-md">
          <img src="https://aniruddhapestcontrol.com/oglogo.jpg" alt="Logo" className="w-full" />
        </div>
        <div>
          {['Home', 'Services', 'Booking', 'About Us', 'Signup', 'Login'].map((item) => {
             // Basic logic to determine links/active state
             const linkMap = {
               'Home': 'index.html',
               'Services': 'services.html',
               'Booking': 'booking.html',
               'About Us': 'about.html',
               'Signup': 'signup.html',
               'Login': 'login.html'
             };
             const isActive = item === 'Services';
             return (
               <a 
                 key={item}
                 href={linkMap[item]} 
                 className={`text-[#111] ml-[18px] no-underline font-bold py-1.5 px-3 rounded-md transition-colors duration-300 ${
                   isActive ? 'bg-[#c60000] text-white' : 'hover:bg-[#c60000] hover:text-white'
                 }`}
               >
                 {item}
               </a>
             );
          })}
        </div>
      </div>

      {/* HEADER */}
      {/* Using arbitrary values for linear gradient + image url */}
      <div className="bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://img.freepik.com/premium-photo/pest-control-hd-image-stock-images-pest-control-hd-image-stock-photo_1012565-47691.jpg')] bg-cover bg-center text-[rgb(233,39,39)] py-[70px] px-[10%] text-center">
        <h1 className="mb-2.5 text-[2.5rem]">Our Pest Control Services</h1>
        <p className="text-white text-lg">Safe • Reliable • Affordable Pest Solutions</p>
      </div>

      {/* SERVICES GRID */}
      <section className="py-[50px] px-[10%]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
          {servicesList.map((service, index) => (
            <div 
              className="bg-white rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.15)] overflow-hidden text-center transition-transform duration-300 flex flex-col justify-between pb-[18px] hover:-translate-y-1.5" 
              key={index}
            >
              <img src={service.img} alt={service.title} className="w-full h-[150px] object-cover" />
              <h3 className="py-3 pb-[5px] text-[#222] font-bold text-lg">{service.title}</h3>
              <p className="text-sm text-[#555] px-2.5 mb-[15px]">{service.desc}</p>
              <a 
                href={service.link} 
                className="inline-block mx-auto bg-[#c60000] text-white py-2.5 px-5 rounded-[30px] font-bold no-underline transition-colors hover:bg-[#a00000]"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE CHAT LAUNCHER */}
      <div 
        className="fixed left-5 bottom-[30px] bg-[#c60000] text-white py-3 px-5 rounded-[30px] cursor-pointer z-[1000] shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform" 
        onClick={toggleChat}
      >
        💬 Live Chat
      </div>

      {/* CHATBOX */}
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
                className={`max-w-[85%] py-1.5 px-2.5 my-1.5 text-sm ${
                  msg.type === 'bot' 
                    ? 'bg-white border border-[#ddd] rounded-t-[10px] rounded-br-[10px] self-start' 
                    : 'bg-[#c60000] text-white rounded-t-[10px] rounded-bl-[10px] self-end text-right'
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

export default Services;