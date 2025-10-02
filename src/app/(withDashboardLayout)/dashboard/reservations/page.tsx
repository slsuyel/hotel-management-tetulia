"use client";

import { useAppSelector } from "@/components/Redux/hooks";
import { useAllBookingRoomQuery } from "@/components/Redux/RTK/bookingApi";
import { useCurrentUserInfo } from "@/components/Redux/Slice/authSlice";
import { HotelLoader } from "@/components/ui/loadingUi";
import { format } from "date-fns";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  DollarSign,
  Eye,
  Hotel,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";
// Assuming you have these shadcn components:
import { Button } from "@/components/ui/button"; // Button component for actions/pagination
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Type definition for a booking item (kept for clarity)
interface TBooking {
  booking_id: number;
  hotel_id: number;
  hotel_name: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  room_id: number;
  room_number: string;
  room_type: string;
  check_in: string;
  check_out: string;
  total_amount: string;
  status: "pending" | "confirmed" | "cancelled";
}

// Helper component for colored status badges (reused)
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
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${colorClass}`}
    >
      {status}
    </span>
  );
};

// Helper function to format dates (reused)
const formatDate = (dateString: string) => {
  try {
    return format(new Date(dateString), "MMM d, yyyy");
  } catch (e) {
    return dateString; // Return original if formatting fails
  }
};

// --- New Detail Dialog Component ---
const BookingDetailDialog = ({
  booking,
  isAdmin,
}: {
  booking: TBooking;
  isAdmin: boolean;
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="icon" className="h-8 w-8">
        <Eye className="h-4 w-4" />
        <span className="sr-only">View Details</span>
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] md:max-w-[600px] dark:bg-gray-800">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold dark:text-gray-100">
          Booking Details #{booking.booking_id}
        </DialogTitle>
        <DialogDescription className="text-gray-500 dark:text-gray-400">
          Comprehensive view of the reservation.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4 pt-4">
        {/* Status & Hotel */}
        <div className="flex justify-between items-center pb-2 border-b dark:border-gray-700">
          <p className="text-lg font-semibold flex items-center gap-2 dark:text-gray-100">
            <Hotel className="w-5 h-5 text-indigo-500" />
            {booking.hotel_name}
          </p>
          <StatusBadge status={booking.status} />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <DetailItem
            icon={Calendar}
            label="Check-In"
            value={formatDate(booking.check_in)}
          />
          <DetailItem
            icon={Calendar}
            label="Check-Out"
            value={formatDate(booking.check_out)}
          />
        </div>

        {/* Room Info */}
        <DetailItem
          icon={MapPin}
          label="Room Details"
          value={`Room No: ${booking.room_number} (${booking.room_type})`}
        />

        {/* Guest Info (Visible for all, but especially useful for Admin) */}
        <div className="pt-4 border-t dark:border-gray-700">
          <h3 className="text-md font-semibold mb-2 dark:text-gray-100">
            Guest Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DetailItem icon={User} label="Name" value={booking.user_name} />
            <DetailItem icon={Phone} label="Phone" value={booking.user_phone} />
            <div className="md:col-span-2">
              <DetailItem
                icon={Mail}
                label="Email"
                value={booking.user_email}
              />
            </div>
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex justify-between items-center pt-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
          <p className="text-xl font-bold flex items-center gap-2 dark:text-gray-100">
            <DollarSign className="w-6 h-6 text-green-600" /> Total Amount:
          </p>
          <span className="text-3xl font-extrabold text-green-600 dark:text-green-400">
            ${booking.total_amount}
          </span>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

// Helper component for detail items inside the modal
const DetailItem = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-start space-x-3">
    <Icon className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
    <div>
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </p>
      <p className="text-base font-semibold text-gray-900 dark:text-gray-100 break-words">
        {value}
      </p>
    </div>
  </div>
);
// --- End Detail Dialog Component ---

const ReservationsPage = () => {
  const user = useAppSelector(useCurrentUserInfo);
  // Determine if the user is an Admin
  const isAdmin = user?.role === "admin";

  const [page, setPage] = useState(1);
  const limit = 10; // Increased limit for better table viewing

  const { data, isLoading } = useAllBookingRoomQuery({
    page,
    limit,
    isAdmin, // This will ensure the backend filters if not an admin
  });

  if (isLoading) {
    return <HotelLoader />;
  }

  const bookings: TBooking[] = data?.data?.data || [];
  const totalCount = data?.data?.meta?.total || 0;
  const totalPages = Math.ceil(totalCount / limit);

  const isDataEmpty = bookings.length === 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-10">
      <header className="mb-8 lg:mb-10">
        <h1 className=" text-xs md:text-2xl text-gray-900 dark:text-gray-100 border-b-4 border-indigo-500 pb-2">
          {isAdmin ? "All Reservations" : "Your Bookings"}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {isAdmin
            ? `Viewing ${totalCount} reservations. Manage and review all hotel reservations across the platform.`
            : `Viewing ${totalCount} reservations. View the details and status of your past and upcoming stays.`}
        </p>
      </header>

      {/* Main Content Area */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        {isDataEmpty ? (
          <div className="text-center py-20">
            <p className="text-xl font-medium text-gray-500 dark:text-gray-300">
              No reservations found.
            </p>
          </div>
        ) : (
          <>
            {/* Table View */}
            <div className="overflow-x-auto">
              <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <TableHeader className="bg-gray-50 dark:bg-gray-700">
                  <TableRow>
                    <TableHead className="w-[100px] text-gray-600 dark:text-gray-300">
                      ID
                    </TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-300">
                      Hotel/Room
                    </TableHead>
                    {isAdmin && (
                      <TableHead className="text-gray-600 dark:text-gray-300 hidden md:table-cell">
                        Guest
                      </TableHead>
                    )}
                    <TableHead className="text-gray-600 dark:text-gray-300 hidden sm:table-cell">
                      Dates
                    </TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-300 text-right">
                      Amount
                    </TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-300">
                      Status
                    </TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-300 w-[50px] text-right">
                      Details
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {bookings.map((booking) => (
                    <TableRow
                      key={booking.booking_id}
                      className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                    >
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                        #{booking.booking_id}
                      </TableCell>
                      <TableCell>
                        <p className="font-semibold">{booking.hotel_name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {booking.room_type} (No: {booking.room_number})
                        </p>
                      </TableCell>
                      {isAdmin && (
                        <TableCell className="hidden md:table-cell">
                          <p className="font-medium">{booking.user_name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {booking.user_email}
                          </p>
                        </TableCell>
                      )}
                      <TableCell className="hidden sm:table-cell">
                        <p>
                          <span className="font-medium">In:</span>{" "}
                          {formatDate(booking.check_in)}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          <span className="font-medium">Out:</span>{" "}
                          {formatDate(booking.check_out)}
                        </p>
                      </TableCell>
                      <TableCell className="text-right font-bold text-green-600 dark:text-green-400">
                        ${booking.total_amount}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={booking.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        <BookingDetailDialog
                          booking={booking}
                          isAdmin={isAdmin}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t dark:border-gray-700">
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-0">
                Showing{" "}
                <span className="font-medium">{(page - 1) * limit + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(page * limit, totalCount)}
                </span>{" "}
                of <span className="font-medium">{totalCount}</span> results
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>

                <div className="flex items-center justify-center text-sm font-medium text-gray-900 dark:text-gray-100 px-3 py-1">
                  Page **{page}** / **{totalPages}**
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReservationsPage;
