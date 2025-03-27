'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: '/images/slider.jpg',
    title: 'Brewed to Perfection',
    subtitle: 'Premium Premixers',
    description: 'The Heart and Soul of RR Brews',
  },
  {
    id: 2,
    image: '/images/slider.jpg',
    title: 'Taste the Freshness',
    subtitle: 'Signature Beverages',
    description: 'Crafted for Excellence',
  },
  {
    id: 3,
    image: '/images/slider.jpg',
    title: 'From Beans to Bliss',
    subtitle: 'Authentic Flavor',
    description: 'Indulge in the Richness of RR',
  },
];

const HeroSlider = () => {
  return (
    // Let the slider be in normal flow, full height
    <section className="relative w-full h-[100vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-5 left-0 w-full h-full flex items-center z-10">
                <div className="container text-left max-w-[700px]">
                  <h4 className="text-white text-[24px] font-bold leading-tight">
                    {slide.subtitle}
                  </h4>
                  <h1 className="text-white text-[80px] font-bold mb-2 leading-[1.1]">
                    {slide.title}
                  </h1>
                  <p className="text-white text-[24px] font-normal">
                    {slide.description}
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
