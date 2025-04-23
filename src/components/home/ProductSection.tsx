'use client';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { name: 'RR Cafe',           slug: 'rr-cafe',            image: '/images/prod.png',     background: '/images/product-back-01.jpg' },
  { name: 'RR Tea',            slug: 'rr-tea',             image: '/images/prod02.png',   background: '/images/product-back-02.jpg' },
  { name: 'RR Ginger Plain Tea', slug: 'rr-ginger-plain-tea', image: '/images/prod04.png', background: '/images/product-back-04.jpg' },
  { name: 'RR Hot Chocolate',  slug: 'rr-hot-chocolate',   image: '/images/prod05.png',   background: '/images/product-back-05.jpg' },
  { name: 'RR Cardamom Tea',   slug: 'rr-cardamom-tea',    image: '/images/prod03.png',   background: '/images/product-back-03.jpg' },
  { name: 'Ginger Milk Tea',   slug: 'ginger-milk-tea',    image: '/images/prod06.png',   background: '/images/product-back-06.jpg' },
  { name: 'RR Masala Tea',     slug: 'rr-masala-tea',      image: '/images/prod07.png',   background: '/images/product-back-07.jpg' },
  { name: 'RR Strawberry Tea', slug: 'rr-strawberry-tea',  image: '/images/prod08.png',   background: '/images/product-back-08.jpg' },
  { name: 'Cinnamon Tea',      slug: 'cinnamon-tea',        image: '/images/prod10.png',   background: '/images/product-back-10.jpg' },
  { name: 'Lemongrass Tea',    slug: 'lemongrass-tea',     image: '/images/prod09.png',   background: '/images/product-back-09.jpg' },
];

export default function ProductSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-black text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-4 gap-4">
          {products.map(({ name, slug, image, background }) => (
            <Link key={slug} href={`/products/${slug}`} className="block">
              <div
                className="relative h-[250px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${background})` }}
              >
                <div className="absolute top-2 left-2 text-black font-semibold text-base space-y-1">
                  <div>{name}</div>
                  <div className="underline text-sm">Shop Now</div>
                </div>
                <div className="absolute bottom-2 right-2">
                  <Image
                    src={image}
                    alt={name}
                    width={180}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
