import React, { useEffect, useRef, useState } from 'react'

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello 👋 How can we help you?' }
  ]);
  const [isChatOpen, setIsChatOpen] = useState(false);

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
    <div>
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
                className={`max-w-[85%] py-1.5 px-2.5 my-1.5 text-sm ${msg.type === 'bot'
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
  )
}

export default Chatbox