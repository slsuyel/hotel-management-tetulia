import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Download, HelpCircle, MapPin, Phone } from "lucide-react"

export default function BusService() {
  return (
    <div className="min-h-screen bg-gray-50">
     
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Bus Operators Section */}
        <section className="mb-12" id="operators">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">🗂️ বাস অপারেটরগণ</h2>
            <div className="ml-4 h-[1px] flex-grow bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Shyamoli Paribahan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-3">
                <h3 className="text-xl font-bold">শ্যামলী পরিবহন</h3>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <span className="font-medium">বাসের ধরন:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">AC / Non-AC</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ভাড়া:</span>
                  <span>
                    <span className="text-green-600 font-bold">৳১২০০-১৫০০</span> (AC)
                    <br />
                    <span className="text-green-600 font-bold">৳৭০০-৯০০</span> (Non-AC)
                  </span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ছাড়ার সময়:</span>
                  <span>সন্ধ্যা ৬:০০, রাত ৮:০০, রাত ১০:৩০</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-medium">যোগাযোগ:</span>
                  <span className="text-green-600">০১৭১১-১২৩৪৫৬</span>
                </div>
                <Link
                  href="#booking"
                  className="block w-full bg-green-600 border-2 border-purple-500 hover:bg-green-700 text-white text-center py-2 rounded transition-colors"
                >
                  বুক করুন
                </Link>
              </div>
            </div>

            {/* Hanif Enterprise */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-3">
                <h3 className="text-xl font-bold">হানিফ এন্টারপ্রাইজ</h3>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <span className="font-medium">বাসের ধরন:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">AC / Non-AC</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ভাড়া:</span>
                  <span>
                    <span className="text-green-600 font-bold">৳১৩০০-১৫০০</span> (AC)
                    <br />
                    <span className="text-green-600 font-bold">৳৭৫০-৯০০</span> (Non-AC)
                  </span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ছাড়ার সময়:</span>
                  <span>সন্ধ্যা ৭:০০, রাত ৯:০০, রাত ১১:০০</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-medium">যোগাযোগ:</span>
                  <span className="text-green-600">০১৭১২-৩৪৫৬৭৮</span>
                </div>
                <Link
                  href="#booking"
                  className="block w-full bg-green-600 border border-purple-500 hover:bg-green-700 text-white text-center py-2 rounded transition-colors"
                >
                  বুক করুন
                </Link>
              </div>
            </div>

            {/* Nabil Paribahan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-3">
                <h3 className="text-xl font-bold">নাবিল পরিবহন</h3>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <span className="font-medium">বাসের ধরন:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">AC / Non-AC</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ভাড়া:</span>
                  <span>
                    <span className="text-green-600 font-bold">৳১২৫০-১৪৫০</span> (AC)
                    <br />
                    <span className="text-green-600 font-bold">৳৬৫০-৮৫০</span> (Non-AC)
                  </span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ছাড়ার সময়:</span>
                  <span>সন্ধ্যা ৬:৩০, রাত ৮:৩০, রাত ১০:০০</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-medium">যোগাযোগ:</span>
                  <span className="text-green-600">০১৭১৩-৪৫৬৭৮৯</span>
                </div>
                <Link
                  href="#booking"
                  className="block w-full bg-green-600 border border-purple-500 hover:bg-green-700 text-white text-center py-2 rounded transition-colors"
                >
                  বুক করুন
                </Link>
              </div>
            </div>

            {/* SR Travels */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-3">
                <h3 className="text-xl font-bold">এসআর ট্রাভেলস</h3>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <span className="font-medium">বাসের ধরন:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">AC / Non-AC</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ভাড়া:</span>
                  <span>
                    <span className="text-green-600 font-bold">৳১১৫০-১৪০০</span> (AC)
                    <br />
                    <span className="text-green-600 font-bold">৳৬০০-৮০০</span> (Non-AC)
                  </span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ছাড়ার সময়:</span>
                  <span>সন্ধ্যা ৭:৩০, রাত ৯:৩০, রাত ১১:৩০</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-medium">যোগাযোগ:</span>
                  <span className="text-green-600">০১৭১৪-৫৬৭৮৯০</span>
                </div>
                <Link
                  href="#booking"
                  className="block w-full bg-green-600 border border-purple-500 hover:bg-green-700 text-white text-center py-2 rounded transition-colors"
                >
                  বুক করুন
                </Link>
              </div>
            </div>

            {/* Ena Transport */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-3">
                <h3 className="text-xl font-bold">এনা ট্রান্সপোর্ট</h3>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <span className="font-medium">বাসের ধরন:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">AC / Non-AC</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ভাড়া:</span>
                  <span>
                    <span className="text-green-600 font-bold">৳১২০০-১৪৫০</span> (AC)
                    <br />
                    <span className="text-green-600 font-bold">৳৬৫০-৮৫০</span> (Non-AC)
                  </span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ছাড়ার সময়:</span>
                  <span>সন্ধ্যা ৬:৪৫, রাত ৮:১৫, রাত ১০:৪৫</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-medium">যোগাযোগ:</span>
                  <span className="text-green-600">০১৭১৫-৬৭৮৯০১</span>
                </div>
                <Link
                  href="#booking"
                  className="block w-full bg-green-600 border border-purple-500 hover:bg-green-700 text-white text-center py-2 rounded transition-colors"
                >
                  বুক করুন
                </Link>
              </div>
            </div>

            {/* Soudia Coach Service */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-3">
                <h3 className="text-xl font-bold">সৌদিয়া কোচ সার্ভিস</h3>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <span className="font-medium">বাসের ধরন:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">AC / Non-AC</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ভাড়া:</span>
                  <span>
                    <span className="text-green-600 font-bold">৳১১০০-১৪০০</span> (AC)
                    <br />
                    <span className="text-green-600 font-bold">৳৬০০-৮০০</span> (Non-AC)
                  </span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">ছাড়ার সময়:</span>
                  <span>সন্ধ্যা ৭:১৫, রাত ৯:১৫, রাত ১১:১৫</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-medium">যোগাযোগ:</span>
                  <span className="text-green-600">০১৭১৬-৭৮৯০১২</span>
                </div>
                <Link
                  href="#booking"
                  className="block w-full bg-green-600 border border-purple-500 hover:bg-green-700 text-white text-center py-2 rounded transition-colors"
                >
                  বুক করুন
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Time and Distance Section */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-6" id="travel-info">
          <div className="flex items-center mb-6">
            <Clock className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">⏰ ভ্রমণ সময় ও দূরত্ব</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-lg font-bold">ভ্রমণ সময়</h3>
              </div>
              <p className="text-xl font-medium">
                পঞ্চগড় → ঢাকা: প্রায় <span className="text-green-600 font-bold">১২ ঘণ্টা</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">* ট্রাফিক ও আবহাওয়ার উপর নির্ভর করে সময় পরিবর্তন হতে পারে</p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-lg font-bold">দূরত্ব</h3>
              </div>
              <p className="text-xl font-medium">
                মোট দূরত্ব: <span className="text-green-600 font-bold">৩৯৭ কিমি</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">* রুট অনুযায়ী দূরত্ব পরিবর্তন হতে পারে</p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <div className="flex items-center mb-3">
                <h3 className="text-lg font-bold">ভাড়া</h3>
              </div>
              <p className="font-medium">
                <span className="text-green-600 font-bold">৳১০০০–১৫০০</span> (AC)
              </p>
              <p className="font-medium">
                <span className="text-green-600 font-bold">৳৬০০–৯০০</span> (Non-AC)
              </p>
              <p className="text-sm text-gray-600 mt-2">* সিজন ও বাস অপারেটর অনুযায়ী ভাড়া পরিবর্তন হতে পারে</p>
            </div>
          </div>

          <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-bold mb-2">বিশেষ দ্রষ্টব্য:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>সাধারণত বাসগুলো সন্ধ্যা থেকে রাত পর্যন্ত ছাড়ে এবং পরের দিন সকালে ঢাকায় পৌঁছায়</li>
              <li>সিজনের সময় (ঈদ, পূজা, ছুটির দিন) আগে থেকে টিকিট সংগ্রহ করা উচিত</li>
              <li>AC বাসে সাধারণত হালকা কম্বল দেওয়া হয়, কারণ তাপমাত্রা কম থাকে</li>
            </ul>
          </div>
        </section>

        {/* Online Ticket Booking Section */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-6" id="booking">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">🌐 অনলাইন টিকিট বুকিং</h2>
            <div className="ml-4 h-[1px] flex-grow bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Shohoz */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 text-center hover:shadow-md transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <Image
                  src="https://www.shohoz.com/assets/img/shohoz_logo_new.png"
                  alt="Shohoz"
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="mb-4">সহজে টিকিট বুক করুন সহজ থেকে। ২৪/৭ কাস্টমার সাপোর্ট।</p>
              <Link
                href="https://www.shohoz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 border border-purple-500 hover:bg-green-700 text-white text-center py-2 rounded transition-colors"
              >
                টিকিট বুক করুন
              </Link>
            </div>

            {/* BDTickets */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 text-center hover:shadow-md transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <Image
                  src="https://bdtickets.com/images/logo-new-2.png"
                  alt="BDTickets"
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="mb-4">বিডি টিকেটস থেকে সহজেই বুক করুন আপনার পছন্দের বাসের টিকিট।</p>
              <Link
                href="https://www.bdtickets.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 border border-purple-500 hover:bg-green-700 text-white text-center py-2 rounded transition-colors"
              >
                টিকিট বুক করুন
              </Link>
            </div>

            {/* Jatri */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 text-center hover:shadow-md transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <Image
                  src="https://www.jatri.co/_nuxt/jatri-logo.19582a96.svg"
                  alt="Jatri"
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="mb-4">যাত্রী অ্যাপ থেকে সহজেই বুক করুন এবং পেয়ে যান বিশেষ ডিসকাউন্ট।</p>
              <Link
                href="https://www.jatri.co"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 border border-purple-500 hover:bg-green-700 text-white text-center py-2 rounded transition-colors"
              >
                টিকিট বুক করুন
              </Link>
            </div>
          </div>

          <div className="mt-8 bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">অনলাইন বুকিং টিপস:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>অনলাইনে বুকিং করার সময় আপনার মোবাইল নম্বর ও ইমেইল সঠিকভাবে দিন</li>
              <li>পেমেন্ট করার পর কনফার্মেশন SMS বা ইমেইল সংরক্ষণ করুন</li>
              <li>যাত্রার দিন টিকিটের প্রিন্টআউট বা ডিজিটাল কপি সাথে রাখুন</li>
              <li>যাত্রার কমপক্ষে ৩০ মিনিট আগে কাউন্টারে পৌঁছান</li>
            </ul>
          </div>
        </section>

        {/* Government Service Section */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-6" id="govt-service">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">🚍 সরকারি পরিষেবা</h2>
            <div className="ml-4 h-[1px] flex-grow bg-gray-300"></div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border border-green-200 mb-6">
            <h3 className="text-lg font-bold mb-3">BRTC বাস রুট ও সময়সূচী</h3>
            <p className="mb-4">
              বাংলাদেশ রোড ট্রান্সপোর্ট কর্পোরেশন (BRTC) পঞ্চগড় থেকে ঢাকা রুটে নিয়মিত বাস সার্ভিস পরিচালনা করে। এই বাসগুলো সাধারণত সরকারি
              নির্ধারিত ভাড়ায় চলাচল করে।
            </p>

            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">BRTC বাস সময়সূচী:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>পঞ্চগড় থেকে ঢাকা: সন্ধ্যা ৭:০০, রাত ৯:০০</li>
                <li>ভাড়া: ৳৭০০-৯০০ (Non-AC), ৳১১০০-১৩০০ (AC)</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              
              <div className="flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 text-white py-2 px-4 rounded">
                <Phone className="h-5 w-5 mr-2" />
                হেল্পলাইন: ৪১০৫১৩৩৭ ও ৪১০৫১৩৪৮
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h3 className="text-lg font-bold mb-3">যাত্রী সেবা তথ্য</h3>
            <p className="mb-4">সরকারি বাস সার্ভিস সম্পর্কে আরও তথ্য জানতে বা অভিযোগ করতে নিম্নলিখিত মাধ্যমগুলো ব্যবহার করতে পারেন:</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">ওয়েবসাইট:</span>{" "}
                <Link href="https://www.brtc.gov.bd" className="text-green-600 hover:underline">
                  www.brtc.gov.bd
                </Link>
              </li>
              <li>
                <span className="font-medium">ফোন:</span> ৪১০৫১৩৩৭ ও ৪১০৫১৩৪৮
              </li>
              <li>
                <span className="font-medium">ইমেইল:</span> info@brtc.gov.bd
              </li>
              <li>
                <span className="font-medium">পঞ্চগড় BRTC কাউন্টার:</span> পঞ্চগড় বাস টার্মিনাল, ফোন: 01744460009 
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-6" id="faq">
          <div className="flex items-center mb-6">
            <HelpCircle className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">সাধারণ জিজ্ঞাসা</h2>
          </div>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-bold mb-2">পঞ্চগড় থেকে ঢাকা যেতে কত সময় লাগে?</h3>
              <p>
                সাধারণত পঞ্চগড় থেকে ঢাকা যেতে প্রায় ১২ ঘণ্টা সময় লাগে। তবে ট্রাফিক ও আবহাওয়ার উপর নির্ভর করে এই সময় কম-বেশি হতে পারে।
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-bold mb-2">পঞ্চগড় থেকে ঢাকার বাসগুলো কোথা থেকে ছাড়ে?</h3>
              <p>পঞ্চগড় থেকে ঢাকাগামী সব বাস পঞ্চগড় বাস টার্মিনাল থেকে ছাড়ে। এছাড়া কিছু বাস কোম্পানির নিজস্ব কাউন্টার থেকেও বাস ছাড়ে।</p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-bold mb-2">অগ্রিম টিকিট কত দিন আগে কাটা যায়?</h3>
              <p>
                অধিকাংশ বাস কোম্পানি ৭-১০ দিন আগে থেকে অগ্রিম টিকিট বিক্রি করে। তবে ঈদ বা বড় ছুটির সময় ১৫-৩০ দিন আগে থেকেও টিকিট
                বিক্রি শুরু হতে পারে।
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-bold mb-2">AC ও Non-AC বাসের মধ্যে কী পার্থক্য?</h3>
              <p>
                AC বাসে এয়ার কন্ডিশনিং সুবিধা থাকে, যা যাত্রাকে আরামদায়ক করে। এছাড়া AC বাসে সাধারণত রিক্লাইনিং সিট, USB চার্জিং পয়েন্ট, এবং
                কখনো কখনো WiFi সুবিধাও থাকে। Non-AC বাসে এসব সুবিধা নাও থাকতে পারে, তবে ভাড়া কম হয়।
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">টিকিট কি রিফান্ডেবল?</h3>
              <p>
                অধিকাংশ বাস কোম্পানি যাত্রার ২৪ ঘণ্টা আগে টিকিট ক্যান্সেল করলে আংশিক রিফান্ড দেয় (সাধারণত ৫০-৭০%)। তবে ২৪ ঘণ্টার কম সময়ে
                ক্যান্সেল করলে রিফান্ড নাও পেতে পারেন। প্রতিটি কোম্পানির রিফান্ড পলিসি আলাদা, তাই টিকিট কাটার সময় এ বিষয়ে জেনে নেওয়া ভালো।
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">আজই আপনার যাত্রা পরিকল্পনা করুন!</h2>
          <p className="mb-6 text-lg">পঞ্চগড় থেকে ঢাকার যাত্রা আরামদায়ক ও নিরাপদ করতে আগে থেকেই টিকিট বুক করুন এবং সময়মতো পৌঁছান।</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#operators"
              className="bg-white text-green-600 hover:bg-green-50 font-bold py-3 px-6 rounded-full transition-colors"
            >
              বাস অপারেটর দেখুন
            </Link>
            <Link
              href="#booking"
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              অনলাইনে টিকিট বুক করুন
            </Link>
          </div>
        </section>
      </main>

    </div>
  )
}
