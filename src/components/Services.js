import React from 'react'
import Card from './Card'

function Services() {
  return (
    <div className='w-full py-16'>
        <div className='w-full flex flex-col items-center'>
            <h1 className='underline text-3xl font-semibold'>Services</h1>
            {/* -----------HERE----------- */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-2 md:gap-10 w-full h-96 sm:h-52 my-8 lg:h-64 xl:h-72'>
  <div className='aspect-w-4 aspect-h-3 mx-6 sm:mx-2 xl:mx-10'>
    <Card />
  </div>
  <div className='aspect-w-4 aspect-h-3 mx-6 sm:mx-2 xl:mx-10'>
    <Card />
  </div>
</div>
            {/* -----------HERE----------- */}
            {/* <div className='flex flex-col justify-around items-center w-full '>
            <div className='w-5/6 h-44 sm:w-96 sm:h-60 my-6'>
            <Card />
            </div>
            <div className='w-5/6 h-44 sm:w-96 sm:h-60 my-6'>
            <Card />
            </div>
            </div> */}
             {/* -----------HERE----------- */}
        </div>
    </div>
  )
}

export default Services