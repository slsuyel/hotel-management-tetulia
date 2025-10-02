"use client";

import { useHotelDetailsQuery } from "@/components/Redux/RTK/hotelApi";
import { HotelLoader } from "@/components/ui/loadingUi";
import { addDays, format } from "date-fns"; // Import addDays for default logic
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react"; // Import useState and useMemo

const formatDate = (date: Date) => format(date, "yyyy-MM-dd");

// --- RoomCard component remains the same ---
const RoomCard = ({ room }: { room: any }) => (
  <div className="bg-white dark:bg-gray-800 p-2 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-sm shadow-sm flex flex-col md:flex-row gap-2 sm:gap-4">
    <div className="w-full md:w-1/3 h-32 sm:h-40 overflow-hidden rounded-lg flex-shrink-0">
      <img
        src={room.image}
        alt={room.room_type}
        className="w-full h-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
    <div className="w-full md:w-2/3 flex flex-col justify-between text-sm sm:text-base">
      <div>
        <h3 className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400">
          Room {room.room_number}: {room.room_type}
        </h3>
        <p className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">
          ৳{room.price_per_night}{" "}
          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
            / night
          </span>
        </p>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
          {room.description}
        </p>
      </div>
      <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2">
        <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
          ধারণ ক্ষমতা : {room.capacity}
        </span>
      </div>
    </div>
  </div>
);
// --- RoomCard component ends ---

const HotelDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data, isLoading } = useHotelDetailsQuery(id);
  const hotel = data?.data || {};

  // Default dates: Today and two days later
  const today = useMemo(() => new Date(), []);
  const twoDaysLater = useMemo(() => addDays(today, 2), [today]);

  // State for check-in and check-out dates, initialized to default dates
  const [checkInDate, setCheckInDate] = useState<Date>(today);
  const [checkOutDate, setCheckOutDate] = useState<Date>(twoDaysLater);

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setCheckInDate(newDate);
    // Ensure check-out is not before check-in
    if (newDate >= checkOutDate) {
      setCheckOutDate(addDays(newDate, 1));
    }
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setCheckOutDate(newDate);
  };

  // Determine the default room type to pass to the search page
  const defaultRoomType = hotel?.rooms?.[0]?.room_type || "সিঙ্গেল";
  const numberOfRooms = 1;
  /* /hotel/6?check_in_date=2025-10-23&check_out_date=2025-10-30 */
  const handleBookNow = () => {
    // Basic validation
    if (!checkInDate || !checkOutDate || checkInDate >= checkOutDate) {
      alert("Please select valid check-in and check-out dates.");
      return;
    }

    const checkIn = formatDate(checkInDate);
    const checkOut = formatDate(checkOutDate);

    router.push(
      `/hotel/${hotel.id}?check_in_date=${checkIn}&check_out_date=${checkOut}`
    );
  };

  if (isLoading) {
    return (
      <div className=" min-h-screen flex items-center justify-center py-12">
        <HotelLoader />;
      </div>
    );
  }
  const {
    name,
    location,
    description,
    contact_number,
    email,
    image,
    is_active,
    rooms = [],
  } = hotel;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-2 sm:p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Hotel Card */}
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-sm overflow-hidden mb-4 sm:mb-8">
          <div className="w-full h-48 sm:h-64 md:h-96 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition duration-700 ease-in-out hover:scale-105"
            />
          </div>

          <div className="p-2 sm:p-4 md:p-10">
            {/* Header and Booking Controls */}
            <div className="flex flex-col lg:flex-row justify-between lg:items-center border-b pb-2 sm:pb-4 mb-2 sm:mb-6 border-gray-200 dark:border-gray-700">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
                  {name}
                </h1>
                <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 mt-1 flex items-center gap-1 sm:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {location}
                </p>
              </div>

              {/* **Date Selectors and Book Now Button** */}
              <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch w-full lg:w-auto">
                {/* Check-in Date Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="checkIn"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Check-in
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    value={formatDate(checkInDate)}
                    onChange={handleCheckInChange}
                    min={formatDate(today)}
                    className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-100 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                {/* Check-out Date Input */}
                <div className="flex flex-col">
                  <label
                    htmlFor="checkOut"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Check-out
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    value={formatDate(checkOutDate)}
                    onChange={handleCheckOutChange}
                    min={formatDate(addDays(checkInDate, 1))} // Must be at least 1 day after check-in
                    className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-100 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Book Now Button */}
                <button
                  onClick={handleBookNow}
                  // Basic check to see if check-out is after check-in for button activation
                  disabled={checkInDate >= checkOutDate}
                  className={`px-3 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md transition duration-300 text-nowrap mt-auto 
                    ${
                      checkInDate < checkOutDate
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400"
                    }`}
                >
                  Book Now
                </button>
                <a
                  href={`tel:${contact_number}`}
                  className="px-3 py-2 text-sm sm:text-base bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 flex-1 text-center mt-auto"
                >
                  Call Hotel
                </a>
              </div>
            </div>

            {/* Description and Quick Info (remains the same) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-6">
              <div className="lg:col-span-2">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 sm:mb-3 border-b-2 border-indigo-400/50 pb-1">
                  বর্ণনা:
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="lg:col-span-1 p-2 sm:p-4 bg-indigo-50 dark:bg-gray-700 rounded-xl shadow-inner">
                <h2 className="text-sm sm:text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 sm:mb-4">
                  তথ্য
                </h2>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                    📞 {contact_number}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium break-all">
                    ✉️ {email}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                    🟢 Status:{" "}
                    <span
                      className={`font-bold ${
                        is_active
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {is_active ? "Active" : "Inactive"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Section */}
        <div className="mt-4 sm:mt-8">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-4">
            কক্ষসমূহ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            {rooms.length > 0 ? (
              rooms.map((room: any) => <RoomCard key={room.id} room={room} />)
            ) : (
              <div className="text-center py-4 sm:py-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg col-span-full">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  কোনো কক্ষ পাওয়া যায়নি।
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
