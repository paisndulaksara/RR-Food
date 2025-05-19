'use client';
import React from 'react';
import { FaBullseye, FaLightbulb } from 'react-icons/fa';

const VissonMission = () => {
  return (
    <section className="py-16 bg-white dark:bg-black px-4 text-center">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Mission */}
          <div className="bg-[#f3f3f3] dark:bg-[#1b1a19] p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="flex flex-col items-center">
              <FaBullseye size={48} className="text-black dark:text-white mb-4" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-black dark:text-white">Our Mission</h3>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-md">
                Our mission is to become the leading organization in Sri Lanka by utilizing the expertise, 
                skills, and creativity of young men and women working in the private sector, along with the 
                support of a committed and disciplined team.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-[#f3f3f3] dark:bg-[#1b1a19] p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="flex flex-col items-center">
              <FaLightbulb size={48} className="text-black dark:text-white mb-4" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-black dark:text-white">Our Vision</h3>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-md">
                To become the leading organization in Sri Lanka by providing customers with products 
                of the highest quality.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VissonMission;
