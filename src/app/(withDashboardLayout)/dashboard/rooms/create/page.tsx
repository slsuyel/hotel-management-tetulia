"use client";

import { useCreateRoomMutation } from "@/components/Redux/RTK/hotelApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
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
      image: "#",
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
  const router = useRouter();
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
        router.push(`/dashboard/rooms`);
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
      <div className="container mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-6">রুম তৈরি করুন</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {rooms.map((room, index) => (
            <div key={index} className="border rounded p-4 space-y-4">
              <h2 className="font-semibold text-lg">রুম {index + 1}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>রুম নম্বর/নাম</Label>
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
                  <Label>রুমের ধরন</Label>
                  <select
                    value={room.room_type}
                    onChange={(e) =>
                      handleChange(index, "room_type", e.target.value)
                    }
                    className="w-full rounded border p-2"
                    required
                  >
                    <option value="">-- নির্বাচন করুন --</option>
                    <option value="সিঙ্গেল">সিঙ্গেল</option>
                    <option value="ডাবল">ডাবল</option>
                    <option value="কাপল">কাপল</option>
                    <option value="স্ট্যান্ডার্ড">স্ট্যান্ডার্ড</option>
                    <option value="ডিলাক্স">ডিলাক্স</option>
                    <option value="ফ্যামিলি">ফ্যামিলি</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                  </select>
                </div>

                <div>
                  <Label>প্রতি রাতের মূল্য</Label>
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
                  <Label>ধারণক্ষমতা</Label>
                  <Input
                    type="number"
                    value={room.capacity}
                    onChange={(e) =>
                      handleChange(index, "capacity", e.target.value)
                    }
                    required
                  />
                </div>

                <div className=" hidden">
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
                    <option value="true">Active</option>
                    <option value="false">In Active</option>
                  </select>
                </div>

                <div>
                  <Label>ছবি</Label>
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
                <Label>বর্ণনা</Label>
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
                  রুম মুছুন
                </Button>
              )}
            </div>
          ))}

          <div className="flex justify-between items-center">
            <Button type="button" onClick={addRoom} variant="outline">
              + আরেকটি রুম যোগ করুন
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "সাবমিট হচ্ছে..." : "রুম জমা দিন"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
