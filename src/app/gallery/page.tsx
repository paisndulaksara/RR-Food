 /* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import GalleryBanner from '@/components/Gallery/GalleryBanner';
import { getGalleryData, GalleryImage } from '@/api/gallery';

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getGalleryData();
        setImages(data.images);
        setTitle(data.title);
        setDescription(data.description);
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <GalleryBanner />

      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div key={img.id || idx} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={img.path_url}
                  alt={img.alt_text || `Gallery Image ${idx + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
