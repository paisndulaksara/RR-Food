'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data arrays (with slug)
const premixes = [
  { name: 'RR Cafe',             image: '/images/prod.png',           slug: 'rr-cafe' },
  { name: 'RR Tea',              image: '/images/prod02.png',         slug: 'rr-tea' },
  { name: 'RR Ginger Plain Tea', image: '/images/prod04.png',         slug: 'rr-ginger-plain-tea' },
  { name: 'RR Hot Chocolate',    image: '/images/prod05.png',         slug: 'rr-hot-chocolate' },
  { name: 'RR Cardamom Tea',     image: '/images/prod03.png',         slug: 'rr-cardamom-tea' },
  { name: 'Ginger Milk Tea',     image: '/images/prod06.png',         slug: 'ginger-milk-tea' },
  { name: 'RR Masala Tea',       image: '/images/prod07.png',         slug: 'rr-masala-tea' },
  { name: 'RR Strawberry Tea',   image: '/images/prod08.png',         slug: 'rr-strawberry-tea' },
  { name: 'Cinnamon Tea',         image: '/images/prod10.png',        slug: 'cinnamon-tea' },
  { name: 'Lemongrass Tea',       image: '/images/prod09.png',        slug: 'lemongrass-tea' },
];

const coffeeMachines = [
  { name: '2 Canisters Vending Machine', image: '/images/two-canister.png', slug: '2-canisters-machine' },
  { name: '3 Canisters Vending Machine', image: '/images/three-canister.png', slug: '3-canisters-machine' },
  { name: '4 Canisters Vending Machine', image: '/images/four-cansiter.png', slug: '4-canisters-machine' },
];

const juiceMachines = [
  { name: '2 Canisters Vending Machine', image: '/images/fruit-two-canisters.png', slug: '2-canisters-juice' },
  { name: '3 Canisters Vending Machine', image: '/images/fruit-three-canister.png', slug: '3-canisters-juice' },
];

// Merged vending category => coffee + juice
const vendingAll = [...coffeeMachines, ...juiceMachines];
// Combined all for 'All' category
const allProducts = [...premixes, ...vendingAll];

type CategoryType = 'all' | 'premixes' | 'vending' | 'coffee' | 'juice';

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  let displayedProducts;
  switch (activeCategory) {
    case 'premixes':
      displayedProducts = premixes;
      break;
    case 'vending':
      displayedProducts = vendingAll;
      break;
    case 'coffee':
      displayedProducts = coffeeMachines;
      break;
    case 'juice':
      displayedProducts = juiceMachines;
      break;
    default:
      displayedProducts = allProducts;
  }

  return (
    <section className="pb-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* LEFT SIDEBAR (Filter) */}
          <aside className="bg-gray-50 dark:bg-[#121212] p-4 rounded shadow space-y-4">
            <h2 className="text-xl font-bold mb-2 text-black dark:text-white">Categories</h2>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`block w-full text-left px-3 py-2 rounded transition ${
                    activeCategory === 'all'
                      ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                      : 'hover:bg-gray-100 dark:hover:bg-[#222222]'
                  }`}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveCategory('premixes')}
                  className={`block w-full text-left px-3 py-2 rounded transition ${
                    activeCategory === 'premixes'
                      ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                      : 'hover:bg-gray-100 dark:hover:bg-[#222222]'
                  }`}
                >
                  Premixes
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveCategory('vending')}
                  className={`block w-full text-left px-3 py-2 rounded transition ${
                    activeCategory === 'vending'
                      ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                      : 'hover:bg-gray-100 dark:hover:bg-[#222222]'
                  }`}
                >
                  Vending Machines
                </button>

                {/* Sub-categories (indented) */}
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveCategory('coffee')}
                      className={`block w-full text-left px-3 py-2 rounded transition ${
                        activeCategory === 'coffee'
                          ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                          : 'hover:bg-gray-100 dark:hover:bg-[#222222]'
                      }`}
                    >
                      Coffee Machines
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveCategory('juice')}
                      className={`block w-full text-left px-3 py-2 rounded transition ${
                        activeCategory === 'juice'
                          ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                          : 'hover:bg-gray-100 dark:hover:bg-[#222222]'
                      }`}
                    >
                      Juice Machines
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </aside>

          {/* RIGHT CONTENT: Products */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 group">
              {displayedProducts.map((item, index) => (
                <Link
                  key={index}
                  href={`/products/${item.slug}`}
                  className="bg-white dark:bg-[#121212] text-center p-4 rounded shadow hover:shadow-lg transition"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="mx-auto mb-2 object-contain"
                  />
                  <h4 className="font-semibold text-sm text-black dark:text-white hover:text-[#caa465]">{item.name}</h4>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
