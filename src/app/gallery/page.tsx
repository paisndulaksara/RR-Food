'use client';
import GalleryBanner from "../../components/Gallery/GalleryBanner";

const galleryImages = [
  'https://images.unsplash.com/photo-1588854337221-4f32a6f4ca4c',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  'https://images.unsplash.com/photo-1588582438583-b2e7fe3dcb84',
  'https://images.unsplash.com/photo-1601317856687-e06a3cbe22c1',
  'https://images.unsplash.com/photo-1514996937319-344454492b37',
  'https://images.unsplash.com/photo-1600047509662-37f6a5cfb924',
  'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd',
  'https://images.unsplash.com/photo-1532634993-15cb8fda4b66',
  'https://images.unsplash.com/photo-1584467735871-1a9c8e363c7d',
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <GalleryBanner />

      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Gallery</h1>
            <p className="text-lg">
              Explore highlights from our product showcases, CSR initiatives, and community events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((url, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={url}
                  alt={`Gallery Image ${idx + 1}`}
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
