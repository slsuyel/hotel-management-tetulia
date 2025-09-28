"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

import { useGetHotelDetailsQuery } from "@/components/Redux/RTK/hotelApi";
import { HotelLoader } from "@/components/ui/loadingUi";
import { HotelGallery } from "./_components/hotel-gallery";
import { HotelInfo } from "./_components/hotel-info";
import { RoomBookingSection } from "./_components/room-booking-section";
import { RoomSection } from "./_components/RoomSection";
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
  rooms: TRoom[];
}

// Room structure
export interface TRoom {
  id: number;
  room_number: string;
  room_type: string;
  price_per_night: string;
  capacity: string;
  availability: boolean;
  description: string;
  image: string;
}

export default function DetailsPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const hotelId = params.hotelId;
  const check_in_date = searchParams.get("check_in_date");
  const check_out_date = searchParams.get("check_out_date");
  const { data, isLoading } = useGetHotelDetailsQuery({
    hotel_id: hotelId,
    check_in_date,
    check_out_date,
  });
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "rooms", label: "Room info & Price" },
    { id: "facilities", label: "Facilities" },
    // { id: "rules", label: "Rules & Regulations" },
    // { id: "reviews", label: "Reviews" },
  ];
  const hotel: THotel = data?.data;

  if (isLoading) {
    return (
      <div className=" min-h-screen flex items-center justify-center py-12">
        <HotelLoader />;
      </div>
    );
  }

  return (
    <div className="bg-gray-50 ">
      <div className="container mx-auto px-2 md:px-4  py-6 md:py-12">
        {hotel ? (
          <>
            <HotelGallery hotel={hotel} />
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 mt-2 lg:mt-6">
              {/* Main Content */}
              <div className="lg:w-2/3">
                {/* Navigation Tabs */}
                <div className="bg-white sticky top-0 z-10 rounded-lg shadow-sm ">
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
                <div className=" mt-2 lg:mt-5 space-y-3 lg:space-y-6">
                  {activeTab === "overview" && (
                    <>
                      <HotelInfo hotel={hotel} />
                      {/* <HotelAmenities
                        amenities={hotel.amenities}
                        features={hotel.features}
                      /> */}
                    </>
                  )}

                  {activeTab === "rooms" && (
                    <RoomSection
                      hotel={hotel}
                      check_in_date={check_in_date}
                      check_out_date={check_out_date}
                    />
                  )}

                  {activeTab === "facilities" && (
                    <div className=" p-2 rounded-md bg-white">
                      {/* Replace with actual HotelFacilities component if available */}
                      <h3 className=" text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                        Facilities
                      </h3>
                      <p>
                        Information about hotel facilities (e.g., gym, pool,
                        restaurant, etc.).
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:w-1/3 bg-white">
                <RoomBookingSection
                  hotel={hotel}
                  check_in_date={check_in_date}
                  check_out_date={check_out_date}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="mt-6 text-center text-red-500">Hotel not found.</div>
        )}
      </div>
    </div>
  );
}
