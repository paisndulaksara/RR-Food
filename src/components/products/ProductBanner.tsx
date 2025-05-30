'use client';
import Image from 'next/image';

export default function ProductBanner() {
  return (
    <section className="relative w-full h-[250px] mt-20 sm:mt-0 sm:h-[400px] overflow-hidden flex items-center">

      {/* Desktop Banner */}
      <div className="hidden sm:block absolute inset-0">
        <Image
          src="/images/Topbanner.jpg"
          alt="Products Banner"
          fill
          className="object-contain"
        />
      </div>

      {/* Mobile Banner */}
      <div className="block sm:hidden absolute inset-0">
        <Image
          src="/images/Topbanner-mobile.jpg"
          alt="Products Banner Mobile"
          fill
          className="object-contain"
        />
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container px-4 text-center sm:text-left">
          <h4 className="text-white text-lg sm:text-xl font-semibold mb-1">RR Foods</h4>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">Products</h1>
          <p className="text-white text-xs sm:text-sm">HOME &gt; PRODUCTS</p>
        </div>
      </div>
    </section>
  );
}
