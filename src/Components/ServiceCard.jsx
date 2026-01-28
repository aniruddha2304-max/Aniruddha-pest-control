import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ServiceCard = ({ service, index, addToCart }) => {
  const [serviceCount, setServiceCount] = useState(0);
  const navigate = useNavigate();
  return (
    <div
      className="w-full bg-white p-6 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-md flex justify-between items-start gap-6 transition-all group relative z-0"
      key={index}
      onClick={() => { navigate(`/services/${service.id}`) }}
    >
      {/* LEFT CONTENT */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#222] mb-1 group-hover:text-[#673ab7] transition-colors">
          {service.title}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          <i className="ri-star-fill text-[#673ab7] text-sm"></i>
          <span className="text-sm font-semibold text-gray-600">4.8 (82K reviews)</span>
        </div>

        <p className="text-lg font-bold text-gray-800 mb-3">Starts at ₹{service.price}</p>

        <ul className="text-sm text-gray-500 space-y-1.5 mb-4">
          <li className="flex items-center gap-2">
            <i className="ri-checkbox-circle-fill text-green-600"></i> Eco-friendly and safe solutions
          </li>
          <li className="flex items-center gap-2">
            <i className="ri-checkbox-circle-fill text-green-600"></i> Certified & trained technicians
          </li>
          <li className="flex items-start gap-2 italic">
            <i className="ri-information-line mt-1"></i> {service.shortDesc}
          </li>
        </ul>

        <Link
          to={`/services/${service.id}`}
          className="text-[#673ab7] text-sm font-bold hover:underline inline-flex items-center gap-1"
        >
          View details <i className="ri-arrow-right-s-line"></i>
        </Link>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative w-[140px] h-[140px] flex-shrink-0">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover rounded-2xl shadow-sm"
        />

        {serviceCount > 0 ? (
          <div className='z-20 absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-[#673ab7] border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.1)] px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all uppercase flex items-center gap-3 text-3xl'>
            <i class="ri-subtract-fill hover:cursor-pointer relative z-20" onClick={(e) => { e.stopPropagation(); addToCart(service, serviceCount); setServiceCount(prev => prev - 1) }}></i>
            {serviceCount}
            <i class="ri-add-line hover:cursor-pointer relative z-20" onClick={(e) => { e.stopPropagation(); addToCart(service); setServiceCount(prev => prev + 1) }}></i>
          </div>
        ) : (<button
          onClick={(e) => {
            e.stopPropagation(); // Prevents link trigger if nested
            addToCart(service);
            setServiceCount(prev => prev + 1);
          }}
          className="z-20 absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-[#673ab7] border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.1)] px-8 py-2 rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all uppercase"
        >
          Add
        </button>)}
      </div>
    </div>
  )
}

export default ServiceCard