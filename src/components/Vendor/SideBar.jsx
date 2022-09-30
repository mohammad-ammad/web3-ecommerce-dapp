import React, { useState } from 'react'
import Logo from '../../assets/logo.png';
import {HiMenuAlt3, HiX} from 'react-icons/hi';
import { Transition } from '@windmill/react-ui';
import { Link } from 'react-router-dom';

const SideBar = () => {
    //Intialized states
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className='fixed z-50 top-3 left-1/2 transform -translate-x-1/2 bg-white flex justify-between items-center w-5/6 h-12 p-5 rounded-full shadow-md'>
        <Link to='/' className='flex justify-start items-center'>
          <img src={Logo} className="w-7 mr-2" alt="" />
          <h1 className='text-lg font-extrabold'>The Spot Room</h1>
        </Link>
        <div className='flex justify-start items-center'>
          <div className='hidden md:block mx-2'>
            <Link to="/how-it-works" className='text-sm font-bold'>Dashboard</Link>
          </div>
          <div className='hidden md:block mx-2'>
            <Link to="/seller-products" className='text-sm font-bold'>List Product</Link>
          </div>
          <div className='hidden md:block mx-2'>
            <Link to="/seller-orders" className='text-sm font-bold'>Orders</Link>
          </div>
          <div className='hidden md:block mx-2'>
            <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Logout</button>
          </div>
         
         
          <div className='block md:hidden'>
            {
              toggle ? <HiX className='relative text-2xl font-bold text-slate-700 cursor-pointer' onClick={()=>setToggle(false)}/> :
              <HiMenuAlt3 className='relative text-2xl font-bold text-slate-700 cursor-pointer' onClick={()=>setToggle(true)}/>
            }
           <Transition
                  show={toggle}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-100 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
              <div className='absolute top-14 left-1/2 transform -translate-x-1/2 bg-white w-full rounded-xl p-5 shadow-md'>
              <div className='my-2'>
                <Link to="/how-it-works" className='text-sm font-bold'>Dashboard</Link>
              </div>
              <div className='my-2'>
                <Link to="/how-it-works" className='text-sm font-bold'>List Products</Link>
              </div>
              <div className='my-2'>
                <Link to="/how-it-works" className='text-sm font-bold'>Profile</Link>
              </div>
              <hr />
              
              <div className='my-3'>
              <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Logout</button>
              </div>
            </div>
            </Transition>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar