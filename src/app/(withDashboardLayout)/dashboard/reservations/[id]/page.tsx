"use client";

import { useGetHotelBookingQuery } from "@/components/Redux/RTK/bookingApi";
import { HotelLoader } from "@/components/ui/loadingUi";
import { useParams } from "next/navigation";
import { useState } from "react";

const ReservationsPage = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetHotelBookingQuery({ id, page });

  if (isLoading) {
    return <HotelLoader />;
  }

  const bookings = data?.data?.data || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-10">
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
        Reservations for Hotel ID: {id}
      </h1>

      {bookings.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-300">
          No reservations found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-left text-sm uppercase font-semibold">
                <th className="py-3 px-4">Booking ID</th>
                <th className="py-3 px-4">Guest Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Room</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Check-In</th>
                <th className="py-3 px-4">Check-Out</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking: any) => (
                <tr
                  key={booking.booking_id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-3 px-4">{booking.booking_id}</td>
                  <td className="py-3 px-4">{booking.user_name}</td>
                  <td className="py-3 px-4">{booking.user_email}</td>
                  <td className="py-3 px-4">{booking.user_phone}</td>
                  <td className="py-3 px-4">{booking.room_number}</td>
                  <td className="py-3 px-4">{booking.room_type}</td>
                  <td className="py-3 px-4">{booking.check_in}</td>
                  <td className="py-3 px-4">{booking.check_out}</td>
                  <td className="py-3 px-4">৳ {booking.total_amount}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        booking.status === "confirmed"
                          ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-white"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReservationsPage;
