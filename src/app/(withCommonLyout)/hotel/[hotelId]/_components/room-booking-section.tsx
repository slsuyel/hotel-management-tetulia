"use client"

import { Button } from "@/components/ui/button"
import { Hotels } from "@/constants/hotels"

import { Calendar, Users, Star } from "lucide-react"
import { Card, CardContent } from "./card"


interface RoomBookingSectionProps {
  hotel: Hotels
}

export function RoomBookingSection({ hotel }: RoomBookingSectionProps) {
  const handleBookNow = () => {
    // Navigate to booking flow
    window.location.href = `/hotels/booking?bookingId=${hotel.id}`
  }

  return (
    <div className="sticky top-6">
      <Card className="shadow-lg">
        <CardContent className="p-6">
          {/* Price Section */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-xl font-bold text-gray-900">${hotel.price}</span>
              <span className="text-gray-500">per night</span>
            </div>
            {hotel.discount && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-through">
                  ${Math.round(hotel.price / (1 - hotel.discount / 100))}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                  {hotel.discount}% OFF
                </span>
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div className="space-y-4 mb-6">
            {/* Check-in/Check-out */}
            <div className="grid grid-cols-2 gap-2">
              <div className="border border-border-color rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">CHECK-IN</div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">Feb 25</span>
                </div>
              </div>
              <div className="border border-border-color rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">CHECK-OUT</div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">Feb 27</span>
                </div>
              </div>
            </div>

            {/* Guests */}
            <div className="border border-border-color rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">GUESTS</div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm">2 Adults, 1 Child</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < hotel.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {hotel.rating} ({hotel.reviews} reviews)
            </span>
          </div>

          {/* Book Button */}
          <Button
            onClick={handleBookNow}
            className="w-full bg-primary hover:bg-secondary hover:text-white text-white py-3 text-lg font-semibold"
          >
            Book Now
          </Button>

          {/* Additional Info */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">Free cancellation until 24 hours before check-in</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
