'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getTeamData } from '@/api/team';
import Spinner from '@/components/ui/Spinner'; // 1. IMPORT THE SPINNER

// Your type definitions are unchanged
interface TeamMember {
  id: number;
  name: string;
  title: string;
  image_url: string;
  description?: string;
  type: 'higher' | 'manager';
}
interface HeaderData {
  title: string;
  description: string;
  image_url: string;
}

export default function OurTeam() {
  // Your state is unchanged
  const [header, setHeader] = useState<HeaderData | null>(null);
  const [higherTeam, setHigherTeam] = useState<TeamMember[]>([]);
  const [managers, setManagers] = useState<TeamMember[]>([]);
  const [modalMember, setModalMember] = useState<TeamMember | null>(null);

  // 2. ADD ONLY THE isLoading STATE
  const [isLoading, setIsLoading] = useState(true);

  // Your useEffect is unchanged, we just add `.finally()`
  useEffect(() => {
    getTeamData()
      .then((data) => {
        setHeader(data.header);
        const all = data.teams as TeamMember[];
        setHigherTeam(all.filter((m) => m.type === 'higher'));
        setManagers(all.filter((m) => m.type === 'manager'));
      })
      .catch((err) => console.error("Error fetching team:", err))
      .finally(() => {
        // 3. SET LOADING TO FALSE WHEN DONE
        setIsLoading(false);
      });
  }, []);

  // 4. ADD THE LOADING CHECK HERE
  if (isLoading) {
    return (
      // This will show a spinner that takes up the space of the component
      <div className="flex justify-center items-center" style={{ minHeight: '80vh' }}>
        <Spinner text="Loading Our Team..." />
      </div>
    );
  }

  // YOUR EXISTING RETURN CODE IS UNCHANGED
  return (
    <section className="pb-16 bg-white dark:bg-black text-center relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
          {header?.title || 'Behind The Brands'}
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-600 dark:text-white">
          {header?.description}
        </p>

        {/* Higher Management */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mb-12 md:w-[66%] mx-auto">
          {higherTeam.map((member) => (
            <div key={member.id} className="flex flex-col items-center relative">
              <div
                className={`mb-4 ${member.description ? 'cursor-pointer' : ''}`}
                onClick={() => member.description && setModalMember(member)}
                title={
                  member.name.includes('Jayasinghe')
                    ? 'CEO Message'
                    : member.name.includes('Roshini')
                    ? 'Managing Director Message'
                    : ''
                }
              >
                <Image
                  src={member.image_url}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-auto h-auto object-cover rounded shadow"
                />
              </div>
              <h4 className="text-xl font-semibold mb-1 dark:text-white">
                {member.name}
              </h4>
              <p className="text-gray-500 dark:text-white">{member.title}</p>
            </div>
          ))}
        </div>

        {/* Managers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {managers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <Image
                src={member.image_url}
                alt={member.name}
                width={300}
                height={400}
                className="w-auto h-auto object-cover rounded shadow mb-4"
              />
              <h4 className="text-xl font-semibold mb-1 dark:text-white">
                {member.name}
              </h4>
              <p className="text-gray-500 dark:text-white">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for higher team messages */}
      {modalMember && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/60 z-50 flex items-center justify-center px-4"
          onClick={() => setModalMember(null)}
        >
          <div
            className="bg-white dark:bg-[#c9a566] p-6 max-w-xl w-full rounded-lg shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-2xl font-bold text-gray-400 hover:text-black dark:hover:text-white"
              onClick={() => setModalMember(null)}
            >
              &times;
            </button>
            <p className="text-gray-800 dark:text-white mb-6 text-base sm:text-lg whitespace-pre-line">
              {modalMember.description}
            </p>
            <div className="text-right">
              <h4 className="text-lg font-semibold dark:text-white">
                {modalMember.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {modalMember.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}