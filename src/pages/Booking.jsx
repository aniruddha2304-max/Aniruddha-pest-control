import { useState } from 'react';

const Booking = () => {
  // Derive initial selectedService from URL params
  const getSelectedService = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("service") || "";
  };

  // Initialize state with URL value
  const [selectedService, setSelectedService] = useState(getSelectedService);
  
  // Handle Form Submission
  const handleBookService = (e) => {
    e.preventDefault();
    alert("✅ Booking successful! Our team will contact you shortly.");
  };

  // Reusable input style class to keep JSX clean
  const inputClass = "w-full p-3 rounded-md border border-[#ccc] text-sm bg-white outline-none focus:border-[#c60000] focus:ring-[3px] focus:ring-[#c60000]/10 transition-shadow duration-200";

  return (
    <div className="bg-[#f4f4f4] min-h-screen font-sans">
      
      {/* HEADER */}
      <div className="bg-[linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url('https://img.freepik.com/premium-photo/pest-control-hd-image-stock-images-pest-control-hd-image-stock-photo_1012565-47691.jpg')] bg-cover bg-center py-15 px-[10%] text-center text-white">
        <h1 className="mb-2 text-[2.5rem] font-bold">Book Pest Control Service</h1>
        <p className="text-lg">Fast • Safe • Affordable Solutions</p>
      </div>

      {/* BOOKING FORM WRAPPER */}
      <div className="flex justify-center py-10 px-3.75">
        
        {/* BOOKING CARD */}
        <div className="w-full max-w-162.5 bg-white p-8.75 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.2)]">

          <h2 className="text-center text-[#c60000] text-2xl font-bold mb-2.5">Service Booking</h2>
          <p className="text-center text-[#666] mb-6.25">Fill the form below and our team will contact you shortly</p>

          <form onSubmit={handleBookService}>

            <div className="mb-3.75">
              <label className="text-sm font-bold block mb-1.5">Full Name</label>
              <input type="text" required placeholder="Enter your name" className={inputClass} />
            </div>

            {/* Form Row: Stacks vertically on mobile, horizontal on larger screens */}
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-3.75">
              <div className="mb-3.75 flex-1">
                <label className="text-sm font-bold block mb-1.5">Mobile Number</label>
                <input type="tel" required placeholder="10-digit mobile number" className={inputClass} />
              </div>

              <div className="mb-3.75 flex-1">
                <label className="text-sm font-bold block mb-1.5">Email (Optional)</label>
                <input type="email" placeholder="example@email.com" className={inputClass} />
              </div>
            </div>

            <div className="mb-3.75">
              <label className="text-sm font-bold block mb-1.5">Select Service</label>
              <select 
                id="serviceSelect" 
                required 
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className={inputClass}
              >
                <option value="">Choose Service</option>
                <option value="Cockroach Control">Cockroach Control</option>
                <option value="Termite Control">Termite Control</option>
                <option value="Mosquito Control">Mosquito Control</option>
                <option value="Rodent Control">Rodent Control</option>
                <option value="Woodborer Control">Woodborer Control</option>
                <option value="Bed Bug Control">Bed Bug Control</option>
                <option value="Ant Control">Ant Control</option>
                <option value="Fly Control">Fly Control</option>
                <option value="Spider Control">Spider Control</option>
                <option value="Commercial Pest Control">Commercial Pest Control</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-0 sm:gap-3.75">
              <div className="mb-3.75 flex-1">
                <label className="text-sm font-bold block mb-1.5">Preferred Date</label>
                <input type="date" required className={inputClass} />
              </div>

              <div className="mb-3.75 flex-1">
                <label className="text-sm font-bold block mb-1.5">Preferred Time</label>
                <input type="time" required className={inputClass} />
              </div>
            </div>

            <div className="mb-3.75">
              <label className="text-sm font-bold block mb-1.5">Address / Message</label>
              <textarea 
                rows="4" 
                placeholder="Enter service address or message" 
                className={`${inputClass} resize-none`}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full mt-3.75 bg-linear-to-r from-[#c60000] to-[#ff4d4d] text-white p-3.5 border-none rounded-[30px] text-base font-bold cursor-pointer hover:opacity-95 transition-opacity duration-300"
            >
              Confirm Booking
            </button>

          </form>

          <div className="mt-3.75 text-center text-[13px] text-[#777]">
            🔒 Your information is 100% secure with us
          </div>

        </div>
      </div>

    </div>
  );
};

export default Booking;