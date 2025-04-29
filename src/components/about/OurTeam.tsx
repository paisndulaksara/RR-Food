'use client';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Ferguson',
    role: 'Designer',
    image: '/images/person-1.webp',
  },
  {
    name: 'Saga Norén',
    role: 'Developer',
    image: '/images/person-2.webp',
  },
  {
    name: 'Karen Ryan',
    role: 'Developer',
    image: '/images/person-3.webp',
  },
];

export default function OurTeam() {
  return (
    <section className="py-16 bg-white dark:bg-black text-center">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Behind The Brands</h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-600 dark:text-white">
          We are a formidable brand, 100% communal team of collaborative dreamers who value 
          intuition, curiosity, and trendsetting fearlessness in everything that we do. 
          We take immeasurable pride in our work, relentlessly advancing the line 
          between style and function in our designs. 
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Member Image */}
              <div className="mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-auto h-auto object-cover rounded shadow"
                />
              </div>
              {/* Member Name & Role */}
              <h4 className="text-xl font-semibold mb-1 dark:text-white">{member.name}</h4>
              <p className="text-gray-500 dark:text-white">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
