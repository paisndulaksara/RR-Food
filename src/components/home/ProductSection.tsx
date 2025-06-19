'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProducts, Product } from '@/api/products'; // Assuming your API types are defined here
import Spinner from '@/components/ui/Spinner'; // Your Spinner component

export default function ProductSection() {
  // State is now much simpler: just premixes and loading.
  const [premixes, setPremixes] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We only care about premixes from the API call.
    getAllProducts()
      .then((data) => {
        setPremixes(data.premixes.products || []);
      })
      .catch((err) => console.error("Failed to fetch premixes:", err))
      .finally(() => setLoading(false));
  }, []); // The empty array means this effect runs once on mount.

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-black dark:text-white text-3xl font-bold mb-12 text-center">Our Premix Products</h2>
        
        {loading ? (
          // If loading, show a spinner in the center.
          <div className="flex justify-center items-center" style={{ minHeight: '40vh' }}>
            <Spinner text="Loading Products..." />
          </div>
        ) : (
          // When done loading, show the grid of premixes.
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {premixes.map((item) => (
              <Link key={item.id} href={`/products/${item.slug}`}>
                <div className="flex flex-col items-center group">
                  <div className="relative w-full rounded-lg shadow-lg overflow-hidden group-hover:shadow-2xl transition">
                    <div className="absolute inset-0 z-0">
                      <div className="h-[75%] group-hover:h-full dark:bg-black transition-all duration-500 ease-in-out" />
                      <div className="h-[25%] dark:bg-[#424242] bg-[#ececec]" />
                    </div>
                    <div className="relative z-10 flex justify-center items-center p-4 h-[220px]">
                      <Image
                        src={item.feature_image_url || '/images/fallback.jpg'} // Data from API
                        alt={item.name}
                        width={180}
                        height={180}
                        className="object-contain"
                      />
                    </div>
                  </div>
                
                  <div className="mt-4 text-center">
                    <h4 className="text-lg font-semibold text-black dark:text-white group-hover:text-[#caa465] transition-colors duration-300">
                      {item.name}
                    </h4>
                    <div className="text-sm text-gray-400 dark:text-gray-500 group-hover:underline">
                      Shop Now
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}