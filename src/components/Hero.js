import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white relative">
      <div className="container mx-auto text-center">

        {/* Image Placeholder (your background image) with Text Inside */}
        <div className="relative">
          <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-between mt-4 py-2 h-[26rem] lg:h-[33rem] xl:h-[38rem]  bg-hero bg-herobig " 
            // style={{
            //   backgroundImage: 'url(/hero4.png)',
            //   backgroundPosition: 'top', 
            //   backgroundRepeat: 'no-repeat', 
            //   backgroundSize: 'cover'
            // }}
            >

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl font-semibold">
              Bright Ideas, Brilliant Execution
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-2xl">
              Professional electrical services tailored to your needs.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        {/* <a href="#" className="bg-gold text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition mt-8">
          Learn More
        </a> */}

      </div>
    </section>
  );
}

export default Hero;
