'use client';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Story</h2>
            <p className="text-sm uppercase text-gray-500 mb-4">THE HIGH STRESS FAVORITE</p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pellentesque habitant morbi tristique senectus et netus et malesuada 
              fames ac turpis egestas. Fusce nec sapien euismod, bibendum massa quis, 
              efficitur nibh. Sed efficitur, nulla non tincidunt pulvinar, tortor neque 
              bibendum augue, eu iaculis tortor leo sed justo.
            </p>
          </div>
          {/* Image (2nd image) */}
          <div>
            <Image
              src="/images/about2.jpg"
              alt="Coffee Cup"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded shadow"
            />
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image (3rd image) */}
          <div>
            <Image
              src="/images/about-1.jpg"
              alt="Barista Serving Coffee"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded shadow"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Who We Are ?</h2>
            <p className="text-sm uppercase text-gray-500 mb-4">THE HIGH STRESS FAVORITE</p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Pellentesque habitant morbi tristique senectus et netus et malesuada 
              fames ac turpis egestas. Vivamus vitae semper nisl. Fusce et nisi at 
              metus facilisis ultricies. Sed commodo, justo vel condimentum placerat, 
              urna magna feugiat enim, quis laoreet odio eros sit amet purus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
