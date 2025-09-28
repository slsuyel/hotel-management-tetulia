"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { THotel } from "../page";
import { Card, CardContent } from "./card";

interface RoomBookingSectionProps {
  hotel: THotel;
  check_in_date: string | null;
  check_out_date: string | null;
}

export function RoomBookingSection({
  hotel,
  check_in_date,
  check_out_date,
}: RoomBookingSectionProps) {
  const router = useRouter();
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

  const availableRooms = hotel.rooms.filter((room) => room.availability);

  const handleBooking = () => {
    if (!selectedRoomId) return;

    const bookingUrl = `/hotel/booking/${selectedRoomId}?hotel_id=${hotel.id}&check_in_date=${check_in_date}&check_out_date=${check_out_date}`;
    router.push(bookingUrl);
  };

  return (
    <div className="sticky top-6">
      <Card className="shadow-md p-2 xl:p-2">
        <CardContent className="p-2 xl:p-2 space-y-3 lg:space-y-5">
          {/* Price Label (optional) */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Select Room & Fare
            </h3>
          </div>

          {/* Room & Fare Dropdown */}
          <div className="w-full">
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSelectedRoomId(Number(e.target.value))}
              defaultValue=""
            >
              <option value="" disabled>
                -- Choose a room --
              </option>
              {availableRooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.room_type} (Room #{room.room_number}) — $
                  {room.price_per_night}/night
                </option>
              ))}
            </select>
            {availableRooms.length === 0 && (
              <p className="text-xs text-red-500 mt-2">
                No rooms available for booking
              </p>
            )}
          </div>

          {/* Date Display */}
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-border-color rounded-sm lg:rounded-lg p-1 lg:p-3">
              <div className="text-xs text-gray-500 mb-1">CHECK-IN</div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm">
                  {check_in_date || "Select date"}
                </span>
              </div>
            </div>
            <div className="border border-border-color rounded-sm lg:rounded-lg p-1 lg:p-3">
              <div className="text-xs text-gray-500 mb-1">CHECK-OUT</div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm">
                  {check_out_date || "Select date"}
                </span>
              </div>
            </div>
          </div>

          {/* Book Button */}
          <Button
            className="w-full bg-primary hover:bg-secondary hover:text-white text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleBooking}
            disabled={!selectedRoomId || !check_in_date || !check_out_date}
          >
            Book Now
          </Button>

          {/* Cancellation Policy */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Free cancellation until 24 hours before check-in
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
