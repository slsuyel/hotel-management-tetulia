"use client";

import { useGetAllHotelsPublicQuery } from "@/components/Redux/RTK/hotelApi";
import { HotelLoader } from "@/components/ui/loadingUi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  contact_number: string;
  image: string;
  email: string;
  is_active: boolean;
  rooms_available: number;
}

export default function Hotels() {
  const { data, isLoading } = useGetAllHotelsPublicQuery(undefined);

  const [activeCategory, setActiveCategory] = useState("all");

  // Filter hotels based on active category (can be extended later for more categories)

  if (isLoading) {
    <HotelLoader />;
  }

  console.log(data?.data);

  const allHotels: Hotel[] = data?.data || [];

  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
        আবাসিক হোটেল এবং কমিউনিটি হোম স্টে
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-emerald-600 text-white"
                : "text-gray-600 hover:bg-white hover:shadow-sm"
            }`}
          >
            সকল হোটেল
          </button>
          {/* Add additional categories if needed */}
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
          {allHotels.map((hotel) => (
            <Link
              href={`/hotel-details/${hotel.id}`}
              key={hotel.id}
              className="group overflow-hidden rounded-sm lg:rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                {/* Thumbnail image added here */}
                <Image
                  src={hotel.image || "/placeholder.svg"} // Replace with the correct image URL
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-2 sm:p-3 text-center">
                <h3 className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-emerald-600 transition-colors line-clamp-1">
                  {hotel.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1 line-clamp-1 text-center">
                  {hotel.location}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-1 text-center">
                  {hotel.contact_number}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Show message if no hotels found */}
        {allHotels.length === 0 && (
          <div className="text-center py-6 sm:py-10">
            <p className="text-gray-500">এই বিভাগে কোন হোটেল পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </section>
  );
}
