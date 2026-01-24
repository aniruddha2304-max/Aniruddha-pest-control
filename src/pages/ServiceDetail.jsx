import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Assuming react-router is used for navigation
import { detailedService } from '../JSON_Data/detailedService';

// Mock Data for a specific service (In a real app, you might fetch this based on an ID)
const serviceData = detailedService
const ServiceDetails = () => {
  // In a real app, use useParams() to get the service ID from the URL
  // const { serviceId } = useParams(); 
  // const service = getServiceById(serviceId);
  const serviceList = serviceData; // Using mock data for now
  const [selectedSlot, setSelectedSlot] = useState(null);

  const { slug } = useParams();

  // 3. Run the "loop" to find the matching object
  const service = serviceList.find((service) => service.id === slug);

  // 4. Handle invalid slugs (Optional but recommended)
  if (!service) {
    return <h2>Service not found!</h2>;
  }


  return (
    <div className="bg-[#f9f9f9] min-h-screen font-sans pb-10">
      
      {/* HEADER / BREADCRUMB */}
      <div className="bg-white py-4 px-6 shadow-sm mb-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-500">
          <Link to="/" className="hover:text-[#c60000]">Home</Link> &gt; 
          <Link to="/services" className="hover:text-[#c60000] ml-1">Services</Link> &gt; 
          <span className="text-[#c60000] font-bold ml-1">{service.title}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Image & Details */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Main Image */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img src={service.img} alt={service.title} className="w-full h-64 sm:h-80 object-cover" />
          </div>

          {/* Title & Stats */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-800">{service.title}</h1>
              <div className="flex items-center gap-2 mt-2 sm:mt-0 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="font-bold text-gray-700">{service.rating}</span>
                <span className="text-gray-400 text-sm">({service.reviews} reviews)</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">{service.fullDesc}</p>
            
            {/* Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
            <div className="space-y-6">
              {service.customerReviews.map((review, idx) => (
                <div key={idx} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">{review.name}</h4>
                        <div className="text-yellow-400 text-xs">
                          {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs">{review.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-14">{review.comment}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-[#c60000] font-bold text-sm hover:underline">View all {service.reviews} reviews</button>
          </div>
        </div>

        {/* RIGHT COLUMN: Booking Card (Sticky) */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-md sticky top-24 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-2">Total Price</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className={`${service.price==="Custom Quote" ? "text-2xl" : "text-4xl"} font-bold text-[#c60000]`}>{service.price}</span>
              <span className="text-gray-400 text-sm mb-1.5 line-through">₹1,500</span>
              <span className="text-green-600 text-sm font-bold mb-1.5 ml-auto">20% OFF</span>
            </div>

            <div className="space-y-4 mb-6 text-sm text-gray-600">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>⏱ Duration</span>
                <span className="font-bold text-gray-800">{service.duration}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>🛡 Warranty</span>
                <span className="font-bold text-gray-800">{service.warranty}</span>
              </div>
            </div>

            {/* Availability Slots */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 text-sm">Select Available Slot:</h4>
              <div className="space-y-2">
                {service.availability.map((slot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSlot(slot)}
                    className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                      selectedSlot === slot 
                        ? 'border-[#c60000] bg-red-50 text-[#c60000] font-bold shadow-sm' 
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              to={`/booking?service=${service.title}`}
              className="block w-full bg-[#c60000] text-white text-center py-4 rounded-full font-bold text-lg hover:bg-[#a00000] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Book Service Now
            </Link>
            
            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
              <span>🔒</span> Secure Payment & Booking
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetails;