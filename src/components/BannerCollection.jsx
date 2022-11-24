import React from 'react'
import Banner2 from '../assets/banner2.png'
import freemanLogo from '../assets/freemanlogo.png';

const BannerCollection = () => {
  return (
    <div>
        <img src={Banner2} className="relative w-full h-80 lg:h-auto"  alt="" />
        <div className='absolute top-10 lg:top-1/4 flex justify-center items-center w-full flex-col'>
           <div>
            <img src={freemanLogo} className="w-80" alt="" />
           </div>
           <div>
            <p className='bg-[#7956DC] shadow-inner shadow-[#c2b2ee] rounded-lg w-28 py-2 text-white text-center font-bold'>Live Now</p>
           </div>
        </div>
    </div>
  )
}

export default BannerCollection