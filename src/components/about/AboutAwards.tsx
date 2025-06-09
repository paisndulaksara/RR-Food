'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GalleryModal from '../GalleryModal';
import { getAboutData } from '@/api/about';

interface Award {
  id: number;
  title: string;
  image_url: string;
}

export default function AboutAwards() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    getAboutData().then((data) => setAwards(data.awards || []));
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
          Awards Recognition
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((item, index) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 cursor-pointer"
              onClick={() => setOpenIndex(index)}
            >
              <div className="relative h-[320px] w-full overflow-hidden rounded">
                <Image
                  src={item.image_url}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-center text-black dark:text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {openIndex !== null && (
          <GalleryModal
            images={awards.map((a) => ({ title: a.title, src: a.image_url }))}
            openIndex={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </div>
    </section>
  );
}
