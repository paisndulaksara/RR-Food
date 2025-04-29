"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaCcAmex,
  FaCcVisa,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black   border-t border-gray-200 py-8">
      {/* Top Row: 3 Columns with vertical dividers on md+ screens */}
      <div className="container grid grid-cols-1 md:grid-cols-3 md:divide-x divide-gray-300 gap-8  border-b border-gray-200">
        {/* LEFT COLUMN: RR FOOD & SERVICES side by side */}
        <div className="px-4 border-b ">
          <div className="grid grid-cols-2 gap-8">
            {/* RR FOOD */}
            <div>
              <h4 className="font-bold uppercase text-black dark:text-white mb-4">RR FOOD</h4>
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

            {/* SERVICES */}
            <div>
              <h4 className="font-bold uppercase text-black dark:text-white mb-4">SERVICES</h4>
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

        {/* MIDDLE COLUMN: Logo + Social Icons */}
        <div className="px-4 flex flex-col items-center">
          <Image
            src="/images/logo.png"
            alt="RR Foods Logo"
            width={130}
            height={130}
            className="mx-auto mb-4"
          />
          <div className="flex gap-4 text-gray-600">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#e12c43] transition text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-[#e12c43] transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#e12c43] transition text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-[#e12c43] transition text-xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="hover:text-[#e12c43] transition text-xl"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Map */}
        <div className="px-4">
          <div className="w-full h-[200px] mb-3 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126820.9460995602!2d79.82432457988513!3d6.715897864469063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae247924f09c991%3A0x8aa711e9fa39acc0!2s32%20Jayathilaka%20Mawatha%2C%20Panadura!5e0!3m2!1sen!2slk!4v1695298233488!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom Row: Copyright (left) + Payment Icons (right) */}
      <div className="container flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 mt-4">
        <div className="mb-2 md:mb-0">
          © 2023 RR Foods - All Rights Reserved
        </div>
        <div className="flex gap-4 text-gray-600">
          <FaCcAmex size={32} className="hover:text-[#e12c43] transition" />
          <FaCcVisa size={32} className="hover:text-[#e12c43] transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
