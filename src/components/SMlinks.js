import React from 'react'
import { IoLogoInstagram, IoIosMail  } from 'react-icons/io';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SMlinks({x}) {
    let spacingClass = "";

  switch (x) {
    case 2:
      spacingClass = "space-x-2";
      break;
    case 3:
      spacingClass = "space-x-3";
      break;
    case 4:
      spacingClass = "space-x-4";
      break;
    default:
      spacingClass = "space-x-2";
  }

  return (
    <div className={`flex justify-center ${spacingClass} mb-6`}>
     <a href="https://www.instagram.com/groundedinAZ" target="_blank" className="text-2xl border border-gold rounded-full p-2 hover:opacity-90 hover:shadow-[0_0_20px_#ffd277] transition ease-in-out duration-300">
  <IoLogoInstagram className='max-sm:text-[#CF2872] hover:text-[#CF2872] transition ease-in-out duration-300'/>
</a>

<a href="mailto:Groundedinaz@gmail.com" className="text-2xl border border-gold rounded-full p-2 hover:opacity-90 hover:shadow-[0_0_20px_#ffd277] transition ease-in-out duration-300">
  <IoIosMail className='max-sm:text-white hover:text-white transition ease-in-out duration-300' />
</a>

<a href="https://g.co/kgs/BC6CMh" target="_blank" className="inline-block">
  <div className="text-2xl border border-gold rounded-full p-2 hover:opacity-90 inline-flex items-center justify-center hover:shadow-[0_0_20px_#ffd277] transition ease-in-out duration-300">
    <div className="filter max-sm:grayscale-0 grayscale transition ease-in-out duration-300 hover:grayscale-0">
      <FcGoogle />
    </div>
  </div>
</a>

<a href="https://www.facebook.com/groundedinAZ" target="_blank" className="text-2xl border border-gold rounded-full p-2 hover:opacity-90 max-sm:text-blue-500 hover:text-blue-500 hover:shadow-[0_0_20px_#ffd277] transition ease-in-out duration-300">
  <FaFacebookF />
</a>
</div>
  )
}

export default SMlinks