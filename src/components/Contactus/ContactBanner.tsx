'use client';
import Image from 'next/image';

export default function ContactBanner() {
  return (
    <section className="relative w-full h-[450px] overflow-hidden">
      <Image
        src="/images/aboutBanner.jpg"
        alt="Contact Banner"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center">
        <div className="container px-4">
          <h4 className="text-white text-xl font-semibold mb-1">RR Foods</h4>
          <h1 className="text-white text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-white text-sm">HOME &gt; CONTACT US</p>
        </div>
      </div>
    </section>
  );
}
