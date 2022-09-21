import React from 'react'
import p1 from '../assets/p1.png';
import vector from '../assets/label.png';
import matic from '../assets/matic.png';
import { useState } from 'react';

const ProductDetailSection = ({setShowModal}) => {
  return (
    <>
    <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-3 bg-slate-100 h-full pt-32 pb-10 px-5 md:px-10 lg:px-32'>
        <div>
            <p className='text-lg text-slate-800 font-bold mb-3'>Brand’s name</p>
            <h1 className='text-3xl text-slate-900 font-bold mb-3'>The item’s name goes here</h1>
            <h3 className='text-md text-slate-800 font-bold mb-3'>About the Brand</h3>
            <p className='text-xs text-slate-900 font-medium leading-5 mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3 className='text-md text-slate-800 font-bold'>Release Date</h3>
            <p className='text-sm text-slate-700 mb-3'>November 11, 2022 - 9:00 AM</p>
            <h3 className='text-md text-slate-800 font-bold'>Redemption Window</h3>
            <p className='text-sm text-slate-700 mb-3'>2 years</p>
            <h3 className='text-md text-slate-800 font-bold'>Edition Released</h3>
            <p className='text-sm text-slate-700'>30</p>
        </div>
        <div className='shadow-inner shadow-slate-300 w-80 h-96 rounded-md relative left-1/2 transform -translate-x-1/2'>
            <img src={p1} className="w-full h-full p-1" alt="" />
            <div className='absolute top-0'>
            <img src={vector} className="relative" alt="" />
            <p className='absolute top-6 -rotate-45 text-white text-sm'>physical </p>
            </div>
        </div>
        <div>
            <p className='text-md text-slate-800 font-bold my-3'>Product Detail</p>
            <p className='text-xs text-slate-600 font-semibold my-3'>Item descriptions</p>
            <p className='text-md text-slate-800 font-bold my-3'>2” x 2”</p>
            <div className='flex justify-start items-center w-44'>
                <p className='text-md text-slate-800 font-bold'>Size:</p>
                <div className='flex justify-start items-center ml-5'>
                    <div className='mx-2 border-solid border-2 border-slate-600 rounded-full px-2 py-0.5 text-sm font-bold cursor-pointer text-slate-600 hover:bg-slate-700 hover:text-white'>S</div>
                    <div className='mx-2 border-solid border-2 border-slate-600 rounded-full px-1.5 py-0.5 text-sm font-bold cursor-pointer bg-slate-700 text-white'>M</div>
                    <div className='mx-2 border-solid border-2 border-slate-600 rounded-full px-2.5 py-0.5 text-sm font-bold cursor-pointer text-slate-600 hover:bg-slate-700 hover:text-white'>L</div>
                </div>
            </div>
            <p className='text-sm text-slate-800 font-bold mt-3 my-5'>Made in Italy</p>
            <h3 className='text-md text-slate-800 font-bold mt-3 my-3'>Availability</h3>
            <p className='text-sm text-slate-700 mb-3'>3 of 20 available</p>
            <div className='flex justify-start items-center my-6'>
                <p className='text-2xl mr-2 text-slate-900 font-bold'>$ 1799</p>
                <p className='text-md text-slate-900 font-medium mr-2'>or</p>
                <div className='flex justify-start items-center'>
                    <img src={matic} alt=""  />
                    <p className='text-2xl mr-2 text-purple-600 font-bold ml-2'>2056</p>
                </div>
            </div>
            <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal' onClick={() => setShowModal(true)}>Buy Now</button>
        </div>
    </div>
</>
  )
}

export default ProductDetailSection