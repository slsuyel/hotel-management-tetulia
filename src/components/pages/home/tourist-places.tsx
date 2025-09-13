"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export interface TPlace {
    id: number
    category_id: number
    name: string
    location: string
    description: string
    short_description: null
    history: string
    architecture: string
    how_to_go: string
    where_to_stay: string
    where_to_eat: string
    ticket_price: string
    opening_hours: string
    best_time_to_visit: string
    image_url: string
    gallery: null[]
    map_link: string
    created_at: Date
    updated_at: Date
    category: TCategory
}

export interface TCategory {
    id: number
    name: string
    created_at: Date
    updated_at: Date
}

export default function TouristPlaces() {
    const [pathname, setPathname] = useState("/")
    const [activeCategory, setActiveCategory] = useState("all")
    const [places, setPlaces] = useState<TPlace[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Set pathname after component mounts to avoid window not defined error
    useEffect(() => {
        setPathname(window.location.pathname)
    }, [])

    // Fetch places from API
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await fetch("https://api.panchagarhtourguide.gov.bd/api/tourist-places")
                const data = await response.json()
                setPlaces(data?.data)
            } catch (err) {
                setError("Failed to load data.")
            } finally {
                setIsLoading(false)
            }
        }

        fetchPlaces()
    }, [])

    // Extract unique categories from places
    const categories = [
        { id: "all", name: "সকল", color: "text-emerald-600" },
        ...Array.from(
            new Map(
                places.map((place) => [
                    place.category_id,
                    {
                        id: place.category_id.toString(),
                        name: place.category.name,
                        color: "text-emerald-600",
                    },
                ])
            ).values(),
        ),
    ]

    // Filter places based on active category
    const filteredPlaces =
        activeCategory === "all" ? places : places.filter((place) => place.category_id.toString() === activeCategory)

    // Loading state
    if (isLoading) {
        return (
            <section className="py-8 sm:py-16 bg-gray-50">
                <div className="container mx-auto px-3 sm:px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">দর্শনীয় স্থানসমূহ</h2>
                    <div className="flex justify-center">
                        <div className="animate-pulse text-center">
                            <p className="text-lg text-gray-500">লোড হচ্ছে...</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // Error state
    if (error) {
        return (
            <section className="py-8 sm:py-16 bg-gray-50">
                <div className="container mx-auto px-3 sm:px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">দর্শনীয় স্থানসমূহ</h2>
                    <div className="text-center text-red-500">
                        <p>{error}</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-8 sm:py-16 bg-gray-50">
            <div className="container mx-auto px-3 sm:px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">দর্শনীয় স্থানসমূহ</h2>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${activeCategory === category.id
                                    ? `${category.color} bg-white shadow-md scale-105`
                                    : "text-gray-600 hover:bg-white hover:shadow-sm"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Places Grid - Changed to grid-cols-2 for mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
                    {filteredPlaces.slice(0, 10).map((place) => (
                        <Link
                            href={`/tourist-place/${place.name}`}
                            key={place.id}
                            className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
                        >
                            <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                                <Image
                                    src={place.image_url || "/placeholder.svg?height=300&width=400&query=tourist attraction"}
                                    alt={place.name}
                                    fill
                                    onError={(e) => {
                                        e.currentTarget.src = "/placeholder.svg"
                                    }}
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-2 sm:p-3 text-center">
                                <h3 className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-emerald-600 transition-colors line-clamp-1">
                                    {place.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1 line-clamp-1 text-center">{place.location}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button - Only show on homepage */}
                {pathname === "/" && filteredPlaces.length > 0 && (
                    <div className="text-center mt-6 sm:mt-10">
                        <Link
                            href="/tourist-place"
                            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                        >
                            সকল দর্শনীয় স্থান দেখুন
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                )}

                {/* Show message if no places found */}
                {filteredPlaces.length === 0 && (
                    <div className="text-center py-6 sm:py-10">
                        <p className="text-gray-500">এই বিভাগে কোন দর্শনীয় স্থান পাওয়া যায়নি।</p>
                    </div>
                )}
            </div>
        </section>
    )
}
