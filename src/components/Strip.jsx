import React from 'react'
import Logo from '../assets/logo.png';
const Strip = () => {
  return (
    <div className='flex justify-evenly items-center bg-[#DBFF00] py-2'>
        <div className='flex justify-start items-center'>
            <img src={Logo} className="w-7 mr-2" alt="" />
            <h1 className='text-xs font-bold'>It's time to get phygital</h1>
        </div>
        <div className='flex justify-start items-center'>
            <img src={Logo} className="w-7 mr-2" alt="" />
            <h1 className='text-xs font-bold'>It's time to get phygital</h1>
        </div>
        <div className='hidden md:flex justify-start items-center'>
            <img src={Logo} className="w-7 mr-2" alt="" />
            <h1 className='text-xs font-bold'>It's time to get phygital</h1>
        </div>
        <div className='hidden md:flex justify-start items-center'>
            <img src={Logo} className="w-7 mr-2" alt="" />
            <h1 className='text-xs font-bold'>It's time to get phygital</h1>
        </div>
        <div className='hidden md:flex justify-start items-center'>
            <img src={Logo} className="w-7 mr-2" alt="" />
            <h1 className='text-xs font-bold'>It's time to get phygital</h1>
        </div>
        
    </div>
  )
}

export default Strip