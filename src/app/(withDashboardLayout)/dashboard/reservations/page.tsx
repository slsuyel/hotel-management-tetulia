"use client";

import { useAllBookingRoomAdminQuery } from "@/components/Redux/RTK/bookingApi";
import { HotelLoader } from "@/components/ui/loadingUi";
import { format } from "date-fns";
import { useState } from "react";

// Helper function to render a colored status badge
const StatusBadge = ({ status }: { status: string }) => {
  let colorClass = "";
  switch (status.toLowerCase()) {
    case "confirmed":
      colorClass =
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      break;
    case "pending":
      colorClass =
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      break;
    case "cancelled":
      colorClass = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      break;
    default:
      colorClass =
        "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      break;
  }
  return (
    <span
      className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium capitalize ${colorClass}`}
    >
      {status}
    </span>
  );
};

const ReservationsPage = () => {
  const [page, setPage] = useState(1);
  const limit = 5; // number of bookings per page

  // Assuming data structure has a 'meta' field for total items/pages for proper pagination
  const { data, isLoading } = useAllBookingRoomAdminQuery({ page, limit });

  if (isLoading) {
    return <HotelLoader />;
  }

  // Fallback to empty array if data path is null/undefined
  const bookings = data?.data?.data || [];
  // Assuming total count for better pagination logic
  const totalCount = data?.data?.meta?.total || 0;
  const totalPages = Math.ceil(totalCount / limit);

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM d, yyyy");
    } catch (e) {
      return dateString; // Return original if formatting fails
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-10">
      <header className="mb-6 lg:mb-8 flex justify-between items-center">
        <h1 className=" text-xl lg:text-2xl font-extrabold text-gray-900 dark:text-gray-100 border-b-2 border-indigo-500 pb-1">
          All Reservations
        </h1>
        {/* You could add a search/filter component here */}
      </header>

      {/* Table Container - Improved responsiveness */}
      <div className="shadow-xl overflow-hidden rounded-xl ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                {/* Apply responsive padding and font styling */}
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6 hidden md:table-cell">
                  Hotel
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6">
                  Guest
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6 hidden lg:table-cell">
                  Room
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 sm:px-6 hidden sm:table-cell">
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
              {bookings.length > 0 ? (
                bookings.map((b: any) => (
                  <tr
                    key={b.booking_id}
                    className="hover:bg-indigo-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100 sm:px-6">
                      {b.booking_id}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 sm:px-6 hidden md:table-cell">
                      {b.hotel_name}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {b.user_name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {b.user_phone}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap sm:px-6 hidden lg:table-cell">
                      <div className="text-sm text-gray-900 dark:text-gray-100">
                        Room: **{b.room_number}**
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Type: {b.room_type}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap sm:px-6 hidden sm:table-cell">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        In: {formatDate(b.check_in)}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Out: {formatDate(b.check_out)}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900 dark:text-gray-100 sm:px-6">
                      ${b.total_amount}
                    </td>
                    {/* Status Badge */}
                    <td className="px-4 py-4 whitespace-nowrap text-center text-sm font-medium sm:px-6">
                      <StatusBadge status={b.status} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-10 text-gray-500 dark:text-gray-400"
                  >
                    No reservations found for this page.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination - More robust and centered */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm">
        <div className="text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-0">
          Showing <span className="font-medium">{(page - 1) * limit + 1}</span>{" "}
          to{" "}
          <span className="font-medium">
            {Math.min(page * limit, totalCount)}
          </span>{" "}
          of <span className="font-medium">{totalCount}</span> results
        </div>

        <div className="flex gap-2">
          {/* Previous Button */}
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
          >
            Previous
          </button>

          {/* Page Indicator (Optional: Can be extended to a full page selector) */}
          <div className="flex items-center justify-center text-sm font-medium text-gray-900 dark:text-gray-100 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
            Page **{page}** of **{totalPages}**
          </div>

          {/* Next Button */}
          <button
            disabled={page >= totalPages || bookings.length === 0} // Disable if on last page OR no bookings (might mean end of data)
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;
