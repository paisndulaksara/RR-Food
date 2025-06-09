'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface InnovationImage {
  id: number;
  path_url: string;
  alt_text: string;
}

interface InnovationData {
  title: string;
  description: string;
  images: InnovationImage[];
}

export default function ProductInnovation() {
  const [data, setData] = useState<InnovationData | null>(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/innovation`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.error('Error loading innovation:', err));
  }, []);

  return (
    <section className="pb-16 bg-white dark:bg-black text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">
          {data?.title || 'Product Innovation'}
        </h2>

        {/* Description */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 dark:text-white leading-relaxed text-sm md:text-base mb-10 whitespace-pre-line">
          {data?.description}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data?.images.map((img) => (
            <div key={img.id} className="rounded shadow overflow-hidden">
              <Image
                src={img.path_url}
                alt={img.alt_text}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
