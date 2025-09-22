"use client";

import { useCreateRoomMutation } from "@/components/Redux/RTK/hotelApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

// Define room type
type Room = {
  room_number: string;
  room_type: string;
  price_per_night: string; // keep as string for input
  capacity: string; // keep as string for input
  description: string;
  availability: boolean;
  image: string;
};

type CreateRoomPayload = {
  rooms: {
    room_number: string;
    room_type: string;
    price_per_night: number;
    capacity: number;
    description: string;
    availability: boolean;
    image: string;
  }[];
};

export default function CreateRoomsPage() {
  const [rooms, setRooms] = useState<Room[]>([
    {
      room_number: "",
      room_type: "",
      price_per_night: "",
      capacity: "",
      description: "",
      availability: true,
      image: "",
    },
  ]);

  const [createRoom, { isLoading }] = useCreateRoomMutation();

  const handleChange = (
    index: number,
    field: keyof Room,
    value: string | boolean
  ) => {
    const updatedRooms = [...rooms];
    updatedRooms[index][field] = value as never;
    setRooms(updatedRooms);
  };

  const addRoom = () => {
    setRooms([
      ...rooms,
      {
        room_number: "",
        room_type: "",
        price_per_night: "",
        capacity: "",
        description: "",
        availability: true,
        image: "",
      },
    ]);
  };

  const removeRoom = (index: number) => {
    setRooms(rooms.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: CreateRoomPayload = {
      rooms: rooms.map((room) => ({
        ...room,
        price_per_night: parseFloat(room.price_per_night),
        capacity: parseInt(room.capacity),
        availability: room.availability,
      })),
    };

    try {
      const response = await createRoom(payload).unwrap();

      if (response?.status_code === 201 && response?.Message) {
        toast.success(response.Message);
      } else {
        toast.warning("Rooms created, but response was unexpected.");
      }

      setRooms([
        {
          room_number: "",
          room_type: "",
          price_per_night: "",
          capacity: "",
          description: "",
          availability: true,
          image: "",
        },
      ]);
    } catch (err: any) {
      const message =
        err?.data?.Message || "Something went wrong while creating rooms.";
      toast.error(message);
      console.error("Create rooms error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-6">Create Rooms</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {rooms.map((room, index) => (
            <div key={index} className="border rounded p-4 space-y-4">
              <h2 className="font-semibold text-lg">Room {index + 1}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Room Number</Label>
                  <Input
                    type="text"
                    value={room.room_number}
                    onChange={(e) =>
                      handleChange(index, "room_number", e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <Label>Room Type</Label>
                  <Input
                    type="text"
                    value={room.room_type}
                    onChange={(e) =>
                      handleChange(index, "room_type", e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <Label>Price Per Night</Label>
                  <Input
                    type="number"
                    value={room.price_per_night}
                    onChange={(e) =>
                      handleChange(index, "price_per_night", e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <Label>Capacity</Label>
                  <Input
                    type="number"
                    value={room.capacity}
                    onChange={(e) =>
                      handleChange(index, "capacity", e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <Label>Availability</Label>
                  <select
                    value={String(room.availability)}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "availability",
                        e.target.value === "true"
                      )
                    }
                    className="w-full rounded border p-2"
                  >
                    <option value="true">Available</option>
                    <option value="false">Not Available</option>
                  </select>
                </div>

                <div>
                  <Label>Image URL</Label>
                  <Input
                    type="text"
                    value={room.image}
                    onChange={(e) =>
                      handleChange(index, "image", e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  value={room.description}
                  onChange={(e) =>
                    handleChange(index, "description", e.target.value)
                  }
                  required
                />
              </div>

              {rooms.length > 1 && (
                <Button
                  type="button"
                  onClick={() => removeRoom(index)}
                  className="bg-red-500 hover:bg-red-600 mt-2"
                >
                  Remove Room
                </Button>
              )}
            </div>
          ))}

          <div className="flex justify-between items-center">
            <Button type="button" onClick={addRoom} variant="outline">
              + Add Another Room
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Rooms"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
