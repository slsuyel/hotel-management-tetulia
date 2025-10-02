"use client";

import { useGetAllHotelsQuery } from "@/components/Redux/RTK/hotelApi";
import { Button } from "@/components/ui/button";
import { HotelLoader } from "@/components/ui/loadingUi";
import { Edit, Hotel, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface THotel {
  id: number;
  username: string;
  name: string;
  description: string;
  location: string;
  contact_number: string;
  email: string;
  image: string | null;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  rooms: any[];
  manager: null;
}

export default function HotelListPage() {
  const { data, isLoading } = useGetAllHotelsQuery(undefined);
  const router = useRouter();
  const handleDelete = (id: any) => {
    if (!confirm("Are you sure you want to delete this hotel?")) return;
    // Implement delete logic here (e.g., a RTK mutation)
  };

  if (isLoading) {
    return <HotelLoader />;
  }

  const allHotels: THotel[] = data?.data || [];

  return (
    <div className=" container mx-auto ">
      <div className="flex justify-between items-center mb-10">
        <h1 className=" text-xl mt-4 lg:text-2xl font-extrabold text-gray-900 tracking-tight">
          Manage Hotels
        </h1>
        <Button
          onClick={() => router.push("/dashboard/hotels/create-hotel")}
          className="flex items-center space-x-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span className="font-medium">Create New Hotel</span>
        </Button>
      </div>

      {allHotels.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No hotels found. Add your first hotel to get started.
          </p>
        </div>
      )}

      <div className="grid gap-3 lg:gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-100 flex flex-col"
          >
            {/* Image Placeholder */}
            <div className="relative h-48 w-full">
              {hotel.image ? (
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              ) : (
                <div className="bg-gray-200 flex items-center justify-center h-full rounded-t-xl">
                  <span className="text-gray-500 text-sm">
                    Image not available
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  {hotel.name}
                </h2>
                <p className="text-gray-500 mb-4 line-clamp-3">
                  {hotel.description}
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong className="font-semibold">Location:</strong>{" "}
                    {hotel.location}
                  </p>
                  <p>
                    <strong className="font-semibold">Contact:</strong>{" "}
                    {hotel.contact_number}
                  </p>
                  <p>
                    <strong className="font-semibold">Email:</strong>{" "}
                    {hotel.email}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    hotel.is_active
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {hotel.is_active ? "Active" : "Inactive"}
                </span>
                <div className="flex space-x-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() =>
                      router.push(
                        `/dashboard/reservations/${
                          hotel.id
                        }?hotelName=${encodeURIComponent(hotel.name)}`
                      )
                    }
                    className="text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    <Hotel className="h-5 w-5" />
                  </Button>

                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() =>
                      router.push(`/dashboard/hotels/edit/${hotel.id}`)
                    }
                    className="text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    <Edit className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleDelete(hotel.id)}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
