"use client";
import Image from "next/image";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  message?: string; // ✅ Mark as optional
}


const teamRows: TeamMember[][] = [
  [
    {
      name: "Mr. R.P. Jayasinghe",
      role: "Chairman, RR Foods Lanka (PVT) Ltd",
      image: "/images/RPJayasinghe.jpg",
      message: `It is a great pleasure for me to considerRR Foods Lanka (PVT)
                Ltd.'s journey. This dynamic and innovative food product
                company started in 2012 as a small coffee machine rental
                company. Our steadfast dedication to quality, sustainability, and
                community support has transformed this transition. Offering
                products that not only satisfy the highest quality standards but
                also show tribute to Sri Lanka's rich cultural history has been our
                goal since the beginning. We have developed a line of milk
                powder blends that our clients admire and rely on by utilizing
                local resources and encouraging sustainable methods.
                Our team's dedication and hard work, as well as the ongoing
                support of our partners and customers, were crucial to our
                success. As we continue to innovateand expand our products,
                we are excite< about the future and the milestones we have
                reached. Thank you for being a part of our journey. Together, we
                will continue to achieve great things.`, // full message text here
    },
    {
      name: "Ms. C.P.S. Roshini Fernando",
      role: "Managing Director",
      image: "/images/RoshiniFernando.jpg",
      message: `The esteemed Managing Director of our organization,
                Ms. C.P.S. Roshini Fernando has been a great
                supporter of strength and strategic brilliance, which
                has had an incredible influence on the growth of the
                company. The partnership she has with Mr. Jayasinghe
                has been beneficial in promoting operational
                excellence. Her ability to manage finances, and
                empower the work environment, and talent allows her
                to make sure our organization grows and succeeds by
                A' establishing a successful culture.`, // full message text here
    },
  ],
  [
    {
      name: "Mr. Indika Anura",
      role: "General Manager",
      image: "/images/person-3.webp",
    },
    {
      name: "Mrs. Milakshi Fernando",
      role: "Finance Manager",
      image: "/images/milakshi.jpg",
    },
    {
      name: "Mr. Sujith Nishintha",
      role: "Sales Manager",
      image: "/images/sujith.jpg",
    },
  ],
  [
    {
      name: "Mrs. R. Prasangi Jayasingha",
      role: "HR Manager",
      image: "/images/prasangi.jpg",
    },
    {
      name: "Mrs. Asitha Nilmini",
      role: "Factory Manager",
      image: "/images/nilmini.jpg",
    },
    {
      name: "Mr. Dashanka Sohan",
      role: "Promotion & Marketing Manager",
      image: "/images/person-2.webp",
    },
  ],
];

export default function OurTeam() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  return (
    <section className="pb-16 bg-white dark:bg-black text-center relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
          Behind The Brands
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-600 dark:text-white">
          We are a formidable brand, 100% communal team of collaborative
          dreamers who value intuition, curiosity, and trendsetting fearlessness
          in everything that we do. We take immeasurable pride in our work,
          relentlessly advancing the line between style and function in our
          designs.
        </p>

        {teamRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-8 mb-12 ${
              row.length === 2
                ? "grid-cols-2 justify-center md:w-[66%] mx-auto"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            }`}
          >
            {row.map((member, i) => (
              <div key={i} className="flex flex-col items-center relative">
                <div
                  className={`mb-4 ${member.message ? "cursor-pointer" : ""}`}
                  onClick={() =>
                    member.message && setModalMessage(member.message)
                  }
                  title={
                    member.message && member.name.includes("Jayasinghe")
                      ? "CEO Message"
                      : member.name.includes("Roshini")
                      ? "Managing Director Message"
                      : ""
                  }
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-auto h-auto object-cover rounded shadow"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-1 dark:text-white">
                  {member.name}
                </h4>
                <p className="text-gray-500 dark:text-white">{member.role}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {/* Modal Popup */}
{modalMessage && (
  <div
    className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center px-4"
    onClick={() => setModalMessage(null)}
  >
    <div
      className="bg-white dark:bg-[#c9a566] p-6 max-w-xl w-full rounded-lg shadow-xl relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-4 text-2xl font-bold text-gray-400 hover:text-black dark:hover:text-white"
        onClick={() => setModalMessage(null)}
      >
        &times;
      </button>
      <p className="text-gray-800 dark:text-white whitespace-pre-line mb-6">
        {modalMessage}
      </p>
      {/* Find who the message belongs to */}
      {teamRows.flat().map((member) =>
        member.message === modalMessage ? (
          <div key={member.name} className="text-right">
            <h4 className="text-lg font-semibold dark:text-white">
              {member.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {member.role}
            </p>
          </div>
        ) : null
      )}
    </div>
  </div>
)}

    </section>
  );
}
