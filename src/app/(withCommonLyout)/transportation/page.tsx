"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bus, Car, HelpCircle, Plane, Train } from "lucide-react"
import TrainServices from "./_components/train-services"
import CarSection from "./_components/car-section"
import BusService from "./_components/bus-services"
import FlightSection from "./_components/flight-section"


export default function TransportationPage() {
  const [activeTab, setActiveTab] = useState<"train" | "bus" | "flight" | "car">("train")
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-blue-700 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex items-center">
          <Link href="/" className="mr-3">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-center flex-1">পরিবহন সেবা - পঞ্চগড়</h1>
        </div>
      </header>

      {/* Tab Navigation - Responsive */}
      <div className="bg-white shadow-sm sticky top-16 z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:flex md:flex-row">
            <button
              onClick={() => setActiveTab("train")}
              className={`flex items-center justify-center py-3 md:py-4 px-2 md:px-6 font-medium text-sm md:text-lg transition-colors ${
                activeTab === "train" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Train className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
              <span className="md:inline">ট্রেন</span>
            </button>
            <button
              onClick={() => setActiveTab("bus")}
              className={`flex items-center justify-center py-3 md:py-4 px-2 md:px-6 font-medium text-sm md:text-lg transition-colors ${
                activeTab === "bus" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Bus className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
              <span className="md:inline">বাস</span>
            </button>
            <button
              onClick={() => setActiveTab("flight")}
              className={`flex items-center justify-center py-3 md:py-4 px-2 md:px-6 font-medium text-sm md:text-lg transition-colors ${
                activeTab === "flight" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Plane className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
              <span className="md:inline">বিমান</span>
            </button>
            <button
              onClick={() => setActiveTab("car")}
              className={`flex items-center justify-center py-3 md:py-4 px-2 md:px-6 font-medium text-sm md:text-lg transition-colors ${
                activeTab === "car" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Car className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
              <span className="md:inline">গাড়ি</span>
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 ">
        {/* Train Content */}
        {activeTab === "train" && (
          <>
            <TrainServices />
          </>
        )}
        {/* Car Content */}
        {activeTab === "car" && (
          <>
            <CarSection />
          </>
        )}
        {/* Bus Content */}
        {activeTab === "bus" && (
          <>
            <BusService />
          </>
        )}

        {activeTab === "flight" && <FlightSection />}

        {/* Common FAQ Section */}
        <section className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <HelpCircle className="h-5 w-5 text-blue-700 mr-2" />
            <h2 className="text-xl font-bold text-blue-800 border-b pb-2">সাধারণ জিজ্ঞাসা</h2>
          </div>

          <div className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="font-semibold mb-2">পঞ্চগড় থেকে ঢাকা যেতে কোন পরিবহন সবচেয়ে ভালো?</h3>
              <p>
                এটি আপনার পছন্দের উপর নির্ভর করে। ট্রেন সাধারণত বেশি আরামদায়ক এবং নিরাপদ, কিন্তু বাসে আরও বেশি সময়সূচী পাওয়া যায়। ট্রেনে
                যাত্রা করতে চাইলে আগে থেকে টিকিট সংগ্রহ করা উচিত।
              </p>
            </div>

            <div className="border-b pb-3">
              <h3 className="font-semibold mb-2">অগ্রিম টিকিট কত দিন আগে কাটা যায়?</h3>
              <p>
                ট্রেনের টিকিট যাত্রার তারিখের ১০ দিন আগে থেকে কাটা যায়। বাসের ক্ষেত্রে অধিকাংশ কোম্পানি ৭-১০ দিন আগে থেকে অগ্রিম টিকিট
                বিক্রি করে। ঈদ বা বড় ছুটির সময় আরও আগে থেকে টিকিট বিক্রি শুরু হতে পারে।
              </p>
            </div>

            <div className="border-b pb-3">
              <h3 className="font-semibold mb-2">টিকিট কি রিফান্ডেবল?</h3>
              <p>
                ট্রেনের টিকিট যাত্রার ২৪ ঘণ্টা আগে ক্যান্সেল করলে আংশিক রিফান্ড পাওয়া যায়। বাসের ক্ষেত্রে প্রতিটি কোম্পানির রিফান্ড পলিসি আলাদা,
                তবে সাধারণত ২৪ ঘণ্টা আগে ক্যান্সেল করলে আংশিক রিফান্ড দেয়া হয়।
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">পঞ্চগড় থেকে ঢাকা যেতে কত সময় লাগে?</h3>
              <p>
                ট্রেনে সাধারণত ১০-১১ ঘণ্টা সময় লাগে, আর বাসে প্রায় ১২ ঘণ্টা সময় লাগে। তবে ট্রাফিক ও আবহাওয়ার উপর নির্ভর করে এই সময়
                কম-বেশি হতে পারে।
              </p>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  )
}
