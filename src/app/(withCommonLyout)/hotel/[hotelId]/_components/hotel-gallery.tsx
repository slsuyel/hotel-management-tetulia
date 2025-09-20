"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
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
interface RoomSectionProps {
  hotel: {
    id: number;
    name: string;
    rooms: TRoom[];
  };
}

export function HotelGallery({ hotel }: RoomSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const placeholderImages = [
    "https://picsum.photos/900",
    "https://picsum.photos/500",
    "https://picsum.photos/700",
    "https://picsum.photos/600",
    "https://picsum.photos/60",
    "https://picsum.photos/1",
  ];

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-6">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {placeholderImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div
                  className="relative aspect-video bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`Hotel image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {placeholderImages.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10" />
              <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10" />
            </>
          )}
        </Carousel>
      </div>

      {/* Dialog with accessible title */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl w-full p-0 bg-black z-50">
          {/* Visually hidden but accessible DialogTitle */}
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          {selectedImage && (
            <div className="relative w-full aspect-video">
              <Image
                src={selectedImage}
                alt="Selected hotel image"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
