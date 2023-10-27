import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white px-6 h-20 flex justify-between items-center ">
      
      {/* Logo */}
      <div className="flex items-center h-full">
        <img src="/GroundedNBG.png" alt="Grounded Electrical Service Logo" className="h-full w-auto" />
      </div>

      {/* Right-side container with padding */}
      <div className="flex items-center py-4 space-x-4">
        {/* Navigation */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gold  transition">Home</a>
          <a href="#" className="hover:text-gold transition">Services</a>
          <a href="#" className="hover:text-gold transition">About</a>
          <a href="#" className="hover:text-gold transition">Contact</a>
        </nav>

        {/* CTA Button */}
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-opacity-90 transition">
          Request a Quote
        </button>
      </div>
    </header>
  );
}

export default Header;
