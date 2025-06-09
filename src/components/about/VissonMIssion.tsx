'use client';
import { useEffect, useState } from 'react';
import { FaBullseye, FaLightbulb } from 'react-icons/fa';
import { getAboutData } from '@/api/about';

export default function VissonMission() {
  const [mission, setMission] = useState('');
  const [vision, setVision] = useState('');

  useEffect(() => {
    getAboutData().then((data) => {
      setMission(data.mission || '');
      setVision(data.vision || '');
    });
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-black px-4 text-center">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Mission */}
          <div className="bg-[#f3f3f3] dark:bg-[#1b1a19] p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="flex flex-col items-center">
              <FaBullseye size={48} className="text-black dark:text-white mb-4" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-black dark:text-white">Our Mission</h3>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-md">{mission}</p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-[#f3f3f3] dark:bg-[#1b1a19] p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="flex flex-col items-center">
              <FaLightbulb size={48} className="text-black dark:text-white mb-4" />
              <h3 className="text-2xl font-bold uppercase mb-4 text-black dark:text-white">Our Vision</h3>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-md">{vision}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
