"use client";

import { THotel } from "../page";
import RoomCard from "./room-card";
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
interface RoomSectionProps {
  hotel: THotel;
  check_in_date: string | null;
  check_out_date: string | null;
}

export function RoomSection({
  hotel,
  check_in_date,
  check_out_date,
}: RoomSectionProps) {
  const rooms = hotel.rooms ?? [];

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Available Rooms</h2>
        <p className="text-muted-foreground text-sm">
          {rooms.length} room{rooms.length !== 1 && "s"} found
        </p>
      </div>

      <div className="grid gap-3  lg:grid-cols-2">
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            hotel={hotel}
            check_in_date={check_in_date}
            check_out_date={check_out_date}
          />
        ))}
      </div>
    </section>
  );
}
