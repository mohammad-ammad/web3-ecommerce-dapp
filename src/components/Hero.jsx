import React from 'react'
import Hero1 from '../assets/hero1.png';
import Hero2 from '../assets/hero2.png';
import Hero3 from '../assets/hero3.png';
import Banner1 from '../assets/banner1.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [grow, setGrow] = useState(false);
  return (
    <>
    <div className={`grid grid-cols-1 ${grow ? 'md:grid-cols-5' : 'md:grid-cols-3'} gap-3`}>
        <div className={`${grow && 'col-span-3'} relative`}>
            <img src={grow ? Banner1 : Hero1}  className="cursor-pointer w-full h-screen" onMouseEnter={() => setGrow(true)} onMouseLeave={() => setGrow(false)} alt="" srcset="" />
            <div className={`${grow ? 'absolute top-14 md:top-1/3 right-10 md:right-10' : 'hidden'}`} onMouseEnter={() => setGrow(true)}>
            <div className='inline-flex justify-end items-end my-3 w-full'>
                <p className='bg-white shadow-inner shadow-slate-300 rounded-lg w-24 text-center font-bold'>Live Now</p>
            </div>
            <div className='my-1'>
                <h1 className='text-white text-3xl font-bold'>DeLo Fanco</h1>
            </div>
            <div className='my-3'>
                <p className='text-white text-right text-md'>Timeless Sparks</p>
            </div>
            <div className='inline-flex justify-end items-end my-3 w-full'>
                <Link to="/view-collections" className='bg-[#DBFF00] text-black rounded-full px-5 py-1 text-sm font-bold'>View Collections</Link>
            </div>
        </div>
        </div>
        <div>
        <img src={Hero2} alt="" className='w-full h-screen' srcset="" />
        </div>
        <div>
        <img src={Hero3} alt="" className='w-full h-screen' srcset="" />
        </div>
    </div>
    </>
  )
}

export default Hero