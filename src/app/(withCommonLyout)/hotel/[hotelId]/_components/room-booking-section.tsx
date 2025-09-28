"use client";

import { Button } from "@/components/ui/button";

import { Calendar } from "lucide-react";
import { Card, CardContent } from "./card";

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
  rooms: Room[];
}

export interface Room {
  id: number;
  room_number: string;
  room_type: string;
  price_per_night: string;
  capacity: string;
  availability: boolean;
  description: string;
  image: string;
}

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
  return (
    <div className="sticky top-6">
      <Card className="shadow-lg">
        <CardContent className=" p-2 md:p-3 xl:p-5">
          {/* Price Section */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-xl font-bold text-gray-900"></span>
              <span className="text-gray-500">Per night</span>
            </div>
          </div>

          {/* Booking Form */}
          <div className="space-y-4 mb-6">
            {/* Check-in/Check-out */}
            <div className="grid grid-cols-2 gap-2">
              <div className="border border-border-color rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">CHECK-IN</div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{check_in_date}</span>
                </div>
              </div>
              <div className="border border-border-color rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">CHECK-OUT</div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{check_out_date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Book Button */}
          <Button className="w-full bg-primary hover:bg-secondary hover:text-white text-white py-3 text-lg font-semibold">
            Book Now
          </Button>

          {/* Additional Info */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Free cancellation until 24 hours before check-in
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
