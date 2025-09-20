import React, { useState } from "react";

const RoomCard = () => {
  const [activeImage, setActiveImage] = useState(1);
  const totalImages = 2;

  const images = [
    "https://placehold.co/1000x750/E5E7EB/4B5563?text=Hotel+Room+1",
    "https://placehold.co/1000x750/D1D5DB/4B5563?text=Hotel+Room+2",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full mx-auto my-8">
        {/* Image Section */}
        <div className="relative">
          <img
            src={images[activeImage - 1]}
            alt={`Room Image ${activeImage}`}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
            1/{totalImages}
          </div>
        </div>

        {/* Room Details */}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Deluxe Double Room with Sea View
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Sleeps 2 &bull; 183 sq ft
          </p>
          <div className="flex items-center text-gray-700 mt-4">
            <span className="text-xl mr-2">🛏️</span>
            <span className="font-semibold">1 King Bed</span>
          </div>

          <div className="flex flex-wrap items-center mt-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1 border border-gray-300 rounded-full px-2 py-1 mr-2 my-1">
              <span className="text-green-500 text-lg">☕</span>
              <span>Breakfast Included</span>
            </div>
            <div className="flex items-center space-x-1 border border-gray-300 rounded-full px-2 py-1 mr-2 my-1">
              <span className="text-green-500 text-lg">📶</span>
              <span>Free WiFi</span>
            </div>
            <div className="flex items-center space-x-1 border border-gray-300 rounded-full px-2 py-1 my-1">
              <span className="text-green-500 text-lg">🅿️</span>
              <span>Free Parking</span>
            </div>
          </div>

          <a href="#" className="text-blue-600 font-semibold mt-4 block">
            Room Details and Photos
          </a>
        </div>

        <hr className="border-gray-200" />

        {/* Price and Booking Section */}
        <div className="p-4 bg-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-blue-600 font-semibold">Fully Refundable</p>
              <p className="text-xs text-gray-500 mt-1">
                until September 21 at 11:59pm
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-blue-600">$54</span>
              <p className="text-sm text-gray-500 line-through mt-1">
                $810 for 5 nights
              </p>
            </div>
          </div>
          <p className="text-xs text-red-500 text-center mt-2">
            5 left at this price for this room on our site
          </p>

          <div className="flex justify-center mt-4">
            <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-green-700 transition duration-300">
              Book 3 rooms
            </button>
          </div>
        </div>

        {/* Breakfast Icon */}
        <div className="p-4 flex items-center bg-gray-100">
          <span className="text-green-600 text-2xl mr-2">✨</span>
          <p className="text-sm text-gray-700">Price includes breakfast</p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
