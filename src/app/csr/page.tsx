'use client';
import CsrBanner from '@/components/Csr/CsrBanner';
import React from 'react';

const CSRPage = () => {
  return (
    <>
      <CsrBanner />

      <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Corporate Social Responsibility
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            We are committed to making a positive impact on our community and the environment.
            Stay tuned for updates about our CSR initiatives.
          </p>
        </div>
      </section>
    </>
  );
};

export default CSRPage;
