"use client";

import { MapPin } from "lucide-react";

export interface THotels {
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

interface HotelInfoProps {
  hotel: THotels;
}

export function HotelInfo({ hotel }: HotelInfoProps) {
  return (
    <div className="bg-white rounded-lg p-2 lg:p-4 shadow-sm mb-3 lg:mb-6">
      {/* Hotel Name and Rating */}
      <div className="mb-4">
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
          {hotel.name}
        </h1>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{hotel.location}</span>
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
      </div>
    </div>
  );
}
