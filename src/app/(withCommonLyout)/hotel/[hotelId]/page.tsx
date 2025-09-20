"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { getHotelById } from "@/constants/hotels";

import { HotelAmenities } from "./_components/hotel-amenities";
import { HotelGallery } from "./_components/hotel-gallery";
import { HotelInfo } from "./_components/hotel-info";
import { RoomBookingSection } from "./_components/room-booking-section";


export default function FlightDetailsPage() {
  const searchParams = useSearchParams();
  const hotelId = searchParams.get("hotelId") || "1";
  const hotel = getHotelById(hotelId);

  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "rooms", label: "Room info & Price" },
    { id: "facilities", label: "Facilities" },
    { id: "rules", label: "Rules & Regulations" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 mt-14 py-6">
        {hotel ? (
          <div className="flex flex-col lg:flex-row gap-8 mt-6">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Image Gallery */}
              <HotelGallery images={hotel.images} />

              {/* Navigation Tabs */}
              <div className="bg-white sticky top-15 z-[9999] rounded-lg shadow-sm mt-6">
                <div className="border-b border-gray-200">
                  <nav className="flex overflow-x-auto scrollbar-hide space-x-8 px-6">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 px-1 border-b-2 text-nowrap font-medium text-sm transition-colors ${
                          activeTab === tab.id
                            ? "border-primary text-primary"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Tab Content */}
              <div className="mt-6 space-y-6">
                {activeTab === "overview" && (
                  <>
                    <HotelInfo hotel={hotel} />
                    <HotelAmenities
                      amenities={hotel.amenities}
                      features={hotel.features}
                    />
                  </>
                )}

                {activeTab === "rooms" && (
                  <div>
                    {/* Replace with actual RoomInfo component if available */}
                    <h3 className="text-xl font-semibold mb-4">
                      Room Information & Prices
                    </h3>
                    <p>
                      Details about available room types, features, and pricing
                      go here.
                    </p>
                  </div>
                )}

                {activeTab === "facilities" && (
                  <div>
                    {/* Replace with actual HotelFacilities component if available */}
                    <h3 className="text-xl font-semibold mb-4">Facilities</h3>
                    <p>
                      Information about hotel facilities (e.g., gym, pool,
                      restaurant, etc.).
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:w-1/3">
              <RoomBookingSection hotel={hotel} />
            </div>
          </div>
        ) : (
          <div className="mt-6 text-center text-red-500">Hotel not found.</div>
        )}
      </div>
    </div>
  );
}
