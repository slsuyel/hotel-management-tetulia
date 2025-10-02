"use client";

import { useGetHotelBookingQuery } from "@/components/Redux/RTK/bookingApi";
import { HotelLoader } from "@/components/ui/loadingUi";
import { format } from "date-fns"; // Assuming you have date-fns installed
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

// Helper component for colored status badges
const StatusBadge = ({ status }: { status: string }) => {
  let colorClass = "";
  const lowerStatus = status.toLowerCase();

  switch (lowerStatus) {
    case "confirmed":
      colorClass =
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      break;
    case "pending":
    case "processing":
      colorClass =
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      break;
    case "cancelled":
    case "rejected":
      colorClass = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      break;
    default:
      colorClass =
        "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      break;
  }
  return (
    <span
      className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium capitalize ${colorClass} whitespace-nowrap`}
    >
      {status}
    </span>
  );
};

const ReservationsPageHotel = () => {
  const searchParams = useSearchParams();
  const hotelName = searchParams.get("hotelName") || "Unknown Hotel";
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const limit = 10; // Assuming a default limit of 10 bookings per page

  // Adjusting the query to include limit for consistent pagination logic
  const { data, isLoading } = useGetHotelBookingQuery({ id, page, limit });

  if (isLoading) {
    return <HotelLoader />;
  }

  const bookings = data?.data?.data || [];
  // Assuming the API returns meta information for total count
  const totalCount = data?.data?.meta?.total || 0;
  const totalPages = Math.ceil(totalCount / limit);

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM d"); // Shorter format for table column
    } catch (e) {
      return dateString;
    }
  };

  // Use a string template for the currency symbol if the API only returns a number.
  const formatCurrency = (amount: number) => `৳ ${amount}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-10">
      <header className="mb-8 border-b border-indigo-200 dark:border-indigo-800 pb-4">
        <p className="text-xl font-medium text-indigo-600 dark:text-indigo-400 mt-1">
          {hotelName}
        </p>
      </header>

      {bookings.length === 0 && !isLoading ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <p className="text-xl font-medium text-gray-500 dark:text-gray-300">
            No reservations found for this hotel yet.
          </p>
        </div>
      ) : (
        <div className="shadow-xl overflow-hidden rounded-xl ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6">
                    Guest
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6 hidden lg:table-cell">
                    Contact
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6 hidden sm:table-cell">
                    Room
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6 hidden md:table-cell">
                    Dates
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {bookings.map((booking: any) => (
                  <tr
                    key={booking.booking_id}
                    className="text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium sm:px-6">
                      {booking.booking_id}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {booking.user_name}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 sm:px-6 hidden lg:table-cell">
                      {booking.user_phone}
                      <div className="text-xs text-gray-400 dark:text-gray-500 truncate max-w-[150px]">
                        {booking.user_email}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap sm:px-6 hidden sm:table-cell">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Room: **{booking.room_number}**
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Type: {booking.room_type}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 sm:px-6 hidden md:table-cell">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        In: {formatDate(booking.check_in)}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Out: {formatDate(booking.check_out)}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900 dark:text-gray-100 sm:px-6">
                      {formatCurrency(booking.total_amount)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center text-sm font-medium sm:px-6">
                      <StatusBadge status={booking.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      {bookings.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-0">
            Showing{" "}
            <span className="font-medium">{(page - 1) * limit + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(page * limit, totalCount)}
            </span>{" "}
            of <span className="font-medium">{totalCount}</span> reservations
          </div>

          <div className="flex gap-2">
            {/* Previous Button */}
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              className="px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
            >
              &larr; Previous
            </button>

            {/* Page Indicator */}
            <div className="flex items-center justify-center text-sm font-medium text-gray-900 dark:text-gray-100 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
              Page **{page}** / **{totalPages}**
            </div>

            {/* Next Button */}
            <button
              disabled={page >= totalPages || bookings.length < limit}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationsPageHotel;
