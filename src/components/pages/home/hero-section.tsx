"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type SlideType = {
  id: number
  image: string
  title: string
  subtitle: string
}

export default function HeroSection() {
  const slides: SlideType[] = [
    {
      id: 1,
      image: "https://cdn.jugantor.com/assets/news_photos/2023/09/15/image-718224-1694738414.jpg",
      title: "পঞ্চগড়ে আপনাকে স্বাগতম",
      subtitle: "মির্জাপুর শাহী মসজিদ",
    },
    {
      id: 2,
      image: "https://ecdn.dhakatribune.net/contents/cache/images/900x505x1/uploads/dten/2023/04/30/tea-garden-dt.jpeg",
      title: "প্রাকৃতিক সৌন্দর্যের লীলাভূমি",
      subtitle: "পঞ্চগড় চা বাগান",
    },
    {
      id: 3,
      image: "https://www.motorcyclevalley.com/images/places/Banglabandha-Zero-Point-1654670211.jpg",
      title: "সীমান্তের শোভা",
      subtitle: "বাংলাবান্ধা জিরো পয়েন্ট",
    },
    {
      id: 4,
      image: "https://i0.wp.com/adarbepari.com/wp-content/uploads/2016/05/tetulia-Kangchenjunga-03.jpg?fit=830%2C435&ssl=1",
      title: "হিমালয়ের দৃশ্য",
      subtitle: "তেঁতুলিয়া থেকে কাঞ্চনজঙ্ঘা",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Auto slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [currentIndex, isTransitioning, slides.length])

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [currentIndex, isTransitioning, slides.length])

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning || slideIndex === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(slideIndex)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden group">
      <div
        className="w-full h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.subtitle}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text overlay with decorative border */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              <div className="max-w-4xl w-full text-center relative">
                <div className="absolute inset-0 border-2 border-white/20 rounded-lg -m-6 blur-sm"></div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{slide.title}</h1>
                <div className="w-24 h-1 bg-white/70 mx-auto mb-4"></div>
                <h2 className="text-xl md:text-3xl font-medium drop-shadow-lg">{slide.subtitle}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
