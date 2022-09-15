import React from 'react'
import p1 from '../assets/p1.png';
import cloud from '../assets/cloud.png';

const ConfirmOrderContent = () => {
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-0 overflow-y-auto items-center'>
        <div className='col-span-2'>
            <img src={p1} className="w-32 border-solid border-[1px] border-black rounded-lg" alt="" srcset="" />
        </div>
        <div className='col-span-4'>
            <h1 className='text-xl font-bold text-black'>The item’s name goes here</h1>
            <p className='text-md text-black font-bold'>Size: M</p>
            <p className='text-3xl text-black font-bold my-5'>$ 1799</p>
        </div>
    </div>
    <div>
        <h1 className='text-2xl text-black font-extrabold my-2'>Hello, John</h1>
        <p className='text-sm text-slate-600 my-2'>
        You have selected to store your physical item for later redemption. We will securely store your NFT in your account for you after you placing the order. If you change your mind, you can go back to change the option.
        </p>
    </div>
    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center bg-white border-solid border-[1px] border-black px-3 py-2 rounded-lg'>
        <div className='flex justify-center md:justify-start items-center'>
            <img src={cloud} alt="" srcset="" />
            <p className='ml-5 md:ml-2 text-md text-black font-semibold'>Store the physical item for redemption at a later date.</p>
        </div>
        <div>
            <button className='text-blue-600'>Change Option</button>
        </div>
    </div>
    </>
  )
}

export default ConfirmOrderContent