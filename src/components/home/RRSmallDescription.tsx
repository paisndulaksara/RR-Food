'use client';

import { useEffect, useState } from 'react';
import { getHomeData, CompanyIntro } from '@/api/home';

const RRSmallDescription = () => {
  const [companyIntro, setCompanyIntro] = useState<CompanyIntro | null>(null);

  useEffect(() => {
    getHomeData()
      .then((res) => setCompanyIntro(res.company_intro))
      .catch((err) => console.error('Company Intro Fetch Error:', err));
  }, []);

  if (!companyIntro) return null;

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* LEFT COLUMN: Text */}
        <div className="md:w-1/2">
          <h2 className="text-black text-3xl md:text-4xl leading-tight mb-2">
            <span className="font-light">Taste the Freshness,</span>
            <br />
            <span className="font-bold">Savor the Quality!</span>
          </h2>
          {companyIntro.subtitle && (
            <h3 className="text-[#e12c43] text-xl md:text-2xl font-normal mb-4">
              {companyIntro.subtitle}
            </h3>
          )}
          <h3 className="text-[#e12c43] text-xl md:text-2xl font-normal mb-4">
            {companyIntro.title}
          </h3>
          <p className="text-black dark:text-white text-base md:text-lg mb-4 leading-relaxed">
            {companyIntro.description}
          </p>
          <a
            href="#"
            className="text-black font-normal underline hover:text-[#e12c43] transition-colors"
          >
            More &gt;&gt;
          </a>
        </div>

        {/* RIGHT COLUMN: Embedded Video */}
        <div className="md:w-1/2">
          <iframe
            src={companyIntro.video_url}
            title="Company Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default RRSmallDescription;
