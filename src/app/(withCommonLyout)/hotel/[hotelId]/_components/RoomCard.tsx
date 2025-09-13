import { Wifi, Car, Coffee, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RoomCardProps {
  title: string;
  sleeps: string;
  size: string;
  bedType: string;
  amenities: string[];
  price?: string;
}

const RoomCard = ({ title, sleeps, size, bedType, amenities, price }: RoomCardProps) => {
  const amenityIcons = {
    "Breakfast Included": Coffee,
    "Free Parking": Car,
    "Free WiFi": Wifi,
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img
          src={`https://s1.pclncdn.com/design-assets/sopq/img-sopq-room-3-2.jpg?dpr=2&format=jpg&opto&auto=avif,webp&width=350&crop=3:2`}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-md px-2 py-1">
          <span className="text-xs font-medium">1 / 1</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-card-foreground mb-1">
            {title}
          </h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <div>{sleeps} • {size}</div>
            <div>{bedType}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.map((amenity) => {
            const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
            return (
              <Badge key={amenity} variant="secondary" className="text-xs flex items-center gap-1">
                {Icon && <Icon className="w-3 h-3" />}
                <Check className="w-3 h-3 text-success" />
                {amenity}
              </Badge>
            );
          })}
        </div>

        <div className="flex items-center justify-between">
          {price && (
            <div className="text-right">
              <div className="text-lg font-bold text-foreground">{price}</div>
              <div className="text-xs text-muted-foreground">per night</div>
            </div>
          )}
          <Button  size="sm" className="ml-auto">
            Select Room
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;