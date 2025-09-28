"use client";
import {
  useBookingRoomMutation,
  useGetHotelDetailsQuery,
} from "@/components/Redux/RTK/hotelApi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  CreditCard,
  Hotel,
  Loader2,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

// ... (Interface definitions remain the same) ...
interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  special_requests: string;
  status: "confirmed" | "pending";
}
export interface THotel {
  id: number;
  name: string;
  description: string;
  location: string;
  contact_number: string;
  email: string;
  manager_id: null;
  is_active: boolean;
  image: string;
}

export default function BookingPage() {
  const [bookingRoom, { isLoading: isBooking }] = useBookingRoomMutation();
  const searchParams = useSearchParams();
  const params = useParams();

  const room_id = params.id as string;
  const hotel_id = searchParams.get("hotel_id");
  const check_in_date = searchParams.get("check_in_date");
  const check_out_date = searchParams.get("check_out_date");

  // Fetch hotel details
  const {
    data: hotelData,
    isLoading: isFetchingHotel,
    error: hotelError,
  } = useGetHotelDetailsQuery(
    {
      hotel_id,
      check_in_date,
      check_out_date,
    },
    {
      skip: !hotel_id,
    }
  );

  const hotel: THotel | undefined = hotelData?.data;

  // State for form fields
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    special_requests: "",
    status: "confirmed",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!room_id || !check_in_date || !check_out_date || !hotel_id) {
      toast.error(
        "Booking information is incomplete. Please go back and try again."
      );
      return;
    }

    const bookingData = {
      ...formData,
      room_id: Number(room_id),
      hotel_id: Number(hotel_id),
      check_in_date,
      check_out_date,
    };

    try {
      // Assuming successful unwrap indicates booking initiation
      const res = await bookingRoom({ bookingData }).unwrap();

      if (res?.status_code === 201 || res?.success || !res?.isError) {
        toast.success(
          "Booking successful! A confirmation email has been sent. 🎉"
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          special_requests: "",
          status: "confirmed",
        });
      } else {
        const errorMessage =
          res?.error?.errMsg ||
          res?.Message ||
          "Booking failed due to a server error.";
        toast.error(errorMessage);
      }
    } catch (error: any) {
      console.error("Booking failed:", error);
      const apiErrorMsg =
        error?.data?.Message ||
        error?.data?.error ||
        "Booking failed. Please check your network and try again.";
      toast.error(apiErrorMsg);
    }
  };

  // --- Loading/Error States ---
  const LoadingOrErrorState = ({
    message,
    isError = false,
  }: {
    message: string;
    isError?: boolean;
  }) => (
    <div
      className={`min-h-[80vh] flex items-center justify-center ${
        isError ? "bg-red-50" : "bg-white"
      }`}
    >
      <div className="text-center p-8">
        {isError ? (
          <div className="text-red-600">
            <CreditCard className="w-10 h-10 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{message}</h2>
            <p className="text-sm text-gray-500">
              Please verify your URL parameters.
            </p>
          </div>
        ) : (
          <div className="text-blue-600">
            <Loader2 className="w-10 h-10 mx-auto mb-4 animate-spin" />
            <h2 className="text-xl font-semibold">{message}</h2>
          </div>
        )}
      </div>
    </div>
  );

  if (isFetchingHotel) {
    return <LoadingOrErrorState message="Fetching hotel details..." />;
  }

  if (hotelError || !hotel) {
    return (
      <LoadingOrErrorState
        message="Could not find hotel details."
        isError={true}
      />
    );
  }

  // --- Main Booking UI ---
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className=" text-xl md:text-3xl 2xl:text-4xl font-extrabold text-gray-900 my-3 lg:my-4 text-center">
          বুকিং কনফার্ম করুন
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- Booking Form (2/3 width on large screens) --- */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg border-t-4 border-blue-500 p-1 md:p-2">
              <CardHeader className=" p-2 md:p-4">
                <CardTitle className="flex items-center text-xl xl:text-2xl text-gray-800">
                  <User className="w-6 h-6 mr-3 text-blue-500" />
                  Guests Information (অতিথির তথ্য)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-1 md:p-4">
                <form
                  onSubmit={handleSubmit}
                  className=" space-y-3 lg:space-y-6"
                >
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6">
                    <div className=" space-y-1 lg:space-y-2">
                      <Label htmlFor="name">সম্পূর্ণ নাম</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className=" space-y-1 lg:space-y-2">
                      <Label htmlFor="email">ইমেইল ঠিকানা</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone and Special Requests */}
                  <div className="space-y-4">
                    <div className=" space-y-1 lg:space-y-2">
                      <Label htmlFor="phone">ফোন নম্বর</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="e.g., +1 555-123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className=" space-y-1 lg:space-y-2">
                      <Label htmlFor="special_requests">
                        বিশেষ অনুরোধ (ঐচ্ছিক)
                      </Label>
                      <Textarea
                        id="special_requests"
                        placeholder="e.g., High floor, non-smoking, extra towels."
                        value={formData.special_requests}
                        onChange={handleChange}
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg py-4 sm:py-6 mt-6 transition-transform hover:scale-[1.01] shadow-xl"
                    disabled={isBooking}
                  >
                    {isBooking ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                        <span className="text-sm sm:text-base">
                          প্রসেসিং রিজার্ভেশন...
                        </span>
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="text-sm sm:text-base">
                          রিজার্ভেশন কনফার্ম করুন
                        </span>
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs lg:text-sm text-gray-500 mt-4">
                    By proceeding, you agree to the hotel's cancellation policy
                    and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* --- Booking Summary & Hotel Info (1/3 width) --- */}
          <div className="lg:col-span-1 space-y-3 lg:space-y-6 lg:sticky lg:top-10">
            {/* Reservation Summary Card */}
            <Card className="bg-blue-50/70 border-blue-200 shadow-md p-1 md:p-2">
              <CardHeader className="border-b  p-2 md:p-4">
                <CardTitle className="flex items-center  text-blue-700 text-xl xl:text-2xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  আপনার থাকার বিবরণ
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-2 lg:space-y-3 text-gray-700 p-2 md:p-4">
                <div className="flex justify-between">
                  <span className="font-medium">চেক-ইন:</span>
                  <span className="font-semibold">{check_in_date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">চেক-আউট:</span>
                  <span className="font-semibold">{check_out_date}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-base lg:text-lg font-bold text-gray-900">
                  <span>রুম আইডি:</span>
                  <span>#{room_id}</span>
                </div>
              </CardContent>
            </Card>

            {/* Hotel Details Card */}
            <Card className="shadow-lg p-1 md:p-2">
              <CardHeader className=" p-2 md:p-4">
                <CardTitle className="flex items-center text-xl xl:text-2xl text-gray-800">
                  <Hotel className="w-5 h-5 mr-2" />
                  {hotel.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="  p-2 md:p-4">
                <div className="h-32 bg-gray-100 rounded-lg overflow-hidden mb-4">
                  {hotel.image ? (
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
                      {hotel.name}
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {hotel.description}
                </p>

                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                    {hotel.location}
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-green-500" />
                    {hotel.contact_number}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
