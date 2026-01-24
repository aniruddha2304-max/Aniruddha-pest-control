import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-[50px] pb-[20px] font-sans">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Placeholder for Logo if needed, or just text */}
              <h2 className="text-2xl font-bold text-[#c60000]">Aniruddha Pest Control</h2>
            </div>
            <p className="text-gray-400 text-sm leading-6 mb-4">
              Your trusted partner for safe, effective, and eco-friendly pest control solutions. We protect your home and business 24/7.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#c60000] transition-colors">F</a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#c60000] transition-colors">T</a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#c60000] transition-colors">I</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-[#c60000] pl-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-[#c60000] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#c60000] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#c60000] transition-colors">Services</Link></li>
              <li><Link to="/booking" className="hover:text-[#c60000] transition-colors">Book Now</Link></li>
              <li><Link to="/login" className="hover:text-[#c60000] transition-colors">Login</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-[#c60000] pl-3">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {/* Linking to dynamic slugs for better UX */}
              <li><Link to="/services/cockroach_control" className="hover:text-[#c60000] transition-colors">Cockroach Control</Link></li>
              <li><Link to="/services/termite_control" className="hover:text-[#c60000] transition-colors">Termite Treatment</Link></li>
              <li><Link to="/services/bed_bug_control" className="hover:text-[#c60000] transition-colors">Bed Bug Removal</Link></li>
              <li><Link to="/services/rodent_control" className="hover:text-[#c60000] transition-colors">Rodent Control</Link></li>
              <li><Link to="/services/commercial_pest_control" className="hover:text-[#c60000] transition-colors">Commercial Pest Control</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & CTA */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-[#c60000] pl-3">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <span>📍</span>
                123, Pest Control Street, Mumbai, Maharashtra, 400001
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:7045420139" className="hover:text-[#c60000] transition-colors">+91 99872 87903</a>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@aniruddhapc.com" className="hover:text-[#c60000] transition-colors"> aniruddha2304@gmail.com </a>
              </p>
            </div>

            {/* CTA BUTTON */}
            <Link
              to="/booking"
              className="inline-block mt-5 bg-[#c60000] text-white py-2.5 px-6 rounded-full font-bold text-sm hover:bg-red-700 transition-colors shadow-lg"
            >
              Book an Inspection
            </Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aniruddha Pest Control Services. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-[#c60000]">Privacy Policy</a>
            <a href="#" className="hover:text-[#c60000]">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;