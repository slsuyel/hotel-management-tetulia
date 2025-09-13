"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Wifi, Car, Coffee, Waves, Heart } from "lucide-react"
import Link from "next/link"

interface Hotel {
  id: string
  name: string
  image: string
  rating: number
  reviews: number
  location: string
  price: number
  originalPrice?: number
  amenities: string[]
  description: string
  isPopular?: boolean
}

const hotels: Hotel[] = [
  {
    id: "1",
    name: "Grand Ocean Resort",
    image: "/placeholder-tk62b.png",
    rating: 4.8,
    reviews: 1247,
    location: "Cox's Bazar",
    price: 89,
    originalPrice: 120,
    amenities: ["wifi", "parking", "pool", "breakfast"],
    description: "Luxury beachfront resort with stunning ocean views and world-class amenities.",
    isPopular: true,
  },
  {
    id: "2",
    name: "City Center Hotel",
    image: "/placeholder-liuwz.png",
    rating: 4.5,
    reviews: 892,
    location: "Dhaka",
    price: 65,
    amenities: ["wifi", "gym", "breakfast"],
    description: "Modern hotel in the heart of the city with excellent business facilities.",
  },
  {
    id: "3",
    name: "Mountain View Lodge",
    image: "/placeholder-z6uef.png",
    rating: 4.7,
    reviews: 634,
    location: "Bandarban",
    price: 75,
    amenities: ["wifi", "parking", "restaurant"],
    description: "Peaceful mountain retreat with breathtaking views and hiking trails.",
  },
  {
    id: "4",
    name: "Heritage Palace",
    image: "/placeholder-r5xpb.png",
    rating: 4.6,
    reviews: 456,
    location: "Old Dhaka",
    price: 95,
    amenities: ["wifi", "spa", "restaurant", "parking"],
    description: "Historic palace converted into a luxury hotel with traditional architecture.",
  },
]

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  breakfast: Coffee,
  pool: Waves,
  gym: Waves,
  spa: Waves,
  restaurant: Coffee,
}

export function HotelResults() {
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (hotelId: string) => {
    setFavorites((prev) => (prev.includes(hotelId) ? prev.filter((id) => id !== hotelId) : [...prev, hotelId]))
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-balance">Found {hotels.length} hotels </h2>
          <p className="text-muted-foreground">All prices are in USD</p>
        </div>

        <div className="grid gap-6">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-80 h-48 md:h-auto">
                    <img
                      src={"https://www.myboutiquehotel.com/photos/110961/shinola-hotel-detroit-008-90455-600x350.jpg"}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => toggleFavorite(hotel.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${favorites.includes(hotel.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                          }`}
                      />
                    </Button>
                    {hotel.isPopular && <Badge className="absolute top-2 left-2 bg-primary">Best Deal</Badge>}
                  </div>

                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{hotel.name}</h3>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(hotel.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm font-medium">{hotel.rating}</span>
                          <span className="text-sm text-muted-foreground">({hotel.reviews} reviews)</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {hotel.amenities.slice(0, 4).map((amenity) => {
                            const Icon = amenityIcons[amenity as keyof typeof amenityIcons] || Wifi
                            return (
                              <div key={amenity} className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Icon className="h-3 w-3" />
                                <span className="capitalize">{amenity}</span>
                              </div>
                            )
                          })}
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2">{hotel.description}</p>
                      </div>

                      <div className="text-right">
                        <div className="mb-2">
                          {hotel.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${hotel.originalPrice}</span>
                          )}
                          <div className="text-2xl font-bold text-primary">${hotel.price}</div>
                          <span className="text-sm text-muted-foreground">per night</span>
                        </div>

                        <div className="space-y-2">
                          <Link href={`/hotel/123`}>
                            <Button
                              variant="outline"
                              className="w-full bg-transparent"

                            >
                              View Details
                            </Button>
                          </Link>
                          <Button className="w-full">Book Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </>
  )
}
