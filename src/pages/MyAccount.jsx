import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import { EditProfileModal } from '../Components/EditProfileModal';
import { useAuth } from '../config/firebase';
import { useFirebase } from '../context/FirebaseContext';

const MyAccount = () => {
  const myBookings = [
    { id: 101, service: "Full House Pest Control", date: "2026-02-10", status: "Upcoming" },
    { id: 102, service: "Kitchen Cleaning", date: "2026-01-15", status: "Completed" }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setcurrentUser] = useState({
    name: "aniruddha Test 5",
    email: "aniruddhaTest5@gmail.com",
    phone: "1234567890",
    address: "borivali west, mumbai 92",
    landmark: "near pillai college okok ",
    region: "Gorai",
    pincode: 4000322,
    profileImage: "https://via.placeholder.com/150"
  });

  const handleSaveProfile = (data) => {
    setcurrentUser(data);
  }

  const { user } = useAuth();
  const firebase = useFirebase();

  useEffect(() => {
    if (firebase.userId) {
      firebase.getUserData(firebase.userId).then((data) => {
        if (data.exists()) {
          const res = data.data();
          setcurrentUser(prev => ({
           ...prev, // Keep existing values (like profileImage, landmark)
          name: res.name || prev.name,
          phone: res.phone || prev.phone,
          region: res.region || prev.region,
          email: res.email || prev.email,
          address: res.address || prev.address,
          pincode: res.pincode || prev.pincode,
          profileImage: res.profileImage || prev.profileImage,
          landmark: res.landmark || prev.landmark,
          }))
          console.log("NEW RES :: ",res);
        }
      }).catch(err => console.log(err))
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8 text-gray-800">

      {/* --- LEFT SIDE: PROFILE CARD --- */}
      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center">

        {/* Profile Image */}
        <div className="w-28 h-28 rounded-full border-4 border-blue-200 overflow-hidden mb-4">
          <img
            src={currentUser.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Email */}
        <h2 className="text-2xl font-bold text-gray-800">{currentUser.name}</h2>
        <p className="text-gray-500 text-sm mt-1 mb-6">{currentUser.email}</p>

        {/* Details Grid */}
        <div className="w-full grid grid-cols-2 gap-y-4 gap-x-2 text-left border-t border-gray-100 pt-6">

          <div>
            <label className="block text-xs text-gray-400 font-bold uppercase mb-1">Phone</label>
            <p className="font-semibold text-gray-700">{currentUser.phone}</p>
          </div>

          <div>
            <label className="block text-xs text-gray-400 font-bold uppercase mb-1">Region</label>
            <p className="font-semibold text-gray-700">{currentUser.region}</p>
          </div>

          <div>
            <label className="block text-xs text-gray-400 font-bold uppercase mb-1">Pincode</label>
            <p className="font-semibold text-gray-700">{currentUser.pincode}</p>
          </div>

          {/* Full Width Items */}
          <div className="col-span-2">
            <label className="block text-xs text-gray-400 font-bold uppercase mb-1">Address</label>
            <p className="font-semibold text-gray-700">{currentUser.address}</p>
          </div>

          <div className="col-span-2">
            <label className="block text-xs text-gray-400 font-bold uppercase mb-1">Landmark</label>
            <p className="font-semibold text-gray-700">{currentUser.landmark}</p>
          </div>

        </div>

        {/* Edit Button */}
        <button className="mt-8 w-full py-2.5 border border-blue-400 text-blue-500 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-200" onClick={() => { setIsModalOpen(prev => !prev) }}>
          Edit Profile
        </button>
      </div>


      {/* --- RIGHT SIDE: BOOKINGS SECTION --- */}
      <div className="w-full md:w-2/3 bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[400px]">
        <h3 className="text-xl font-bold text-blue-700 border-b border-gray-100 pb-4 mb-4">
          My Bookings
        </h3>

        <div className="space-y-4">
          {myBookings.length > 0 ? (
            myBookings.map((booking) => (
              <div key={booking.id} className="flex justify-between items-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">

                {/* Service Info */}
                <div>
                  <h4 className="font-bold text-gray-800">{booking.service}</h4>
                  <span className="text-sm text-gray-500">{booking.date}</span>
                </div>

                {/* Status Badge */}
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${booking.status === 'Completed'
                  ? 'bg-green-100 text-green-600'
                  : 'bg-orange-100 text-orange-600'
                  }`}>
                  {booking.status}
                </span>

              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center py-10">No active bookings found.</p>
          )}
        </div>
      </div>

      {isModalOpen && (
        <EditProfileModal
          currentUser={currentUser}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
};

export default MyAccount;