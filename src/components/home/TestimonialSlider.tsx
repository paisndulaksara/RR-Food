 'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    quote:
      "RR Foods has transformed my coffee experience. The quality of the beans and the expertise of the baristas make every visit a delight. I can't imagine starting my day anywhere else.",
    name: "JONI MERY",
    role: "Customer",
    avatar: "/images/avatar.png",
  },
  {
    id: 2,
    quote:
      "I love the atmosphere at RR Foods. It's the perfect place to relax, catch up with friends, or get some work done. The staff is always friendly, and the coffee is consistently excellent.",
    name: "RONALD RICHARDS",
    role: "Customer",
    avatar: "/images/avatar2.png",
  },
  {
    id: 3,
    quote:
      "I love the atmosphere at RR Foods. It's the perfect place to relax, catch up with friends, or get some work done. The staff is always friendly, and the coffee is consistently excellent.",
    name: "RONALD RICHARDS",
    role: "Customer",
    avatar: "/images/avatar2.png",
  },
];

const TestimonialSlider = () => {
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

      <div className="relative container">
        {/* Heading Area */}
        <div className="text-center text-white mb-10">
          <p className="uppercase tracking-wider text-sm">Testimonial</p>
          <h2 className="text-2xl md:text-3xl font-bold">Customer Reviews</h2>
          <p className="max-w-[600px] mx-auto mt-2 text-white/80">
            Each testimonial reflects the passion and dedication we pour into every cup
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            // Mobile: one slide per view
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Tablet and up: two slides per view
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          className="py-6"
        >
          {testimonials.map((testimony) => (
            <SwiperSlide key={testimony.id}>
              <div className=" text-black p-8 rounded-lg shadow-xl flex flex-col justify-between relative">
                {/* Large White Box for the Quote */}
                <div className="bg-white p-6 mb-4 italic leading-relaxed text-lg md:text-xl shadow-sm rounded">
                  “{testimony.quote}”
                </div>

                {/* Avatar + Name + Role */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="inline-block rounded-full border-4 border-dotted border-white p-3">
                    <Image
                      src={testimony.avatar}
                      alt={testimony.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold uppercase text-sm text-white">
                      {testimony.name}
                    </h4>
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
};

export default TestimonialSlider;
