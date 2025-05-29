"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/images/01.jpg",
    mobileImage: "/images/01mobile.jpg",
    title: "Brewed Fresh,<br/>Served Fast",
    subtitle: "RR CAFE",
    description:
      "Coffee on-demand, whenever you need it.<br/> Perfectly brewed, every time.",
  },
  {
    id: 2,
    image: "/images/02.jpg",
    mobileImage: "/images/02mobile.png",
    title: "Pressed for Freshness,<br/> Served in Seconds",
    subtitle: "RR Cafe",
    description:
      "Fresh juice at the touch of a button.<br/> Feel the goodness in every sip!",
  },
  {
    id: 3,
    image: "/images/03.jpg",
    mobileImage: "/images/03mobile.png",
    title: "From Beans to Bliss",
    subtitle: "Authentic Flavor",
    description: "Indulge in the Richness of RR",
  },
];

const HeroSlider = () => {
  return (
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
              {/* Desktop Image */}
              {/* Desktop Image */}
              <div className="hidden sm:block absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Mobile Image */}
              <div className="block sm:hidden absolute inset-0">
                <Image
                  src={slide.mobileImage}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-18 left-0 w-full h-full flex items-center z-10">
                <div className="container text-left max-w-[700px] px-4">
                  <h4 className="text-white text-[20px] sm:text-[24px] font-bold leading-tight">
                    {slide.subtitle}
                  </h4>
                  <h1 className="text-white text-[40px] sm:text-[70px] font-bold mb-2 leading-[1.1]">
                    <div dangerouslySetInnerHTML={{ __html: slide.title }} />
                  </h1>
                  <p className="text-white text-[18px] sm:text-[24px] font-normal">
                    <div
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    />
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
