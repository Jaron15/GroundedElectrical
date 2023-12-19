import Layout from '@/components/Layout';
import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion';


const services = [
    { service: "Repair, install, replace, retro-fit anything electrical", type: "Both" },
    { service: "Electrical safety inspections", type: "Both" },
    { service: "Residential generators", type: "Residential" },
    { service: "Lighting", type: "Both" },
    { service: "LED lighting", type: "Both" },
    { service: "Outlet install 120v, 250v", type: "Both" },
    { service: "Ceiling fans repair or replace", type: "Both" },
    { service: "Electrical Breaker repair or replace", type: "Both" },
    { service: "Electrical Panel upgrades", type: "Both" },
    { service: "AFCI and GFCI electrical outlets", type: "Both" },
    { service: "Home automation", type: "Residential" },
    { service: "Lighting controls", type: "Both" },
    { service: "Landscape lighting", type: "Both" },
    { service: "Hot tub hookups", type: "Residential" },
    { service: "EV car charger install", type: "Both" },
    { service: "Outdoor kitchen power install", type: "Residential" },
    { service: "Dedicated circuit for appliances and large equipment", type: "Both" },
    { service: "Kitchen and bathroom remodel", type: "Both" },
    { service: "Service", type: "Commercial" },
    { service: "Tenant improvements", type: "Commercial" }
  ];
  

  function Services() {
    const [filter, setFilter] = useState('Residential');
    const controls = useAnimation();
  
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
  
    return (
        <div className='bg-black min-h-screen mx-auto w-full'>
        <Layout>
          <div className="container mx-auto p-6 bg-black">
            <div className="flex justify-center gap-4 mb-6">
              {[ 'Residential', 'Commercial'].map(type => (
                 <div className="relative"> {/* Wrap button with div for positioning the underline */}
                 <button
                   key={type}
                   onClick={() => handleFilterChange(type)}
                   className={`text-white font-bold py-2 px-4 rounded ${filter === type ? 'bg-black' : ''}`}
                 >
                   {type}
                 </button>
                 {filter === type && (
                   <div className='w-[calc(100%+5px)] h-0.5 bg-white mt-1 bg-gradient-to-r from-darkgold via-gold to-darkgold absolute bottom-0 left-1/2 transform -translate-x-1/2'></div>
                 )}
               </div>
              ))}

            </div>

            <motion.div 
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 overflow-auto no-scrollbar max-h-[42rem]">
                
            {filteredServices.map((service, index) => (
                <div key={index} className='p-0.5 bg-gradient-to-t from-darkgold via-gold to-darkgold rounded-lg mx-auto w-full'>
              <div className="text-white p-2 sm:p-4 rounded shadow hover:shadow-lg transition duration-300 ease-in-out items-center flex justify-center bg-black h-full bg-zinc-900">
                <h3 className="font-semibold text-lg text-center cursor-pointer">{service.service}</h3>
                {/* You can add a brief description here */}
              </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Layout>
    </div>
  )
}
  
  export default Services;
  