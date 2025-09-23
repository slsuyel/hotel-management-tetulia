"use client";

import { useAppSelector } from "@/components/Redux/hooks";
import { useMyHotelQuery } from "@/components/Redux/RTK/hotelApi";
import { useCurrentUserInfo } from "@/components/Redux/Slice/authSlice";
import { Mail, MapIcon, Phone } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page: React.FC = () => {
  const router = useRouter();
  const user = useAppSelector(useCurrentUserInfo);

  // Redirect admin users to /dashboard/hotels immediately
  useEffect(() => {
    if (user?.role === "admin") {
      router.replace("/dashboard/hotels");
    }
  }, [user, router]);

  // Only run hotel API query if user is NOT admin
  const { data, isLoading, isError } = useMyHotelQuery(undefined, {
    skip: user?.role === "admin",
  });
  const hotelData = data?.data;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-10">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
        {isLoading ? (
          <div className="flex justify-center items-center p-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-blue-500 border-gray-200"></div>
            <p className="ml-4 text-lg text-blue-500 dark:text-blue-400">
              Loading hotel data...
            </p>
          </div>
        ) : isError ? (
          <div className="flex justify-center items-center p-20">
            <p className="text-xl text-red-500 dark:text-red-400">
              ❌ Failed to load hotel data. Please try again later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Hotel Image Section */}
            <div className="relative h-64 sm:h-80 lg:h-full">
              {hotelData?.image && (
                <Image
                  src={hotelData.image}
                  alt={hotelData.name || "Hotel Image"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl"></div>
              <h1 className="absolute bottom-6 left-6 text-3xl sm:text-4xl font-extrabold text-white">
                {hotelData?.name || "Hotel"}
              </h1>
            </div>

            {/* Hotel Details Section */}
            <div className="p-6 sm:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
                About the Hotel
              </h2>

              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                {hotelData?.description || "No description available."}
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapIcon className="text-blue-500 text-xl mr-3" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Location:
                  </span>
                  <span className="ml-2">
                    {hotelData?.location || "Not specified"}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Phone className="text-blue-500 text-xl mr-3" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Contact:
                  </span>
                  <a
                    href={`tel:${hotelData?.contact_number}`}
                    className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {hotelData?.contact_number || "Not specified"}
                  </a>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="text-blue-500 text-xl mr-3" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Email:
                  </span>
                  <a
                    href={`mailto:${hotelData?.email}`}
                    className="ml-2 text-blue-600 dark:text-blue-400 hover:underline truncate"
                  >
                    {hotelData?.email || "Not specified"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
