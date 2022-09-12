import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai';

const HeroHowItsWork = () => {
  return (
    <div className='bg-slate-100 w-full h-screen flex justify-center items-center flex-col'>
        <h1 className='text-4xl bg-[#DBFF00] py-3 px-4 font-bold my-3'>How It Works</h1>
        <p className='text-2xl text-center'>We back luxury goods on the Blockchain, so that</p>
        <p className='text-2xl text-center'>you can buy and trade easily and securely.</p>
        <div className='h-32 inline-flex justify-center items-end'>
            <AiOutlineArrowDown className='text-3xl fill-slate-800 cursor-pointer'/>
        </div>
    </div>
  )
}

export default HeroHowItsWork