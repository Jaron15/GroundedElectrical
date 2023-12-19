import React from 'react';
import { IoLogoInstagram, IoLogoSnapchat, IoLogoTwitter, IoIosMail  } from 'react-icons/io';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import SMlinks from './SMlinks';

const Footer = () => {
  return (
      <footer className="bg-black text-gray-600 p-6  border-red-500 w-full ">
     
     <SMlinks x={4} />

      <ul className="flex flex-wrap justify-center space-x-4 text-lg mb-6 text-white">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="#" className="hover:underline">Services</Link></li>
        <li><Link href="#" className="hover:underline">About</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
      </ul>
      <p className="text-center text-sm text-gray-400">ROC 348796</p>
    </footer>
  );
}

export default Footer;
