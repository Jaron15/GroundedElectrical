import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sm:px-6 h-20 flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center h-full ">
        <img src="/GroundedNBG.png" alt="Grounded Electrical Service Logo" className="h-full w-auto" />
      </div>

      {/* Right-side container with padding */}
      <div className="flex items-center py-4 space-x-6">
        {/* Navigation */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gold  transition">Home</a>
          <a href="#" className="hover:text-gold transition">Services</a>
          <a href="#" className="hover:text-gold transition">About</a>
          <a href="#" className="hover:text-gold transition">Contact</a>
        </nav>

        {/* CTA Button for larger screens */}
       <button className='RBtn ' />





        {/* Hamburger Icon for smaller screens */}
        <button className="md:hidden w-12 h-10 text-5xl  mb-2 flex justify-center items-center" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Sidebar for smaller screens */}
      {menuOpen && (
  <div className="fixed top-0 right-0 w-64 h-full z-50 flex">
    {/* Gradient Left Border */}
    <div className="w-0.5 h-full bg-gradient-to-b from-darkgold via-gold to-darkgold"></div>

    {/* Actual Sidebar Content */}
    <div className="w-full bg-black text-white  p-6">
      {/* Close button */}
      <button className="absolute top-2 right-2 text-4xl" onClick={() => setMenuOpen(false)}>
        ✕
      </button>
      
      <nav className="flex flex-col items-center text-3xl space-y-8 mt-10">
        <a href="#" className="hover:text-gold transition">Home</a>
        <a href="#" className="hover:text-gold transition">Services</a>
        <a href="#" className="hover:text-gold transition">About</a>
        <a href="#" className="hover:text-gold transition">Contact</a>
      </nav>
        <div className=' flex justify-center'>
      <button className='RBtn !flex mt-10 ' />
      </div>
    </div>
  </div>
)}
    </header>
  );
}

export default Header;
