import React from 'react'
import Banner2 from '../assets/banner2.png'
import freemanLogo from '../assets/freeman.png';

const BannerCollection = () => {
  return (
    <div>
        <img src={Banner2} className="relative w-full h-80 lg:h-auto"  alt="" />
        <div className='absolute top-14 lg:top-1/3 flex justify-center items-center w-full flex-col'>
            <div className='flex flex-col md:flex-row justify-between items-center my-3'>
                <div className='mb-2 md:mb-0'>
                    <img src={freemanLogo} alt="" />
                </div>
                <div className='bg-[#7956DC] text-white px-4 py-2 mx-2 shadow-inner shadow-purple-500 rounded-md'>
                    Live Now
                </div>
            </div>
            <h1 className='text-white text-md md:text-3xl font-bold mb-2'>
                Freeman Jewelry
            </h1>
            <h1 className='text-white text-md md:text-3xl font-bold mb-3'>
                Harry Potter™ Collection
            </h1>
            <button className='bg-[#DBFF00] px-5 py-2 rounded-full text-black font-semibold'>View</button>
        </div>
    </div>
  )
}

export default BannerCollection