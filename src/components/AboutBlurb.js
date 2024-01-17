import Link from 'next/link';
import React from 'react';

const AboutBlurb = () => {
    return (
      <section className="pb-10 px-4 ">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center">
            <div className="relative inline-block"> 
              <h2 className="text-3xl text-center font-semibold">About Grounded Electrical Service</h2>
            </div>
          </div>
          <div>
          <div className='bg-gradient-to-r from-darkgold to- w-1/2 h-0.5 mt-4 mb-2'></div>
          <p className="text-lg text-center mb-2">
            We are a family-owned electrical business, dedicated to providing top-tier services to both commercial and residential clients. With over 26 years of experience and specialized skills honed since graduating from the Independent Electrical Contractors Association in 2002, we excel in a wide range of electrical work. From innovative lighting solutions to comprehensive electrical tasks, we handle every project, big or small, with unmatched expertise and integrity.
          </p>
          <div className="text-center">
            <Link href="/about" className="text-white underline hover:text-zinc-300 ease-in-out duration-300 mb-4">Learn more about us →</Link>
          </div>
          <div className='flex justify-end w-full'>
          <div className='flex items-end justify-end bg-gradient-to-l from-darkgold to- w-1/2 h-0.5 mt-2 mb-4'></div>
          </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutBlurb;
  
