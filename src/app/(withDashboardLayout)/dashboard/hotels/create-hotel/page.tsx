"use client";

import { useCreateHotelMutation } from "@/components/Redux/RTK/hotelApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MediaLibrary } from "@/components/ui/media-manager";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Eye,
  EyeOff,
  FileText,
  Hotel,
  Image,
  Key,
  Mail,
  MapPin,
  Phone,
  User,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type HotelFormData = {
  name: string;
  description: string;
  location: string;
  contact_number: string;
  email: string;
  image: string;
  username: string;
  password: string;
  is_active: boolean;
};
interface TFile {
  _id: string;
  url: string;
  key: string;
  size: number;
  mimetype: string;
  title: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
export default function CreateHotelPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm<HotelFormData>();

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createHotel, { isLoading }] = useCreateHotelMutation();

  const handleThumbnail = (files: TFile[]) => {
    if (files.length > 0) {
      setValue("image", files[0].url);
    }
  };

  const onSubmit = async (data: HotelFormData) => {
    setError(null);

    try {
      const res = await createHotel(data).unwrap();

      if (res?.status_code === 201) {
        toast.success("Hotel created successfully!", {
          description: `Name: ${res.data.name}, ID: ${res.data.id}`,
        });
        router.push("/dashboard/hotels");
        reset(); // Reset form on success
      } else {
        toast.error("Unexpected response from server", {
          description: res?.Message || "Please try again later.",
        });
      }
    } catch (err: any) {
      toast.error("Failed to create hotel", {
        description:
          err?.data?.Message || err?.message || "An unexpected error occurred.",
      });

      setError("Failed to create hotel");
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <header className="flex flex-col items-center p-6 border-b border-gray-200">
          <Hotel size={48} className="text-indigo-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">
            নতুন হোটেল তৈরি করুন
          </h1>
          <p className="text-gray-500 text-center mt-2">
            একটি নতুন হোটেল যোগ করতে নিচের তথ্যগুলো পূরণ করুন।
          </p>
        </header>
        <div className="p-6 md:p-8">
          {error && (
            <div className="mb-6 rounded-md bg-red-50 p-4" role="alert">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    জমা দেওয়ার সময় ত্রুটি
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hotel Name */}
              <div>
                <Label htmlFor="name" className="flex items-center gap-2">
                  <Hotel size={16} />
                  হোটেলের নাম
                </Label>
                <Input
                  id="name"
                  placeholder="গ্র্যান্ড প্যালেস হোটেল"
                  {...register("name", { required: "হোটেলের নাম আবশ্যক" })}
                  className={cn("mt-1", errors.name && "border-red-500")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Location */}
              <div>
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin size={16} />
                  অবস্থান
                </Label>
                <Input
                  id="location"
                  placeholder="ঢাকা, বাংলাদেশ"
                  {...register("location", {
                    required: "অবস্থান আবশ্যক",
                  })}
                  className={cn("mt-1", errors.location && "border-red-500")}
                  aria-invalid={!!errors.location}
                />
                {errors.location && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              {/* Contact Number */}
              <div>
                <Label
                  htmlFor="contact_number"
                  className="flex items-center gap-2"
                >
                  <Phone size={16} />
                  যোগাযোগ নম্বর
                </Label>
                <Input
                  id="contact_number"
                  placeholder="+৮৮০১২৩৪৫৬৭৮৯০"
                  {...register("contact_number", {
                    required: "যোগাযোগ নম্বর আবশ্যক",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "শুধুমাত্র সংখ্যা অনুমোদিত",
                    },
                  })}
                  className={cn(
                    "mt-1",
                    errors.contact_number && "border-red-500"
                  )}
                  aria-invalid={!!errors.contact_number}
                />
                {errors.contact_number && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.contact_number.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail size={16} />
                  ইমেইল
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="manager@grandpalace.com"
                  {...register("email", {
                    required: "ইমেইল আবশ্যক",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "সঠিক ইমেইল দিন",
                    },
                  })}
                  className={cn("mt-1", errors.email && "border-red-500")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Username */}
              <div>
                <Label htmlFor="username" className="flex items-center gap-2">
                  <User size={16} />
                  ব্যবহারকারীর নাম
                </Label>
                <Input
                  id="username"
                  placeholder="grandpalace"
                  {...register("username", {
                    required: "ব্যবহারকারীর নাম আবশ্যক",
                  })}
                  className={cn("mt-1", errors.username && "border-red-500")}
                  aria-invalid={!!errors.username}
                />
                {errors.username && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Image Upload */}
              <div>
                <Label htmlFor="image" className="flex items-center gap-2">
                  <Image size={16} />
                  <MediaLibrary
                    onSelect={handleThumbnail}
                    multiple={false}
                    maxFiles={1}
                    title="থাম্বনেইল ছবি নির্বাচন করুন"
                  />
                  <input
                    type="hidden"
                    {...register("image", {
                      required: "হোটেলের থাম্বনেইল আবশ্যক",
                    })}
                  />
                </Label>
                {watch("image") && (
                  <div className="relative mt-3 w-full h-40 rounded shadow-md border overflow-hidden">
                    <img
                      src={watch("image")}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setValue("image", "")}
                      className="absolute top-1 right-1 bg-red-500 rounded-full p-1 text-white"
                      aria-label="ছবি মুছুন"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
                {errors.image && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Key size={16} />
                  পাসওয়ার্ড
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="একটি শক্তিশালী পাসওয়ার্ড দিন"
                    {...register("password", {
                      required: "পাসওয়ার্ড আবশ্যক",
                      minLength: {
                        value: 6,
                        message: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে",
                      },
                    })}
                    className={cn(errors.password && "border-red-500 pr-10")}
                    aria-invalid={!!errors.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                    tabIndex={-1}
                    aria-label={
                      showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখান"
                    }
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="col-span-1 md:col-span-2">
              <Label htmlFor="description" className="flex items-center gap-2">
                <FileText size={16} />
                বিবরণ
              </Label>
              <Textarea
                id="description"
                placeholder="শহরের কেন্দ্রে অবস্থিত একটি বিলাসবহুল হোটেল, যেখানে উন্নতমানের সেবা ও চমৎকার দৃশ্য উপভোগ করা যায়।"
                {...register("description")}
                rows={4}
                className="mt-1"
              />
            </div>

            {/* Is Active */}
            <div className="flex items-center">
              <input
                id="is_active"
                type="checkbox"
                {...register("is_active")}
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
              />
              <Label
                htmlFor="is_active"
                className="ml-2 cursor-pointer flex items-center gap-2"
              >
                Active ?
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 text-lg"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  তৈরি হচ্ছে...
                </span>
              ) : (
                "হোটেল তৈরি করুন"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
