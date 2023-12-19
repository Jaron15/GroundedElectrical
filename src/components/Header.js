import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import SMlinks from './SMlinks';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const sidebarVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', duration: 0.5 } }
  };
  
  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", duration: 0.5, delay: 0.3 },
    },
  };
  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen])
  
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://online-booking.housecallpro.com/script.js?token=a33769021a7a473399db9ac1c868ab3a&orgName=Grounded-Electrical-Service-LLC";
    script.async = true;

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    }
}, []);

  return (
    <header className="bg-black text-white pr-4 sm:px-6 h-20 flex justify-between items-center sticky top-0 z-40 ">
      {/* Logo */}
      <Link href="/" className="flex items-center h-full w-auto ">
        <img
          src="/GroundedNBG.png"
          alt="Grounded Electrical Service Logo"
          className="h-full w-auto"
        />
      </Link>

      {/* Right-side container with padding */}
      <div className="flex items-center py-4 space-x-6">
        {/* Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gold  transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-gold transition">
            Services
          </Link>
          <Link href="#" className="hover:text-gold transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-gold transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button for larger screens */}
        <button 
         data-token="a33769021a7a473399db9ac1c868ab3a" 
            data-orgname="Grounded-Electrical-Service-LLC" 
            onClick={() => window.HCPWidget?.openModal()} 
            className="RBtn " />

        {/* Hamburger Icon for smaller screens */}
        <button
          className="md:hidden w-12 h-10 text-5xl  mb-1 flex justify-center items-center  "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Sidebar for smaller screens */}
      {menuOpen && (
         <>
         <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: .70 }}
         exit={{ opacity: 0 }}
         onClick={() => setMenuOpen(false)}
         className="fixed inset-0 bg-black  z-50"
       />

        <motion.div
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed top-0 right-0 w-64 h-full z-50 flex"
        >
          {/* Gradient Left Border */}
          <div className="w-0.5 h-full bg-gradient-to-b from-darkgold via-gold to-darkgold"></div>

          {/* Actual Sidebar Content */}
          <div className="w-full bg-black text-white p-6 flex flex-col">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-4xl"
              onClick={() => setMenuOpen(false)}
            >
              <MdClose size={60}/>
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center text-3xl space-y-8 mt-20">
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.1, type: "spring", duration: 0.5 },
                }}
              >
                <Link href="/" className="hover:text-gold transition">
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.2, type: "spring", duration: 0.5 },
                }}
              >
                <Link href="/services" className="hover:text-gold transition">
                  Services
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.3, type: "spring", duration: 0.5 },
                }}
              >
                <Link href="#" className="hover:text-gold transition">
                  About
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.4, type: "spring", duration: 0.5 },
                }}
              >
                <Link href="/contact" className="hover:text-gold transition">
                  Contact
                </Link>
              </motion.div>
            </nav>

            <motion.div 
            initial={{ x: "100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.5, type: "spring", duration: 0.5 },
            }}
            className=" flex justify-center">
              <button  
               data-token="a33769021a7a473399db9ac1c868ab3a" 
            data-orgname="Grounded-Electrical-Service-LLC" 
            onClick={() => window.HCPWidget?.openModal()} 
            className="RBtn !flex mt-10" />
            </motion.div>

            <motion.div 
            initial={{ opacity: 0 }}
            animate={{
              opacity:1,
              transition: { duration: 1.25, delay: 0.75}
            }}
            className='mt-auto'>
            <SMlinks x={3} />
            </motion.div>
          </div>
        </motion.div>
        </>
      )}
    </header>
  );
}

export default Header;
