"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ArrowUp,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Heart,
  History,
  Home,
  Info,
  MapPin,
  Navigation,
  Share2,
  Sparkles,
  Star,
  Ticket,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
interface TTouristPlace {
  id: number;
  category_id: number;
  name: string;
  location: string;
  description: string;
  short_description: string | null;
  history: string;
  architecture: string;
  how_to_go: string;
  where_to_stay: string;
  where_to_eat: string;
  ticket_price: string;
  opening_hours: string;
  best_time_to_visit: string;
  image_url: string;
  gallery: (string | null)[];
  map_link: string;
  main_attractions: string;
  purpose_and_significance: string;
  special_features: string;
}

export default function TouristPlaceDetails({
  touristPlace,
}: {
  touristPlace: TTouristPlace;
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(
    touristPlace?.image_url || "/placeholder.svg"
  );

  const [isFavorite, setIsFavorite] = useState(false);

  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const galleryRef = useRef<HTMLDivElement>(null);

  // Handle scroll for back to top button

  // Gallery navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === touristPlace?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? touristPlace?.gallery?.length - 1 : prev - 1
    );
  };

  // Handle touch swipe for gallery
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextImage();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevImage();
    }
  };

  // Navigation sections
  const sections = [
    { id: "overview", title: "ওভারভিউ", icon: <Info className="h-4 w-4" /> },
    { id: "history", title: "ইতিহাস", icon: <History className="h-4 w-4" /> },
    { id: "gallery", title: "গ্যালারি", icon: <Camera className="h-4 w-4" /> },
    { id: "travel", title: "ভ্রমণ", icon: <Navigation className="h-4 w-4" /> },
    { id: "info", title: "তথ্য", icon: <Ticket className="h-4 w-4" /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={imgSrc}
          alt={touristPlace?.name || "Tourist Place"}
          fill
          className="object-cover"
          priority
          onError={() => setImgSrc("/placeholder.svg")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {touristPlace?.name}
          </h1>
          <div className="flex items-center text-white mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <p className="text-sm md:text-base">{touristPlace?.location}</p>
          </div>
        </div>

        {/* Back button and actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-black/30 backdrop-blur-sm border-none text-white hover:bg-black/50"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-black/30 backdrop-blur-sm border-none text-white hover:bg-black/50"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart
                className={`h-5 w-5 ${
                  isFavorite ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full hidden bg-black/30 backdrop-blur-sm border-none text-white hover:bg-black/50"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="rounded-t-xl hidden">
                <div className="py-4">
                  <h3 className="text-lg font-bold mb-4">শেয়ার করুন</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {["Facebook", "Twitter", "WhatsApp", "Email"].map(
                      (platform) => (
                        <Button
                          key={platform}
                          variant="outline"
                          className="flex flex-col items-center h-auto py-3"
                        >
                          <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center mb-2">
                            <Share2 className="h-5 w-5" />
                          </div>
                          <span className="text-xs">{platform}</span>
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-10 bg-background border-b">
        <ScrollArea className="w-full">
          <div className="flex px-2 py-3 w-max">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                className="flex items-center gap-1.5 px-3"
                onClick={() => scrollToSection(section.id)}
              >
                {section.icon}
                <span>{section.title}</span>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6  text-justify">
        {/* Overview Section */}
        <section id="overview" className="mb-8">
          <Card className="border-none shadow-sm p-2 md:p-3 rounded-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <span>সংক্ষিপ্ত বিবরণ</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted leading-relaxed">
                <span
                  dangerouslySetInnerHTML={{
                    __html: touristPlace?.description,
                  }}
                />
              </p>

              {touristPlace?.description?.length > 150 && (
                <Button
                  variant="link"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="p-0 h-auto mt-2 text-primary"
                >
                  {showFullDescription ? "সংক্ষিপ্ত দেখুন" : "আরও পড়ুন"}
                </Button>
              )}
              {touristPlace?.main_attractions && (
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>মূল আকর্ষণসমূহ</span>
                  </h4>
                  <p className="text-sm rich-content leading-relaxed">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: touristPlace?.main_attractions,
                      }}
                    />
                  </p>
                </div>
              )}
              {touristPlace?.special_features && (
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>বিশেষ বৈশিষ্ট্য</span>
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: touristPlace?.special_features,
                      }}
                    />
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* History Section */}
        <section id="history" className="mb-8">
          <Card className="border-none shadow-sm p-2 md:p-3 rounded-md">
            <CardHeader className="pb-2"></CardHeader>
            <CardContent>
              {/* ইতিহাস */}
              {touristPlace?.history && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-1">ইতিহাস</h3>
                  <p
                    className="text-muted leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: touristPlace.history }}
                  />
                </div>
              )}

              {/* স্থাপত্য */}
              {touristPlace?.architecture && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-1">স্থাপত্য</h3>
                  <p
                    className="text-muted leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: touristPlace.architecture,
                    }}
                  />
                </div>
              )}

              {/* লক্ষ্য ও উদ্দেশ্য */}
              {touristPlace?.purpose_and_significance && (
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    লক্ষ্য ও উদ্দেশ্য
                  </h3>
                  <div
                    className="leading-relaxed rich-content"
                    dangerouslySetInnerHTML={{
                      __html: touristPlace.purpose_and_significance,
                    }}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Camera className="h-5 w-5 text-primary" />
            <span>ফটো গ্যালারি</span>
          </h2>

          <div
            ref={galleryRef}
            className="relative w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden mb-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={
                touristPlace?.gallery[currentImageIndex]
                  ? touristPlace?.gallery[currentImageIndex]
                  : "/main-image.jpg"
              }
              alt={`${touristPlace?.name} - ছবি `}
              fill
              className="object-cover transition-opacity duration-300"
            />

            <Button
              size="icon"
              variant="secondary"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur-sm border-none text-white hover:bg-black/50 h-8 w-8 md:h-10 md:w-10"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </Button>

            <Button
              size="icon"
              variant="secondary"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur-sm border-none text-white hover:bg-black/50 h-8 w-8 md:h-10 md:w-10"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </Button>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {touristPlace?.gallery?.map((_, index) => (
                <button
                  key={index}
                  className={`h-1.5 rounded-full ${
                    currentImageIndex === index
                      ? "w-4 bg-white"
                      : "w-1.5 bg-white/50"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {touristPlace?.gallery?.map((image, index) => (
              <button
                key={index}
                className={`relative h-16 rounded-md overflow-hidden ${
                  currentImageIndex === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Travel Information Section */}
        <section id="travel" className="mb-8">
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <Navigation className="h-5 w-5 text-primary" />
                <span>ভ্রমণ তথ্য</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3 p-4 bg-primary/15 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Navigation className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 ">কিভাবে যাবেন</h3>
                    <p className="text-sm  leading-relaxed text-primary">
                      {touristPlace?.how_to_go}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/15 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Home className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">কোথায় থাকবেন</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {touristPlace?.where_to_stay}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/15 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Coffee className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">কোথায় খাবেন</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {touristPlace?.where_to_eat}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visitor Information Section */}
        <section id="info" className="mb-8">
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <Ticket className="h-5 w-5 text-primary" />
                <span>দর্শনার্থীদের তথ্য</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-3 bg-primary/15 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Ticket className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">টিকেট মূল্য</h3>
                    <p className="text-sm text-muted">
                      {touristPlace?.ticket_price}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-primary/15 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">খোলার সময়</h3>
                    <p className="text-sm text-muted">
                      {touristPlace?.opening_hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-primary/15 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">ভ্রমণের সেরা সময়</h3>
                    <p className="text-sm text-muted">
                      {touristPlace?.best_time_to_visit}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Map Section */}
        <section className="mb-8">
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>অবস্থান</span>
              </CardTitle>
              <CardDescription>মানচিত্রে দেখুন</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="aspect-video relative rounded-md overflow-hidden bg-primary/15 w-full place_location"
                dangerouslySetInnerHTML={{ __html: touristPlace?.map_link }}
              ></div>

              {/* <Button variant="outline" className="w-full mt-4" asChild>
                <a href={touristPlace?.map_link} target="_blank" rel="noopener noreferrer">
                  গুগল ম্যাপে দেখুন
                </a>
              </Button> */}
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          size="icon"
          variant="secondary"
          className="fixed bottom-20 right-4 md:bottom-8 md:right-8 rounded-full bg-primary text-primary-foreground shadow-lg z-50"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
