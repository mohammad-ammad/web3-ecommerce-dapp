import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import {AiOutlineSearch} from 'react-icons/ai';
import {HiMenuAlt3, HiX} from 'react-icons/hi';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className='fixed z-50 top-3 left-1/2 transform -translate-x-1/2 bg-white flex justify-between items-center w-5/6 h-12 p-5 rounded-full shadow-md'>
        <div className='flex justify-start items-center'>
          <img src={Logo} className="w-7 mr-2" alt="" srcset="" />
          <h1 className='text-lg font-extrabold'>The Spot Room</h1>
        </div>
        <div className='flex justify-start items-center'>
          <div className='hidden lg:flex items-center mx-1 shadow-inner shadow-slate-200 py-1 px-2 rounded-full'>
            <AiOutlineSearch className='mr-2 text-lg text-slate-500'/>
            <input type="text" className='outline-none' name="" id="" placeholder='Search'/>
          </div>
          <div className='hidden md:block mx-2'>
            <a href="" className='text-sm font-bold'>How it works</a>
          </div>
          <div className='hidden md:block mx-2'>
            <a href="" className='text-sm font-bold'>Join Now</a>
          </div>
          <div className='hidden md:block mx-1'>
            <a href="" className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Login</a>
          </div>
          <div className='block md:hidden'>
            {
              toggle ? <HiX className='relative text-2xl font-bold text-slate-700 cursor-pointer' onClick={()=>setToggle(false)}/> :
              <HiMenuAlt3 className='relative text-2xl font-bold text-slate-700 cursor-pointer' onClick={()=>setToggle(true)}/>
            }
            {
              toggle && 
              <div className='absolute top-14 left-1/2 transform -translate-x-1/2 bg-white w-full rounded-xl p-5 shadow-md'>
              <div className='my-2'>
                <a href="" className='text-sm font-bold'>How it works</a>
              </div>
              <div className='my-2'>
                <a href="" className='text-sm font-bold'>Join Now</a>
              </div>
              <hr />
              <div className='flex items-center my-3 shadow-inner shadow-slate-200 py-1 px-2 rounded-full'>
                <AiOutlineSearch className='mr-2 text-lg text-slate-500'/>
                <input type="text" className='outline-none' name="" id="" placeholder='Search'/>
              </div>
              <div className='my-3'>
                <a href="" className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Login</a>
              </div>
            </div>
            }
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar