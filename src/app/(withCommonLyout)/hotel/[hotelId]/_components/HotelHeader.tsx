import { Star, MapPin, Share, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HotelHeader = () => {
  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Jol Torongo
              </h1>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">
                  4-Star Hotel
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                Laboni Beach, Cox's Bazar - Cox's Bazar
              </span>
              <button className="text-ocean hover:text-ocean-dark text-sm font-medium">
                View Map
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Share className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-right mb-2">
              <div className="text-3xl font-bold text-foreground">$47</div>
              <div className="text-sm text-muted-foreground">price per night</div>
            </div>
            <Button  size="lg" className="w-full lg:w-auto">
              Choose Your Room
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelHeader;