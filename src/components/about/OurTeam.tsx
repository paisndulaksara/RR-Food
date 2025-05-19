 'use client';
import Image from 'next/image';

const teamRows = [
  // Row 1: 2 Members
  [
    {
      name: 'Mr. R.P. Jayasinghe',
      role: 'Chairman, RR Foods Lanka (PVT) Ltd',
      image: '/images/person-1.webp',
    },
    {
      name: 'Ms. C.P.S. Roshini Fernando',
      role: 'Managing Director',
      image: '/images/person-2.webp',
    },
  ],
  // Row 2: 3 Members
  [
    {
      name: 'Mr. Indika Anura',
      role: 'General Manager',
      image: '/images/person-3.webp',
    },
    {
      name: 'Mrs. Milakshi Fernando',
      role: 'Finance Manager',
      image: '/images/person-1.webp',
    },
    {
      name: 'Mr. Sujith Nishintha',
      role: 'Sales Manager',
      image: '/images/person-2.webp',
    },
  ],
  // Row 3: 3 Members
  [
    {
      name: 'Mrs. R. Prasangi Jayasingha',
      role: 'HR Manager',
      image: '/images/person-3.webp',
    },
    {
      name: 'Mrs. Asitha Nilmini',
      role: 'Factory Manager',
      image: '/images/person-1.webp',
    },
    {
      name: 'Mr. Dashanka Sohan',
      role: 'Promotion & Marketing Manager',
      image: '/images/person-2.webp',
    },
  ],
];

export default function OurTeam() {
  return (
    <section className="py-16 bg-white dark:bg-black text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
          Behind The Brands
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-600 dark:text-white">
          We are a formidable brand, 100% communal team of collaborative dreamers who value
          intuition, curiosity, and trendsetting fearlessness in everything that we do.
          We take immeasurable pride in our work, relentlessly advancing the line
          between style and function in our designs.
        </p>

        {/* Rows */}
        {teamRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-8 mb-12 ${
              row.length === 2 ? 'grid-cols-1 sm:grid-cols-2 justify-center' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
            }`}
          >
            {row.map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-auto h-auto object-cover rounded shadow"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-1 dark:text-white">{member.name}</h4>
                <p className="text-gray-500 dark:text-white">{member.role}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
