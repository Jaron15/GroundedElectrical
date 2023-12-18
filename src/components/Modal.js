import React, { useEffect } from 'react'
import { motion } from 'framer-motion';

const Modal = ({ show, message, onClose }) => {
    useEffect(() => {
      if (show) {
        const timer = setTimeout(() => {
          onClose();
        }, 2500); // 3000ms = 3 seconds
        return () => clearTimeout(timer);
      }
    }, [show, onClose]);
  
    if (!show) {
      return null;
    }
    const modalVariant = {
        hidden: {
          y: -20,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: .8,
          }
        },
      };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center z-50">
                <motion.div 
                variants={modalVariant}
                initial="hidden"
                animate="visible"
                className='p-0.5 w-4/5 sm:w-auto bg-gradient-to-t from-darkgold via-gold to-darkgold rounded-lg shadow-[0_0_15px_#ffd277] mb-28  text-center'>
            <div className="bg-black text-white p-10  rounded shadow-lg">
                <p>{message}</p>
            </div>
            </motion.div>
        </div>
      );
    };    

export default Modal