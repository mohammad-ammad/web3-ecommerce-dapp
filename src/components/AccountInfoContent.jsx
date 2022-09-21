import React from 'react'
import p1 from '../assets/p1.png';

const AccountInfoContent = () => {
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-0 overflow-y-auto items-center'>
        <div className='col-span-2'>
            <img src={p1} className="w-32 border-solid border-[1px] border-black rounded-lg" alt=""  />
        </div>
        <div className='col-span-4'>
            <h1 className='text-xl font-bold text-black'>The item’s name goes here</h1>
            <p className='text-md text-black font-bold'>Size: M</p>
            <p className='text-3xl text-black font-bold my-5'>$ 1799</p>
        </div>
    </div>
    <div>
        <div className='flex justify-between items-center my-3'>
            <h1 className='text-md font-bold text-black'>Account Login:</h1>
            <h2 className='text-xs text-blue-500 cursor-pointer'>I have an account</h2>
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Email Address' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Password' name="" id="" />
        </div>
        <h2 className='text-xs text-blue-500 cursor-pointer px-2 py-1'>Forgot my password</h2>
    </div>
    </>
  )
}

export default AccountInfoContent