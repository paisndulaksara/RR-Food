 'use client';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="pb-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black dark:text-white">
          Our Story
        </h2>

        {/* Block 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              RR Foods Lanka (PVT) Ltd started in 2012 by renting out coffee machines.
              Since then, the company has developed significantly. Mr. R.P. Jayasinghe’s
              vision and entrepreneurial spirit contributed to establishing RR Foods
              Lanka (PVT) Ltd. With the support of Ms. C.P.S. Roshini Fernando, the
              company expanded from renting out equipment to importing and reselling
              coffee machines, and later producing and distributing revolutionary milk
              powder blends like RR Café and RR Tea.
            </p>
          </div>
          <div>
            <Image
              src="/images/about2.jpg"
              alt="RR Foods History"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="order-2 md:order-1">
            <Image
              src="/images/about-1.jpg"
              alt="Our Growth"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Our company, RR Foods Lanka (PVT) Ltd, is a well-known brand in the Sri Lankan
              market. We offer a wide range of locally sourced, high-quality milk powder
              blends. The journey from a single coffee machine to a leading producer and
              distributor reflects the company’s commitment to excellence, sustainability,
              and community development — generating thousands of self-employment
              opportunities.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Innovation and quality remain priorities as RR Foods Lanka (PVT) Ltd continues
              to expand. By focusing on local sourcing, the company guarantees that each
              product captures Sri Lanka’s rich agricultural heritage. The company is
              committed to sustainable practices and making a positive impact on both its
              customers and the environment.
            </p>
          </div>
          <div>
            <Image
              src="/images/about2.jpg"
              alt="Innovation and Quality"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Block 4 - RR Foods Lanka */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="order-2 md:order-1">
            <Image
              src="/images/about-1.jpg"
              alt="RR Foods Image"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">RR Foods Lanka</h3>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              RR Foods Lanka creates excellence in the manufacturing and distribution of
              high-end blends based on milk powder, delivering premium products that add
              taste and nutrition to everyday living.
            </p>
          </div>
        </div>

        {/* Block 5 - RR Exports and Imports */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">RR Exports and Imports</h3>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              RR Exports and Imports is dedicated to the international export of premium
              Sri Lankan products — presenting the best of our regional craftsmanship and
              showcasing Sri Lankan quality to the world.
            </p>
          </div>
          <div>
            <Image
              src="/images/about2.jpg"
              alt="RR Exports Image"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
