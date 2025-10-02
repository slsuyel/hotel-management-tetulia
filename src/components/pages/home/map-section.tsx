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
            <h3 className="font-medium text-gray-900 mb-2">
              তেঁতুলিয়া উপজেলা সম্পর্কে
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              তেঁতুলিয়া উপজেলার ভৌগোলিক পরিচিতি বাংলাদেশের সর্বোত্তরের উপজেলা
              তেঁতুলিয়া। ‘টেকনাফ থেকে তেঁতুলিয়া’ বাংলাদেশের ভূখন্ডকে দক্ষিণ
              উত্তর লম্বালম্বি বুঝাতে দুই প্রান্তের দুই শহরকে প্রচলিতভাবে সবাই
              এভাবে উপস্থাপন করেন। পঞ্চগড় জেলা সদর হতে প্রায় ৩৯ কিলোমিটার উত্তরে
              হিমালয়ের পাদদেশে মহানন্দা, ডাহুক ও করতোয়া নদী বিধৌত এবং তিন দিকে
              ভারত বেষ্টিত ৭টি ইউনিয়ন (বাংলাবান্ধা, তিরনইহাট, তেঁতুলিয়া,
              শালবাহান, বুড়াবুড়ি, ভজনপুর ও দেবনগর) ও ২৪৭টি গ্রাম নিয়ে গঠিত।
              উত্তর পার্শ্বে ভারতের দার্জিলিং ও জলপাইগুড়ি জেলার
              শিলিগুড়ি-ফুলবাড়ী, দক্ষিণ পার্শ্বে উত্তর দিনাজপুর জেলার ইসলামপুর,
              পূর্বে জলপাইগুড়ি জেলার হলদিবাড়ী ও বাংলাদেশের পঞ্চগড় সদর উপজেলা এবং
              পশ্চিমে ভারতের দার্জিলিং জেলার ফাঁসিদেওয়া এবং উত্তর দিনাজপুর জেলার
              হাফতিয়াগছ ব্লক অবস্থিত। তেঁতুলিয়া উপজেলার অবস্থান হিমালয়ের পাদদেশে
              হওয়ায় সারাদেশে হিমালয় কন্যা নামে পরিচিতি লাভ করেছে। তেঁতুলিয়া
              উপজেলা পঞ্চগড়-১ সংসদীয় আসনের আওতাভুক্ত। ভৌগোলিক স্থানাংক অনুযায়ী
              তেঁতুলিয়া উপজেলাটি ২৬০২৪’ থেকে ২৬০৩৮’ উত্তর অক্ষাংশ এবং ৮৮০২০’
              থেকে ৮৮০৩২’ পূর্ব দ্রাঘিমাংশের মধ্যে অবস্থিত।
            </p>
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
