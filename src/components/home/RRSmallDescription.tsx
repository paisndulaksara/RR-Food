'use client';

const RRSmallDescription = () => {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* LEFT COLUMN: Text */}
        <div className="md:w-1/2">
          <h2 className="text-black  text-3xl md:text-4xl leading-tight mb-2">
            <span className="font-light">Taste the Freshness,</span>
            <br />
            <span className="font-bold">Savor the Quality!</span>
          </h2>
          <h3 className="text-[#e12c43] text-xl md:text-2xl font-normal mb-4">
            RR Premixes
          </h3>
          <p className="text-black dark:text-white text-base md:text-lg mb-4 leading-relaxed">
            RR Food is dedicated to delivering high-quality, delicious, and innovative 
            food products to meet the diverse tastes of our customers. With a commitment 
            to excellence, freshness, and authenticity, we strive to provide nutritious 
            and flavorful options that cater to modern lifestyles. Our passion for great 
            food drives us to continuously explore new flavors and maintain the highest 
            standards in food production and service.
          </p>
          <a
            href="#"
            className="text-black font-normal underline hover:text-[#e12c43] transition-colors"
          >
            More &gt;&gt;
          </a>
        </div>

        {/* RIGHT COLUMN: Embedded Video */}
        <div className="md:w-1/2">
          <iframe
            src="https://www.youtube.com/embed/AHpM4rexZrg?si=2BmliYxUtc-XCFc2"
            title="Coffee Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded shadow"
          />
        </div>

      </div>
    </section>
  );
};

export default RRSmallDescription;
