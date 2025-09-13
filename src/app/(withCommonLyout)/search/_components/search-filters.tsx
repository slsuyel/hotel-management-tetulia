"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Wifi, Car, Coffee, Waves, Dumbbell } from "lucide-react"

export function SearchFilters() {
  const [priceRange, setPriceRange] = useState([50, 300])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [numberOfRooms, setNumberOfRooms] = useState<string>("1") // State for number of rooms

  const amenities = [
    { id: "wifi", label: "Free Wi-Fi", icon: Wifi },
    { id: "parking", label: "Free Parking", icon: Car },
    { id: "breakfast", label: "Breakfast", icon: Coffee },
    { id: "pool", label: "Swimming Pool", icon: Waves },
    { id: "gym", label: "Fitness Center", icon: Dumbbell },
  ]

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenityId) ? prev.filter((id) => id !== amenityId) : [...prev, amenityId],
    )
  }

  return (
    <div className="space-y-6">
      <Card className=" rounded-md shadow-sm">
        <CardHeader className=" p-2 md:p-4">
          <CardTitle className="text-lg">Sort by</CardTitle>
        </CardHeader>
        <CardContent>
          <Select defaultValue="recommended">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Guest Rating</SelectItem>
              <SelectItem value="distance">Distance</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className=" rounded-md shadow-sm">
        <CardHeader className=" p-2 md:p-4">
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={500} min={0} step={10} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Replaced Star Rating with Number of Rooms */}
      <Card className=" rounded-md shadow-sm">
        <CardHeader className=" p-2 md:p-4">
          <CardTitle className="text-lg">কক্ষের সংখ্যা</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Number of Rooms Select */}
          <Select value={numberOfRooms} onValueChange={setNumberOfRooms}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5+">5+</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className=" rounded-md shadow-sm">
        <CardHeader className=" p-2 md:p-4">
          <CardTitle className="text-lg">Amenities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {amenities.map((amenity) => {
            const Icon = amenity.icon
            return (
              <div key={amenity.id} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity.id}
                  checked={selectedAmenities.includes(amenity.id)}
                  onCheckedChange={() => toggleAmenity(amenity.id)}
                />
                <Label htmlFor={amenity.id} className="flex items-center gap-2 cursor-pointer">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{amenity.label}</span>
                </Label>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {(selectedAmenities.length > 0 || numberOfRooms) && (
        <Card className=" rounded-md shadow-sm">
          <CardHeader className=" p-2 md:p-4">
            <CardTitle className="text-lg">Active Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedAmenities.map((amenityId) => {
                const amenity = amenities.find((a) => a.id === amenityId)
                return amenity ? (
                  <Badge
                    key={amenityId}
                    variant="secondary"
                    className="cursor-pointer text-white"
                    onClick={() => toggleAmenity(amenityId)}
                  >
                    {amenity.label} ×
                  </Badge>
                ) : null
              })}
              {numberOfRooms && (
                <Badge
                  variant="secondary"
                  className="cursor-pointer  text-white"
                  onClick={() => setNumberOfRooms("1")} // Reset rooms selection
                >
                  {`${numberOfRooms} কক্ষ ×`}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
