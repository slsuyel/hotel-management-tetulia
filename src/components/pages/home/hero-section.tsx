"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, UsersIcon, BedIcon } from "lucide-react"

export function HeroSection() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [roomType, setRoomType] = useState("")
  const [numberOfRooms, setNumberOfRooms] = useState("")

  const handleSearch = () => {
    console.log("Searching with:", { checkIn, checkOut, roomType, numberOfRooms })
    // Handle search logic here
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.tbsnews.net/sites/default/files/styles/very_big_1/public/images/2021/02/24/panchagarh_is_the_only_place_where_you_can_see_the_himalaya_from_bangladesh._photo_firoz_al_sabah.jpg"
          alt="Scenic agricultural landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl  font-bold text-white mb-4 text-balance">
            {"আবাসিক হোটেলসমূহে অবস্থানের জন্য রুম খুঁজুন"}
          </h1>
        </div>

        {/* Booking Form */}
        <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-2xl p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
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
                placeholder="চেক ইন তারিখ"
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
                placeholder="চেক আউট তারিখ"
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
                  <SelectItem value="family">ফ্যামিলি রুম</SelectItem>
                  <SelectItem value="presidential">প্রেসিডেন্সিয়াল স্যুট</SelectItem>
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

          {/* Mobile Search Button - Full Width on Small Screens */}
          <div className="lg:hidden mt-4">
            <Button
              onClick={handleSearch}
              className="w-full h-12 text-base font-semibold bg-primary hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl"
              size="lg"
            >
              <MapPinIcon className="w-5 h-5 mr-2" />
              হোটেল অনুসন্ধান করুন
            </Button>
          </div>
        </Card>

        {/* Additional Features */}
        <div className="mt-8 lg:mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm">ফ্রি ক্যান্সেলেশন</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm">সেরা দাম গ্যারান্টি</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm">২৪/৭ কাস্টমার সাপোর্ট</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
