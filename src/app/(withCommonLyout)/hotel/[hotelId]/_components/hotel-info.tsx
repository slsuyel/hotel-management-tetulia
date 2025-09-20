"use client";

import { MapPin, Star } from "lucide-react";

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
    <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
      {/* Hotel Name and Rating */}
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {hotel.name}
        </h1>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{hotel.location}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < 5 ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="font-semibold">{5}</span>
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed">
          {hotel.name} provides modern accommodations within a 5-minute drive of
          the city center. Located in a prime area, all rooms at this hotel are
          air-conditioned and fitted with a private bathroom. They are equipped
          with a work desk, a TV and a seating area. A mini-bar and safety
          deposit box are included.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The hotel's restaurant offers international cuisine. It also serves a
          daily Continental breakfast. 24-hour room service is available.
          Distance information is calculated using OpenStreetMap.
        </p>
      </div>
    </div>
  );
}
