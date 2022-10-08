import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const Attributes = ({trash, attr, setAttr, attributes, setAttributes}) => {
  return (
    <>
    <div>
        <div className='flex items-center justify-end my-2 mx-3'>
            {
                trash &&
                <FaTrashAlt onClick={()=>setAttr(attr - 1)} className='text-red-500 cursor-pointer'/>
            }
        </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
              <input type="file" onChange={(e)=>setAttributes({...attributes,image:e.target.files[0]})} className='w-full p-3 text-xs bg-transparent outline-none' name="" id="" />
            </div>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
              <select onChange={(e)=>setAttributes({...attributes,sizeId:e.target.value})} name="" id="" className='w-full p-3 text-xs bg-transparent outline-none'>
                <option value="s">Select Size</option>
                <option value="s">Small</option>
              </select>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
              <select onChange={(e)=>setAttributes({...attributes,colorId:e.target.value})} name="" id="" className='w-full p-3 text-xs bg-transparent outline-none'>
                <option value="red">Select Color</option>
                <option value="red">red</option>
              </select>
            </div>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
              <input type="text" value={attributes.availabilty} onChange={(e)=>setAttributes({...attributes,availabilty:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='SKU' name="" id="" />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
              <input type="text" value={attributes.native_price} onChange={(e)=>setAttributes({...attributes,native_price:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Price in USD' name="" id="" />
            </div>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
              <input type="text" value={attributes.crypto_price} onChange={(e)=>setAttributes({...attributes,crypto_price:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Price in Matic' name="" id="" />
            </div>
          </div>          
          
        </div>
    </>
  )
}

export default Attributes