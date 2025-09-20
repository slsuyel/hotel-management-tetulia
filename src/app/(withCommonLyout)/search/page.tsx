"use client";

import { SearchHeader } from "@/components/Common/SearchHeader";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchFilters } from "./_components/search-filters";
import { HotelResults } from "./_components/search-result";

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for all filters
  const [filters, setFilters] = useState({
    checkIn: "",
    checkOut: "",
    roomType: "",
    numberOfRooms: "",
    priceRange: [50, 300] as [number, number],
    amenities: [] as string[],
  });

  // Extract all parameters from URL on mount and when URL changes
  useEffect(() => {
    const checkIn = searchParams.get("checkIn") || "";
    const checkOut = searchParams.get("checkOut") || "";
    const roomType = searchParams.get("roomType") || "";
    const numberOfRooms = searchParams.get("numberOfRooms") || "";

    // Parse price range
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

  // Function to update URL with all filters
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

    // Add price range
    params.set("priceMin", updatedFilters.priceRange[0].toString());
    params.set("priceMax", updatedFilters.priceRange[1].toString());

    // Add amenities
    if (updatedFilters.amenities.length > 0) {
      params.set("amenities", updatedFilters.amenities.join(","));
    }

    router.push(`/search?${params.toString()}`);
  };

  // Handler for search header changes
  const handleSearchHeaderChange = (headerFilters: {
    checkIn: string;
    checkOut: string;
    roomType: string;
    numberOfRooms: string;
  }) => {
    updateUrlWithFilters(headerFilters);
  };

  // Handler for filter changes
  const handleFilterChange = (filterChanges: {
    priceRange?: [number, number];
    amenities?: string[];
  }) => {
    updateUrlWithFilters(filterChanges);
  };

  console.log(filters);

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
            <HotelResults />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
