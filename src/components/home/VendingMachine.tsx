"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts, Product } from "@/api/products"; // Assuming API types are in this file
import Spinner from "@/components/ui/Spinner"; // Your Spinner component

export default function VendingMachine() {
  const [activeTab, setActiveTab] = useState<"all" | "coffee" | "juice">("all");

  // State to hold data from the API
  const [coffeeMachines, setCoffeeMachines] = useState<Product[]>([]);
  const [juiceMachines, setJuiceMachines] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all product data when the component loads
    getAllProducts()
      .then((data) => {
        // Set the state with data from the API
        setCoffeeMachines(data.machines.coffee_machines.products || []);
        setJuiceMachines(data.machines.juice_machines.products || []);
      })
      .catch((err) => console.error("Failed to fetch machines:", err))
      .finally(() => setLoading(false)); // Stop loading state
  }, []);

  // Combine the machine arrays after they've been fetched
  const allMachines = [...coffeeMachines, ...juiceMachines];

  // This logic remains the same, but now uses the state variables
  const machinesToShow =
    activeTab === "all"
      ? allMachines
      : activeTab === "coffee"
      ? coffeeMachines
      : juiceMachines;

  return (
    <section
      className="py-16 bg-white dark:bg-black bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/ma_back.jpg")' }}
    >
      <div className="container mx-auto">
        {/* Heading + Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h2 className="text-white dark:text-white text-3xl font-bold mb-4 sm:mb-0">
            Machines
          </h2>
          <div className="flex gap-3 items-center">
            {["all", "coffee", "juice"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "all" | "coffee" | "juice")}
                className={`font-semibold capitalize ${
                  activeTab === tab
                    ? "text-[#e12c43] underline"
                    : "text-white dark:text-white"
                }`}
              >
                {tab === "coffee"
                  ? "Coffee Machines"
                  : tab === "juice"
                  ? "Juice Machines"
                  : "All"}
              </button>
            ))}
          </div>
        </div>

        {/* Conditional Grid */}
        {loading ? (
          <div className="flex justify-center items-center" style={{ minHeight: '40vh' }}>
            <Spinner text="Loading Machines..." />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {machinesToShow.map((item) => (
              <Link
                key={item.id} // Use stable ID from API
                href={`/products/${item.slug}`}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative w-full rounded-lg shadow-lg overflow-hidden group-hover:shadow-2xl transition">
                  <div className="absolute inset-0 z-0">
                    <div className="h-[75%] group-hover:h-full bg-black transition-all duration-500 ease-in-out" />
                    <div className="h-[25%] dark:bg-[#424242] bg-[#ececec]" />
                  </div>

                  <div className="relative z-10 flex justify-center items-center p-4 h-[220px]">
                    <Image
                      src={item.feature_image_url || '/images/fallback.jpg'} // Use image from API
                      alt={item.name}
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h4 className="text-lg font-semibold text-white dark:text-white group-hover:text-[#caa465] transition-colors duration-300">
                    {item.name}
                  </h4>
                  <div className="text-sm text-[#e12c43] mt-1 underline group-hover:opacity-90">
                    REQUEST
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}