"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BedIcon, CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react";

interface SearchHeaderProps {
  initialValues: {
    checkIn: string;
    checkOut: string;
    roomType: string;
    numberOfRooms: string;
  };
  onSearch: (filters: {
    checkIn: string;
    checkOut: string;
    roomType: string;
    numberOfRooms: string;
  }) => void;
}

export function SearchHeader({ initialValues, onSearch }: SearchHeaderProps) {
  const [checkIn, setCheckIn] = useState(initialValues.checkIn);
  const [checkOut, setCheckOut] = useState(initialValues.checkOut);
  const [roomType, setRoomType] = useState(initialValues.roomType);
  const [numberOfRooms, setNumberOfRooms] = useState(
    initialValues.numberOfRooms
  );

  useEffect(() => {
    setCheckIn(initialValues.checkIn);
    setCheckOut(initialValues.checkOut);
    setRoomType(initialValues.roomType);
    setNumberOfRooms(initialValues.numberOfRooms);
  }, [initialValues]);

  const handleSearch = () => {
    onSearch({
      checkIn,
      checkOut,
      roomType,
      numberOfRooms,
    });
  };

  return (
    <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-2xl p-4 sm:p-6 lg:p-8 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
        {/* Check In */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-primary" />
            চেক ইন
          </label>
          <Input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full h-12 text-base"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        {/* Check Out */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-primary" />
            চেক আউট
          </label>
          <Input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full h-12 text-base"
            min={checkIn || new Date().toISOString().split("T")[0]}
          />
        </div>

        {/* Room Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
            <BedIcon className="w-4 h-4 text-primary" />
            রুমের ধরন
          </label>
          <Select value={roomType} onValueChange={setRoomType}>
            <SelectTrigger className="w-full h-12 text-base">
              <SelectValue placeholder="রুম নির্বাচন করুন" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">স্ট্যান্ডার্ড রুম</SelectItem>
              <SelectItem value="deluxe">ডিলাক্স রুম</SelectItem>
              <SelectItem value="suite">সুইট রুম</SelectItem>
              <SelectItem value="family">फ্যামিলি রুম</SelectItem>
              <SelectItem value="presidential">
                প্রেসিডেন্সিয়াল স্যুট
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Number of Rooms */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground flex items-center gap-2">
            <UsersIcon className="w-4 h-4 text-primary" />
            কক্ষের সংখ্যা
          </label>
          <Select value={numberOfRooms} onValueChange={setNumberOfRooms}>
            <SelectTrigger className="w-full h-12 text-base">
              <SelectValue placeholder="কক্ষ নির্বাচন করুন" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 কক্ষ</SelectItem>
              <SelectItem value="2">2 কক্ষ</SelectItem>
              <SelectItem value="3">3 কক্ষ</SelectItem>
              <SelectItem value="4">4 কক্ষ</SelectItem>
              <SelectItem value="5+">5+ কক্ষ</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button
            onClick={handleSearch}
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl"
            size="lg"
          >
            <MapPinIcon className="w-5 h-5 mr-2" />
            অনুসন্ধান করুন
          </Button>
        </div>
      </div>
    </Card>
  );
}
