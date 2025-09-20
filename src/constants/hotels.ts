export interface Hotels {
  id: string
  name: string
  location: string
  images: string[] // Changed from single image to array of images
  rating: number
  reviews: number
  price: number
  discount?: number
  amenities: string[]
  reviewScore?: number
  reviewText?: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
  currency?: string
  roomTypes?: RoomType[]
  locationDetails?: {
    latitude: number
    longitude: number
    distanceFromCenter: number
    distanceFromAirport: number
  }
  policies?: {
    checkIn: string
    checkOut: string
    cancellation: string
    prepayment: boolean
    petsAllowed: boolean
  }
  features?: {
    freeWifi: boolean
    freeParking: boolean
    pool: boolean
    gym: boolean
    spa: boolean
    restaurant: boolean
    roomService: boolean
    businessCenter: boolean
  }
  propertyType?: string
  tags?: string[]
  deals?: {
    type: string
    discount: number
    description: string
  }
}

export interface RoomType {
  id: string
  name: string
  description: string
  maxOccupancy: number
  bedType: string
  size: number
  pricePerNight: number
  amenities: string[]
  available: boolean
}

export interface BundlePackage {
  id: string
  destination: string
  duration: string
  description: string
  image: string
  price: number
  savings: number
}

export const hotelsData = {
  recommended: [
    {
      id: "1",
      name: "The Manhattan Legacy Hotel",
      location: "New York, USA",
      images: [
        "https://digital.ihg.com/is/image/ihg/intercontinental-dhaka-8304538615-2x1", 
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/American-Automobile-Association-Logo.svg", 
        "https://static.dw.com/image/39858860_401.jpg",
        "https://static.vecteezy.com/system/resources/previews/018/729/441/non_2x/aaa-letter-logo-creative-design-aaa-unique-design-vector.jpg"],
      rating: 5,
      reviews: 1250,
      price: 299,
      discount: 25,
      amenities: ["WiFi", "Parking", "Restaurant", "Gym", "Pool"],
      reviewScore: 7.5,
      reviewText: "Very good",
      address: "123 Broadway",
      city: "New York",
      state: "New York",
      zipCode: "10001",
      country: "USA",
      currency: "USD",
      features: {
        freeWifi: true,
        freeParking: true,
        pool: true,
        gym: true,
        spa: false,
        restaurant: true,
        roomService: true,
        businessCenter: true,
      },
      propertyType: "hotels",
      tags: ["Business Friendly", "Luxury", "City Center"],
      deals: {
        type: "Summer Sale",
        discount: 25,
        description: "Save up to 25% on summer stays",
      },
    },
    {
      id: "2",
      name: "Ocean Breeze Suites",
      location: "Miami, USA",
      images: ["/hotel/hotel-1.avif", "/hotel/hotel-2.avif", "/hotel/hotel-3.avif"],
      rating: 5,
      reviews: 890,
      price: 189,
      discount: 15,
      amenities: ["WiFi", "Restaurant", "Pool", "Beach Access"],
      reviewScore: 9.5,
      reviewText: "Excellent",
      address: "456 Ocean Drive",
      city: "Miami",
      state: "Florida",
      zipCode: "33139",
      country: "USA",
      currency: "USD",
      features: {
        freeWifi: true,
        freeParking: false,
        pool: true,
        gym: true,
        spa: true,
        restaurant: true,
        roomService: true,
        businessCenter: false,
      },
      propertyType: "resort",
      tags: ["Beach Access", "Family Friendly", "Luxury"],
      deals: {
        type: "Best Value",
        discount: 15,
        description: "Best value on the beach",
      },
    },
    {
      id: "3",
      name: "Sunset Grand Los Angeles",
      location: "Los Angeles, USA",
      images: ["/hotel/hotel-4.avif", "/hotel/hotel-5.avif", "/hotel/285020015.avif"],
      rating: 5,
      reviews: 567,
      price: 249,
      discount: 20,
      amenities: ["WiFi", "Parking", "Restaurant", "Spa"],
      reviewScore: 9.5,
      reviewText: "Excellent",
      address: "789 Sunset Blvd",
      city: "Los Angeles",
      state: "California",
      zipCode: "90028",
      country: "USA",
      currency: "USD",
      features: {
        freeWifi: true,
        freeParking: true,
        pool: true,
        gym: true,
        spa: true,
        restaurant: true,
        roomService: true,
        businessCenter: true,
      },
      propertyType: "hotels",
      tags: ["Luxury", "Spa", "City Center"],
    },
    {
      id: "4",
      name: "Lakeshore Skyline Hotel",
      location: "Chicago, USA",
      images: ["/hotel/pexels-ian-panelo-3460597.webp", "/hotel/pexels-heyho-7746071.webp", "/hotel/285020015.avif"],
      rating: 4,
      reviews: 1100,
      price: 159,
      discount: 10,
      amenities: ["WiFi", "Gym", "Restaurant"],
      reviewScore: 5.5,
      reviewText: "Good",
      address: "321 Lake Shore Dr",
      city: "Chicago",
      state: "Illinois",
      zipCode: "60611",
      country: "USA",
      currency: "USD",
      features: {
        freeWifi: true,
        freeParking: false,
        pool: false,
        gym: true,
        spa: false,
        restaurant: true,
        roomService: false,
        businessCenter: true,
      },
      propertyType: "hotels",
      tags: ["Business Friendly", "City Center"],
    },
    {
      id: "5",
      name: "The Charles River Inn",
      location: "Boston, USA",
      images: ["/hotel/3d-rendering-house-model.webp", "/hotel/elegant-hotel-room-with-window.webp", "/hotel/285020015.avif"],
      rating: 4,
      reviews: 780,
      price: 349,
      discount: 30,
      amenities: ["WiFi", "Pool", "Spa", "Restaurant"],
      reviewScore: 7.5,
      reviewText: "Very good",
      address: "654 Charles River Rd",
      city: "Boston",
      state: "Massachusetts",
      zipCode: "02114",
      country: "USA",
      currency: "USD",
      features: {
        freeWifi: true,
        freeParking: true,
        pool: true,
        gym: true,
        spa: true,
        restaurant: true,
        roomService: true,
        businessCenter: true,
      },
      propertyType: "hotels",
      tags: ["Luxury", "Spa", "Historic"],
    },
    {
      id: "6",
      name: "Emerald Bay Suites",
      location: "Seattle, USA",
      images: ["/hotel/bilderboken-rlwE8f8anOc-unsplash.webp", "/hotel/chastity-cortijo-M8iGdeTSOkg-unsplash.webp", "/hotel/285020015.avif"],
      rating: 5,
      reviews: 445,
      price: 199,
      discount: 18,
      amenities: ["WiFi", "Restaurant", "Parking"],
      reviewScore: 9.5,
      reviewText: "Excellent",
      address: "987 Emerald Bay Ave",
      city: "Seattle",
      state: "Washington",
      zipCode: "98101",
      country: "USA",
      currency: "USD",
      features: {
        freeWifi: true,
        freeParking: true,
        pool: false,
        gym: true,
        spa: false,
        restaurant: true,
        roomService: false,
        businessCenter: true,
      },
      propertyType: "hotels",
      tags: ["Business Friendly", "City Center"],
    },
    {
      id: "7",
      name: "Rocky Peaks Hotel & Spa",
      location: "Denver, USA",
      images: ["/hotel/clubhouse-tewksbury-usa.webp", "/hotel/chris-carzoli-VC1Ifrsi9Xo-unsplash.webp", "/hotel/285020015.avif"],
      rating: 5,
      reviews: 623,
      price: 179,
      discount: 22,
      amenities: ["WiFi", "Pool", "Spa", "Golf"],
      reviewScore: 9.5,
      reviewText: "Excellent",
      address: "147 Rocky Peak Dr",
      city: "Denver",
      state: "Colorado",
      zipCode: "80202",
      country: "USA",
      currency: "USD",
      features: {
        freeWifi: true,
        freeParking: true,
        pool: true,
        gym: true,
        spa: true,
        restaurant: true,
        roomService: true,
        businessCenter: false,
      },
      propertyType: "resort",
      tags: ["Spa", "Golf", "Mountain View"],
    },
    {
      id: "8",
      name: "Palm Haven Resort",
      location: "Phoenix, USA",
      images: ["/hotel/george-dagerotip-XKrupBIl764-unsplash.webp", "/hotel/frames-for-your-heart-FqqiAvJejto-unsplash.webp", "/hotel/285020015.avif"],
      rating: 4,
      reviews: 512,
      price: 139,
      discount: 12,
      amenities: ["WiFi", "Restaurant", "River View"],
      reviewScore: 5.5,
      reviewText: "Good",
      address: "258 Palm Haven Blvd",
      city: "Phoenix",
      state: "Arizona",
      zipCode: "85001",
      country: "USA",
      currency: "USD",
      features: {
        freeWifi: true,
        freeParking: true,
        pool: true,
        gym: false,
        spa: false,
        restaurant: true,
        roomService: false,
        businessCenter: false,
      },
      propertyType: "resort",
      tags: ["Family Friendly", "Desert View"],
    },
  ],
  topHotels: [
    {
      id: "9",
      name: "The Royal Kensington",
      location: "London, UK",
      images: ["/hotel/hotel-6.avif", "/hotel/284814794.avif", "/hotel/285020015.avif"],
      rating: 5,
      reviews: 2100,
      price: 450,
      amenities: ["WiFi", "Spa", "Restaurant", "Concierge"],
      reviewScore: 9.2,
      reviewText: "Exceptional",
      address: "123 Kensington High St",
      city: "London",
      country: "UK",
      currency: "GBP",
      features: {
        freeWifi: true,
        freeParking: false,
        pool: false,
        gym: true,
        spa: true,
        restaurant: true,
        roomService: true,
        businessCenter: true,
      },
      propertyType: "hotels",
      tags: ["Luxury", "Historic", "City Center"],
    },
    {
      id: "10",
      name: "Tokyo Bay Garden Inn",
      location: "Tokyo, Japan",
      images: ["/hotel/hotel-7.avif", "/hotel/284814794.avif", "/hotel/285020015.avif"],
      rating: 5,
      reviews: 1800,
      price: 320,
      amenities: ["WiFi", "Restaurant", "City View", "Gym"],
      reviewScore: 9.0,
      reviewText: "Excellent",
      address: "456 Tokyo Bay St",
      city: "Tokyo",
      country: "Japan",
      currency: "JPY",
      features: {
        freeWifi: true,
        freeParking: false,
        pool: false,
        gym: true,
        spa: false,
        restaurant: true,
        roomService: true,
        businessCenter: true,
      },
      propertyType: "hotels",
      tags: ["Business Friendly", "City View", "Modern"],
    },
    {
      id: "11",
      name: "Eiffel Luxe Hotel",
      location: "Paris, France",
      images: ["/hotel/hotel-8.avif", "/hotel/284814794.avif", "/hotel/285020015.avif"],
      rating: 4,
      reviews: 1650,
      price: 380,
      amenities: ["WiFi", "Restaurant", "Tower View", "Spa"],
      reviewScore: 8.6,
      reviewText: "Very good",
      address: "789 Champs-Élysées",
      city: "Paris",
      country: "France",
      currency: "EUR",
      features: {
        freeWifi: true,
        freeParking: false,
        pool: false,
        gym: true,
        spa: true,
        restaurant: true,
        roomService: true,
        businessCenter: true,
      },
      propertyType: "hotels",
      tags: ["Luxury", "Historic", "Tower View"],
    },
    {
      id: "12",
      name: "Harbor View Retreat",
      location: "Sydney, Australia",
      images: ["/hotel/hotel-9.avif", "/hotel/284814794.avif", "/hotel/285020015.avif"],
      rating: 5,
      reviews: 1420,
      price: 290,
      amenities: ["WiFi", "Harbor View", "Restaurant", "Pool"],
      reviewScore: 9.1,
      reviewText: "Excellent",
      address: "321 Harbor Bridge Rd",
      city: "Sydney",
      country: "Australia",
      currency: "AUD",
      features: {
        freeWifi: true,
        freeParking: true,
        pool: true,
        gym: true,
        spa: false,
        restaurant: true,
        roomService: true,
        businessCenter: true,
      },
      propertyType: "hotels",
      tags: ["Harbor View", "Luxury", "City Center"],
    },
    {
      id: "13",
      name: "Marina Pearl Hotel",
      location: "Dubai, UAE",
      images: ["/hotel/hotel-10.avif", "/hotel/284814794.avif", "/hotel/285020015.avif"],
      rating: 5,
      reviews: 1950,
      price: 520,
      amenities: ["WiFi", "Pool", "Spa", "Beach Access", "Luxury"],
      reviewScore: 9.4,
      reviewText: "Exceptional",
      address: "654 Marina Walk",
      city: "Dubai",
      country: "UAE",
      currency: "AED",
      features: {
        freeWifi: true,
        freeParking: true,
        pool: true,
        gym: true,
        spa: true,
        restaurant: true,
        roomService: true,
        businessCenter: true,
      },
      propertyType: "resort",
      tags: ["Luxury", "Beach Access", "Marina View"],
    },
    {
      id: "14",
      name: "Bali Nirvana Resort",
      location: "Bali, Indonesia",
      images: ["/hotel/hotel-11.avif", "/hotel/284814794.avif", "/hotel/285020015.avif"],
      rating: 5,
      reviews: 1100,
      price: 420,
      amenities: ["WiFi", "Pool", "Sea View", "Restaurant"],
      reviewScore: 9.0,
      reviewText: "Excellent",
      address: "987 Sunset Beach Rd",
      city: "Bali",
      country: "Indonesia",
      currency: "IDR",
      features: {
        freeWifi: true,
        freeParking: true,
        pool: true,
        gym: false,
        spa: true,
        restaurant: true,
        roomService: true,
        businessCenter: false,
      },
      propertyType: "resort",
      tags: ["Beach Access", "Spa", "Tropical"],
    },
  ],
}

export const bundlePackages: BundlePackage[] = [
  {
    id: "1",
    destination: "Bali Paradise Package",
    duration: "7 Days, 6 Nights",
    description: "Flight + 5-star resort + meals included",
    image: "/hotel/284814790.avif",
    price: 1299,
    savings: 400,
  },
  {
    id: "2",
    destination: "European Adventure",
    duration: "10 Days, 9 Nights",
    description: "Multi-city tour: Paris, Rome, Barcelona",
    image: "/hotel/284814790.avif",
    price: 2199,
    savings: 650,
  },
  {
    id: "3",
    destination: "Caribbean Cruise",
    duration: "5 Days, 4 Nights",
    description: "All-inclusive cruise + hotel stay",
    image: "/hotel/284814790.avif",
    price: 899,
    savings: 300,
  },
  {
    id: "4",
    destination: "Thailand Explorer",
    duration: "8 Days, 7 Nights",
    description: "Bangkok + Phuket with guided tours",
    image: "/hotel/284814790.avif",
    price: 1599,
    savings: 500,
  },
]

export interface EnhancedHotel {
  id: string
  name: string
  location: string
  image: string
  rating: number
  reviewScore: number
  price: number
  type: "domestic" | "international"
  cityLabel?: string
  height: "tall" | "medium" | "short"
}

export const enhancedHotelsData: EnhancedHotel[] = [
  // Domestic Hotels - USA
  {
    id: "1",
    name: "The Manhattan Legacy Hotel",
    location: "New York, USA",
    image: "/hotel/clubhouse-tewksbury-usa.webp",
    rating: 5,
    reviewScore: 7.5,
    price: 1205,
    type: "domestic",
    height: "tall",
  },
  {
    id: "2",
    name: "Ocean Breeze Suites",
    location: "Miami, USA",
    image: "/packages/pro-2.png",
    rating: 4,
    reviewScore: 8.2,
    price: 890,
    type: "domestic",
    cityLabel: "Ocean Breeze Suites",
    height: "medium",
  },
  {
    id: "3",
    name: "Sunset Grand Los Angeles",
    location: "Los Angeles, USA",
    image: "/hotel/h-10.png",
    rating: 5,
    reviewScore: 9.1,
    price: 1450,
    type: "domestic",
    cityLabel: "Sunset Grand Los Angeles",
    height: "short",
  },
  {
    id: "4",
    name: "Lakeshore Skyline Hotel",
    location: "Chicago, USA",
    image: "/hotel/h-11.png",
    rating: 4,
    reviewScore: 8.7,
    price: 1120,
    type: "domestic",
    cityLabel: "Lakeshore Skyline Hotel",
    height: "tall",
  },
  {
    id: "5",
    name: "The Charles River Inn",
    location: "Boston, USA",
    image: "/hotel/h-1.png",
    rating: 5,
    reviewScore: 9.3,
    price: 980,
    type: "domestic",
    cityLabel: "The Charles River Inn",
    height: "medium",
  },
  {
    id: "6",
    name: "Emerald Bay Suites",
    location: "Seattle, USA",
    image: "/hotel/h-2.png",
    rating: 4,
    reviewScore: 8.5,
    price: 1350,
    type: "domestic",
    cityLabel: "Emerald Bay Suites",
    height: "short",
  },
  {
    id: "7",
    name: "Rocky Peaks Hotel & Spa",
    location: "Denver, USA",
    image: "/hotel/h-3.png",
    rating: 4,
    reviewScore: 8.0,
    price: 750,
    type: "domestic",
    cityLabel: "Rocky Peaks Hotel & Spa",
    height: "medium",
  },
  {
    id: "8",
    name: "Palm Haven Resort",
    location: "Phoenix, USA",
    image: "/hotel/h-12.png",
    rating: 5,
    reviewScore: 9.0,
    price: 1100,
    type: "domestic",
    cityLabel: "Palm Haven Resort",
    height: "tall",
  },
  {
    id: "9",
    name: "Vegas Mirage Palace",
    location: "Las Vegas, USA",
    image: "/hotel/h-13.png",
    rating: 5,
    reviewScore: 8.8,
    price: 1600,
    type: "domestic",
    height: "medium",
  },
  {
    id: "10",
    name: "Orlando Sunscape Inn",
    location: "Orlando, USA",
    image: "/hotel/h-14.png",
    rating: 4,
    reviewScore: 8.4,
    price: 850,
    type: "domestic",
    cityLabel: "Orlando Sunscape Inn",
    height: "short",
  },

  // International Hotels
  {
    id: "11",
    name: "The Royal Kensington",
    location: "London, UK",
    image: "/hotel/h-15.png",
    rating: 5,
    reviewScore: 9.2,
    price: 2100,
    type: "international",
    height: "tall",
  },
  {
    id: "12",
    name: "Tokyo Bay Garden Inn",
    location: "Tokyo, Japan",
    image: "/hotel/h-16.png",
    rating: 5,
    reviewScore: 9.0,
    price: 1800,
    type: "international",
    height: "medium",
  },
  {
    id: "13",
    name: "Eiffel Luxe Hotel",
    location: "Paris, France",
    image: "/hotel/h-1.png",
    rating: 4,
    reviewScore: 8.6,
    price: 1650,
    type: "international",
    height: "short",
  },
  {
    id: "14",
    name: "Harbor View Retreat",
    location: "Sydney, Australia",
    image: "/hotel/h-2.png",
    rating: 5,
    reviewScore: 9.1,
    price: 1420,
    type: "international",
    height: "tall",
  },
  {
    id: "15",
    name: "Marina Pearl Hotel",
    location: "Dubai, UAE",
    image: "/hotel/h-13.png",
    rating: 5,
    reviewScore: 9.4,
    price: 2200,
    type: "international",
    height: "medium",
  },
  {
    id: "16",
    name: "Roma Heritage Inn",
    location: "Rome, Italy",
    image: "/hotel/h-10.png",
    rating: 4,
    reviewScore: 8.3,
    price: 1350,
    type: "international",
    height: "short",
  },
  {
    id: "17",
    name: "Mediterranean Sands Resort",
    location: "Barcelona, Spain",
    image: "/hotel/h-15.png",
    rating: 4,
    reviewScore: 8.7,
    price: 1150,
    type: "international",
    height: "medium",
  },
  {
    id: "18",
    name: "Skylight Marina Bay",
    location: "Singapore",
    image: "/hotel/h-11.png",
    rating: 5,
    reviewScore: 9.2,
    price: 1900,
    type: "international",
    height: "tall",
  },
  {
    id: "19",
    name: "Chao Phraya Grand Hotel",
    location: "Bangkok, Thailand",
    image: "/hotel/h-1.png",
    rating: 4,
    reviewScore: 8.5,
    price: 800,
    type: "international",
    height: "medium",
  },
  {
    id: "20",
    name: "Bali Nirvana Resort",
    location: "Bali, Indonesia",
    image: "/hotel/h-14.png",
    rating: 5,
    reviewScore: 9.0,
    price: 950,
    type: "international",
    height: "short",
  },
]

// Helper functions
export const getHotels = (filters?: any) => {
  const allHotels = [...hotelsData.recommended, ...hotelsData.topHotels]
  return allHotels
}

export const getHotelById = (id: string) => {
  const allHotels = [...hotelsData.recommended, ...hotelsData.topHotels]
  return allHotels.find((hotel) => hotel.id === id)
}

export const searchHotels = (searchParams: any) => {
  const allHotels = [...hotelsData.recommended, ...hotelsData.topHotels]
  return allHotels.filter(
    (hotel) =>
      hotel.location.toLowerCase().includes(searchParams.location?.toLowerCase() || "") ||
      hotel.name.toLowerCase().includes(searchParams.location?.toLowerCase() || ""),
  )
}

export const filterHotels = (hotels: Hotels[], filters: any) => {
  return hotels.filter((hotel) => {
    // Price filter
    if (filters.priceRange && (hotel.price < filters.priceRange[0] || hotel.price > filters.priceRange[1])) {
      return false
    }

    // Rating filter
    if (filters.rating && filters.rating.length > 0 && !filters.rating.includes(hotel.rating)) {
      return false
    }

    // Amenities filter
    if (filters.amenities && filters.amenities.length > 0) {
      const hasAmenity = filters.amenities.some((amenity: string) => hotel.amenities.includes(amenity))
      if (!hasAmenity) return false
    }

    // Property type filter
    if (filters.propertyType && filters.propertyType.length > 0 && !filters.propertyType.includes(hotel.propertyType)) {
      return false
    }

    return true
  })
}
