"use client";

import { useHotelDetailsQuery } from "@/components/Redux/RTK/hotelApi";
import { HotelLoader } from "@/components/ui/loadingUi";
import { useParams, useRouter } from "next/navigation";

const HotelDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data, isLoading } = useHotelDetailsQuery(id);

  const hotel = data?.data || {};

  // Helper function to format date as YYYY-MM-DD
  const formatDate = (date: Date) => {
    const d = date;
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const handleBookNow = () => {
    const today = new Date();
    const twoDaysLater = new Date();
    twoDaysLater.setDate(today.getDate() + 2);

    const checkIn = formatDate(today);
    const checkOut = formatDate(twoDaysLater);

    const roomType = "সিঙ্গেল";
    const numberOfRooms = 1;

    router.push(
      `/search?checkIn=${checkIn}&checkOut=${checkOut}&roomType=${roomType}&numberOfRooms=${numberOfRooms}`
    );
  };

  if (isLoading) {
    return <HotelLoader />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      {/* Hotel Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg">
        <img
          src={hotel?.image}
          alt={hotel?.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hotel Info */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800">{hotel?.name}</h1>
        <p className="text-gray-500 mt-1">{hotel?.location}</p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700">Description</h2>
          <p className="text-gray-600 mt-1">{hotel?.description}</p>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Contact</h2>
            <p className="text-gray-600">📞 {hotel?.contact_number}</p>
            <p className="text-gray-600">✉️ {hotel?.email}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Status & Rooms
            </h2>
            <p className="text-gray-600">
              Status:{" "}
              <span
                className={`font-semibold ${
                  hotel?.is_active ? "text-green-600" : "text-red-600"
                }`}
              >
                {hotel?.is_active ? "Active" : "Inactive"}
              </span>
            </p>
            <p className="text-gray-600">
              Rooms Available:{" "}
              <span className="font-semibold">{hotel?.rooms_available}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleBookNow}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Book Now
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
          Contact Hotel
        </button>
      </div>
    </div>
  );
};

export default HotelDetails;
