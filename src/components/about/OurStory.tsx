"use client";
import Image from "next/image";

const OurStory = () => {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Our Story Section */}{" "}
        <h2 className="text-2xl md:text-3xl font-bold mb-2 dark:text-white">
          Our Story
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          {/* Text */}
          <div>
            
            <p className="text-gray-700 leading-relaxed dark:text-white">
              RR Foods Lanka (PVT) Ltd started in 2012 by renting out coffee
              machines. Since that, the company has developed significantly. Mr.
              R.P. Jayasinghe&apos;s vision and entrepreneurial spirit contributed to
              establishing RR Foods Lanka (PVT) Ltd. Mr. Jayasinghe&apos;s commitment
              and hard work turned the initial small-scale company into a
              thriving business. Partnering with Ms. C.P.S. Roshini Fernando,
              the company expanded from renting out equipment to importing and
              rselling coffee machines, and later producing and distributing
              revolutionary milk powder blends like RR Café and RR Tea.
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
            
            <p className="text-gray-700 leading-relaxed dark:text-white">
              Our company, RR Foods Lanka (PVT) Ltd is a well-known brand in the
              Sri Lankan market present. This is because we offer a wide range
              of locally sourced, high quality milk powder blends. The journey
              from a single coffee machine to a leading producer and distributor
              of milk-based products demonstrates the company&apos;s commitment to
              excellence, sustainability, and the development of local economic
              growth. Over the years, RR Foods Lanka (PVT) Ltd has significantly
              contributed to the local economy and community development, by
              generating thousands of opportunities for self-employment.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
          {/* Text */}
          <div>
           
            <p className="text-gray-700 leading-relaxed dark:text-white">
              Innovation and quality are still priorities for RR Foods Lanka
              (PVT) Ltd as it expands. The company&lsquo;s concentration on local
              sourcing ensures that each product is guaranteed to capture Sri
              Lanka&apos;s rich agricultural tradition. RR Foods Lanka (PVT) Ltd
              focuses to influence positively on its clients and the environment
              by emphasizing sustainable practices and community involvement.
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
      </div>
    </section>
  );
};

export default OurStory;
