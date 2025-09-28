import { useState } from "react";
import { TRoom } from "../page";

const RoomCard = ({ room }: { room: TRoom }) => {
  const [activeImage, setActiveImage] = useState(1);
  const totalImages = 2;

  const placeholderImages = [
    "https://picsum.photos/50",
    "https://picsum.photos/80",
    "https://picsum.photos/70",
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full mx-auto">
      {/* Image Section */}
      <div className="relative">
        <img
          src={placeholderImages[activeImage - 1]}
          alt={`Room Image ${activeImage}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
          {activeImage}/{totalImages}
        </div>
      </div>

      {/* Room Details */}
      <div className=" p-2 md:p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {room.room_type} - Room #{room.room_number}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Sleeps {room.capacity} &bull; 183 sq ft{" "}
          {/* You can make sq ft dynamic if available */}
        </p>

        <div className="flex items-center text-gray-700 mt-2 lg:mt-4">
          <span className="text-xl mr-2">🛏️</span>
          <span className="font-semibold">
            {parseInt(room.capacity) > 2 ? "2 Queen Beds" : "1 King Bed"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-2 lg:mt-4 text-sm text-gray-700">
          {[
            { icon: "☕", label: "Breakfast Included" },
            { icon: "📶", label: "Free WiFi" },
            { icon: "🅿️", label: "Free Parking" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 bg-white shadow-sm"
            >
              <span className="text-green-500 text-sm lg:text-base">
                {item.icon}
              </span>
              <span className="  text-xs lg:text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Price and Booking Section */}
      <div className=" p-2 md:p-4 bg-gray-50">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-blue-600 font-semibold">Fully Refundable</p>
            <p className="text-xs text-gray-500 mt-1">
              until September 21 at 11:59pm
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-blue-600">
              ${room.price_per_night}
            </span>
            <p className="text-sm text-gray-500 line-through mt-1">
              ${parseInt(room.price_per_night) + 200} for 5 nights
            </p>
          </div>
        </div>
        {room.availability ? (
          <p className="text-xs text-red-500 text-center mt-2">
            5 left at this price for this room on our site
          </p>
        ) : (
          <p className="text-xs text-red-500 text-center mt-2">
            Currently unavailable
          </p>
        )}

        <div className="flex justify-center mt-2 md:mt-4 px-4 sm:px-0">
          <button
            className={`w-full max-w-xs sm:max-w-sm py-3 rounded-md font-semibold shadow-md transition duration-300 text-sm sm:text-base ${
              room.availability
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!room.availability}
          >
            {room.availability ? "Book Now" : "Unavailable"}
          </button>
        </div>
      </div>

      {/* Breakfast Icon */}
      <div className=" p-2 md:p-4 flex items-center bg-gray-100">
        <span className="text-green-600 text-2xl mr-2">✨</span>
        <p className="text-sm text-gray-700">Price includes breakfast</p>
      </div>
    </div>
  );
};

export default RoomCard;
