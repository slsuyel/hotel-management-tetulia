"use client";

import { SearchHeader } from "@/components/Common/SearchHeader";

export function HeroSection() {
  // Empty handler for the homepage (redirects to search page with filters)
  const handleSearch = (filters: {
    checkIn: string;
    checkOut: string;
    roomType: string;
    numberOfRooms: string;
  }) => {
    // This will redirect to the search page with the selected filters
    const params = new URLSearchParams();

    if (filters.checkIn) params.set("checkIn", filters.checkIn);
    if (filters.checkOut) params.set("checkOut", filters.checkOut);
    if (filters.roomType) params.set("roomType", filters.roomType);
    if (filters.numberOfRooms)
      params.set("numberOfRooms", filters.numberOfRooms);

    window.location.href = `/search?${params.toString()}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/main-image.jpg"
          alt="Scenic agricultural landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            {"আবাসিক হোটেলসমূহে অবস্থানের জন্য রুম খুঁজুন"}
          </h1>
        </div>

        {/* Booking Form */}
        <SearchHeader
          initialValues={{
            checkIn: "",
            checkOut: "",
            roomType: "",
            numberOfRooms: "",
          }}
          onSearch={handleSearch}
        />

        {/* Additional Features */}
        <div className="mt-8 lg:mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm">সেরা দাম গ্যারান্টি</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm">২৪/৭ কাস্টমার সাপোর্ট</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
