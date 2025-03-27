'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
// Import the Swiper type
import { Swiper as SwiperClass } from 'swiper';

interface ProductDetailProps {
  productSlug: string;
}

export default function ProductDetail({ productSlug }: ProductDetailProps) {
  // Convert slug to a display name
  const productName = productSlug.replace(/-/g, ' ');

  // Product images array:
  const productImages = [
    '/images/RR-food-singlep5+.jpg',
    '/images/RR-food-singlep5+.jpg',
    '/images/RR-food-singlep5+.jpg',
    '/images/RR-food-singflep.jpg',
  ];

  // Use a typed state for the thumbs swiper instance.
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  // Example product info
  const productPrice = 65.0;
  const productOldPrice = 75.0;
  const shortDescription =
    'Coffee Beans: Our Ethiopian Yirgacheffe Espresso showcases distinct characteristics from one of Ethiopia’s renowned coffee regions—rich, aromatic, and exceptionally smooth.';

  // For quantity
  const [quantity, setQuantity] = useState(1);
  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${productName} to cart`);
  };

  const handleBuyNow = () => {
    console.log(`Buying ${quantity} of ${productName} immediately`);
  };

  // "You might also like" items
  const relatedProducts = [
    { name: 'RR Cafe', image: '/images/prod.png' },
    { name: 'RR Tea', image: '/images/prod.png' },
    { name: 'Ginger Milk Tea', image: '/images/prod.png' },
    { name: 'Hot Chocolate', image: '/images/prod.png' },
  ];

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">{productName}</span>
      </div>

      {/* Main 2-Column Layout */}
      <section className="container mx-auto px-4 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: Swiper Slider with Thumbnails */}
        <div>
          {/* Main Swiper (linked to thumbs) */}
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            navigation
            pagination={{ clickable: true }}
            initialSlide={2} // Show the 3rd image by default
            thumbs={{ swiper: thumbsSwiper }}
            className="mb-4"
            style={{ width: '100%', height: 'auto' }}
          >
            {productImages.slice(0, 3).map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="border rounded">
                  <Image
                    src={img}
                    alt={`${productName} - slide ${idx}`}
                    width={600}
                    height={600}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails Swiper */}
          <Swiper
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            slidesPerView={3}
            spaceBetween={10}
            className="mb-4"
          >
            {productImages.slice(0, 3).map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="border rounded">
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    width={60}
                    height={60}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT: Buy Section */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">{productName}</h1>
          {/* Ratings (placeholder) */}
          <div className="flex items-center text-sm text-gray-500">
            ★★★★☆ &nbsp; (No reviews)
          </div>
          {/* Price */}
          <div className="text-2xl font-semibold">
            ${productPrice.toFixed(2)}
            {productOldPrice && (
              <span className="ml-3 text-gray-500 line-through text-base">
                ${productOldPrice.toFixed(2)}
              </span>
            )}
          </div>
          {/* Short Description */}
          <p className="text-sm text-gray-600">{shortDescription}</p>
          <hr />
          {/* Quantity + Buttons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded">
              <button onClick={decrementQty} className="px-2 py-1 text-xl font-bold">-</button>
              <span className="px-3">{quantity}</span>
              <button onClick={incrementQty} className="px-2 py-1 text-xl font-bold">+</button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-white border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
            >
              ADD TO CART
            </button>
          </div>
          {/* BUY IT NOW on a new line */}
          <div>
            <button
              onClick={handleBuyNow}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              BUY IT NOW
            </button>
          </div>
          {/* Delivery info */}
          <div className="p-4 bg-gray-50 rounded text-sm text-gray-600">
            <p>Estimated delivery: 12-26 days (Intl), 3-6 days (US)</p>
            <p>Return within 45 days. Duties & taxes non-refundable.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis orci non massa dignissim tempus. 
          Fusce sed risus quis justo faucibus ullamcorper. Cras interdum dictum viverra.
        </p>
        <p className="text-gray-600 mb-6">
          Sed imperdiet, nisl eget sollicitudin molestie, purus orci elementum neque, 
          vitae tincidunt purus odio vitae libero. Morbi et interdum purus. Quisque consequat 
          nunc mi, sed efficitur risus dapibus a.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Coffee Journey</h3>
            <p className="text-gray-600 mb-4">
              Amet consectetur adipisicing elit. Dolorum, accusantium, suscipit, vitae 
              recusandae odit consectetur eaque sequi delectus nostrum nam nisi ab 
              impedit ad facilis. Dolores facilis odio accusantium earum!
            </p>
            <p className="text-gray-600">
              Quas rerum nisi fuga odio culpa amet, nesciunt doloremque inventore ducimus, 
              consequatur officia nam, maxime provident a. Fugit deleniti aperiam tempore 
              molestiae voluptatibus. Maecenas laoreet condimentum orci vel ultricies. 
              Nullam quis neque lacinia, venenatis mi ac, vehicula orci.
            </p>
          </div>
          {/* Right image (4th image from the array) */}
          <div className="border rounded">
            <Image
              src={productImages[3]}
              alt="Description Image"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* You Might Also Like */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {relatedProducts.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded p-4 text-center shadow hover:shadow-lg transition"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="mx-auto mb-2 object-contain"
              />
              <h4 className="font-semibold text-sm">{item.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
