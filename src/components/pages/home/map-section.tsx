import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";

export function MapSection() {
  return (
    <Card className="overflow-hidden p-2 md:p-4 container mx-auto mb-5">
      <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <CardTitle>তেঁতুলিয়া উপজেলা </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-2 md:p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 p-4 bg-gray-50 rounded-md">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                কালের বিবর্তনে বহু ঘাত-প্রতিঘাত এবং চড়াই-উৎরাই পার করে ১৯৮৩
                সালের ১৫ এপ্রিল তেঁতুলিয়া একটি পূর্ণাঙ্গ উপজেলা হিসেবে প্রতিষ্ঠা
                লাভ করে। পরবর্তীতে ১৯৮৪ সালের ১ ফেব্রুয়ারি তেঁতুলিয়া, পঞ্চগড়,
                বোদা, আটোয়ারী ও দেবীগঞ্জ এর ৫টি উপজেলা নিয়ে ‘পঞ্চগড় জেলা’ গঠিত
                হয়। পঞ্চগড় জেলা সদর হতে প্রায় ৩৯ কিলোমিটার উত্তরে হিমালয়ের
                পাদদেশে অবস্থিত। আন্ত:সীমান্ত নদী মহানন্দা, ডাহুক ও করতোয়া বিধৌত
                এবং তিন দিকে ভারত বেষ্টিত এই উপজেলা ০৭টি ইউনিয়ন ও ২৪৭টি গ্রাম
                নিয়ে গঠিত। এর উত্তরে রয়েছে ভারতের দার্জিলিং ও জলপাইগুড়ি জেলার
                শিলিগুড়ি-ফুলবাড়ী, দক্ষিণে রয়েছে উত্তর দিনাজপুর জেলার ইসলামপুর,
                পূর্বে জলপাইগুড়ি জেলার হলদিবাড়ী ও বাংলাদেশের পঞ্চগড় সদর উপজেলা
                এবং পশ্চিমে ভারতের দার্জিলিং জেলার ফাঁসিদেওয়া এবং উত্তর দিনাজপুর
                জেলার হাফতিয়াগছ ব্লক।
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                অবস্থান (Latitude) এবং দ্রাঘিমাংশ (Longitude) অনুযায়ী পঞ্চগড়ের
                অবস্থান
              </h3>
              <ul className="list-none space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>
                    অক্ষাংশ (Latitude): প্রায় ২৬.২৪° উত্তর (26.24° N)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>
                    দ্রাঘিমাংশ (Longitude): প্রায় ৮৮.২০° পূর্ব (88.20° E)
                  </span>
                </li>
              </ul>
              <div className="flex items-center text-gray-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin h-5 w-5 text-orange-500 mr-2"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <p>ঢাকা থেকে তেঁতুলিয়া এর সময় এর ব্যবধান +10 মিনিট।</p>
              </div>
              <p className="text-gray-700">
                তেঁতুলিয়া উপজেলা জেলায় মোট ৭টি ইউনিয়ন রয়েছে। এগুলো হলো –
                বাংলাবান্ধা, তিরনইহাট, তেঁতুলিয়া, শালবাহান, বুড়াবুড়ি, ভজনপুর ও
                দেবনগর। তেঁতুলিয়া উপজেলার আয়তন ১৮৯.১২ বর্গ কিলোমিটার এবং ২০২১
                সালের জনশুমারী ও গৃহগণনার পরিসংখ্যানের প্রাথমিক তথ্য অনুযায়ী
                বর্তমানে লোকসংখ্যা ১,৬০,০৯০ জন।
              </p>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
            <Image
              src="/map-tetulia.png"
              alt="Map of Tetulia"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
