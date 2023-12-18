import React from 'react'
import Card from './Card'

function Services() {
  return (
    <div className='w-full py-16'>
        <div className='w-full flex flex-col items-center'>
        <div className="relative text-center">
  <h1 className='text-3xl font-semibold inline-block'>Services</h1>
  <div className='w-[calc(100%+30px)] h-0.5 bg-white mt-1 bg-gradient-to-r from-darkgold via-gold to-darkgold absolute left-1/2 transform -translate-x-1/2'></div>
</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-2 md:gap-10 w-full h-96 sm:h-52 my-8 lg:h-64 xl:h-72'>
  <div className='aspect-w-4 aspect-h-3 mx-6 sm:mx-2 xl:mx-10'>
    <Card name='commercial' title='Commercial' description='We offer a comprehensive range of commercial electrical services, including advanced wiring systems, safety inspections, and energy-efficient lighting solutions. Tailored to meet the unique needs of businesses and industries.' />
  </div>
  <div className='aspect-w-4 aspect-h-3 mx-6 sm:mx-2 xl:mx-10'>
    <Card name='residential' title='Residential' description='Experience a wide array of residential electrical services, from modern lighting installations and smart home setups to routine maintenance and safety checks. Customized solutions for your home&apos;s electrical needs.' />
  </div>
</div>
        </div>
    </div>
  )
}

export default Services