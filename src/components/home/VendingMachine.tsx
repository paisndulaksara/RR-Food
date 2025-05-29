"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Data
const coffeeMachines = [
  {
    name: "2 Canisters Vending Machine",
    image: "/images/two-canister.png",
    slug: "2-canister-vending",
  },
  {
    name: "3 Canisters Vending Machine",
    image: "/images/three-canister.png",
    slug: "3-canister-vending",
  },
  {
    name: "4 Canisters Vending Machine",
    image: "/images/four-cansiter.png",
    slug: "4-canister-vending",
  },
  {
    name: "RR Special Machine",
    image: "/images/Special-Machine.png",
    slug: "rr-special-machine",
  },
  {
    name: "RR Athlantic Machine",
    image: "/images/Athlantic.png",
    slug: "rr-athlantic-machine",
  },
];

const juiceMachines = [
  {
    name: "2 Canisters Vending Machine",
    image: "/images/fruit-two-canisters.png",
    slug: "2-canister-juice",
  },
  {
    name: "3 Canisters Vending Machine",
    image: "/images/fruit-three-canister.png",
    slug: "3-canister-juice",
  },
  {
    name: "2 Canisters Juice Machine",
    image: "/images/machin-01.png",
    slug: "2-canister-juice-nice",
  },
  {
    name: "1 Canisters Juice Machine",
    image: "/images/machin-02.png",
    slug: "1-canister-juice",
  },
  {
    name: "Juice Machine Dispencer",
    image: "/images/Juice-Machine-Dispenser.png",
    slug: "juice-machine-dispnecer",
  },
];

const allMachines = [...coffeeMachines, ...juiceMachines];

export default function VendingMachine() {
  const [activeTab, setActiveTab] = useState<"all" | "coffee" | "juice">("all");

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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {machinesToShow.map(({ name, image, slug }, index) => (
            <Link
              key={index}
              href={`/products/${slug}`}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-full rounded-lg shadow-lg overflow-hidden group-hover:shadow-2xl transition">
                <div className="absolute inset-0 z-0">
                  <div className="h-[75%] group-hover:h-full bg-black transition-all duration-500 ease-in-out" />
                  <div className="h-[25%] dark:bg-[#424242] bg-[#ececec]" />
                </div>

                <div className="relative z-10 flex justify-center items-center p-4">
                  <Image
                    src={image}
                    alt={name}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-white dark:text-white group-hover:text-[#caa465] transition-colors duration-300">
                  {name}
                </h4>
                <div className="text-sm text-[#e12c43] mt-1 underline group-hover:opacity-90">
                  REQUEST
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
