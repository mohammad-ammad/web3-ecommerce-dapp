import React from 'react'
import p1 from '../assets/p1.png';

const Redeemable = ({pending, redeemable}) => {
  return (
    <div className='bg-slate-50 border-solid border-[1px] border-black rounded-xl p-2 my-3'>
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-1 overflow-y-auto items-center'>
        <div className='col-span-2'>
            <img src={p1} className="w-24 border-solid border-[1px] border-black rounded-lg" alt="" />
        </div>
        <div className='col-span-4'>
            <h1 className='text-xl font-bold text-black'>The item’s name goes here</h1>
            <p className='text-md text-black font-bold'>Size: M</p>
            <div className='flex justify-between items-center'>
                <a href="" className='text-sm text-blue-500 cursor-pointer'>Details</a>
                {
                    pending &&
                    <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Confirm Order</button>
                    
                }
                {
                    redeemable ? 
                    <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Redeem Now</button>
                    : 
                    ''
                }
            </div>
        </div>
       
    </div>
    {
        pending && 
        <>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Contract Address</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-blue-600'>0x47e3cd89asfuHCF8302Feufn...</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Token ID</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-slate-800'>7</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Token Standard</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-slate-800'>ERC - 1155</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Blockchain</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-slate-800'>Ethereum</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Tracking number</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-blue-600'>48349527344544529345823945</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Redeemed On</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-slate-800'>Sep 5, 2022</p>
            </div>
        </div>
        <p className='text-center text-red-600 text-xs cursor-pointer font-bold py-2'>Return my Order</p>
        </>
    }
    </div>
  )
}

export default Redeemable