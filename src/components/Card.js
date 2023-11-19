import React from 'react';
import { motion } from 'framer-motion';

const Card = () => {
  // Variants for the hover state
  const hoverVariants = {
    hover: {
      scale: 2.5,
      rotate: 20,
      filter: 'blur(7px)',
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden cursor-pointer">
      <motion.div 
        className="w-full h-full flex flex-col justify-center items-center"
        whileHover="hover"
      >
        {/* Card Background Effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-pink-500 to-cyan-500 scale-95 blur-[20px] z-[-1]"
          variants={hoverVariants}
        />

        {/* Card Content with Background Image */}
        <motion.div 
          className="w-full h-full bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: 'url("/commercial.jpeg")' }}
          variants={hoverVariants}
        >
          <div className='font-semibold text-2xl'>
          Commercial
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-2.5 text-gray-200 p-5 text-center"
          initial={{ opacity: 0, translateY: 50 }}
          variants={{
            hover: { opacity: 1, translateY: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-4xl font-bold">Card Hover</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipii voluptas ten mollitia pariatur odit, ab minus ratione adipisci accusamus vel est excepturi laboriosam magnam necessitatibus dignissimos molestias.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Card;
