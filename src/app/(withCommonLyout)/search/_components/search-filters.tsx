"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Car, Coffee, Dumbbell, Waves, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchFiltersProps {
  priceRange: [number, number];
  selectedAmenities: string[];
  onFiltersChange: (filters: {
    priceRange?: [number, number];
    amenities?: string[];
  }) => void;
}

export function SearchFilters({
  priceRange,
  selectedAmenities,
  onFiltersChange,
}: SearchFiltersProps) {
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);
  const [localAmenities, setLocalAmenities] = useState(selectedAmenities);

  const amenities = [
    { id: "wifi", label: "Free Wi-Fi", icon: Wifi },
    { id: "parking", label: "Free Parking", icon: Car },
    { id: "breakfast", label: "Breakfast", icon: Coffee },
    { id: "pool", label: "Swimming Pool", icon: Waves },
    { id: "gym", label: "Fitness Center", icon: Dumbbell },
  ];

  // Sync local state with props
  useEffect(() => {
    setLocalPriceRange(priceRange);
  }, [priceRange]);

  useEffect(() => {
    setLocalAmenities(selectedAmenities);
  }, [selectedAmenities]);

  const handlePriceRangeChange = (newRange: number[]) => {
    const range = newRange as [number, number];
    setLocalPriceRange(range);
    onFiltersChange({ priceRange: range });
  };

  const toggleAmenity = (amenityId: string) => {
    const newAmenities = localAmenities.includes(amenityId)
      ? localAmenities.filter((id) => id !== amenityId)
      : [...localAmenities, amenityId];

    setLocalAmenities(newAmenities);
    onFiltersChange({ amenities: newAmenities });
  };

  return (
    <div className="space-y-6">
      {/* Price Range Filter */}
      <Card className="rounded-md shadow-sm">
        <CardHeader className="p-2 md:p-4">
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={localPriceRange}
            onValueChange={handlePriceRangeChange}
            max={500}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{localPriceRange[0]}</span>
            <span>{localPriceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Amenities Filter */}
      <Card className="rounded-md shadow-sm">
        <CardHeader className="p-2 md:p-4">
          <CardTitle className="text-lg">Amenities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {amenities.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <div key={amenity.id} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity.id}
                  checked={localAmenities.includes(amenity.id)}
                  onCheckedChange={() => toggleAmenity(amenity.id)}
                />
                <Label
                  htmlFor={amenity.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{amenity.label}</span>
                </Label>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Active Filters */}
      {localAmenities.length > 0 && (
        <Card className="rounded-md shadow-sm">
          <CardHeader className="p-2 md:p-4">
            <CardTitle className="text-lg">Active Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {localAmenities.map((amenityId) => {
                const amenity = amenities.find((a) => a.id === amenityId);
                return amenity ? (
                  <Badge
                    key={amenityId}
                    variant="secondary"
                    className="cursor-pointer text-white"
                    onClick={() => toggleAmenity(amenityId)}
                  >
                    {amenity.label} ×
                  </Badge>
                ) : null;
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
