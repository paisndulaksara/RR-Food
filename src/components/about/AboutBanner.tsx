'use client';
import Image from 'next/image';

const AboutBanner = () => {
  return (
    <section className="relative w-full h-[450px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Topbanner.jpg"  // your background image path
        alt="About Banner"
        fill
        priority
        className="object-contain"
      />

      {/* Optional Overlay for better text contrast */}
      <div className="absolute inset-0 " />

      {/* Text Content on the left side */}
      <div className="absolute left-0 top-0 w-full h-full flex items-center">
        <div className="container px-4">
          <h4 className="text-white text-xl font-semibold mb-1">RR Foods</h4>
          <h1 className="text-white text-4xl font-bold mb-2">About</h1>
          <p className="text-white text-sm">
            HOME &gt; ABOUT US
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
