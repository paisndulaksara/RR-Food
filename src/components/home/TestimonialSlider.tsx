 'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { getTestimonials } from '@/api/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  image_url: string;
};

type Intro = {
  title: string;
  subtitle: string;
  description: string;
};

export default function TestimonialSlider() {
  const [intro, setIntro] = useState<Intro | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    getTestimonials().then((data) => {
      setIntro(data.intro);
      setTestimonials(data.testimonials);
    });
  }, []);

  return (
    <section className="relative py-16">
      {/* Background + Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/testomonial.avif"
          alt="Testimonials Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative container px-4">
        {/* Heading Area */}
        {intro && (
          <div className="text-center text-white mb-10">
            <p className="uppercase tracking-wider text-sm">{intro.title}</p>
            <h2 className="text-2xl md:text-3xl font-bold">{intro.subtitle}</h2>
            <p className="max-w-[600px] mx-auto mt-2 text-white/80">{intro.description}</p>
          </div>
        )}

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
          }}
          className="py-6"
        >
          {testimonials.map((testimony) => (
            <SwiperSlide key={testimony.id}>
              <div className="text-black p-8 rounded-lg shadow-xl flex flex-col justify-between relative">
                {/* Quote */}
                <div className="bg-white p-6 mb-4 italic leading-relaxed text-lg md:text-xl shadow-sm rounded">
                  “{testimony.testimonial.replace(/"/g, '')}”
                </div>

                {/* Avatar + Name + Role */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="inline-block rounded-full border-4 border-dotted border-white p-3">
                    <Image
                      src={testimony.image_url}
                      alt={testimony.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold uppercase text-sm text-white">{testimony.name}</h4>
                    <span className="text-xs text-white">{testimony.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
