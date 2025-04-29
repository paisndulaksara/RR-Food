"use client";
import { useState } from "react";
import Image from "next/image";

// Coffee machines
const coffeeMachines = [
  {
    name: "2 Canisters Vending Machine",
    image: "/images/two-canister.png",
  },
  {
    name: "3 Canisters Vending Machine",
    image: "/images/three-canister.png",
  },
  {
    name: "4 Canisters Vending Machine",
    image: "/images/four-cansiter.png",
  },
];

// Juice machines
const juiceMachines = [
  {
    name: "2 Canisters Vending Machine",
    image: "/images/fruit-two-canisters.png",
  },
  {
    name: "3 Canisters Vending Machine",
    image: "/images/fruit-three-canister.png",
  },
];

// Combine them for the "All" tab
const allMachines = [...coffeeMachines, ...juiceMachines];

const VendingMachine = () => {
  // Default to 'all' so all machines show on initial load
  const [activeTab, setActiveTab] = useState<"all" | "coffee" | "juice">("all");

  // Decide which array to show based on the active tab
  const machinesToShow =
    activeTab === "all"
      ? allMachines
      : activeTab === "coffee"
      ? coffeeMachines
      : juiceMachines;

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container">
        {/* Top Row: Heading (Left) & Tabs (Right) */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-0">
            Vending Machines
          </h2>

          <div className="flex gap-3 items-center">
            {/* ALL TAB */}
            <button
              onClick={() => setActiveTab("all")}
              className={`font-semibold ${
                activeTab === "all" ? "text-[#e12c43] underline" : "text-black"
              }`}
            >
              All
            </button>
            <span className="text-black">|</span>

            {/* COFFEE TAB */}
            <button
              onClick={() => setActiveTab("coffee")}
              className={`font-semibold ${
                activeTab === "coffee"
                  ? "text-[#e12c43] underline"
                  : "text-black"
              }`}
            >
              Coffee Machines
            </button>
            <span className="text-black">|</span>

            {/* JUICE TAB */}
            <button
              onClick={() => setActiveTab("juice")}
              className={`font-semibold ${
                activeTab === "juice"
                  ? "text-[#e12c43] underline"
                  : "text-black"
              }`}
            >
              Juice Machines
            </button>
          </div>
        </div>

        {/* Machines Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {machinesToShow.map((machine, index) => (
            <div key={index} className="text-center bg-gray-50 p-4 rounded ">
              
              <Image
                src={machine.image}
                alt={machine.name}
                width={200}
                height={200}
                className="mx-auto"
              />
              
              <h4 className="text-black font-semibold mt-2">{machine.name}</h4>
              <button className="text-[#e12c43] underline mt-1">REQUEST</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendingMachine;
