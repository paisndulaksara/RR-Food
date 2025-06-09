 'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { getHomeData, HomeHero } from '@/api/home';
import 'swiper/css';
import 'swiper/css/pagination';

const HeroSlider = () => {
  const [slides, setSlides] = useState<HomeHero[]>([]);

  useEffect(() => {
    getHomeData()
      .then((data) => setSlides(data.home_hero))
      .catch((err) => console.error('Slider Error:', err));
  }, []);

  return (
    <section className="relative w-full h-[100vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Desktop Image */}
              <div className="hidden sm:block absolute inset-0">
                <Image
                  src={slide.image_desktop_url}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Mobile Image */}
              <div className="block sm:hidden absolute inset-0">
                <Image
                  src={slide.image_mobile_url}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-18 left-0 w-full h-full flex items-center z-10">
                <div className="container max-w-[700px] px-4 text-center sm:text-left mx-auto">
                  <h4 className="text-white text-[20px] sm:text-[24px] font-bold leading-tight">
                    {slide.subtitle}
                  </h4>
                  <h1 className="text-white text-[40px] sm:text-[70px] font-bold mb-2 leading-[1.1]">
                    <div dangerouslySetInnerHTML={{ __html: slide.title }} />
                  </h1>
                  <p className="text-white text-[18px] sm:text-[24px] font-normal">
                    <div dangerouslySetInnerHTML={{ __html: slide.description }} />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
