'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getAboutData } from '@/api/about';

// Define the story type
interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
  image_url: string;
}

export default function OurStory() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    getAboutData().then((data) => setStories(data.our_story || []));
  }, []);

  return (
    <section className="pb-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black dark:text-white">
          Our Story
        </h2>

        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`flex flex-col md:flex-row gap-10 items-center mb-16 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Text Section */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
                {story.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                {story.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2">
              <Image
                src={story.image_url}
                alt={story.title}
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
