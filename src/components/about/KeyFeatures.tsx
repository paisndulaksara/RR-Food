'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUsers, FaHandshake, FaLeaf, FaAward, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

export default function KeyFeatures() {
  const { scrollYProgress } = useScroll();
  const xRange = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const values = [
    {
      icon: <FaUsers size={40} />,
      title: 'Community',
      description: "Contributing to improving the quality of our community’s members’ lives, supporting local development, and giving back.",
    },
    {
      icon: <FaHandshake size={40} />,
      title: 'Integrity',
      description: 'Maintaining the greatest levels of transparency and flexibility, encouraging respect and trust in all of our interactions.',
    },
    {
      icon: <FaLeaf size={40} />,
      title: 'Sustainability',
      description: 'The practice of promoting long-term ecological balance through local sourcing, responsible growth, and environmental footprint minimization.',
    },
    {
      icon: <FaAward size={40} />,
      title: 'Excellence',
      description: 'Aiming for exceptional value and high standards in every aspect of our company, from customer services to product development.',
    },
    {
      icon: <FaLightbulb size={40} />,
      title: 'Innovation',
      description: 'Embracing new concepts and strategies to advance the industry and create new benchmarks for performance.',
    },
    {
      icon: <FaCheckCircle size={40} />,
      title: 'Quality',
      description: 'Aiming for exceptional value and high standards in every aspect of our company, from customer services to product development.',
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-black dark:bg-black text-white">
      {/* Background with Parallax Scroll Effect */}
      <motion.div
        style={{
          x: xRange,
          backgroundImage: "url('/images/cf34.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 bg-cover bg-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">CORE VALUES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {values.map((value, index) => (
            <div key={index} className="flex gap-5 items-start">
              <div className="text-white mt-1">{value.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
