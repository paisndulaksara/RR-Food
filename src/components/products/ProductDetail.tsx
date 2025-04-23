'use client';
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import {  Product } from "@/lib/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const {
    name: productName,
    price: productPrice,
    oldPrice: productOldPrice,
    ingredients,
    cups,
    weight,
    nutrition,
    images: productImages,
    description,
    descImage,
  } = product;

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null); // ✅ now safe
  const [quantity, setQuantity] = useState(1);
  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const handleAddToCart = () =>
    console.log(`Added ${quantity} of ${productName} to cart`);
  const handleBuyNow = () =>
    console.log(`Buying ${quantity} of ${productName} immediately`);

  // Static related products
  const relatedProducts = [
    { name: "RR Cafe", image: "/images/prod.png" },
    { name: "RR Tea", image: "/images/prod.png" },
    { name: "Ginger Milk Tea", image: "/images/prod.png" },
    { name: "Hot Chocolate", image: "/images/prod.png" },
  ];

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-sm text-gray-500">
        Home &gt;{" "}
        <span className="text-gray-700 font-medium">{productName}</span>
      </div>

      {/* Main 2-Column Layout */}
      <section className="container mx-auto px-4 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: Swiper Slider with Thumbnails */}
        <div>
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            navigation
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper }}
            className="mb-4"
            style={{ width: "100%", height: "auto" }}
          >
            {productImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded">
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

          <Swiper
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            slidesPerView={3}
            spaceBetween={10}
            className="mb-4"
          >
            {productImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded">
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
        <div className="space-y-6 px-4">
          {/* 1. Product Title & Rating */}
          <h1 className="text-4xl font-extrabold text-gray-900">
            {productName}
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex text-[#c9a566]">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-2xl tracking-wide">
                  {star}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">(0 reviews)</span>
          </div>

          {/* 2. Price with SALE badge */}
          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-bold text-[#c9a566]">
              ${productPrice.toFixed(2)}
            </span>
            {productOldPrice && (
              <span className="text-lg line-through text-gray-400">
                ${productOldPrice.toFixed(2)}
              </span>
            )}
            {productOldPrice && (
              <span className="text-xs font-semibold uppercase bg-red-500 text-white px-2 py-1 rounded-full animate-pulse">
                Sale
              </span>
            )}
          </div>

          {/* 3. Short Description Box */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>Ingredients:</strong> {ingredients.join(", ")}.
            </p>
            <p>
              <strong>Serves:</strong> up to {cups} cups.
            </p>
            <p>
              <strong>Net Weight:</strong> {weight}
            </p>
          </div>

          {/* 4. Quantity + Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden animate-pulse hover:animate-none">
              <button onClick={decrementQty} className="px-4 py-2 text-xl">
                −
              </button>
              <span className="px-6">{quantity}</span>
              <button onClick={incrementQty} className="px-4 py-2 text-xl">
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-[#c9a566] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              ADD TO CART
            </button>
          </div>

          {/* 5. Buy Now */}
          <button
            onClick={handleBuyNow}
            className="inline-block w-auto bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-black transition-transform hover:-translate-y-0.5"
          >
            BUY IT NOW
          </button>

          {/* 6. Delivery & Extras */}
          <div className="text-sm text-gray-600 space-y-1">
            <p className="inline-flex items-center gap-1">
              <svg
                className="w-4 h-4 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16 4h-3.6L10 0 7.6 4H4l3 3-1 5 5-3 5 3-1-5 3-3z" />
              </svg>
              Free shipping over $50
            </p>
            <p>Estimated delivery: 12–26 days (Intl), 3–6 days (US)</p>
            <p>Return within 45 days. Duties & taxes non-refundable.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Description</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start">
          {/* Left: Nutrition Table */}
          <table className="w-full table-auto border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2 text-left">
                  Nutritional Information
                </th>
                <th className="border px-3 py-2 text-left">Unit</th>
                <th className="border px-3 py-2 text-left">Per 100g</th>
              </tr>
            </thead>
            <tbody>
              {nutrition.map((row) => (
                <tr key={row.label}>
                  <td className="border px-3 py-2">{row.label}</td>
                  <td className="border px-3 py-2">{row.unit}</td>
                  <td className="border px-3 py-2">{row.per100g}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Right: Description Image */}
          <div className="overflow-hidden rounded shadow-sm">
            <Image
              src={descImage}
              alt={`${productName} detail`}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Long Description Text below the grid */}
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </section>

      {/* You Might Also Like */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          You Might Also Like
        </h2>
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
