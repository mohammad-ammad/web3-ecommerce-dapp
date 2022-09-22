import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import {AiOutlineSearch} from 'react-icons/ai';
import {HiMenuAlt3, HiX} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Transition } from '@windmill/react-ui';
import { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';
const Navbar = ({setShowModal, setIsSignUp}) => {
  //Intialized states
  const [toggle, setToggle] = useState(false);
  //Getting Instance Context
  const {wallet} = useContext(WalletContext)

  return (
    <>
      <div className='fixed z-50 top-3 left-1/2 transform -translate-x-1/2 bg-white flex justify-between items-center w-5/6 h-12 p-5 rounded-full shadow-md'>
        <Link to='/' className='flex justify-start items-center'>
          <img src={Logo} className="w-7 mr-2" alt="" />
          <h1 className='text-lg font-extrabold'>The Spot Room</h1>
        </Link>
        <div className='flex justify-start items-center'>
          <div className='hidden lg:flex items-center mx-1 shadow-inner shadow-slate-200 py-1 px-2 rounded-full'>
            <AiOutlineSearch className='mr-2 text-lg text-slate-500'/>
            <input type="text" className='outline-none' name="" id="" placeholder='Search'/>
          </div>
          <div className='hidden md:block mx-2'>
            <Link to="/how-it-works" className='text-sm font-bold'>How it works</Link>
          </div>
          {
            wallet.isConnected ?
            <>
              <div className='hidden md:block mx-2'>
                <a href="" className='text-sm font-bold'>Profile</a>
              </div>
              <div className='hidden md:block mx-2'>
                <Link to="/orders" className='text-sm font-bold'>Orders</Link>
              </div>
              <div className='hidden md:block mx-1'>
                <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Connected</button>
              </div>
            </>
            :
            <>
              <div className='hidden md:block mx-2'>
                <button onClick={()=>setIsSignUp(true)} className='text-sm font-bold'>Join Now</button>
              </div>
              <div className='hidden md:block mx-1'>
                <button onClick={()=>setShowModal(true)} className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Login</button>
              </div>
            </>
          }
         
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
                <Link to="/how-it-works" className='text-sm font-bold'>How it works</Link>
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
            </Transition>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar