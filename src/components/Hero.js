import React from 'react';
import { motion } from 'framer-motion';

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const Hero = () => {
  return (
    <section className="bg-black text-white relative 2xl:mt-4">
      <div className="container mx-auto text-center">

        {/* Image Placeholder (your background image) with Text Inside */}
        <div className="relative">
          <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-between mt-4 py-2 h-[26rem] lg:h-[33rem] xl:h-[39rem] bg-hero bg-herobig">

            {/* Headlines */}
    <div className='ml-4 sm:ml-16 md:ml-14 lg:ml-36 xl:ml-44 2xl:ml-64  w-[95%] sm:w-5/6 md:w-11/12 lg:w-4/5 xl:w-4/5 2xl:w-[70%] mx-auto '>
            <div className="flex justify-around sm:justify-between ">
              <motion.h1 
                className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl  font-semibold"
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 2.0, delay: 0.2 }}
              >
                Bright Ideas
              </motion.h1>

              <motion.h1 
                className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl  font-semibold"
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.7, delay: 0.8 }}
              >
                Brilliant Execution
              </motion.h1>
            </div>
            </div>

            {/* Subtext */}
            <motion.p className="text-md sm:text-xl md:text-2xl  xl:text-4xl"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.7, delay: 1.2 }}
            >
              Professional electrical services tailored to your needs.
            </motion.p>
          </div>
        </div>

        {/* Call to Action (commented out for now) */}
        {/* <a href="#" className="bg-gold text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition mt-8">
          Learn More
        </a> */}

      </div>
    </section>
  );
}

export default Hero;
