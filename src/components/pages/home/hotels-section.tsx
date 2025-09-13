"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export interface Hotel {
  id: string
  name: string
  address: string
  mobile: string
  thumbnail: string // Add thumbnail image URL
}

export default function Hotels() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hotels, setHotels] = useState<Hotel[]>([
    {
      id: "central-guest-house",
      name: "সেন্ট্রাল গেস্ট হাউস (প্রাঃ) লিমিটেড",
      address: "সেন্ট্রাল প্লাজা, সিনেমা হল রোড, পঞ্চগড় বাজার, পঞ্চগড়",
      mobile: "০১৭০৫-৮৫৮৫৮৮-৯",
      thumbnail: "/hotel1.jpg", // Add thumbnail image URL
    },
    {
      id: "ab-square",
      name: "এবি স্কয়ার আবাসিক",
      address: "তেতুনিয়া রোড, পঞ্চগড়",
      mobile: "০১৩১৮-১৭১২২৬/০১৩১৮-১৭১২৫৪",
      thumbnail: "/hotel2.jpg", // Add thumbnail image URL
    },
    {
      id: "hotel-agrodut-palace",
      name: "হোটেল অগ্রদূত প্যালেস",
      address: "কদমতলা রোড, পঞ্চগড়",
      mobile: "০১৩০৯-২১৮-১৯০",
      thumbnail: "/hotel3.jpg", // Add thumbnail image URL
    },
    {
      id: "hotel-pritam",
      name: "হোটেল প্রিতম (আবাসিক)",
      address: "সিনেমা রোড, পঞ্চগড়",
      mobile: "০১৭৮৪-৯৪০৫০০",
      thumbnail: "/hotel4.jpg", // Add thumbnail image URL
    },
    {
      id: "hotel-m-anam",
      name: "হোটেল এস আলম",
      address: "এইচকে রোড, পঞ্চগড়",
      mobile: "০১৮২৩-৩৮৬১৬৫",
      thumbnail: "/hotel5.jpg", // Add thumbnail image URL
    },
    {
      id: "hotel-islam",
      name: "হোটেল ইসলাম (আবাসিক)",
      address: "ইসলাম প্লাজা, পঞ্চগড়",
      mobile: "০১৭২১-০১২৬২৫/০১৩৭২-৭২৩২৮১",
      thumbnail: "/hotel6.jpg", // Add thumbnail image URL
    },
    {
      id: "hotel-hk-palace",
      name: "হোটেল এইচ.কে. প্যালেস",
      address: "এইচ.কে. প্লাজা, পঞ্চগড়",
      mobile: "০১৭৫২-২৪৩০৪৮",
      thumbnail: "/hotel7.jpg", // Add thumbnail image URL
    },
    {
      id: "hotel-dhanshiri",
      name: "হোটেল ধানসিঁড়ি ইন্টারন্যাশনাল",
      address: "রৌশনাবাগ, পঞ্চগড়",
      mobile: "০১৭০১-৫১০৩৫৩",
      thumbnail: "/hotel8.jpg", // Add thumbnail image URL
    },
  ])

  // Filter hotels based on active category (can be extended later for more categories)
  const filteredHotels = activeCategory === "all" ? hotels : hotels.filter((hotel) => hotel.id === activeCategory)

  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">আবাসিক হোটেলসমূহ</h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${activeCategory === "all" ? "bg-emerald-600 text-white" : "text-gray-600 hover:bg-white hover:shadow-sm"}`}
          >
            সকল হোটেল
          </button>
          {/* Add additional categories if needed */}
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
          {filteredHotels.map((hotel) => (
            <Link
              href={`/hotel/${hotel.id}`}
              key={hotel.id}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                {/* Thumbnail image added here */}
                <Image
                  src={ "/placeholder.svg"} // Replace with the correct image URL
                  alt={hotel.name}
                  fill
                 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-2 sm:p-3 text-center">
                <h3 className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-emerald-600 transition-colors line-clamp-1">
                  {hotel.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1 line-clamp-1 text-center">{hotel.address}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-1 text-center">{hotel.mobile}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Show message if no hotels found */}
        {filteredHotels.length === 0 && (
          <div className="text-center py-6 sm:py-10">
            <p className="text-gray-500">এই বিভাগে কোন হোটেল পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </section>
  )
}
