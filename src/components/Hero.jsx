import React from 'react'
import Hero1 from '../assets/hero1.png';
import Hero2 from '../assets/hero2.png';
import Hero3 from '../assets/hero3.png';
import Hero4 from '../assets/hero4.png';
import Banner1 from '../assets/banner1.png';
import Banner3 from '../assets/banner3.png';
import Banner4 from '../assets/banner4.png';
import Banner5 from '../assets/banner5.png';
import freeman from '../assets/freemanlogo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
    const [grow, setGrow] = useState(0);
    return (
        <>
            <div className={`hidden md:grid gap-3 ${grow > 0 ? 'grid-cols-6' : 'grid-cols-4'}`}>
                <div className={`${grow === 1 && 'col-span-3'} relative`}>
                    <img src={grow === 1 ? Banner1 : Hero1} className="cursor-pointer w-full h-screen" alt="" onMouseEnter={() => setGrow(1)} onMouseLeave={() => setGrow(0)} />
                    <div className={`${grow === 1 ? 'absolute top-14 md:top-1/3 right-10 md:right-10' : 'hidden'}`} onMouseEnter={() => setGrow(true)}>
                        <div className='inline-flex justify-end items-center my-3 w-full'>
                            <img src={freeman} className="w-24 bg-white rounded-md mr-3 py-1" alt="" srcset="" />
                            <p className='bg-[#7956DC] shadow-inner shadow-[#c2b2ee] rounded-lg w-28 py-2 text-white text-center font-bold'>Live Now</p>
                        </div>
                        <div className='my-1'>
                            <h1 className='text-white text-3xl font-extrabold'>LOCKET GOLDEN SNITCH NECKLACE</h1>
                        </div>
                        <div className='my-3'>
                            <p className='text-white text-right text-md'>Harry Potter™</p>
                        </div>
                        <div className='inline-flex justify-end items-end my-3 w-full'>
                            <Link to="/view-collections" className='bg-[#DBFF00] text-black rounded-full px-5 py-2 text-sm font-bold'>View Collections</Link>
                        </div>
                    </div>
                </div>
                <div className={`${grow === 2 && 'col-span-3'} relative`}>
                    <img src={grow === 2 ? Banner3 : Hero2} className="cursor-pointer w-full h-screen" alt="" onMouseEnter={() => setGrow(2)} onMouseLeave={() => setGrow(0)} />
                    <div className={`${grow === 2 ? 'absolute top-14 md:top-1/3 right-10 md:right-10' : 'hidden'}`} onMouseEnter={() => setGrow(true)}>
                    <div className='inline-flex justify-end items-center my-3 w-full'>
                            <img src={freeman} className="w-24 bg-white rounded-md mr-3 py-1" alt="" srcset="" />
                            <p className='bg-[#7956DC] shadow-inner shadow-[#c2b2ee] rounded-lg w-28 py-2 text-white text-center font-bold'>Live Now</p>
                        </div>
                        <div className='my-1'>
                            <h1 className='text-white text-3xl font-extrabold'>LOCKET GOLDEN SNITCH NECKLACE</h1>
                        </div>
                        <div className='my-3'>
                            <p className='text-white text-right text-md'>Harry Potter™</p>
                        </div>
                        <div className='inline-flex justify-end items-end my-3 w-full'>
                            <Link to="/view-collections" className='bg-[#DBFF00] text-black rounded-full px-5 py-2 text-sm font-bold'>View Collections</Link>
                        </div>
                    </div>
                </div>
                <div className={`${grow === 3 && 'col-span-3'} relative`}>
                    <img src={grow === 3 ? Banner4 : Hero3} className="cursor-pointer w-full h-screen" alt="" onMouseEnter={() => setGrow(3)} onMouseLeave={() => setGrow(0)} />
                    <div className={`${grow === 3 ? 'absolute top-14 md:top-1/3 right-10 md:right-10' : 'hidden'}`} onMouseEnter={() => setGrow(true)}>
                    <div className='inline-flex justify-end items-center my-3 w-full'>
                            <img src={freeman} className="w-24 bg-white rounded-md mr-3 py-1" alt="" srcset="" />
                            <p className='bg-[#7956DC] shadow-inner shadow-[#c2b2ee] rounded-lg w-28 py-2 text-white text-center font-bold'>Live Now</p>
                        </div>
                        <div className='my-1'>
                            <h1 className='text-white text-3xl font-extrabold'>LOCKET GOLDEN SNITCH NECKLACE</h1>
                        </div>
                        <div className='my-3'>
                            <p className='text-white text-right text-md'>Harry Potter™</p>
                        </div>
                        <div className='inline-flex justify-end items-end my-3 w-full'>
                            <Link to="/view-collections" className='bg-[#DBFF00] text-black rounded-full px-5 py-2 text-sm font-bold'>View Collections</Link>
                        </div>
                    </div>
                </div>
                <div className={`${grow === 4 && 'col-span-3'} relative`}>
                    <img src={grow === 4 ? Banner5 : Hero4} className="cursor-pointer w-full h-screen" alt="" onMouseEnter={() => setGrow(4)} onMouseLeave={() => setGrow(0)} />
                    <div className={`${grow === 4 ? 'absolute top-14 md:top-1/3 right-10 md:right-10' : 'hidden'}`} onMouseEnter={() => setGrow(true)}>
                    <div className='inline-flex justify-end items-center my-3 w-full'>
                            <img src={freeman} className="w-24 bg-white rounded-md mr-3 py-1" alt="" srcset="" />
                            <p className='bg-[#7956DC] shadow-inner shadow-[#c2b2ee] rounded-lg w-28 py-2 text-white text-center font-bold'>Live Now</p>
                        </div>
                        <div className='my-1'>
                            <h1 className='text-white text-3xl font-extrabold'>LOCKET GOLDEN SNITCH NECKLACE</h1>
                        </div>
                        <div className='my-3'>
                            <p className='text-white text-right text-md'>Harry Potter™</p>
                        </div>
                        <div className='inline-flex justify-end items-end my-3 w-full'>
                            <Link to="/view-collections" className='bg-[#DBFF00] text-black rounded-full px-5 py-2 text-sm font-bold'>View Collections</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-2 md:hidden'>
                <div>
                    <img src={Hero1} className="w-full" alt="" />
                </div>
                <div>
                    <img src={Hero2} className="w-full" alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero