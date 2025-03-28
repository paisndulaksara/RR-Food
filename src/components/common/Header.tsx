 'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);

  // Text color: white for home, black otherwise
  const textColor = isHome ? 'text-white' : 'text-black';
  // Background: transparent on home, white otherwise
  const headerBg = isHome ? 'bg-transparent' : 'bg-white';
  // Use fixed header so it overlays the content (and doesn't push your slider down)
  const headerPosition = 'fixed top-0';

  return (
    <header className={`${headerPosition} left-0 w-full z-50 pt-6 ${headerBg}`}>
      <div className="container flex justify-between items-start relative">
        {/* Mobile Menu Icon */}
        <div className="lg:hidden absolute right-4 top-4 z-20">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX size={24} className={textColor} />
            ) : (
              <FiMenu size={24} className={textColor} />
            )}
          </button>
        </div>

        {/* Desktop Left Nav */}
        <nav className={`hidden lg:flex gap-4 text-sm font-normal uppercase pt-2 ${textColor}`}>
          <Link href="/">HOME</Link>
          <span>|</span>
          <Link href="/products">PRODUCTS</Link>
          
          <span>|</span>
          <Link href="/about">ABOUT US</Link>
          <span>|</span>
          <Link href="/contactus">CONTACT</Link>
        </nav>

        {/* Desktop Icons */}
        <div className={`hidden lg:flex gap-6 items-center text-base pt-2 ${textColor}`}>
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
          <span className="text-xs mt-1 text-white">SINCE 2007</span>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <div
          className={`lg:hidden absolute top-[120px] left-0 right-0 py-4 z-40 flex flex-col items-center gap-4 uppercase text-sm border-t border-[#c9a566]/60 ${
            isHome ? 'bg-black' : 'bg-white'
          }`}
        >
          <Link href="/" className={textColor}>
            HOME
          </Link>
          <Link href="/products" className={textColor}>
            PRODUCTS
          </Link>
         
          <Link href="/about" className={textColor}>
            ABOUT US
          </Link>
          <Link href="/contactus" className={textColor}>
            CONTACT
          </Link>
          <Link href="/login" className={textColor}>
            LOGIN
          </Link>
        </div>
      )}

      {/* Bottom Border with fade */}
      <div className="absolute top-[80px] left-0 right-0 h-[1px] bg-[#c9a566]/60 z-0">
        <div className="absolute left-0 top-0 h-full w-[80px] bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 h-full w-[80px] bg-gradient-to-l from-black to-transparent" />
      </div>
    </header>
  );
};

export default Header;
