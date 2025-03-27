"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaPaintBrush, FaLeaf, FaRoute } from "react-icons/fa";

export default function KeyFeatures() {
  // 1. Get the scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // 2. Create a horizontal shift (e.g., -50px to 50px)
  //    The array [0, 1] is the input range for scroll progress
  //    The array [-50, 50] is the output range for the shift
  const xRange = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // 3. If you want a vertical shift, you could do yRange the same way:
  // const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Motion div for the background image */}
      <motion.div
        style={{
          x: xRange,
          backgroundImage: "url('/images/cf34.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="container mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <FaPaintBrush size={50} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Design</h3>
              <p className="max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in consequat nisl.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <FaLeaf size={50} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Innovation</h3>
              <p className="max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse potenti.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <FaRoute size={50} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Journey</h3>
              <p className="max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                erat volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
