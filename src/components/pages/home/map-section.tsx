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
            <div className="text-gray-700 text-base leading-relaxed space-y-2">
              <p>
                কালের বিবর্তনে বহু ঘাত-প্রতিঘাত এবং চড়াই-উৎরাই পার করে ১৯৮৩
                সালের ১৫ এপ্রিল তেঁতুলিয়া একটি পূর্ণাঙ্গ উপজেলা হিসেবে প্রতিষ্ঠা
                লাভ করে।
              </p>

              <p>
                পরবর্তীতে ১৯৮৪ সালের ১ ফেব্রুয়ারি তেঁতুলিয়া, পঞ্চগড়, বোদা,
                আটোয়ারী ও দেবীগঞ্জ এর ৫টি উপজেলা নিয়ে ‘পঞ্চগড় জেলা’ গঠিত হয়।
              </p>

              <p>
                পঞ্চগড় জেলা সদর হতে প্রায় ৩৯ কিলোমিটার উত্তরে হিমালয়ের পাদদেশে
                অবস্থিত। আন্ত:সীমান্ত নদী মহানন্দা, ডাহুক ও করতোয়া বিধৌত এবং তিন
                দিকে ভারত বেষ্টিত এই উপজেলা ৭টি ইউনিয়ন ও ২৪৭টি গ্রাম নিয়ে গঠিত।
              </p>

              <p>
                এর উত্তরে রয়েছে ভারতের দার্জিলিং ও জলপাইগুড়ি জেলার
                শিলিগুড়ি-ফুলবাড়ী, দক্ষিণে রয়েছে উত্তর দিনাজপুর জেলার ইসলামপুর,
                পূর্বে জলপাইগুড়ি জেলার হলদিবাড়ী ও বাংলাদেশের পঞ্চগড় সদর উপজেলা
                এবং পশ্চিমে ভারতের দার্জিলিং জেলার ফাঁসিদেওয়া এবং উত্তর দিনাজপুর
                জেলার হাফতিয়াগছ ব্লক।
              </p>

              <p>
                অবস্থান (Latitude) এবং দ্রাঘিমাংশ (Longitude) অনুযায়ী
                তেঁতুলিয়ার অবস্থান:
                <span className="font-semibold">অক্ষাংশ (Latitude)</span>:
                প্রায় ২৬.২৪° উত্তর (26.24° N),
                <span className="font-semibold">দ্রাঘিমাংশ (Longitude)</span>:
                প্রায় ৮৮.২০° পূর্ব (88.20° E)।
              </p>

              <p>
                ঢাকা থেকে তেঁতুলিয়া এর সময় ব্যবধান +10 মিনিট। তেঁতুলিয়া উপজেলায়
                মোট ৭টি ইউনিয়ন রয়েছে: বাংলাবান্ধা, তিরনইহাট, তেঁতুলিয়া,
                শালবাহান, বুড়াবুড়ি, ভজনপুর ও দেবনগর।
              </p>

              <p>
                আয়তন: ১৮৯.১২ বর্গ কিলোমিটার। ২০২১ সালের জনশুমারী অনুযায়ী মোট
                লোকসংখ্যা: ১,৬০,০৯০ জন।
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
