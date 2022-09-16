import React from 'react'

const ShippingAddressSection = () => {
  return (
    <>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Shipping name' name="" id="" />
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='room/ apratment etc. (optional)' name="" id="" />
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='City name' name="" id="" />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='State' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Zip Code' name="" id="" />
        </div>
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Country' name="" id="" />
    </div>
    </>
  )
}

export default ShippingAddressSection