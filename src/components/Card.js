import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Card = ({name, title, description}) => {
  const [supportsHover, setSupportsHover] = useState(false);

    useEffect(() => {
        setSupportsHover(window.matchMedia('(hover: hover)').matches);
        console.log(supportsHover);
    }, []);

  // Variants for the hover state
  const hoverVariants = {
    hover: {
      scale: supportsHover && 2.5,
      rotate: supportsHover && 20,
      filter: supportsHover && 'blur(7px) ' ,
      opacity: supportsHover && 1,
      translateY: 0,
      transition: {
        duration: .4
      }
    },
  };

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden cursor-pointer border">
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
          style={{ backgroundImage: `url("/${name}.jpeg")` }}
          variants={hoverVariants}
        >
          <div className='font-bold text-2xl text-shadow '>
          {title}
          </div>
        </motion.div>

        {/* Text Content */}
        {supportsHover && <motion.div 
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-1 md:gap-2.5 text-zinc-200 p-5 text-center "
          initial={{ opacity: 0, translateY: 50 }}
          variants={{
            hover: { opacity: 1, translateY: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold hidden sm:block ">{title}</h2>
          <p>
            {description}
          </p>
        </motion.div>}
      </motion.div>
    </div>
  );
}

export default Card;
