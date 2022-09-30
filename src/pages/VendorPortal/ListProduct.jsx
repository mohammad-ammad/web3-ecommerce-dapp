import { Textarea } from '@windmill/react-ui'
import React from 'react'
import { Link } from 'react-router-dom'

const ListProduct = () => {
  return (
    <div className='w-full h-screen pt-28 bg-slate-100'>
      <div className='px-5 md:px-28 flex justify-between items-center'>
        <h1 className='text-md text-black font-bold'>List Products</h1>
        <Link to="/seller-products" className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Back</Link>
      </div>

      <div className='px-5 md:px-28 my-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
          <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Title' name="" id="" />
          </div>
          <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='SKU' name="" id="" />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
          <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Price' name="" id="" />
          </div>
          <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Delivery Days' name="" id="" />
          </div>
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
          <Textarea className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Description'></Textarea>
        </div>
        <div className='flex justify-center items-center my-5'>
            <button className='bg-black text-white w-full rounded-full px-5 py-1 text-sm font-normal'>Mint</button>
          </div>
      </div>

    </div>
  )
}

export default ListProduct