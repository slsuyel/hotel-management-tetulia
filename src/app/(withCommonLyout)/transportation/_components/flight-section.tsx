import { MapPin, Plane, Bus, Train, Clock, DollarSign, Building, CalendarClock } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function FlightSection() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">


            <main className="container mx-auto px-4 py-8 max-w-6xl">
                <section className="mb-12">
                    <div className="flex flex-col md:flex-row items-start gap-4 mb-8">
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold mb-4">পঞ্চগড়ে যাতায়াতের বর্তমান অবস্থা</h2>
                            <p className="text-slate-700 mb-4">
                                পঞ্চগড়ে বর্তমানে কোনো আন্তর্জাতিক বা অভ্যন্তরীণ বিমানবন্দর নেই, যার কারণে সরাসরি বিমানে যাওয়া সম্ভব নয়। তবে, ঢাকা থেকে
                                নিকটস্থ বিমানবন্দর ব্যবহার করে সড়কপথে পঞ্চগড় পৌঁছানোর জন্য বেশ কয়েকটি বিকল্প উপায় রয়েছে।
                            </p>
                            <div className="flex items-center gap-2 mb-6">
                                <MapPin className="text-rose-500 h-5 w-5" />
                                <span className="text-slate-600">বাংলাদেশের সবচেয়ে উত্তরে অবস্থিত</span>
                            </div>
                        </div>
                        <Card className=" rounded-md shadow-sm p-2 md:p-4 w-full md:w-auto md:min-w-[300px] bg-rose-50 border-rose-100">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">দ্রুত তথ্য</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <Plane className="h-4 w-4 text-slate-700" />
                                        <span>নিকটতম বিমানবন্দর: সৈয়দপুর (~১৫০ কিমি)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-slate-700" />
                                        <span>ঢাকা থেকে যাত্রা সময়: ১০-১২ ঘন্টা</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <DollarSign className="h-4 w-4 text-slate-700" />
                                        <span>বাস/ট্রেন ভাড়া: ৮০০-১,৫০০ টাকা</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Building className="h-4 w-4 text-slate-700" />
                                        <span>ঠাকুরগাঁওয়ে নতুন বিমানবন্দর নির্মাণাধীন</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <Card className=" shadow-sm rounded-md p-2 md:p-3">
                            <CardHeader className="pb-2">
                                <Badge className="w-fit mb-2 bg-sky-100 text-sky-700 hover:bg-sky-100">বিমান + সড়ক</Badge>
                                <CardTitle>১. ঢাকা থেকে সৈয়দপুর বিমানবন্দর</CardTitle>
                                <CardDescription>পঞ্চগড়ের নিকটতম বিমানবন্দর</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <Plane className="h-5 w-5 text-sky-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">ফ্লাইট অপারেটর</p>
                                            <p className="text-sm text-slate-600">বিমান বাংলাদেশ, নভোএয়ার</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <DollarSign className="h-5 w-5 text-green-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">ফ্লাইট ভাড়া</p>
                                            <p className="text-sm text-slate-600">৩,০০০–৫,০০০ টাকা</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">ফ্লাইটের সময়</p>
                                            <p className="text-sm text-slate-600">প্রায় ১ ঘণ্টা</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Bus className="h-5 w-5 text-rose-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">সৈয়দপুর থেকে পঞ্চগড়</p>
                                            <p className="text-sm text-slate-600">১৫০ কিমি, ৪-৫ ঘণ্টা সড়কপথে</p>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className=" shadow-sm rounded-md p-2 md:p-3">
                            <CardHeader className="pb-2">
                                <Badge className="w-fit mb-2 bg-amber-100 text-amber-700 hover:bg-amber-100">ভবিষ্যৎ পরিকল্পনা</Badge>
                                <CardTitle>২. ঠাকুরগাঁও বিমানবন্দর</CardTitle>
                                <CardDescription>নির্মাণাধীন বিমানবন্দর</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <Building className="h-5 w-5 text-amber-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">বর্তমান অবস্থা</p>
                                            <p className="text-sm text-slate-600">নির্মাণাধীন, এখনো চালু হয়নি</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <CalendarClock className="h-5 w-5 text-purple-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">সম্ভাব্য সময়সীমা</p>
                                            <p className="text-sm text-slate-600">কয়েক বছরের মধ্যে চালু হওয়ার সম্ভাবনা</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">পঞ্চগড় থেকে দূরত্ব</p>
                                            <p className="text-sm text-slate-600">ঠাকুরগাঁও পঞ্চগড়ের নিকটবর্তী জেলা</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Plane className="h-5 w-5 text-sky-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">সুবিধা</p>
                                            <p className="text-sm text-slate-600">চালু হলে পঞ্চগড় যাতায়াতের আরও সাশ্রয়ী এবং দ্রুত পথ</p>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className=" shadow-sm rounded-md p-2 md:p-3">
                            <CardHeader className="pb-2">
                                <Badge className="w-fit mb-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">সাশ্রয়ী বিকল্প</Badge>
                                <CardTitle>৩. ঢাকা থেকে বাস/ট্রেন</CardTitle>
                                <CardDescription>সরাসরি সড়ক/রেল পথে</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <Bus className="h-5 w-5 text-emerald-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">বাস সার্ভিস</p>
                                            <p className="text-sm text-slate-600">ঢাকা থেকে সরাসরি বাস সার্ভিস উপলব্ধ</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Train className="h-5 w-5 text-indigo-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">ট্রেন সার্ভিস</p>
                                            <p className="text-sm text-slate-600">ঢাকা থেকে দিনাজপুর/সৈয়দপুর, তারপর বাসে</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">মোট সময়</p>
                                            <p className="text-sm text-slate-600">প্রায় ১০-১২ ঘণ্টা</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <DollarSign className="h-5 w-5 text-green-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium">ভাড়া</p>
                                            <p className="text-sm text-slate-600">৮০০-১,৫০০ টাকা</p>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <Separator className="my-10" />

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">পঞ্চগড় ভ্রমণ মানচিত্র</h2>
                    <div className="bg-slate-100 border rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
                        <div className="text-center p-6">
                            <Image
                                src="https://tiles-s3.flightstats.com/street/7/95/54@2x.png"
                                alt="Panchagarh Travel Map"
                                width={800}
                                height={350}
                                className="mx-auto rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">ভ্রমণ টিপস</h2>
                    <div className="p-6 bg-white rounded-lg border">
                        <h3 className="text-xl font-medium mb-4">পঞ্চগড় ভ্রমণের টিপস</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    1
                                </span>
                                <p>সৈয়দপুর বিমানবন্দর থেকে পঞ্চগড় যাওয়ার জন্য আগে থেকেই গাড়ি ভাড়া নিশ্চিত করুন।</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    2
                                </span>
                                <p>শীতকালে (নভেম্বর-ফেব্রুয়ারি) পঞ্চগড় ভ্রমণ করলে গরম কাপড় সাথে রাখুন, কারণ এই সময় তাপমাত্রা অনেক কমে যায়।</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    3
                                </span>
                                <p>পঞ্চগড়ের বিখ্যাত পর্যটন স্থান যেমন বাংলাবান্ধা, তেতুলিয়া, এবং মিঠাপুকুর দেখতে ভুলবেন না।</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    4
                                </span>
                                <p>ঢাকা থেকে বাসে যাত্রা করলে, রাতের বাস নিলে সকালে পঞ্চগড় পৌঁছানো যায়, যা সময় বাঁচাতে সাহায্য করে।</p>
                            </li>
                        </ul>
                        <Button className="mt-6">আরও টিপস দেখুন</Button>
                    </div>
                </section>


            </main>

        </div>
    )
}
