import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wifi, Car, Zap, Shield, Camera, Coffee, Utensils, Phone, Mail, MapPin, Bed } from "lucide-react"

interface Hotel {
  id: string
  name: string
  address: string
  mobile: string
  email?: string
  website?: string
  totalRooms: number
  roomTypes: {
    acSuite?: number
    acDouble?: number
    acSingle?: number
    nonAcDouble?: number
    nonAcSingle?: number
    commonDouble?: number
    commonSingle?: number
    acTriple?: number
  }
  amenities: string[]
  specialFeatures?: string[]
  established?: string
  manager?: string
  proprietor?: string
}

const hotels: Hotel[] = [
  {
    id: "central-guest-house",
    name: "সেন্ট্রাল গেস্ট হাউস (প্রাঃ) লিমিটেড",
    address: "সেন্ট্রাল প্লাজা, সিনেমা হল রোড, পঞ্চগড় বাজার, পঞ্চগড়",
    mobile: "০১৭০৫-৮৫৮৫৮৮-৯",
    email: "centralguesthouse@gmail.com",
    website: "www.centralguesthousepg.com",
    totalRooms: 58,
    roomTypes: {
      acSuite: 2,
      acTriple: 1,
      acDouble: 7,
      acSingle: 4,
      nonAcDouble: 5,
      nonAcSingle: 24,
      commonDouble: 4,
      commonSingle: 11,
    },
    amenities: [
      "শহরের প্রাণকেন্দ্রে অবস্থিত",
      "আন্ডার গ্রাউন্ড পার্কিং",
      "রুফ টপ সুইমিংপুল",
      "লিফট সার্ভিস",
      "২৪ ঘন্টা রুম সার্ভিস",
      "অটো জেনারেটর/২৪ ঘন্টা বিদ্যুৎ সার্ভিস",
      "৩০০ গজের মধ্যে ১০টি ব্যাংক ও ৭টি এটিএম বুথ",
      "গ্রাউন্ড ফ্লোরে শপিং মল ও খাবার হোটেল",
      "লন্ড্রী সার্ভিস",
      "সিসি ক্যামেরা নিরাপত্তা",
      "রেন্ট এ কার ও টিকেটিং সার্ভিস",
      "কনফারেন্স রুম",
      "ডাইনিং হল",
      "ওয়াই ফাই সুবিধা",
    ],
  },
  {
    id: "ab-square",
    name: "এবি স্কয়ার আবাসিক",
    address: "তেতুনিয়া রোড, পঞ্চগড়",
    mobile: "০১৩১৮-১৭১২২৬/০১৩১৮-১৭১২৫৪",
    email: "info.absquare@gmail.com",
    totalRooms: 28,
    roomTypes: {
      acDouble: 3,
      acSingle: 11,
      nonAcDouble: 6,
      nonAcSingle: 8,
    },
    amenities: ["ওয়াই-ফাই", "কার পার্কিং", "জেনারেটর সার্ভিস", "নিরাপত্তা ব্যবস্থা", "সিসি ক্যামেরা"],
  },
  {
    id: "hotel-agrodut-palace",
    name: "হোটেল অগ্রদূত প্যালেস",
    address: "কদমতলা রোড, পঞ্চগড়",
    mobile: "০১৩০৯-২১৮-১৯০",
    totalRooms: 30,
    roomTypes: {
      acDouble: 1,
      acSingle: 1,
      nonAcDouble: 1,
      nonAcSingle: 1,
    },
    amenities: ["ইন্টারনেট", "পার্কিং", "জেনারেটর", "দ্রুত রুম সার্ভিস", "পরিষ্কার পরিচ্ছন্নতা", "মালামাল নিরাপত্তা"],
  },
  {
    id: "hotel-pritam",
    name: "হোটেল প্রিতম (আবাসিক)",
    address: "সিনেমা রোড, পঞ্চগড়",
    mobile: "০১৭৮৪-৯৪০৫০০",
    totalRooms: 12,
    roomTypes: {
      nonAcSingle: 6,
      nonAcDouble: 6,
    },
    amenities: ["সার্বক্ষণিক সিসি টিভি নিয়ন্ত্রণ", "সার্বক্ষণিক ওয়াই-ফাই (ইন্টারনেট)", "প্রতি রুমে গিজার ব্যবস্থা"],
    established: "১৯৮৮",
  },
  {
    id: "hotel-m-anam",
    name: "হোটেল এস আলম",
    address: "এইচকে রোড, পঞ্চগড়",
    mobile: "০১৮২৩-৩৮৬১৬৫",
    email: "litorrahman822@gmail.com",
    totalRooms: 13,
    roomTypes: {
      acDouble: 2,
      acSingle: 1,
      nonAcDouble: 1,
      nonAcSingle: 5,
      commonDouble: 1,
      commonSingle: 1,
    },
    amenities: ["২৪ ঘন্টা সার্ভিস", "জেনারেটর সুবিধা"],
  },
  {
    id: "hotel-islam",
    name: "হোটেল ইসলাম (আবাসিক)",
    address: "ইসলাম প্লাজা, পঞ্চগড়",
    mobile: "০১৭২১-০১২৬২৫/০১৩৭২-৭২৩২৮১",
    email: "hotel.islam@gmail.com",
    totalRooms: 32,
    roomTypes: {},
    amenities: ["ওয়াই-ফাই সুবিধা", "নিজস্ব গাড়ি পার্কিং", "জেনারেটর সুবিধা", "বোর্ডারদের জন্য প্রাইভেট কার/মাইক্রোবাস ভাড়া"],
  },
  {
    id: "hotel-hk-palace",
    name: "হোটেল এইচ.কে. প্যালেস",
    address: "এইচ.কে. প্লাজা, পঞ্চগড়",
    mobile: "০১৭৫২-২৪৩০৪৮",
    email: "hoteltkplace080@gmail.com",
    totalRooms: 26,
    roomTypes: {
      acSuite: 1,
      acDouble: 6,
      acSingle: 2,
      nonAcDouble: 5,
      nonAcSingle: 12,
    },
    amenities: [
      "শহরের প্রাণকেন্দ্রে অবস্থিত",
      "২৪ ঘন্টা রুম সার্ভিস",
      "২৪ ঘন্টা বিদ্যুৎ সার্ভিস",
      "২৪ ঘন্টা রেস্টুরেন্ট",
      "সিসি ক্যামেরা",
      "পার্কিং সুবিধা",
    ],
  },
  {
    id: "hotel-dhanshiri",
    name: "হোটেল ধানসিঁড়ি ইন্টারন্যাশনাল",
    address: "রৌশনাবাগ, পঞ্চগড়",
    mobile: "০১৭০১-৫১০৩৫৩",
    email: "Fonatjahan@gmail.com",
    totalRooms: 26,
    roomTypes: {
      acSuite: 2,
      acDouble: 4,
      acSingle: 2,
      nonAcDouble: 6,
      nonAcSingle: 6,
    },
    amenities: [
      "কমপ্লিমেন্টারি ব্রেকফাস্ট",
      "চাহিদা অনুযায়ী খাবার সরবরাহ",
      "গাড়ি পার্কিং",
      "মিটিং জোন",
      "বাচ্চাদের খেলার জায়গা",
      "ওয়াই-ফাই, ডিশ টিভি",
    ],
    proprietor: "ফোরাত জাহান সাথী",
  },
]

const amenityIcons: { [key: string]: any } = {
  "Wi-Fi": Wifi,
  Internet: Wifi,
  Parking: Car,
  Generator: Zap,
  Security: Shield,
  CCTV: Camera,
  Restaurant: Utensils,
  Breakfast: Coffee,
}

export default function PanchagarhHotels() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="p-2">
          <div className="text-center">
            <h1 className="text-xl font-semibold text-gray-900 mb-1">পঞ্চগড় হোটেল তালিকা</h1>
            <p className="text-sm text-gray-600 text-center">আবাসিক হোটেল মালিক সমিতি</p>
          </div>
        </div>
      </div>


      {/* Search and Filter Section */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="হোটেল খুঁজুন..." className="w-full" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="রুমের ধরণ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ac-suite">এসি স্যুট</SelectItem>
                <SelectItem value="ac-double">এসি ডাবল</SelectItem>
                <SelectItem value="ac-single">এসি সিঙ্গেল</SelectItem>
                <SelectItem value="non-ac">নন-এসি রুম</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="সুবিধাসমূহ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wifi">ওয়াই-ফাই</SelectItem>
                <SelectItem value="parking">পার্কিং</SelectItem>
                <SelectItem value="generator">জেনারেটর</SelectItem>
                <SelectItem value="restaurant">রেস্টুরেন্ট</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className=" shadow-sm p-2 md:p-4 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{hotel.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      {hotel.address}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1 text-white">
                    <Bed className="w-3 h-3" />
                    {hotel.totalRooms} রুম
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Contact Information */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span className="font-medium">{hotel.mobile}</span>
                  </div>
                  {hotel.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>{hotel.email}</span>
                    </div>
                  )}
                  {hotel.website && <div className="text-sm text-blue-600">🌐 {hotel.website}</div>}
                </div>

                {/* Room Types */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">রুমের ধরণ:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {hotel.roomTypes.acSuite && <Badge variant="outline">এসি স্যুট: {hotel.roomTypes.acSuite}</Badge>}
                    {hotel.roomTypes.acDouble && <Badge variant="outline">এসি ডাবল: {hotel.roomTypes.acDouble}</Badge>}
                    {hotel.roomTypes.acSingle && (
                      <Badge variant="outline">এসি সিঙ্গেল: {hotel.roomTypes.acSingle}</Badge>
                    )}
                    {hotel.roomTypes.nonAcDouble && (
                      <Badge variant="outline">নন-এসি ডাবল: {hotel.roomTypes.nonAcDouble}</Badge>
                    )}
                    {hotel.roomTypes.nonAcSingle && (
                      <Badge variant="outline">নন-এসি সিঙ্গেল: {hotel.roomTypes.nonAcSingle}</Badge>
                    )}
                    {hotel.roomTypes.commonDouble && (
                      <Badge variant="outline">কমন ডাবল: {hotel.roomTypes.commonDouble}</Badge>
                    )}
                    {hotel.roomTypes.commonSingle && (
                      <Badge variant="outline">কমন সিঙ্গেল: {hotel.roomTypes.commonSingle}</Badge>
                    )}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">সুবিধাসমূহ:</h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {hotel.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity] || Wifi // Default to Wifi icon
                      return (
                        <Badge key={amenity} variant="secondary" className="flex items-center gap-1 text-white">
                          {Icon && <Icon className="w-3 h-3" />}
                          {amenity}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


    </div>
  )
}
