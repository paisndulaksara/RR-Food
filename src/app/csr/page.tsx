'use client';

import { useEffect, useState } from 'react';
import CsrBanner from '@/components/Csr/CsrBanner';
import { getCsrData, CsrData } from '@/api/csr';

export default function CSRPage() {
  const [data, setData] = useState<CsrData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCsrData()
      .then((res) => setData(res))
      .catch((err) => console.error('CSR Fetch Error:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!data) return <p className="text-center py-20 text-red-600">No data available.</p>;

  return (
    <>
      <CsrBanner />

      {/* Static Intro Section (Always on top) */}
      <section className="  bg-white dark:bg-black text-black dark:text-white px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Corporate Social Responsibility
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            We are committed to making a positive impact on our community and the environment.
            Stay tuned for updates about our CSR initiatives.
          </p>
        </div>
      </section>

      {/* CSR Title + Images Gallery */}
      <section className="pb-20 px-4 bg-white dark:bg-black text-black dark:text-white">
        <div className="container mx-auto">
          {/* Top Title from API */}
          <h2 className="text-2xl font-semibold mb-8 text-left">{data.title}</h2>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.images.map((img) => (
              <div key={img.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition">
                <img
                  src={img.path_url}
                  alt={img.alt_text}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
