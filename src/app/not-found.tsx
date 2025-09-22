"use client";

import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  const suggestedLinks = [
    { title: "হোম পেইজ", href: "/" },
    { title: "হোটেল তালিকা", href: "/residential-hotel" },
    { title: "পর্যটন স্থানসমূহ", href: "/tourism" },
    { title: "যোগাযোগ করুন", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="p-6 sm:p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            পাতাটি খুঁজে পাওয়া যায়নি
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            আপনি যে পাতাটি খুঁজছেন সেটি বিদ্যমান নেই, অপসারণ করা হয়েছে, নাম
            পরিবর্তন করা হয়েছে অথবা অস্থায়ীভাবে অনুপলব্ধ।
          </p>
        </div>

        {/* Search box */}
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="আপনি কী খুঁজছেন?"
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <button
              type="submit"
              className="absolute right-3 top-2.5 bg-primary text-white px-3 py-1 rounded-md hover:bg-secondary transition-colors"
            >
              খুঁজুন
            </button>
          </form>
        </div>

        {/* Suggested links */}
        <div className="mb-8 hidden">
          <h3 className="text-lg font-medium text-gray-800 mb-3 text-center">
            আপনি যেতে পারেন
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {suggestedLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-emerald-200 transition-colors text-center"
              >
                {index === 0 ? (
                  <Home className="h-6 w-6 text-primary mb-2" />
                ) : (
                  <div className="h-6 w-6 flex items-center justify-center text-primary mb-2">
                    {index + 1}
                  </div>
                )}
                <span className="text-gray-700">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-secondary transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            হোম পেইজে ফিরে যান
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            আগের পাতায় ফিরুন
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          প্রশ্ন আছে?{" "}
          <Link
            href="/contact-us"
            className="text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            আমাদের সাথে যোগাযোগ করুন
          </Link>
        </p>
      </div>
    </div>
  );
}
