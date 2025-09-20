import { Hotel } from "lucide-react";

export function HotelLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20 text-center space-y-4">
      {/* Spinner with icon */}
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-t-primary border-gray-300 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Hotel className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Message */}
      <div className="text-lg font-medium text-muted-foreground">
        Searching for hotels...
      </div>
    </div>
  );
}
