'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getHomeData, ProductBanner } from '@/api/home';

const FoodBanner = () => {
  const [banner, setBanner] = useState<ProductBanner | null>(null);

  useEffect(() => {
    getHomeData()
      .then((data) => setBanner(data.product_banner))
      .catch((err) => console.error('Product Banner Error:', err));
  }, []);

  if (!banner) return null;

  return (
    <section className="relative w-full h-[400px] sm:h-[500px]">
      {/* Desktop Image */}
      <div className="hidden sm:block absolute inset-0">
        <Image
          src={banner.desktop_image}
          alt="Premium Premixes Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Mobile Image */}
      <div className="block sm:hidden absolute inset-0">
        <Image
          src={banner.mobile_image}
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
