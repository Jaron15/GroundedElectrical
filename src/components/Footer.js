import React from 'react';
import { IoLogoInstagram, IoLogoSnapchat, IoLogoTwitter, IoIosMail  } from 'react-icons/io';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
      <footer className="bg-black text-gray-600 p-6  border-red-500 w-full">
     
      <div className="flex justify-center space-x-4 mb-6">

        <a href="#" className="text-2xl border border-gold rounded-full p-2 hover:opacity-90 hover:shadow-[0_0_20px_#ffd277] transition ease-in-out duration-300">
            <IoLogoInstagram  className='hover:text-[#CF2872] transition ease-in-out duration-300'/>
            </a>
            
        <a href="#" className="text-2xl border border-gold rounded-full p-2 hover:opacity-90 hover:shadow-[0_0_20px_#ffd277] transition ease-in-out duration-300">
            <IoIosMail className='hover:text-white transition ease-in-out duration-300 ' />
            </a>
        <a href="#" className="inline-block">
        <div className="text-2xl border border-gold rounded-full p-2 hover:opacity-90 inline-flex items-center justify-center hover:shadow-[0_0_20px_#ffd277] transition ease-in-out duration-300">
          <div className="filter grayscale transition ease-in-out duration-300 hover:grayscale-0">
            <FcGoogle />
          </div>
        </div>
      </a>
        <a href="#" className="text-2xl border border-gold rounded-full p-2 hover:opacity-90 hover:text-blue-500 hover:shadow-[0_0_20px_#ffd277] transition ease-in-out duration-300 "><FaFacebookF className='' /></a>
      </div>
      <ul className="flex flex-wrap justify-center space-x-4 text-lg mb-6">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Services</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Terms</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
      <p className="text-center text-sm text-gray-400">ROC 348796</p>
    </footer>
  );
}

export default Footer;
