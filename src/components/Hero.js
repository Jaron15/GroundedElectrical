import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white py-20 relative">
      <div className="container mx-auto text-center">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Grounded Electrical Service
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl mb-8">
          Professional electrical solutions for both commercial and residential projects.
        </p>

        {/* Call to Action */}
        <a href="#" className="bg-gold text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition">
          Learn More
        </a>

      </div>

      {/* Optional: Background Image or Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-30" 
      style={{backgroundImage: 'url(/hero4.png)',
      backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover' 
    }}></div>
    </section>
  );
}

export default Hero;
