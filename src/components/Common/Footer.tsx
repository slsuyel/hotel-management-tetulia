import { CircleCheckBig } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
const footerData = [
  {
    title: "গুরুত্বপূর্ণ লিঙ্ক",
    links: [
      { label: "প্রধান উপদেষ্টার কার্যালয়", url: "https://cao.gov.bd/" },
      { label: "জনপ্রশাসন মন্ত্রণালয়", url: "https://www.mopa.gov.bd/" },
      { label: "জাতীয় তথ্য বাতায়ন", url: "https://www.bangladesh.gov.bd/" },
      { label: "সকল ই-সেবা", url: "https://www.eservices.gov.bd/" },
    ],
  },
  {
    title: "অন্যান্য",
    links: [
      { label: "বাংলাদেশ ফরম", url: "https://www.forms.gov.bd/" },
      { label: "পাসপোর্টের আবেদন", url: "https://www.passport.gov.bd/" },
      { label: "ই-চালান", url: "https://www.echallan.gov.bd/" },
      { label: "ভূমি সেবা", url: "https://www.land.gov.bd/" },
      
    ],
  },
  {
    title: "তথ্য বাতায়ন",
    links: [
      { label: "তেঁতুলিয়া উপজেলা", url: "https://www.tetulia.panchagarh.gov.bd/" },
      { label: "উপজেলা প্রশাসন তেঁতুলিয়া(ফেসবুক)", url: "https://www.facebook.com/unotetuliaofficial" },
      { label: "পঞ্চগড় জেলা", url: "https://www.panchagarh.gov.bd/" },
    ],
  },
]


export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerData.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="bg-primary text-white py-3 px-4 rounded-md mb-5">
                <h3 className="font-medium text-center">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx} className="flex items-center group">
                    <CircleCheckBig size={18} className="text-emerald-500 mr-2 flex-shrink-0" />
                    <Link
                      href={link.url} target="_blank"
                      className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 group-hover:translate-x-1 inline-block transform "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom footer section */}
     <div className="bg-white border-t">
        <div className="container mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <ul className="list-none p-0">
                <span className="font-bold"> পরিকল্পনা ও বাস্তবায়নে:</span> <br />
                আফরোজ শাহীন খসরু<br />
                উপজেলা নির্বাহী অফিসার, <br />
                তেঁতুলিয়া, পঞ্চগড়
              </ul>
            </div>
  
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <ul className="list-none p-0">
                <li className="flex justify-center items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/1200px-Government_Seal_of_Bangladesh.svg.png"
                    alt="bangladesh"
                    className="w-[50px] h-auto"
                    loading="lazy"
                  />
                  <span className="px-4">
                    <span className="font-bold"> ব্যবস্থাপনা ও তত্ত্বাবধানে:</span> <br />
                    উপজেলা প্রশাসন,তেঁতুলিয়া।
                  </span>
                </li>
              </ul>
            </div>
  
            <div className="w-full md:w-1/3">
              <ul className="list-none p-0">
                <li className="flex justify-center items-center">
                  <img
                    src="https://softwebsys.com/fav.png"
                    alt="sys"
                    className="w-[40px] h-auto"
                    loading="lazy"
                  />
                  <span className="px-4">
                    <span className="font-bold"> কারিগরি সহায়তায়:</span> <br />
                    <a
                      href="https://softwebsys.com/"
                      target="_blank"
                      className="no-underline text-black hover:text-gray-600"
                    >
                      সফটওয়েব সিস্টেম সল্যুশন
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
     </div>
    </footer>
  )
}
