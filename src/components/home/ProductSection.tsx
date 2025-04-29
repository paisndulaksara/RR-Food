'use client';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { name: 'RR Cafe', slug: 'rr-cafe', image: '/images/prod.png' },
  { name: 'RR Tea', slug: 'rr-tea', image: '/images/prod02.png' },
  { name: 'RR Ginger Plain Tea', slug: 'rr-ginger-plain-tea', image: '/images/prod04.png' },
  { name: 'RR Hot Chocolate', slug: 'rr-hot-chocolate', image: '/images/prod05.png' },
  { name: 'RR Cardamom Tea', slug: 'rr-cardamom-tea', image: '/images/prod03.png' },
  { name: 'Ginger Milk Tea', slug: 'ginger-milk-tea', image: '/images/prod06.png' },
  { name: 'RR Masala Tea', slug: 'rr-masala-tea', image: '/images/prod07.png' },
  { name: 'RR Strawberry Tea', slug: 'rr-strawberry-tea', image: '/images/prod08.png' },
  { name: 'Cinnamon Tea', slug: 'cinnamon-tea', image: '/images/prod10.png' },
  { name: 'Lemongrass Tea', slug: 'lemongrass-tea', image: '/images/prod09.png' },
];



export default function ProductSection() {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto">
        <h2 className="text-black dark:text-white text-3xl font-bold mb-12 text-center">Our Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map(({ name, slug, image }) => (
            <Link key={slug} href={`/products/${slug}`} className="flex flex-col items-center group">
              
              {/* Card */}
              <div className="relative w-full rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition">
                
                {/* Black animated overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="h-[75%] group-hover:h-full bg-black transition-all duration-500 ease-in-out" />
                  <div className="h-[25%] bg-[#f0f0f0]" />
                </div>

                {/* Image on top */}
                <div className="relative z-10 flex justify-center items-center p-6">
                  <Image
                    src={image}
                    alt={name}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product title and shop now */}
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-black dark:text-white group-hover:underline">
                  {name}
                </h4>
                <div className="text-sm text-gray-400 dark:text-gray-500 group-hover:underline">
                  Shop Now
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
