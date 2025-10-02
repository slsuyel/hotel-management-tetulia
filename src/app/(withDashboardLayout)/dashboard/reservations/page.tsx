"use client";

import { useAllBookingRoomAdminQuery } from "@/components/Redux/RTK/bookingApi";
import { HotelLoader } from "@/components/ui/loadingUi";
import { useState } from "react";

const ReservationsPage = () => {
  const [page, setPage] = useState(1);
  const limit = 5; // number of bookings per page

  const { data, isLoading } = useAllBookingRoomAdminQuery({ page, limit });

  if (isLoading) {
    return <HotelLoader />;
  }

  const bookings = data?.data?.data || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Reservations
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <th className="py-2 px-4">Booking ID</th>
              <th className="py-2 px-4">Hotel</th>
              <th className="py-2 px-4">User</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Room</th>
              <th className="py-2 px-4">Check-in</th>
              <th className="py-2 px-4">Check-out</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b: any) => (
              <tr
                key={b.booking_id}
                className="text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700"
              >
                <td className="py-2 px-4">{b.booking_id}</td>
                <td className="py-2 px-4">{b.hotel_name}</td>
                <td className="py-2 px-4">{b.user_name}</td>
                <td className="py-2 px-4">{b.user_phone}</td>
                <td className="py-2 px-4">
                  {b.room_number} ({b.room_type})
                </td>
                <td className="py-2 px-4">{b.check_in}</td>
                <td className="py-2 px-4">{b.check_out}</td>
                <td className="py-2 px-4">{b.total_amount}</td>
                <td className="py-2 px-4">{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-3">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="px-4 py-2">{page}</span>
        <button
          disabled={bookings.length < limit}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReservationsPage;
