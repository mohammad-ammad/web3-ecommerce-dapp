import React from 'react'
import { HiX } from 'react-icons/hi'
import Banner1 from '../assets/banner1.png'
const BannerCollection = () => {
  return (
    <div>
        <img src={Banner1} className="relative w-full h-80 lg:h-auto"  alt="" srcset="" />
        <div className='absolute top-14 lg:top-1/3 right-14 lg:right-44'>
            <div className='inline-flex justify-end items-end my-3 w-full'>
                <HiX className='fill-white text-3xl cursor-pointer'/>
            </div>
            <div className='inline-flex justify-end items-end my-3 w-full'>
                <p className='bg-white shadow-inner shadow-slate-300 rounded-lg w-24 text-center font-bold'>Live Now</p>
            </div>
            <div className='my-1'>
                <h1 className='text-white text-3xl font-bold'>DeLo Fanco</h1>
            </div>
            <div className='my-3'>
                <p className='text-white text-right text-md'>Timeless Sparks</p>
            </div>
        </div>
    </div>
  )
}

export default BannerCollection