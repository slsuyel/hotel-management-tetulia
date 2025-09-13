import { Phone, User, Building2, Crown, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const committeeMembers = [
  {
    "ক্রমিক নং": "০১",
    নাম: "মোঃ মেহেদী হাসান খান বাবলা",
    পদবী: "আহ্বায়ক",
    "আবাসিক হোটেলের নাম": "সেন্ট্রাল গেস্ট হাউস",
    মোবাইল: "০১৭২৩-২০২৩৩৭",
  },
  {
    "ক্রমিক নং": "০২",
    নাম: "মোঃ গোলাম রব্বানী প্রধান সোহেল",
    পদবী: "যুগ্ম আহ্বায়ক",
    "আবাসিক হোটেলের নাম": "এবি ফ্লাওয়ার আবাসিক",
    মোবাইল: "০১৭২৬-৩৬৯৬৮৬",
  },
  {
    "ক্রমিক নং": "০৩",
    নাম: "মোঃ আনোয়ার হোসেন",
    পদবী: "সদস্য",
    "আবাসিক হোটেলের নাম": "হোটেল মোচাক আবাসিক",
    মোবাইল: "০১৭২৯-৭৬৮৫০৭",
  },
  {
    "ক্রমিক নং": "০৪",
    নাম: "মোঃ নূর ইসলাম",
    পদবী: "সদস্য",
    "আবাসিক হোটেলের নাম": "হোটেল ইসলামিয়া",
    মোবাইল: "০১৭০৯-৬৭৩২৮১",
  },
  {
    "ক্রমিক নং": "০৫",
    নাম: "মোঃ আঃ সামাদ পুলক",
    পদবী: "সদস্য",
    "আবাসিক হোটেলের নাম": "হোটেল অদূদত প্যালেস",
    মোবাইল: "০১৭৩৪-৮২২৮৫১",
  },
  {
    "ক্রমিক নং": "০৬",
    নাম: "মোঃ রেজাউল করিম রেজা",
    পদবী: "সদস্য",
    "আবাসিক হোটেলের নাম": "হোটেল রাজগঞ্জ",
    মোবাইল: "০১৭৩৭-২১৮১২৫",
  },
  {
    "ক্রমিক নং": "০৭",
    নাম: "ফেরদাউস জাহান সাথী",
    পদবী: "সদস্য",
    "আবাসিক হোটেলের নাম": "হোটেল বানরসিঁড়ি ইন্টারন্যাশনাল",
    মোবাইল: "০১৭০২-৫১০৩৮৩",
  },
  {
    "ক্রমিক নং": "০৮",
    নাম: "এ্যাড. সায়েম",
    পদবী: "সদস্য",
    "আবাসিক হোটেলের নাম": "হোটেল হিলটন",
    মোবাইল: "০১৮২০-১০০৮৮০",
  },
  {
    "ক্রমিক নং": "০৯",
    নাম: "দিল আফরোজ",
    পদবী: "সদস্য",
    "আবাসিক হোটেলের নাম": "হোটেল প্রিয়ম",
    মোবাইল: "০১৭২৬-১৯৪৫৮৩",
  },
  {
    "ক্রমিক নং": "১০",
    নাম: "মোঃ লিটন",
    পদবী: "সদস্য",
    "আবাসিক হোটেলের নাম": "হোটেল এস আলম",
    মোবাইল: "০১৮২৮-৩৮৬১৬৫",
  },
  {
    "ক্রমিক নং": "১১",
    নাম: "নুসরত তারিক",
    পদবী: "সদস্য",
    "আবাসিক হোটেলের নাম": "হোটেল এইচ কে প্যালেস",
    মোবাইল: "০১৭৮২-৯৭১৬৬৬",
  },
]

const getPositionBadgeVariant = (position: string) => {
  if (position === "আহ্বায়ক") return "default"
  if (position === "যুগ্ম আহ্বায়ক") return "secondary"
  return "outline"
}

const getPositionIcon = (position: string) => {
  if (position === "আহ্বায়ক") return <Crown className="w-4 h-4" />
  if (position === "যুগ্ম আহ্বায়ক") return <Users className="w-4 h-4" />
  return <User className="w-4 h-4" />
}

export default function AbasikHotelComeetee() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">পঞ্চগড় জেলা আবাসিক হোটেল কমিটি</h1>
        <p className="text-lg text-gray-600">সদস্যদের তালিকা</p>
        <Separator className="max-w-md mx-auto" />
      </div>

      {/* Committee Members Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {committeeMembers.map((member) => (
          <Card key={member["ক্রমিক নং"]} className="hover:shadow-lg transition-shadow shadow-none rounded p-3 border-none">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg leading-tight">{member.নাম}</CardTitle>
                  <Badge variant={getPositionBadgeVariant(member.পদবী)} className="flex items-center gap-1 w-fit">
                    {getPositionIcon(member.পদবী)}
                    {member.পদবী}
                  </Badge>
                </div>
                <div className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  #{member["ক্রমিক নং"]}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900 leading-tight">{member["আবাসিক হোটেলের নাম"]}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <a
                  href={`tel:${member.মোবাইল}`}
                  className="text-sm font-mono text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {member.মোবাইল}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

   
    </div>
  )
}
