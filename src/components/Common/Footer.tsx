import Link from "next/link";
// import SocialIcons from "../SocialIcons";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-[#F0F3F8] dark:bg-primary-dark pt-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <Link href="/" className="text-3xl font-bold mb-4 md:mb-0">
                <span className="text-yellow-400">TRENDS</span>
                <span className="dark:text-white text-primary-light">INSIGHT</span>
              </Link>
            </div>
            <p className="text-prbg-primary-dark dark:text-white text-sm">
              Our goal is to help you get the most out of your business by
              creating custom software to automate your business and providing
              IT solutions for your business flow & marketing.
            </p>
            <div className="space-y-2">
              <h3 className="font-bold text-p text-lg text-primary dark:text-white">
                Social Contact
              </h3>
              {/* <SocialIcons /> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-primary text-lg dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-prbg-primary-dark dark:text-white hover:text-p"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-prbg-primary-dark dark:text-white hover:text-p"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-prbg-primary-dark dark:text-white hover:text-p"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-prbg-primary-dark dark:text-white hover:text-p"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-prbg-primary-dark dark:text-white hover:text-p"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-primary text-lg dark:text-white">
              Our services
            </h3>
            <ul className="space-y-2">
              <li className="text-prbg-primary-dark dark:text-white">
                Social Media Management (Posts)
              </li>
              <li className="text-prbg-primary-dark dark:text-white">
                Keyword Research And Optimization
              </li>
              <li className="text-prbg-primary-dark dark:text-white">
                On-Page SEO
              </li>
              <li className="text-prbg-primary-dark dark:text-white">
                Off-Page SEO
              </li>
              <li className="text-prbg-primary-dark dark:text-white">
                Local Business Listings Optimization
              </li>
              <li className="text-prbg-primary-dark dark:text-white">
                Email Marketing (Campaign Setup)
              </li>
              <li className="text-prbg-primary-dark dark:text-white">
                Flyers And Posters Design
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-primary text-lg dark:text-white">
              Contact info
            </h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Phone
                    className="text-prbg-primary-dark dark:text-white"
                    size={24}
                  />
                  <span className="text-prbg-primary-dark dark:text-white">
                    {" "}
                    Phone
                  </span>
                </h4>
                <p className="text-prbg-primary-dark dark:text-white">
                  (888) 887-5027
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Mail
                    className="text-prbg-primary-dark dark:text-white"
                    size={24}
                  />
                  <span className="text-prbg-primary-dark dark:text-white">
                    {" "}
                    Email
                  </span>
                </h4>
                <p className="text-prbg-primary-dark dark:text-white">
                  contact@website.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
