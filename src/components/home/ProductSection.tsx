'use client';
import Image from 'next/image';

const products = [
  { name: 'Milk Coffee', image: '/images/prod.png', background: '/images/product-back.jpg' },
  { name: 'Milk Tea', image: '/images/prod.png', background: '/images/product-back.jpg' },
  { name: 'Cardamom Tea', image: '/images/prod.png', background: '/images/product-back.jpg' },
  { name: 'Ginger Tea', image: '/images/prod.png', background: '/images/product-back.jpg' },
  { name: 'Hot Chocolate', image: '/images/prod.png', background: '/images/product-back.jpg' },
  { name: 'Ginger Milk Tea', image: '/images/prod.png', background: '/images/product-back.jpg' },
  { name: 'Masala Tea', image: '/images/prod.png', background: '/images/product-back.jpg' },
  { name: 'Strawberry Tea', image: '/images/prod.png', background: '/images/product-back.jpg' },
  { name: 'Lemongrass Tea', image: '/images/prod.png', background: '/images/product-back.jpg' },
  { name: 'Cinnamon Tea', image: '/images/prod.png', background: '/images/product-back.jpg' },
];

const ProductSection = () => {
  return (
    <section className="py-16 ">
      <div className="container">
        {/* Optional Section Title */}
        <h2 className="text-black text-3xl font-bold mb-8">Our Products</h2>

        {/* 4 columns per row */}
        <div className="grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative h-[250px] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${product.background})` }}
            >
              {/* Product name & "Shop Now" (top-left) */}
              <div className="absolute top-2 left-2 text-black font-semibold text-base space-y-1">
                <div>{product.name}</div>
                <div className="underline text-sm cursor-pointer">Shop Now</div>
              </div>

              {/* Product packaging (bottom-right) */}
              <div className="absolute bottom-2 ">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
