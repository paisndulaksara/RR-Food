"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaCcAmex,
  FaCcVisa,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => { 

  return (
    <footer className="bg-white dark:bg-black py-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT COLUMN: RR FOOD & SERVICES */}
        <div className="px-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold uppercase text-black dark:text-white mb-4">
                RR FOOD
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-black dark:text-white hover:text-[#e12c43] transition"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-black dark:text-white hover:text-[#e12c43] transition"
                  >
                    PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vending-machine"
                    className="text-black dark:text-white hover:text-[#e12c43] transition"
                  >
                    VENDING MACHINE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/premixes"
                    className="text-black dark:text-white hover:text-[#e12c43] transition"
                  >
                    PREMIXES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-black dark:text-white hover:text-[#e12c43] transition"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase text-black dark:text-white mb-4">
                SERVICES
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-black dark:text-white hover:text-[#e12c43] transition"
                  >
                    SITEMAP
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black dark:text-white hover:text-[#e12c43] transition"
                  >
                    PRIVACY POLICY
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black dark:text-white hover:text-[#e12c43] transition"
                  >
                    YOUR ACCOUNT
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black dark:text-white hover:text-[#e12c43] transition"
                  >
                    ADVANCED SEARCH
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black dark:text-white hover:text-[#e12c43] transition"
                  >
                    TERM & CONDITION
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black dark:text-white hover:text-[#e12c43] transition"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: Contact Details */}
        <div className="px-4 text-black dark:text-white text-sm space-y-4">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-[#c9a566]" />
            <div>
              <span className="font-bold">Address</span>
              <br />
              123 RR Street, Coffee City, CA
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="mt-1 text-[#c9a566]" />
            <div>
              <span className="font-bold">Phone</span>
              <br />
              +1 555-1234
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaClock className="mt-1 text-[#c9a566]" />
            <div>
              <span className="font-bold">Open Hours</span>
              <br />
              Monday – Friday: 09:00 - 17:30
              <br />
              Saturday: 10:00 – 14:00
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaEnvelope className="mt-1 text-[#c9a566]" />
            <div>
              <span className="font-bold">Email</span>
              <br />
              info@rrfoods.com
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Map */}
        <div className="px-4">
          <div className="w-full h-[200px] mb-3 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126820.9460995602!2d79.82432457988513!3d6.715897864469063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae247924f09c991%3A0x8aa711e9fa39acc0!2s32%20Jayathilaka%20Mawatha%2C%20Panadura!5e0!3m2!1sen!2slk!4v1695298233488!5m2!1sen!2slk"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      {/* Bottom Row */}
      <div className="container flex flex-col md:flex-row items-center justify-between mt-6 text-xs text-gray-500">
        {/* LEFT: Social icons */}
        <div className="flex gap-4 mb-2 md:mb-0">
          <FaFacebookF className="hover:text-[#e12c43] transition text-base" />
          <FaTwitter className="hover:text-[#e12c43] transition text-base" />
          <FaInstagram className="hover:text-[#e12c43] transition text-base" />
          <FaLinkedinIn className="hover:text-[#e12c43] transition text-base" />
          <FaPinterestP className="hover:text-[#e12c43] transition text-base" />
        </div>

        {/* CENTER: Copyright */}
        <div className="text-center mb-2 md:mb-0">
          © {new Date().getFullYear()} RR Foods - All Rights Reserved
        </div>

        {/* RIGHT: Payment icons */}
        <div className="flex gap-4">
          <FaCcAmex size={28} className="hover:text-[#e12c43] transition" />
          <FaCcVisa size={28} className="hover:text-[#e12c43] transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
