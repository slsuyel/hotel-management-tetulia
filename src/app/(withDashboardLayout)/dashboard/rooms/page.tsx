"use client";
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

import { useGetRoomsQuery } from "@/components/Redux/RTK/hotelApi"; // Adjust if needed
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

export default function AllRoomsPage() {
  const router = useRouter();
  const { data, isLoading, isError } = useGetRoomsQuery(undefined);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className=" container mx-auto">
        {/* Header and Add Button */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">All Rooms</h1>
          <Button onClick={() => router.push("/dashboard/rooms/create")}>
            + Add Room
          </Button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, idx) => (
              <Card key={idx} className="p-4 space-y-3">
                <Skeleton className="h-32 w-full rounded-md" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-8 w-full" />
              </Card>
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-red-500">
            Failed to load rooms. Try again later.
          </div>
        )}

        {/* Data Display */}
        {!isLoading && data?.data?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.data.map((room: TRoom) => (
              <Card key={room.id} className="p-4 space-y-3 shadow-md">
                <img
                  src={room.image || "/no-image.png"}
                  alt={room.room_type}
                  className="h-40 w-full object-cover rounded"
                />

                <div>
                  <h2 className="text-lg font-bold">
                    {room.room_type} — #{room.room_number}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {room.price_per_night} / night · Capacity: {room.capacity}
                  </p>
                  <p className="text-sm">
                    {room.availability ? (
                      <span className="text-green-600 font-medium">
                        Available
                      </span>
                    ) : (
                      <span className="text-red-500 font-medium">
                        Unavailable
                      </span>
                    )}
                  </p>
                </div>

                <p className="text-sm text-gray-600">{room.description}</p>

                {/* Actions */}
                <div className="flex justify-between gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      router.push(`/dashboard/rooms/edit/${room.id}`)
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => console.log(`Delete room ${room.id}`)}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* No Data */}
        {!isLoading && data?.data?.length === 0 && (
          <p className="text-center text-gray-500">No rooms available.</p>
        )}
      </div>
    </div>
  );
}
