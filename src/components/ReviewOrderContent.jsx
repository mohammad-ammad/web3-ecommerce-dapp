import React from 'react'
import p1 from '../assets/p1.png';

const ReviewOrderContent = () => {
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-0 overflow-y-auto'>
        <div className='col-span-2'>
            <img src={p1} className="w-32 border-solid border-[1px] border-black rounded-lg" alt="" srcset="" />
        </div>
        <div className='col-span-4'>
            <h1 className='text-xl font-bold text-black'>The item’s name goes here</h1>
            <p className='text-md text-black font-bold'>Size: M</p>
            <div className='flex justify-start items-center my-2 py-1 bg-white rounded-full w-full mx-auto shadow-inner shadow-slate-300 cursor-pointer'>
                <div className='mx-1 text-sm bg-black text-white text-center px-3 py-1 rounded-full cursor-pointer w-1/2'>Credit Card</div>
                <div className='mx-1 text-sm w-1/2 text-center'>Crypto</div>
            </div>
        </div>
    </div>
    <div className='my-2'>
        <p className='text-sm text-slate-600'>
        Phygital collections will be available for redemption upon successful purchase. Customers without a crypto wallet can simply create an account with us and store the NFT in there. The physical product will be automatically shipped to the address provided unless storage option is selected during check-out. 
        </p>
        <p className='text-sm text-slate-600 my-2'>
            - Physical item redemed at a later date is not eligible for return.
        </p>
        <div className='flex justify-start items-center'>
            <input type="checkbox" className='mr-2' name="" id="" />
            <p className='text-sm md:text-md text-black font-bold'>
            Store the physical item for redemption at a later date.
            </p>
        </div>
    </div>
    {/* <div>
        <h1 className='text-md font-bold text-black'>Shipping Address:</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                <input type="text" className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Street Name' name="" id="" />
            </div>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                <input type="text" className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Room / apartment etc. (optional)' name="" id="" />
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                <input type="text" className='w-full p-2 text-xs bg-transparent outline-none' placeholder='City name' name="" id="" />
            </div>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                    <input type="text" className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Country' name="" id="" />
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                <input type="text" className='w-full p-2 text-xs bg-transparent outline-none' placeholder='State' name="" id="" />
            </div>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                <input type="text" className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Zip Code' name="" id="" />
            </div>
        </div>
    </div> */}
    </>
  )
}

export default ReviewOrderContent