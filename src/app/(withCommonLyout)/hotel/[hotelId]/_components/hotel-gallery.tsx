"use client";

import Image from "next/image";
import { useState } from "react";

interface HotelGalleryProps {
  images: string[];
}

export function HotelGallery({ images }: HotelGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  // const galleryLabels = [
  //   "Bedroom",
  //   "Gym Centre",
  //   "Balcony",
  //   "Pool Area",
  //   "Restaurant",
  //   "Lobby",
  // ];

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-6">
      {/* Main Image */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          src={images[selectedImage] || "/placeholder.svg?height=500&width=800"}
          alt="Hotel main view"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4">
          {/* <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
            {galleryLabels[selectedImage] || "Hotel View"}
          </span> */}
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="bg-black/70 text-white px-3 py-1 rounded text-sm">
            {images.length}+ Photos
          </span>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="p-4">
        <div className="grid grid-cols-4 overflow-x-auto scrollbar-hide  md:grid-cols-6 gap-2">
          {images.slice(0, 6).map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? "border-primary"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Image
                src={image || "/placeholder.svg?height=80&width=120"}
                alt={`Hotel view ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white text-xs font-medium">
                  {/* {galleryLabels[index] || `View ${index + 1}`} */}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
