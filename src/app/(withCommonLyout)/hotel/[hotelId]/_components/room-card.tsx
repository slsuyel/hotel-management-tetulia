import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { THotel, TRoom } from "../page";

interface RoomCardProps {
  room: TRoom;
  hotel: THotel;
  check_in_date: string | null;
  check_out_date: string | null;
}

const RoomCard = ({
  room,
  hotel,
  check_in_date,
  check_out_date,
}: RoomCardProps) => {
  const [activeImage, setActiveImage] = useState(1);
  const totalImages = 3;

  const placeholderImages = [
    "https://picsum.photos/400/300",
    "https://picsum.photos/401/300",
    "https://picsum.photos/402/300",
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-md mx-auto transition hover:shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <Image
          width={400}
          height={300}
          src={placeholderImages[activeImage - 1]}
          alt={`Room Image ${activeImage}`}
          className="w-full h-48 sm:h-56 object-cover"
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
          {activeImage}/{totalImages}
        </div>
      </div>

      {/* Room Info */}
      <div className=" p-2 lg:p-4 space-y-2 lg:space-y-3">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            {room.room_type} - Room #{room.room_number}
          </h2>
          <p className="text-sm text-gray-500">Sleeps {room.capacity}</p>
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <span className="text-xl">🛏️</span>
          <span className="font-medium text-sm sm:text-base">
            {parseInt(room.capacity) > 2 ? "2 Queen Beds" : "1 King Bed"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {[
            { icon: "☕", label: "Breakfast Included" },
            { icon: "📶", label: "Free WiFi" },
            { icon: "🅿️", label: "Free Parking" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-sm bg-white shadow-sm"
            >
              <span className="text-green-500">{item.icon}</span>
              <span className="text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-200 my-2" />

      {/* Pricing & Booking */}
      <div className="p-2 lg:p-4 bg-gray-50 space-y-2 lg:space-y-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <p className="text-green-600 font-semibold text-sm sm:text-base">
              Fully Refundable
            </p>
            <p className="text-xs text-gray-500">
              Until September 21 at 11:59pm
            </p>
          </div>

          <div className="text-right">
            <p className="text-xl font-bold text-blue-600">
              ${room.price_per_night}
            </p>
            <p className="text-xs text-gray-500 line-through">
              ${parseInt(room.price_per_night) + 200} for 5 nights
            </p>
          </div>
        </div>

        <div className="mt-2">
          <Link
            href={`/hotel/booking/${room.id}?hotel_id=${hotel.id}&check_in_date=${check_in_date}&check_out_date=${check_out_date}`}
          >
            <button
              className={`w-full py-3 rounded-md font-semibold text-sm sm:text-base transition-all ${
                room.availability
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!room.availability}
            >
              {room.availability ? "Book Now" : "Unavailable"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
