import Layout from '@/components/Layout';
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import services from '@/data';
import Link from 'next/link';


  function Services() {
    const [filter, setFilter] = useState('Residential');
    const controls = useAnimation();
    const router = useRouter();
    const { category } = router.query;

  
    const animateServices = (newFilter) => {
        controls.start({
          x: newFilter === 'Commercial' ? [100, 0] : [-100, 0],
          opacity: [0, 1],
          transition: { duration: 0.5 }
        });
      };
    
      const handleFilterChange = (newFilter) => {
        if (newFilter !== filter) {
          animateServices(newFilter);
          setFilter(newFilter);
        }
      };
    
  
    const filteredServices = services.filter(service =>
      filter === 'All' || service.type === filter || service.type === 'Both'
    );
  
    filteredServices.sort((a, b) => 
      (a.type === 'Both') - (b.type === 'Both')
    );

    useEffect(() => {
        
        if (category && ['Residential', 'Commercial'].includes(category)) {
          
          animateServices(category);
          setFilter(category);
        }
      }, [category]);
  
    return (
        <div className='bg-black min-h-screen mx-auto w-full overflow-x-hidden'>
        <Layout>
          <div className="container mx-auto p-6 bg-black">
            <div className="flex justify-center gap-4 mb-6">
              {[ 'Residential', 'Commercial'].map(type => (
                 <div className="relative" key={type}> 
                 <button
                   onClick={() => handleFilterChange(type)}
                   className={`text-white text-xl font-bold py-2 px-4 rounded ${filter === type ? 'bg-black' : ''}`}
                 >
                   {type}
                 </button>
                 {filter === type && (
                   <div className='w-[calc(100%+15px)] h-0.5 mt-1 bg-underline-gradient absolute bottom-0 left-1/2 transform -translate-x-1/2'></div>
                 )}
               </div>
              ))}

            </div>

            <motion.div 
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 overflow-auto no-scrollbar max-h-[28rem] sm:max-h-[42rem]">
                
                {filteredServices.map((service, index) => (
  <div key={index} className='p-0.5 bg-gradient-to-t from-darkgold via-gold to-darkgold rounded-lg mx-auto w-full'>
    {/* <Link href={`/services/${service.id}`}>  */}
      <div className="text-white p-2 sm:p-4 rounded shadow hover:shadow-lg transition duration-300 ease-in-out items-center flex justify-center bg-black h-full bg-zinc-900">
        <h3 className="font-semibold text-lg text-center cursor-pointer">{service.service}</h3>
      </div>
    {/* </Link> */}
  </div>
))}

          </motion.div>
        </div>
      </Layout>
    </div>
  )
}
  
  export default Services;
  