'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import {
  FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX, FiMoon, FiSun,
} from 'react-icons/fi';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
 

  const textColor = isHome && !scrolled ? 'text-white' : 'text-black dark:text-white';
  const backgroundClass = isHome && !scrolled ? 'bg-transparent' : 'bg-white dark:bg-black';

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAboutDropdown(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setAboutDropdown(false);
    }, 150);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
  
    if (storedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // default to dark
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);
  
  const toggleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
  
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className={`relative pt-6 pb-7 ${backgroundClass}`}>
        <div className="container flex justify-between items-start relative">
          {/* Mobile Menu Button */}
          <div className="lg:hidden absolute right-4 top-4 z-20">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} className={textColor} /> : <FiMenu size={24} className={textColor} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex gap-4 text-sm font-normal uppercase pt-2 ${textColor}`}>
            <Link href="/">HOME</Link>
            <span>|</span>
            <Link href="/products">PRODUCTS</Link>
            <span>|</span>

            {/* About RR Dropdown */}
            <div
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              className="relative"
            >
              <span className="hover:text-[#caa465] cursor-pointer flex items-center gap-1">
                ABOUT RR
                <svg className={`h-4 w-4 transition-transform ${aboutDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {aboutDropdown && (
                <div className="absolute top-7 left-0 bg-white dark:bg-gray-800 shadow-lg rounded w-40 text-left z-50">
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">About Us</Link>
                  <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Team</Link>
                  <Link href="/about/innovation" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Innovation</Link>
                </div>
              )}
            </div>

            <span>|</span>
            <Link href="/csr">CSR</Link>
            <span>|</span>
            <Link href="/gallery">Gallery</Link>
            <span>|</span>
            <Link href="/contactus">CONTACT</Link>
          </nav>

          {/* Desktop Icons */}
          <div className={`hidden lg:flex gap-6 items-center text-base pt-2 ${textColor}`}>
            <Link href="/login">LOGIN</Link>
            <FiSearch className="cursor-pointer text-lg" />
            <FiHeart className="cursor-pointer text-lg" />
            <FiShoppingCart className="cursor-pointer text-lg" />
            <button onClick={toggleDarkMode}>
              {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
            </button>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-2 z-10 flex flex-col items-center gap-1">
            <Image
              src="/images/logo.png"
              alt="RR Foods Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
            <span className={`${textColor} text-xs mt-1`}>SINCE 2007</span>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className={`lg:hidden absolute top-[120px] left-0 right-0 py-4 z-40 flex flex-col items-center gap-4 uppercase text-sm border-t border-[#c9a566]/60 ${backgroundClass}`}>
            <Link href="/" className={textColor}>HOME</Link>
            <Link href="/products" className={textColor}>PRODUCTS</Link>

            {/* Mobile Dropdown */}
            <button onClick={() => setAboutDropdown(prev => !prev)} className={`flex items-center gap-1 ${textColor}`}>
              ABOUT RR
              <svg className={`h-4 w-4 transition-transform ${aboutDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {aboutDropdown && (
              <div className="flex flex-col items-center gap-2 -mt-2">
                <Link href="/about" className={textColor}>About Us</Link>
                <Link href="/about/team" className={textColor}>Team</Link>
                <Link href="/about/innovation" className={textColor}>Innovation</Link>
              </div>
            )}

            <Link href="/csr" className={textColor}>CSR</Link>
            <Link href="/gallery" className={textColor}>GALLERY</Link>
            <Link href="/contactus" className={textColor}>CONTACT</Link>
            <Link href="/login" className={textColor}>LOGIN</Link>
            <button onClick={toggleDarkMode} className={textColor}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </div>

      {/* Gradient border bottom */}
      <div className="absolute top-[80px] left-0 right-0 h-[1px] bg-[#c9a566]/60 z-0">
        <div className="absolute left-0 top-0 h-full w-[80px] bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 h-full w-[80px] bg-gradient-to-l from-black to-transparent" />
      </div>
    </header>
  );
};

export default Header;
