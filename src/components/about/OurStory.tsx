import Image from 'next/image';
import { getAboutData } from '@/api/about';

// NOTE: We have removed 'use client', useState, and useEffect.
// This is now a Server Component.

// Define the story type (this can stay the same)
interface Story {
  id: number;
  title: string;
  description: string;
  image: string; // Assuming 'image' is the filename if needed
  image_url: string; // The full URL for the image src
}

// The component is now 'async' to allow 'await' for data fetching
export default async function OurStory() {
  // Fetch data directly on the server. The page will wait for this to finish.
  const data = await getAboutData();
  const stories: Story[] = data.our_story || []; // Get the 'our_story' array from the data

  // A check in case the API returns no stories
  if (!stories.length) {
    return (
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 text-center">
            <p>Our story is currently being written...</p>
        </div>
      </section>
    );
  }

  // If data loads successfully, return the JSX with the data.
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
                {/* {story.title} */}
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