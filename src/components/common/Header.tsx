'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Make the header absolutely positioned at the top
    <header className="absolute top-0 left-0 w-full z-50 pt-6">
      <div className="container flex justify-between items-start relative">
        {/* Mobile Menu Icon */}
        <div className="lg:hidden absolute right-4 top-4 z-20 text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Left Nav */}
        <nav className="hidden lg:flex gap-4 text-sm text-white font-normal uppercase pt-2">
          <Link href="/">HOME</Link>
          <span>|</span>
          <Link href="/products">PRODUCTS</Link>
          <span>|</span>
          <Link href="/vending-machine">VENDING MACHINE</Link>
          <span>|</span>
          <Link href="/about">ABOUT US</Link>
          <span>|</span>
          <Link href="/contactus">CONTACT</Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden lg:flex gap-6 items-center text-white text-base pt-2">
          <Link href="/login">LOGIN</Link>
          <FiSearch className="cursor-pointer text-lg" />
          <FiHeart className="cursor-pointer text-lg" />
          <FiShoppingCart className="cursor-pointer text-lg" />
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-2 z-10 flex flex-col items-center gap-1">
          <Image
            src="/images/logo.png"
            alt="RR Foods Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
          <span className="text-white text-xs mt-1">SINCE 2007</span>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[120px] left-0 right-0 bg-black py-4 z-40 flex flex-col items-center gap-4 text-white uppercase text-sm border-t border-[#c9a566]/60">
          <Link href="/">HOME</Link>
          <Link href="/products">PRODUCTS</Link>
          <Link href="/vending-machine">VENDING MACHINE</Link>
          <Link href="/about">ABOUT US</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/login">LOGIN</Link>
        </div>
      )}

      {/* Bottom Border with fade (optional) */}
      <div className="absolute top-[80px] left-0 right-0 h-[1px] bg-[#c9a566]/60 z-0">
        <div className="absolute left-0 top-0 h-full w-[80px] bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 h-full w-[80px] bg-gradient-to-l from-black to-transparent" />
      </div>
    </header>
  );
};

export default Header;
