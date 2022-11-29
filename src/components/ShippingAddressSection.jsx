import React from 'react'

const ShippingAddressSection = ({data ,setData}) => {
  return (
    <>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.shipping_address} onChange={(e) => setData({...data,shipping_address:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Shipping name' name="" id="" />
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.room} onChange={(e) => setData({...data,room:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='room/ apratment etc. (optional)' name="" id="" />
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.city} onChange={(e) => setData({...data,city:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='City name' name="" id="" />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.state} onChange={(e) => setData({...data,state:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='State' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.zip} onChange={(e) => setData({...data,zip:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Zip Code' name="" id="" />
        </div>
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.country} onChange={(e) => setData({...data,country:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Country' name="" id="" />
    </div>
    </>
  )
}

export default ShippingAddressSection