import Image from 'next/image';

// Define the types for your data
interface InnovationImage {
  id: number;
  path_url: string;
  alt_text: string;
}

interface InnovationData {
  title: string;
  description: string;
  images: InnovationImage[];
}

// Create an async function to fetch the data.
// Note: We use `fetch` here as it's the Next.js standard for Server Components
// and has special features like automatic caching and request deduplication.
async function getInnovationData(): Promise<InnovationData | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/innovation`, {
      cache: 'no-store', // Use 'no-store' for data that changes often
    });

    if (!response.ok) {
      throw new Error('Failed to fetch innovation data');
    }

    const result = await response.json();
    return result.data; // Assuming your API wraps the data in a 'data' object
  } catch (error) {
    console.error('Error loading innovation:', error);
    return null; // Return null if there's an error
  }
}

// The component is now 'async' and is a Server Component.
// We have removed 'use client', useState, and useEffect.
export default async function ProductInnovation() {
  // Fetch the data directly on the server. The page will wait for this to finish.
  const data = await getInnovationData();

  // If the data fails to load, show an error message
  if (!data) {
    return (
      <section className="py-20 text-center">
        <p className="text-red-500">Could not load Product Innovation section.</p>
      </section>
    );
  }

  return (
    <section className="pb-16 bg-white dark:bg-black text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">
          {data.title}
        </h2>

        {/* Description */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 dark:text-white leading-relaxed text-sm md:text-base mb-10 whitespace-pre-line">
          {data.description}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.images.map((img) => (
            <div key={img.id} className="rounded shadow overflow-hidden">
              <Image
                src={img.path_url}
                alt={img.alt_text}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}