'use client';
import Image from 'next/image';

const FoodBanner = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px]">
      {/* Desktop Image */}
      <div className="hidden sm:block absolute inset-0">
        <Image
          src="/images/Banner.jpg"
          alt="Premium Premixes Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Mobile Image */}
      <div className="block sm:hidden absolute inset-0">
        <Image
          src="/images/banner-mobile.png"
          alt="Mobile Banner"
          fill
          priority
          className="object-cover object-top"
        />
      </div>
    </section>
  );
};

export default FoodBanner;
