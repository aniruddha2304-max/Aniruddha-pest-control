import React from 'react';
import { Link } from 'react-router-dom';
import Chatbox from '../Components/Chatbox';

const AboutUs = () => {

  const featuresObj = [
    { name: "Certified Technicians", icon: "ri-medal-fill" },
    { name: "Eco-friendly Solutions", icon: "ri-leaf-fill" },
    { name: "Transparent Pricing", icon: "ri-wallet-3-fill" },
    { name: "Fast Service & Support", icon: "ri-flashlight-fill" },
    { name: "Guaranteed Protection", icon: "ri-shield-check-fill" },
    { name: "High Customer Satisfaction", icon: "ri-emotion-happy-fill" }
  ];


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

     <Chatbox />

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
                {featuresObj.map((feature, idx) => (
                  <li key={idx} className='font-medium text-gray-700'>
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