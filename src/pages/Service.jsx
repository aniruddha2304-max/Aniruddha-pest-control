import React, { useState } from 'react';
import Chatbox from '../Components/Chatbox';
import ServiceCard from '../Components/ServiceCard';
import { detailedService } from '../JSON_Data/detailedService';

const Services = () => {
  // 1. Manage Cart State
  const [cart, setCart] = useState([]);
  const GST_RATE = 0.18; // 18% GST

  // --- Data: List of Services with Prices ---
  const servicesList = detailedService;

  // 2. Cart Logic: Add to Cart
  const addToCart = (service, quantity = 0) => {
    setCart((prev) => {
      const exists = prev.find(item => item.id === service.id);
      if (exists) {
        return quantity === 0 ?
          prev.map(item => item.id === service.id ? { ...item, qty: item.qty + 1 } : item) :
          prev.map(item => item.id === service.id ? { ...item, qty: item.qty - 1 } : item);
      }
      return [...prev, { ...service, qty: 1 }];
    });
  };

  // 3. Calculation Logic
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const gstAmount = subtotal * GST_RATE;
  const total = subtotal + gstAmount;

  return (
    <div className="bg-[#ede9e9] font-sans min-h-screen">
      {/* HEADER */}
      <div className="bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://img.freepik.com/premium-photo/pest-control-hd-image-stock-images-pest-control-hd-image-stock-photo_1012565-47691.jpg')] bg-cover bg-center text-[rgb(233,39,39)] py-[70px] px-[10%] text-center">
        <h1 className="mb-2.5 text-[2.5rem]">Our Pest Control Services</h1>
        <p className="text-white text-lg">Safe • Reliable • Affordable Pest Solutions</p>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="py-[50px] px-[5%] lg:px-[10%] flex flex-col lg:flex-row gap-10 justify-center w-full">

        {/* LEFT SIDE: SERVICES GRID */}
        <section className="flex-[1.5] w-full"> {/* flex-1.5 gives it slightly more room than the cart */}
          <div className="flex flex-col gap-4"> {/* Use flex-col for single vertical list */}
            {servicesList.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                addToCart={addToCart}
              />
            ))}
          </div>
        </section>

        {/* RIGHT SIDE: SHOPPING CART */}
        <aside className="flex-1 bg-white p-6 rounded-xl shadow-lg h-fit sticky top-30 border border-gray-200">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <i className="ri-shopping-cart-line"></i> Your Booking Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-400 text-sm">No services selected yet.</p>
          ) : (
            <>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {cart.map((item, i) => (
                  item.qty !== 0 && (<div key={i} className="flex justify-between items-start border-bottom pb-2 border-gray-100">
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500">Qty: {item.qty} × ₹{item.price}</p>
                    </div>
                    <span className="font-medium text-sm">₹{item.price * item.qty}</span>
                  </div>)
                ))}
              </div>

              {total > 0 ? (
                <div className="mt-6 border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>GST (18%)</span>
                    <span>₹{gstAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-[#c60000] pt-2">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <button className="w-full mt-4 bg-[#c60000] text-white py-3 rounded-full font-bold hover:bg-[#a00000] transition-colors">
                    Confirm Booking
                  </button>
                </div>
              ) : <p className="text-gray-400 text-sm">No services selected yet.</p>
              }
            </>
          )}
        </aside>
      </main>

      <Chatbox />
    </div>
  );
};

export default Services;