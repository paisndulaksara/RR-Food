'use client';
import Image from 'next/image';

const BusinessCards = () => {
  return (
    <section className="py-16 bg-white dark:bg-black">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* RR Foods Lanka */}
        <div className="bg-[#f5f5f5] dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md text-center">
          <Image
            src="/images/about2.jpg"
            alt="RR Foods Lanka"
            width={600}
            height={300}
            className="rounded-lg object-cover w-full h-60 mb-6"
          />
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">
            RR Foods Lanka
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            RR Foods Lanka creates excellence in the manufacturing and distribution of
            high-end blends based on milk powder, delivering premium products that add
            taste and nutrition to everyday living.
          </p>
        </div>

        {/* RR Exports and Imports */}
        <div className="bg-[#f5f5f5] dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md text-center">
          <Image
            src="/images/about-1.jpg"
            alt="RR Exports and Imports"
            width={600}
            height={300}
            className="rounded-lg object-cover w-full h-60 mb-6"
          />
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">
            RR Exports and Imports
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            RR Exports and Imports is dedicated to the international export of premium
            Sri Lankan products, presenting the best of our regional craftsmanship to
            the world and showcasing Sri Lankan quality on a global scale.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default BusinessCards;
