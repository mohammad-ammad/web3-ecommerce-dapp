import React from 'react'

const AccountInfoContent = ({data, setData}) => {

  return (
    <>
    <div>
        <div className='flex justify-start items-center my-3'>
            <h1 className='text-md font-bold text-black'>Account Info:</h1>
            {/* <h2 className='text-xs text-blue-500 cursor-pointer'>I have an account</h2> */}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                <input type="text" value={data.firstname} onChange={(e) => setData({...data, firstname:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='FirstName' name="" id="" />
            </div>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                <input type="text" value={data.lastname} onChange={(e) => setData({...data, lastname:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='LastName' name="" id="" />
            </div>
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="email" value={data.email} onChange={(e) => setData({...data, email:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Email Address' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="date" value={data.DOB} onChange={(e) => setData({...data, DOB:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='DOB' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.phone} onChange={(e) => setData({...data, phone:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Phone No.' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.shipping_address} onChange={(e) => setData({...data, shipping_address:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Address' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.room} onChange={(e) => setData({...data, room:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='room/ apratment etc.' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.city} onChange={(e) => setData({...data, city:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='City name' name="" id="" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                <input type="text" value={data.state} onChange={(e) => setData({...data, state:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='State' name="" id="" />
            </div>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                <input type="text" value={data.zip} onChange={(e) => setData({...data, zip:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Zip Code' name="" id="" />
            </div>
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.country} onChange={(e) => setData({...data, country:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Country' name="" id="" />
        </div>
       
        {/* <h2 className='text-xs text-blue-500 cursor-pointer px-2 py-1'>Forgot my password</h2> */}
    </div>
    </>
  )
}

export default AccountInfoContent