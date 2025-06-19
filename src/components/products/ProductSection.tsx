'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProducts, Product } from '@/api/products';
import Spinner from '@/components/ui/Spinner'; // 1. Import the Spinner

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'premixes' | 'vending' | 'coffee' | 'juice'>('all');
  const [premixes, setPremixes] = useState<Product[]>([]);
  const [coffeeMachines, setCoffeeMachines] = useState<Product[]>([]);
  const [juiceMachines, setJuiceMachines] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setPremixes(data.premixes.products || []);
        setCoffeeMachines(data.machines.coffee_machines.products || []);
        setJuiceMachines(data.machines.juice_machines.products || []);
      })
      .catch((err) => console.error("Failed to fetch products:", err))
      .finally(() => setLoading(false));
  }, []);

  // 2. We have REMOVED the `if (loading)` check from here

  // Your product filtering logic is unchanged
  const vendingAll = [...coffeeMachines, ...juiceMachines];
  const allProducts = [...premixes, ...vendingAll];

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

          {/* This sidebar and the mobile tabs will now appear instantly */}
          <aside className="hidden md:block bg-gray-50 dark:bg-[#121212] p-4 rounded shadow space-y-4 self-start">
            <h2 className="text-xl font-bold mb-2 text-black dark:text-white">Categories</h2>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveCategory('all')} className={`block w-full text-left px-3 py-2 rounded transition ${activeCategory === 'all' ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-[#222222]'}`}>All</button></li>
              <li><button onClick={() => setActiveCategory('premixes')} className={`block w-full text-left px-3 py-2 rounded transition ${activeCategory === 'premixes' ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-[#222222]'}`}>Premixes</button></li>
              <li>
                <button onClick={() => setActiveCategory('vending')} className={`block w-full text-left px-3 py-2 rounded transition ${activeCategory === 'vending' || activeCategory === 'coffee' || activeCategory === 'juice' ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-[#222222]'}`}>Machines</button>
                <ul className="ml-4 mt-1 space-y-1">
                  <li><button onClick={(e) => { e.stopPropagation(); setActiveCategory('coffee'); }} className={`block w-full text-left px-3 py-2 rounded transition ${activeCategory === 'coffee' ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-[#222222]'}`}>Coffee Machines</button></li>
                  <li><button onClick={(e) => { e.stopPropagation(); setActiveCategory('juice'); }} className={`block w-full text-left px-3 py-2 rounded transition ${activeCategory === 'juice' ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-[#222222]'}`}>Juice Machines</button></li>
                </ul>
              </li>
            </ul>
          </aside>
          
          <div className="block md:hidden mb-6">
             <div className="flex gap-4 justify-center">
               <button onClick={() => setActiveCategory('premixes')} className={`px-4 py-2 rounded-full text-sm font-medium border ${activeCategory === 'premixes' ? 'bg-[#caa465] text-white border-[#caa465]' : 'border-gray-300 text-gray-700 dark:text-white'}`}>Premixes</button>
               <button onClick={() => setActiveCategory('vending')} className={`px-4 py-2 rounded-full text-sm font-medium border ${activeCategory === 'vending' ? 'bg-[#caa465] text-white border-[#caa465]' : 'border-gray-300 text-gray-700 dark:text-white'}`}>Machines</button>
             </div>
          </div>


          {/* RIGHT CONTENT: Products */}
          <div className="md:col-span-3">
            {/* 3. Add the conditional check here */}
            {loading ? (
              // If loading, show the spinner in this area
              <div className="flex justify-center items-center" style={{minHeight: '60vh'}}>
                <Spinner text="Loading Products..." />
              </div>
            ) : (
              // When loading is false, show the product grid
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 group">
                {displayedProducts.map((item) => (
                  <Link key={item.id} href={`/products/${item.slug}`} className="bg-white dark:bg-[#121212] text-center p-4 rounded shadow hover:shadow-lg transition flex flex-col justify-between">
                    <div className="relative w-full h-40 mx-auto mb-2">
                      <Image
                        src={item.feature_image_url || '/images/fallback.jpg'}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-semibold text-sm text-black dark:text-white hover:text-[#caa465]">{item.name}</h4>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}