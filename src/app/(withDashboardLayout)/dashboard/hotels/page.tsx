"use client";

import { Button } from "@/components/ui/button";
import { Edit, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const fakeHotels = [
  {
    id: 1,
    name: "Oceanview Retreat",
    location: "Cox's Bazar",
    description:
      "A peaceful seaside resort offering stunning views and modern amenities.",
    contact_number: "01987654321",
    email: "info@oceanviewretreat.fake",
    is_active: true,
    rooms_available: 2,
  },
  {
    id: 2,
    name: "Mountain Lodge",
    location: "Chittagong",
    description:
      "Cozy mountain lodge with breathtaking views and hiking trails.",
    contact_number: "01812345678",
    email: "contact@mountainlodge.fake",
    is_active: false,
    rooms_available: 0,
  },
  // Add more fake hotels if you want
];

export default function HotelListPage() {
  const router = useRouter();
  const [hotels, setHotels] = useState(fakeHotels);

  const handleDelete = (id: any) => {
    if (!confirm("Are you sure you want to delete this hotel?")) return;
    setHotels((prev) => prev.filter((hotel) => hotel.id !== id));
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Hotels</h1>
        <Button
          variant="default"
          onClick={() => router.push("/dashboard/hotels/create-hotel")}
          className="flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Create New Hotel</span>
        </Button>
      </div>

      {hotels.length === 0 && <p>No hotels found. Please add a hotel.</p>}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-1">{hotel.name}</h2>
              <p className="text-gray-600 mb-1">
                <strong>Location:</strong> {hotel.location}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Contact:</strong> {hotel.contact_number}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Email:</strong> {hotel.email}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Rooms Available:</strong> {hotel.rooms_available}
              </p>
              <p
                className={`mb-2 font-semibold ${
                  hotel.is_active ? "text-green-600" : "text-red-600"
                }`}
              >
                {hotel.is_active ? "Active" : "Inactive"}
              </p>
              <p className="text-gray-700 text-sm line-clamp-3">
                {hotel.description}
              </p>
            </div>

            <div className="mt-4 flex space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  router.push(`/dashboard/hotels/edit/${hotel.id}`)
                }
                className="flex items-center space-x-1"
              >
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(hotel.id)}
                className="flex items-center space-x-1"
              >
                <Trash2 className="h-4 w-4" />
                <span>Delete</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
