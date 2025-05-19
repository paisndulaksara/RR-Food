'use client';
import Image from 'next/image';
import { useState } from 'react'; 
import GalleryModal from '../GalleryModal';

const certificates = [
  { title: 'Industry Galle 2023', src: '/images/Untitled-7.png' },
  { title: 'National Industry Award 2022', src: '/images/Untitled-4.png' },
  { title: 'ISO 45001:2018', src: '/images/ISO 450012018-1.png' },
  { title: 'Tea Board Registration', src: '/images/TEA BORAD 2024.12.31-1.png' },
  { title: 'ISO 22000:2018', src: '/images/FINAL CERT-RR FOODS LANKA (PVT) LTD 22000 (1)-1.png' },
  { title: 'GMP Certified', src: '/images/FINAL CERT-RR FOODS LANKA (PVT) LTD GMP (1)-1.png' },
  { title: 'HACCP Certified', src: '/images/FINAL CERT-RR FOODS LANKA (PVT) LTD HACCP (1)-1.png' },
  { title: 'ISO 14001:2015', src: '/images/ISO 140012015-1.png' },
];

export default function AboutCertificates() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
          Awards & Certificates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 cursor-pointer"
              onClick={() => setOpenIndex(index)}
            >
              <div className="relative h-[300px] w-full overflow-hidden rounded">
                <Image
                  src={item.src}
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
            images={certificates}
            openIndex={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </div>
    </section>
  );
}
