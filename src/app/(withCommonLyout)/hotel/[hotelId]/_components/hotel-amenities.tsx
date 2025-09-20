"use client"

import { Wifi, Car, Utensils, Dumbbell, Waves, Coffee, Shield, Plane, Users, Accessibility } from "lucide-react"

interface HotelAmenitiesProps {
  amenities: string[]
  features?: any
}

export function HotelAmenities({ amenities, features }: HotelAmenitiesProps) {
  const amenityIcons: { [key: string]: any } = {
    WiFi: Wifi,
    "Free WiFi": Wifi,
    Parking: Car,
    "Free Parking": Car,
    Restaurant: Utensils,
    Gym: Dumbbell,
    Pool: Waves,
    Breakfast: Coffee,
    "Airport Shuttle": Plane,
    "Business Center": Users,
    Spa: Shield,
    Accessibility: Accessibility,
  }

  const getAmenityIcon = (amenity: string) => {
    const IconComponent = amenityIcons[amenity] || Shield
    return <IconComponent className="h-5 w-5 text-primary" />
  }

  const amenityList = [
    { name: "Outdoor pool", icon: Waves },
    { name: "Buffet breakfast available", icon: Coffee },
    { name: "Free Wifi", icon: Wifi },
    { name: "Self-parking included", icon: Car },
    { name: "24-hour airport shuttle available", icon: Plane },
    { name: "Pool view restaurant", icon: Utensils },
    { name: "Non-smoking rooms", icon: Shield },
    { name: "Facilities for disabled guests", icon: Accessibility },
    { name: "Fitness center", icon: Dumbbell },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">About this property</h2>
      <p className="text-gray-600 mb-6">Luxury hotel with 2 restaurants connected to a shopping center in Bangkok</p>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {amenityList.map((amenity, index) => (
          <div key={index} className="flex items-center gap-3">
            <amenity.icon className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm text-gray-700">{amenity.name}</span>
          </div>
        ))}
      </div>

      {/* WIP Access Badge */}
      <div className="mt-6">
        <span className="inline-block bg-primary text-white px-3 py-1 rounded text-sm font-medium">WIP Access</span>
      </div>
    </div>
  )
}
