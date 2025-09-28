"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BedDouble, Heart, MapPin, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { THotel } from "../page";

export function HotelResults({ hotels, check_in_date, check_out_date }: any) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (hotelId: string) => {
    setFavorites((prev) =>
      prev.includes(hotelId)
        ? prev.filter((id) => id !== hotelId)
        : [...prev, hotelId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Found {hotels?.length} hotel{hotels.length !== 1 ? "s" : ""}
        </h2>
        <p className="text-muted-foreground">All prices are in USD</p>
      </div>

      <div className="grid gap-6">
        {hotels?.map((hotel: THotel) => {
          const price = hotel.rooms.length
            ? Math.min(
                ...hotel.rooms.map((room) => parseFloat(room.price_per_night))
              )
            : "N/A";

          const hotelImage = hotel.image || "/placeholder.svg";
          const hotelId = hotel.id.toString();

          return (
            <Card
              key={hotel.id}
              className="overflow-hidden hover:shadow-md transition-shadow border"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image + Favorite Button */}
                  <div className="relative md:w-80 h-48 md:h-auto">
                    <img
                      src={hotelImage}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/90 hover:bg-white shadow"
                      onClick={() => toggleFavorite(hotelId)}
                    >
                      <Heart
                        className={`h-5 w-5 transition-colors ${
                          favorites.includes(hotelId)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </Button>
                  </div>

                  {/* Details Section */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      {/* Left Section */}
                      <div className="flex-1 space-y-2">
                        {/* Name & Rating */}
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">
                            {hotel.name}
                          </h3>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < 4
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center text-sm text-muted-foreground gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{hotel.location}</span>
                        </div>

                        {/* Review & Availability Info */}
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Star className="h-4 w-4" />
                            <span>4.0 (4 reviews)</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <BedDouble className="h-4 w-4" />
                            <span>{hotel.rooms_available} rooms available</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {hotel.description}
                        </p>
                      </div>

                      {/* Right Section (Pricing + CTAs) */}
                      <div className="text-right space-y-3">
                        {/* Pricing */}
                        <div>
                          <div className="text-sm text-muted-foreground line-through">
                            ${Number(price) + 50}
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            ${price}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            per night
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-2">
                          <Link
                            href={`/hotel/${hotel.id}?check_in_date=${check_in_date}&check_out_date=${check_out_date}`}
                          >
                            <Button
                              variant="outline"
                              className="w-full bg-transparent"
                            >
                              View Details
                            </Button>
                          </Link>
                          <Button className="w-full">Book Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
