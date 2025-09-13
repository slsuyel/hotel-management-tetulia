'use client'
import React from 'react';
import { ArrowRight, Clock, CreditCard, HelpCircle, Train } from 'lucide-react'
import Link from 'next/link';
const TrainServices = () => {

    const getTomorrowDate = () => {
        const today = new Date();
        today.setDate(today.getDate() + 1);  // Add 1 day to current date
        const options: any = { year: 'numeric', month: 'short', day: 'numeric' };
        return today.toLocaleDateString('en-GB', options).replace(/ /g, '-');
    };
    const tomorrowDate = getTomorrowDate();

    return (
        <div className=" bg-gray-50">
            <header className="bg-green-700 text-white p-4 sticky top-0 z-10 shadow-md">
                <h1 className="text-2xl font-bold text-center">ট্রেনের সময়সূচি - পঞ্চগড়</h1>
            </header>

            <main className="container mx-auto px-4 py-6 ">
                {/* Intro Section */}
                <section className="mb-8 bg-white p-4 rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold mb-4 text-green-800 border-b pb-2">পরিচিতি</h2>
                    <p className="mb-4">
                        ঢাকা এবং পঞ্চগড়ের মধ্যে প্রতিদিন তিনটি ইন্টারসিটি ট্রেন চলাচল করে। এই ট্রেনগুলোর কোন সাপ্তাহিক ছুটি নেই।
                    </p>
                    <div className="bg-green-50 p-3 rounded-md">
                        <h3 className="font-semibold mb-2">ট্রেনের নাম ও নম্বর:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>একতা এক্সপ্রেস (৭০৫)</li>
                            <li>দ্রুতযান এক্সপ্রেস (৭৫৭)</li>
                            <li>পঞ্চগড় এক্সপ্রেস (৭৯৩)</li>
                        </ul>
                    </div>
                </section>

                {/* Train Schedule Summary */}
                <section className="mb-8 bg-white p-4 rounded-lg shadow-sm overflow-x-auto">
                    <div className="flex items-center mb-4">
                        <Clock className="h-5 w-5 text-green-700 mr-2" />
                        <h2 className="text-xl font-bold text-green-800 border-b pb-2">ঢাকা থেকে পঞ্চগড় ট্রেন সময়সূচি (সংক্ষিপ্ত)</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="bg-green-100">
                                    <th className="border border-green-200 px-3 py-2 text-left">ট্রেন</th>
                                    <th className="border border-green-200 px-3 py-2 text-left">ছাড়ার সময় (ঢাকা)</th>
                                    <th className="border border-green-200 px-3 py-2 text-left">পৌঁছানোর সময় (পঞ্চগড়)</th>
                                    <th className="border border-green-200 px-3 py-2 text-left">সাপ্তাহিক বন্ধ</th>
                                    <th className="border border-green-200 px-3 py-2 text-left">বুকিং</th> {/* New column */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50">
                                    <td className="border border-green-200 px-3 py-2 font-medium">একতা এক্সপ্রেস</td>
                                    <td className="border border-green-200 px-3 py-2">১০:১৫ সকাল</td>
                                    <td className="border border-green-200 px-3 py-2">০৯:০০ রাত</td>
                                    <td className="border border-green-200 px-3 py-2">নেই</td>
                                    <td className="border border-green-200 px-3 py-2">
                                        <a
                                            target="_blank" href={`https://eticket.railway.gov.bd/booking/train/search?fromcity=Dhaka&tocity=Panchagarh&doj=${tomorrowDate}&class=S_CHAIR`}
                                            className="text-blue-500 hover:underline"
                                        >
                                            বুক করুন
                                        </a>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="border border-green-200 px-3 py-2 font-medium">দ্রুতযান এক্সপ্রেস</td>
                                    <td className="border border-green-200 px-3 py-2">০৮:৪৫ রাত</td>
                                    <td className="border border-green-200 px-3 py-2">০৭:১০ সকাল</td>
                                    <td className="border border-green-200 px-3 py-2">নেই</td>
                                    <td className="border border-green-200 px-3 py-2">
                                        <a
                                            target="_blank" href={`https://eticket.railway.gov.bd/booking/train/search?fromcity=Dhaka&tocity=Panchagarh&doj=${tomorrowDate}&class=S_CHAIR`}
                                            className="text-blue-500 hover:underline"
                                        >
                                            বুক করুন
                                        </a>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="border border-green-200 px-3 py-2 font-medium">পঞ্চগড় এক্সপ্রেস</td>
                                    <td className="border border-green-200 px-3 py-2">১১:৩০ রাত</td>
                                    <td className="border border-green-200 px-3 py-2">০৯:৫০ সকাল</td>
                                    <td className="border border-green-200 px-3 py-2">নেই</td>
                                    <td className="border border-green-200 px-3 py-2">
                                        <a
                                            target="_blank" href={`https://eticket.railway.gov.bd/booking/train/search?fromcity=Dhaka&tocity=Panchagarh&doj=${tomorrowDate}&class=S_CHAIR`}
                                            className="text-blue-500 hover:underline"
                                        >
                                            বুক করুন
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>

                {/* Individual Train Sections */}
                <section className="mb-8">
                    <div className="flex items-center mb-4">
                        <Train className="h-5 w-5 text-green-700 mr-2" />
                        <h2 className="text-xl font-bold text-green-800">বিস্তারিত ট্রেন তথ্য</h2>
                    </div>

                    {/* Ekota Express */}
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                        <h3 className="text-lg font-bold mb-3 text-green-700 border-b pb-2">একতা এক্সপ্রেস (৭০৫)</h3>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">বিস্তারিত সময়সূচী:</h4>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse">
                                    <thead>
                                        <tr className="bg-green-50">
                                            <th className="border border-green-200 px-3 py-2 text-left">স্টেশন</th>
                                            <th className="border border-green-200 px-3 py-2 text-left">আগমন</th>
                                            <th className="border border-green-200 px-3 py-2 text-left">প্রস্থান</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">ঢাকা</td>
                                            <td className="border border-green-200 px-3 py-2">-</td>
                                            <td className="border border-green-200 px-3 py-2">১০:১৫</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">জয়দেবপুর</td>
                                            <td className="border border-green-200 px-3 py-2">১০:৫৫</td>
                                            <td className="border border-green-200 px-3 py-2">১১:০০</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">টাঙ্গাইল</td>
                                            <td className="border border-green-200 px-3 py-2">১২:১০</td>
                                            <td className="border border-green-200 px-3 py-2">১২:১৫</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">পঞ্চগড়</td>
                                            <td className="border border-green-200 px-3 py-2">০৯:০০</td>
                                            <td className="border border-green-200 px-3 py-2">-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">টিকিটের মূল্য:</h4>
                            <ul className="bg-green-50 p-3 rounded-md">
                                <li className="flex justify-between mb-1">
                                    <span>স্নিগ্ধা (SNIGDHA):</span>
                                    <span className="font-medium">৳১৪২১</span>
                                </li>
                                <li className="flex justify-between mb-1">
                                    <span>শোভন চেয়ার (S_CHAIR):</span>
                                    <span className="font-medium">৳৭৪০</span>
                                </li>
                                <li className="flex justify-between mb-1">
                                    <span>এসি সিট (AC_S) – শীতাতপ নিয়ন্ত্রিত সাধারন আসন:</span>
                                    <span className="font-medium">৳১৭০২</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>এসি বার্থ (AC_B) – শীতাতপ নিয়ন্ত্রিত বার্থ (ঘুমানোর ব্যবস্থা):</span>
                                    <span className="font-medium">৳২৫৯৮</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Drutojan Express */}
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                        <h3 className="text-lg font-bold mb-3 text-green-700 border-b pb-2">দ্রুতযান এক্সপ্রেস (৭৫৭)</h3>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">বিস্তারিত সময়সূচী:</h4>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse">
                                    <thead>
                                        <tr className="bg-green-50">
                                            <th className="border border-green-200 px-3 py-2 text-left">স্টেশন</th>
                                            <th className="border border-green-200 px-3 py-2 text-left">আগমন</th>
                                            <th className="border border-green-200 px-3 py-2 text-left">প্রস্থান</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">ঢাকা</td>
                                            <td className="border border-green-200 px-3 py-2">-</td>
                                            <td className="border border-green-200 px-3 py-2">০৮:৪৫</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">জয়দেবপুর</td>
                                            <td className="border border-green-200 px-3 py-2">০৯:২৫</td>
                                            <td className="border border-green-200 px-3 py-2">০৯:৩০</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">টাঙ্গাইল</td>
                                            <td className="border border-green-200 px-3 py-2">১০:৪০</td>
                                            <td className="border border-green-200 px-3 py-2">১০:৪৫</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">পঞ্চগড়</td>
                                            <td className="border border-green-200 px-3 py-2">০৭:১০</td>
                                            <td className="border border-green-200 px-3 py-2">-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">টিকিটের মূল্য:</h4>
                            <ul className="bg-green-50 p-3 rounded-md">
                                <li className="flex justify-between mb-1">
                                    <span>স্নিগ্ধা (SNIGDHA):</span>
                                    <span className="font-medium">৳১৪২১</span>
                                </li>
                                <li className="flex justify-between mb-1">
                                    <span>শোভন চেয়ার (S_CHAIR):</span>
                                    <span className="font-medium">৳৭৪০</span>
                                </li>
                                <li className="flex justify-between mb-1">
                                    <span>এসি সিট (AC_S) – শীতাতপ নিয়ন্ত্রিত সাধারন আসন:</span>
                                    <span className="font-medium">৳১৭০২</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>এসি বার্থ (AC_B) – শীতাতপ নিয়ন্ত্রিত বার্থ (ঘুমানোর ব্যবস্থা):</span>
                                    <span className="font-medium">৳২৫৯৮</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Panchagarh Express */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-bold mb-3 text-green-700 border-b pb-2">পঞ্চগড় এক্সপ্রেস (৭৯৩)</h3>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">বিস্তারিত সময়সূচী:</h4>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse">
                                    <thead>
                                        <tr className="bg-green-50">
                                            <th className="border border-green-200 px-3 py-2 text-left">স্টেশন</th>
                                            <th className="border border-green-200 px-3 py-2 text-left">আগমন</th>
                                            <th className="border border-green-200 px-3 py-2 text-left">প্রস্থান</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">ঢাকা</td>
                                            <td className="border border-green-200 px-3 py-2">-</td>
                                            <td className="border border-green-200 px-3 py-2">১১:৩০</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">জয়দেবপুর</td>
                                            <td className="border border-green-200 px-3 py-2">১২:১০</td>
                                            <td className="border border-green-200 px-3 py-2">১২:১৫</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">টাঙ্গাইল</td>
                                            <td className="border border-green-200 px-3 py-2">০১:২৫</td>
                                            <td className="border border-green-200 px-3 py-2">০১:৩০</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-green-200 px-3 py-2">পঞ্চগড়</td>
                                            <td className="border border-green-200 px-3 py-2">০৯:৫০</td>
                                            <td className="border border-green-200 px-3 py-2">-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">টিকিটের মূল্য:</h4>
                            <ul className="bg-green-50 p-3 rounded-md">
                                <li className="flex justify-between mb-1">
                                    <span>স্নিগ্ধা (SNIGDHA):</span>
                                    <span className="font-medium">৳১৪২১</span>
                                </li>
                                <li className="flex justify-between mb-1">
                                    <span>শোভন চেয়ার (S_CHAIR):</span>
                                    <span className="font-medium">৳৭৪০</span>
                                </li>
                                <li className="flex justify-between mb-1">
                                    <span>এসি সিট (AC_S) – শীতাতপ নিয়ন্ত্রিত সাধারন আসন:</span>
                                    <span className="font-medium">৳১৭০২</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>এসি বার্থ (AC_B) – শীতাতপ নিয়ন্ত্রিত বার্থ (ঘুমানোর ব্যবস্থা):</span>
                                    <span className="font-medium">৳২৫৯৮</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* How to Buy Tickets */}
                <section className="mb-8 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                        <CreditCard className="h-5 w-5 text-green-700 mr-2" />
                        <h2 className="text-xl font-bold text-green-800 border-b pb-2">টিকিট কিভাবে কিনবেন</h2>
                    </div>

                    <p className="mb-4">আপনি নিম্নলিখিত মাধ্যমে টিকিট কিনতে পারেন:</p>

                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>
                            <span className="font-medium">বাংলাদেশ রেলওয়ের অফিসিয়াল ওয়েবসাইট:</span>
                            <Link href="https://eticket.railway.gov.bd" className="text-green-600 hover:underline ml-1 block sm:inline-block">
                                eticket.railway.gov.bd
                            </Link>
                        </li>
                        <li>
                            <span className="font-medium">নিকটস্থ রেলস্টেশন:</span>
                            <span className="text-gray-600 ml-1">সকাল ৯টা থেকে রাত ৮টা পর্যন্ত</span>
                        </li>
                        <li>
                            <span className="font-medium">মোবাইল অ্যাপ:</span>
                            <span className="text-gray-600 ml-1">বাংলাদেশ রেলওয়ে মোবাইল অ্যাপ</span>
                        </li>
                    </ul>

                    <div className="bg-yellow-50 p-3 rounded-md text-sm">
                        <p className="font-medium text-yellow-800">বিশেষ দ্রষ্টব্য:</p>
                        <p>যাত্রার তারিখের ১০ দিন আগে থেকে টিকিট কাটা যায়। জনপ্রিয় সময়ে যাত্রার জন্য আগে থেকেই টিকিট সংগ্রহ করুন।</p>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-8 bg-white p-4 rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold mb-4 text-green-800 border-b pb-2">উপসংহার</h2>

                    <p className="mb-3">
                        ঢাকা-পঞ্চগড় ট্রেন সার্ভিস দিন দিন জনপ্রিয় হয়ে উঠছে। এর প্রধান কারণগুলো হল সাশ্রয়ী মূল্য, আরামদায়ক যাত্রা এবং নিরাপত্তা।
                    </p>
                    <p className="mb-3">
                        বিশেষ করে দীর্ঘ দূরত্বের যাত্রায় ট্রেন অন্যান্য পরিবহন মাধ্যমের তুলনায় অনেক বেশি আরামদায়ক। এছাড়া, ট্রেনে বিভিন্ন শ্রেণীর আসন রয়েছে, যা যাত্রীদের তাদের বাজেট অনুযায়ী পছন্দ করার সুযোগ দেয়।
                    </p>
                    <p>
                        নিরবিঘ্ন যাত্রার জন্য আগে থেকেই পরিকল্পনা করুন এবং টিকিট সংগ্রহ করুন। শুভ যাত্রা!
                    </p>
                </section>

                {/* FAQs */}
                <section className="mb-8 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                        <HelpCircle className="h-5 w-5 text-green-700 mr-2" />
                        <h2 className="text-xl font-bold text-green-800 border-b pb-2">সাধারণ জিজ্ঞাসা</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="border-b pb-3">
                            <h3 className="font-semibold mb-2">কোন ট্রেনটি সবচেয়ে দ্রুত পৌঁছায়?</h3>
                            <p>দ্রুতযান এক্সপ্রেস সবচেয়ে কম সময়ে পঞ্চগড় পৌঁছায়। এটি ঢাকা থেকে পঞ্চগড় পর্যন্ত যাত্রায় প্রায় ১০ ঘণ্টা ২৫ মিনিট সময় নেয়।</p>
                        </div>

                        <div className="border-b pb-3">
                            <h3 className="font-semibold mb-2">স্নিগ্ধা এবং এসি ক্লাসের মধ্যে পার্থক্য কী?</h3>
                            <p>স্নিগ্ধা ক্লাসে রিক্লাইনিং সিট এবং বেশি জায়গা থাকে, কিন্তু এসি নাও থাকতে পারে। অন্যদিকে, এসি ক্লাসে এয়ার কন্ডিশনিং সুবিধা রয়েছে এবং আরও আরামদায়ক আসন ব্যবস্থা রয়েছে।</p>
                        </div>

                        <div className="border-b pb-3">
                            <h3 className="font-semibold mb-2">অনলাইনে টিকিট কাটার সময় কি আইডি কার্ড লাগবে?</h3>
                            <p>হ্যাঁ, অনলাইনে টিকিট কাটার সময় জাতীয় পরিচয়পত্র নম্বর বা পাসপোর্ট নম্বর প্রয়োজন হয়। যাত্রার সময় এই আইডি সাথে রাখা আবশ্যক।</p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">ট্রেনে কি খাবারের ব্যবস্থা আছে?</h3>
                            <p>হ্যাঁ, সব ইন্টারসিটি ট্রেনে খাবারের ব্যবস্থা রয়েছে। আপনি ট্রেনের ভিতরে খাবার কিনতে পারবেন, তবে ব্যস্ত সময়ে নিজের খাবার সাথে নেওয়া ভালো।</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-green-700 text-white p-5 rounded-lg shadow-sm text-center">
                    <h2 className="text-xl font-bold mb-3">টিকিট কাটুন এখনই!</h2>
                    <p className="mb-4">আরামদায়ক ও নিরাপদ যাত্রার জন্য আজই আপনার টিকিট বুক করুন।</p>
                    <Link
                        href="https://eticket.railway.gov.bd"
                        className="inline-flex items-center bg-white text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-100 transition-colors"
                    >
                        টিকিট বুক করুন
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </section>
            </main>

            <footer className="bg-gray-800 text-white p-4 text-center text-sm mt-8">

                <p className="mt-1">এই তথ্যগুলো শুধুমাত্র তথ্যমূলক উদ্দেশ্যে প্রদান করা হয়েছে। সর্বশেষ আপডেট জানতে বাংলাদেশ রেলওয়ের অফিসিয়াল ওয়েবসাইট দেখুন।</p>
            </footer>
        </div>
    );
};

export default TrainServices;