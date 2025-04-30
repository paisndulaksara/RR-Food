'use client';
import Image from 'next/image';

const awards = [
  { title: 'National Brand Excellence 2024', src: '/images/Untitled-11.png' },
  { title: 'National Industry Excellence 2023', src: '/images/Untitled-5.png' },
  { title: 'Best Stall Winner - Profood 2023', src: '/images/Untitled-6.png' },
  { title: 'Entrepreneurial Excellence 2024', src: '/images/Untitled-8.png' },
  { title: 'People\'s Excellence Awards 2024', src: '/images/Untitled-9.png' },
  { title: 'Pinnacle Sri Lanka 2024', src: '/images/Untitled-10.png' },
];

export default function AboutAwards() {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
          Awards Recognition
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <div className="relative h-[320px] w-full overflow-hidden rounded">
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
      </div>
    </section>
  );
}
