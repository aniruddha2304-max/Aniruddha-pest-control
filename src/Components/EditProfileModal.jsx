import { useState } from "react";

export const EditProfileModal = ({ currentUser, onClose, onSave }) => {
  const [formData, setFormData] = useState(currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 top-20 bg-black/20 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fadeIn">
        
        {/* Modal Header */}
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h3 className="text-white text-lg font-bold">Edit Profile</h3>
          <button onClick={onClose} className="text-blue-100 hover:text-white text-2xl leading-none">&times;</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Phone Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Phone</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
             {/* Pincode Field */}
             <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Pincode</label>
              <input 
                type="number" 
                name="pincode" 
                value={formData.pincode} 
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Region Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Region</label>
            <input 
              type="text" 
              name="region" 
              value={formData.region} 
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Address</label>
            <textarea 
              name="address" 
              value={formData.address} 
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>

          {/* Landmark Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Landmark</label>
            <input 
              type="text" 
              name="landmark" 
              value={formData.landmark} 
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-100 mt-4">
            <button 
              type="button" 
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-md transition-colors"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};