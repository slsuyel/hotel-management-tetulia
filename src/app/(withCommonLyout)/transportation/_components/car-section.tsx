import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Phone, Car, Users, MapPin, Clock } from "lucide-react"

const vehicleData = [
  { id: 1, owner: "এনামুল হক", type: "নোহা", registration: "ঢাকা মেট্রো: চা-১১-৬১৩৬", mobile: "০১৭২৪০৩৪৬৮৭" },
  { id: 2, owner: "বয়জুল", type: "হাইএস", registration: "ঢাকা মেট্রো: চা-১৩-২৮৩১", mobile: "০১৭৮১৮৮২২৭৯" },
  { id: 3, owner: "শাকিল", type: "হাইএস", registration: "ঢাকা মেট্রো: চা-১৩-৫০৮৯", mobile: "০১৭১৭৩১৪৫৭৩" },
  { id: 4, owner: "ফেরদৌস", type: "হাইএস", registration: "ঢাকা মেট্রো: চা-৫৩-১৯৪৮", mobile: "০১৭৩৩০৩২৮৮০" },
  { id: 5, owner: "মামুন", type: "নোহা", registration: "ঢাকা মেট্রো: চা-১৪-১৭৮৫", mobile: "০১৩১৫৯৩২৮১৯" },
  { id: 6, owner: "ইউনুস", type: "নোহা", registration: "ঢাকা মেট্রো: চা-১১-৬১৪৯", mobile: "০১৭২২৩৫৬৮৩৯" },
  { id: 7, owner: "মো. আবু জাফর", type: "গাড়ি", registration: "ঢাকা মেট্রো: গা-২৫-৯২৯৮", mobile: "০১৭৫০৬৬৪৯২৩" },
  { id: 8, owner: "জিল্লুর", type: "গাড়ি", registration: "ঢাকা মেট্রো: গা-২৭-০৭২২", mobile: "০১৭২৩৫৬২৬৭৯" },
  { id: 9, owner: "মো. আবু তাহের", type: "গাড়ি", registration: "ঢাকা মেট্রো: গা-১৭-৪৯৪৪", mobile: "০১৭২৭৮৪৭৩৪১" },
  { id: 10, owner: "মো. হামিম", type: "গাড়ি", registration: "ঢাকা মেট্রো: খা-১২-০৩৯১", mobile: "০১৭১৭৪৩৮০৩৬" },
  { id: 11, owner: "মো. আশরাফুল", type: "গাড়ি", registration: "ঢাকা মেট্রো: গা-২৫-৭৩৫৮", mobile: "০১৭১৭১৩৯০১১" },
  { id: 12, owner: "মো. মাহাবুব", type: "গাড়ি", registration: "ঢাকা মেট্রো: গা-৩১-৪০৫০", mobile: "০১৭১৮৭৭২২৬৫" },
  { id: 13, owner: "মো. শাহীন", type: "নোহা", registration: "ঢাকা মেট্রো: চা-৫১-৬০৯৩", mobile: "০১৭১২৮৯৬৭৩১" },
  { id: 14, owner: "মো. সুমন", type: "হাইএস", registration: "ঢাকা মেট্রো: চা-১১-০২৪৬", mobile: "০১৭১৯১৪২৬৩৫" },
  { id: 15, owner: "মো. লিয়াকত", type: "হাইএস", registration: "ঢাকা মেট্রো: চা-৫১-৯৮৯১", mobile: "০১৭১৪৬২৪২০২" },
  { id: 16, owner: "মো. ইউসুফ", type: "নোহা", registration: "ঢাকা মেট্রো: জি-৭৫-০১৮৩", mobile: "০১৭১৯৫১৩১০০" },
  { id: 17, owner: "মো. রনি", type: "নোহা", registration: "ঢাকা মেট্রো: চা-৫৩-০১২৭", mobile: "০১৭৯২৮৫৮৫৫৯" },
]

const getVehicleTypeColor = (type: string) => {
  switch (type) {
    case "গাড়ি":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200"
    case "হাইএস":
      return "bg-green-100 text-green-800 hover:bg-green-200"
    case "নোহা":
      return "bg-purple-100 text-purple-800 hover:bg-purple-200"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
  }
}

const getVehicleIcon = (type: string) => {
  switch (type) {
    case "গাড়ি":
      return <Car className="h-4 w-4" />
    case "হাইএস":
    case "নোহা":
      return <Users className="h-4 w-4" />
    default:
      return <Car className="h-4 w-4" />
  }
}

export default function CarSection() {
  const vehicleTypeCounts = vehicleData.reduce(
    (acc, vehicle) => {
      acc[vehicle.type] = (acc[vehicle.type] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="space-y-6">
      {/* Service Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-gradient-to-r shadow-sm rounded-md p-2 from-blue-50 to-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h3 className="font-bold text-blue-800">ব্যক্তিগত গাড়ি</h3>
                <p className="text-sm text-blue-600">আরামদায়ক ভ্রমণ</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r shadow-sm rounded-md p-2 from-green-50 to-green-100">
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <h3 className="font-bold text-green-800">২৪/৭ সেবা</h3>
                <p className="text-sm text-green-600">যেকোনো সময় উপলব্ধ</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r shadow-sm rounded-md p-2 from-purple-50 to-purple-100">
          <CardContent className="p-4">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <h3 className="font-bold text-purple-800">স্থানীয় সেবা</h3>
                <p className="text-sm text-purple-600">পঞ্চগড় জেলায়</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vehicle List Header */}
      <Card className="shadow-sm p-2 md:p-4 rounded-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            পঞ্চগড় জেলা মাইক্রোবাস মালিক সমিতি
          </CardTitle>
          <CardDescription>ব্যবহৃত গাড়ি ও মাইক্রোবাসের সম্পূর্ণ তালিকা - মালিক ও চালকের তথ্যসহ</CardDescription>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="text-sm">
              <span className="font-semibold">মোট যানবাহন:</span> {vehicleData.length}টি
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(vehicleTypeCounts).map(([type, count]) => (
                <Badge key={type} variant="outline" className={getVehicleTypeColor(type)}>
                  {type}: {count}টি
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Mobile Card View (visible on small screens) */}
      <div className="block lg:hidden space-y-4">
        {vehicleData.map((vehicle) => (
          <Card key={vehicle.id} className="shadow-sm border border-gray-200">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">#{vehicle.id}</span>
                  <Badge className={getVehicleTypeColor(vehicle.type)}>
                    <span className="flex items-center gap-1">
                      {getVehicleIcon(vehicle.type)}
                      {vehicle.type}
                    </span>
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{vehicle.owner}</h3>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Car className="h-4 w-4" />
                    <span className="font-medium">নিবন্ধন:</span>
                    <span>{vehicle.registration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-600">চালকের মোবাইল:</span>
                    <a href={`tel:${vehicle.mobile}`} className="text-blue-600 hover:underline font-medium">
                      {vehicle.mobile}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop Table View (visible on large screens) */}
      <Card className="hidden lg:block shadow-sm p-2 md:p-4 rounded-md">
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">ক্রমিক</TableHead>
                  <TableHead>মালিকের নাম</TableHead>
                  <TableHead>যানবাহনের ধরন</TableHead>
                  <TableHead>নিবন্ধন নম্বর</TableHead>
                  <TableHead>চালকের মোবাইল</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicleData.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell className="font-medium">{vehicle.id}</TableCell>
                    <TableCell className="font-medium">{vehicle.owner}</TableCell>
                    <TableCell>
                      <Badge className={getVehicleTypeColor(vehicle.type)}>
                        <span className="flex items-center gap-1">
                          {getVehicleIcon(vehicle.type)}
                          {vehicle.type}
                        </span>
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{vehicle.registration}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a href={`tel:${vehicle.mobile}`} className="hover:underline text-blue-600">
                          {vehicle.mobile}
                        </a>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* President Contact Info */}
      <Card className="bg-gradient-to-r shadow-sm rounded-md p-2 from-orange-50 to-orange-100 border-orange-200">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <h3 className="font-bold text-orange-800">সভাপতি</h3>
                <p className="text-sm font-medium text-orange-700">মোঃ জাফর</p>
                <p className="text-xs text-orange-600">পঞ্চগড় জেলা মাইক্রোবাস মালিক সমিতি</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-600" />
              <a href="tel:01750664923" className="hover:underline text-orange-700 font-medium">
                ০১৭৫০৬৬৪৯২৩
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rental Information */}
      <Card className="shadow-sm p-2 md:p-4 rounded-md">
        <CardHeader>
          <CardTitle className="text-blue-800">গাড়ি ভাড়ার তথ্য</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-green-700">স্থানীয় ভ্রমণ (পঞ্চগড় জেলার মধ্যে)</h3>
              <ul className="space-y-2 text-sm">
                <li>• ব্যক্তিগত গাড়ি: ৮০০-১২০০ টাকা/দিন</li>
                <li>• মাইক্রোবাস (নোহা): ১৫০০-২০০০ টাকা/দিন</li>
                <li>• মাইক্রোবাস (হাইএস): ২০০০-২৫০০ টাকা/দিন</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-blue-700">দূরপাল্লার ভ্রমণ</h3>
              <ul className="space-y-2 text-sm">
                <li>• ঢাকা-পঞ্চগড়: ৮০০০-১২০০০ টাকা</li>
                <li>• চট্টগ্রাম-পঞ্চগড়: ১০০০০-১৫০০০ টাকা</li>
                <li>• সিলেট-পঞ্চগড়: ৬০০০-৯০০০ টাকা</li>
                <li>• জ্বালানি ও টোল অন্তর্ভুক্ত</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">গুরুত্বপূর্ণ তথ্য:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• গাড়ি বুকিং এর জন্য কমপক্ষে ২৪ ঘণ্টা আগে যোগাযোগ করুন</li>
              <li>• ভাড়া নির্ধারণ দূরত্ব ও সময়ের উপর নির্ভর করে</li>
              <li>• অগ্রিম পেমেন্ট প্রয়োজন হতে পারে</li>
              <li>• সকল গাড়িতে বৈধ লাইসেন্স ও বীমা রয়েছে</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
