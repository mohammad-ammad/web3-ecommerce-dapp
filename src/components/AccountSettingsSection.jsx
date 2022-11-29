import React from 'react'

const AccountSettingsSection = ({data ,setData}) => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.firstname} onChange={(e) => setData({...data,firstname:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='FirstName' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.lastname} onChange={(e) => setData({...data,lastname:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='LastName' name="" id="" />
        </div>
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.email} onChange={(e) => setData({...data,email:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Email Address' name="" id="" />
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="date" value={data.DOB} onChange={(e) => setData({...data,DOB:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='DOB' name="" id="" />
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.phone} onChange={(e) => setData({...data,phone:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Phone No.' name="" id="" />
    </div>
    </>
  )
}

export default AccountSettingsSection