'use client';
import Image from 'next/image';

const FoodBanner = () => {
  return (
    <section className="relative w-full h-[400px]">
      <Image
        src="/images/Banner.jpg"
        alt="Premium Premixes Banner"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
};

export default FoodBanner;
