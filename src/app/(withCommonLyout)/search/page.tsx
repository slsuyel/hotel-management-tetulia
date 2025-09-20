"use client";

import { SearchHeader } from "@/components/Common/SearchHeader";
import { useSearchHotelsQuery } from "@/components/Redux/RTK/hotelApi";
import { HotelLoader } from "@/components/ui/loadingUi";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchFilters } from "./_components/search-filters";
import { HotelResults } from "./_components/search-result";

export interface TRoom {
  id: number;
  hotel_id: string;
  room_number: string;
  room_type: string;
  price_per_night: string;
  capacity: string;
  description: string;
  image: string;
  availability: boolean;
  rooms_available: number;
  created_at: string;
  updated_at: string;
}

export interface THotel {
  id: number;
  name: string;
  location: string;
  description: string;
  contact_number: string;
  email: string;
  is_active: boolean;
  rooms_available: number;
  rooms: TRoom[];
}

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    checkIn: "",
    checkOut: "",
    roomType: "",
    numberOfRooms: "",
    priceRange: [50, 300] as [number, number],
    amenities: [] as string[],
  });

  useEffect(() => {
    const checkIn = searchParams.get("checkIn") || "";
    const checkOut = searchParams.get("checkOut") || "";
    const roomType = searchParams.get("roomType") || "";
    const numberOfRooms = searchParams.get("numberOfRooms") || "";

    const priceMin = searchParams.get("priceMin");
    const priceMax = searchParams.get("priceMax");
    const priceRange: [number, number] = [
      priceMin ? parseInt(priceMin) : 50,
      priceMax ? parseInt(priceMax) : 300,
    ];

    const amenitiesParam = searchParams.get("amenities");
    const amenities = amenitiesParam ? amenitiesParam.split(",") : [];

    setFilters({
      checkIn,
      checkOut,
      roomType,
      numberOfRooms,
      priceRange,
      amenities,
    });
  }, [searchParams]);

  const updateUrlWithFilters = (newFilters: Partial<typeof filters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    const params = new URLSearchParams();

    if (updatedFilters.checkIn) params.set("checkIn", updatedFilters.checkIn);
    if (updatedFilters.checkOut)
      params.set("checkOut", updatedFilters.checkOut);
    if (updatedFilters.roomType)
      params.set("roomType", updatedFilters.roomType);
    if (updatedFilters.numberOfRooms)
      params.set("numberOfRooms", updatedFilters.numberOfRooms);

    params.set("priceMin", updatedFilters.priceRange[0].toString());
    params.set("priceMax", updatedFilters.priceRange[1].toString());

    if (updatedFilters.amenities.length > 0) {
      params.set("amenities", updatedFilters.amenities.join(","));
    }

    router.push(`/search?${params.toString()}`);
  };

  const handleSearchHeaderChange = (headerFilters: {
    checkIn: string;
    checkOut: string;
    roomType: string;
    numberOfRooms: string;
  }) => {
    updateUrlWithFilters(headerFilters);
  };

  const handleFilterChange = (filterChanges: {
    priceRange?: [number, number];
    amenities?: string[];
  }) => {
    updateUrlWithFilters(filterChanges);
  };

  const { data, error, isLoading, isFetching } = useSearchHotelsQuery({
    check_in_date: filters.checkIn,
    check_out_date: filters.checkOut,
    room_type: filters.roomType,
    rooms_count: parseInt(filters.numberOfRooms) || 1,
  });

  const allHotels: THotel[] = data?.data || [];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-6 space-y-6">
        <SearchHeader
          initialValues={{
            checkIn: filters.checkIn,
            checkOut: filters.checkOut,
            roomType: filters.roomType,
            numberOfRooms: filters.numberOfRooms,
          }}
          onSearch={handleSearchHeaderChange}
        />

        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-80 flex-shrink-0">
            <SearchFilters
              priceRange={filters.priceRange}
              selectedAmenities={filters.amenities}
              onFiltersChange={handleFilterChange}
            />
          </aside>
          <div className="flex-1">
            {isLoading || isFetching ? (
              <HotelLoader />
            ) : error ? (
              <p>Error loading hotels.</p>
            ) : (
              <HotelResults hotels={allHotels} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
