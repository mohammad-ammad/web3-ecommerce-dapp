import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai';
import whitePaper from '../assets/white_paper.pdf';

const HeroHowItsWork = () => {
  return (
    <div className='bg-slate-100 w-full h-screen flex justify-center items-center flex-col'>
        {/* <h1 className='text-4xl bg-[#DBFF00] py-3 px-4 font-bold my-3'>How It Works</h1>
        <p className='text-2xl text-center'>We back luxury goods on the Blockchain, so that</p>
        <p className='text-2xl text-center'>you can buy and trade easily and securely.</p> */}
        <div className='flex md:flex-row flex-col justify-between items-center w-full px-2 md:px-28'>
          <div>
            <h1 className='text-4xl font-bold text-center md:text-left'>How It Works</h1>
            <p className='text-xl text-center md:text-left'>We back luxury goods on the Blockchain, so that</p>
            <p className='text-xl text-center md:text-left'>you can buy and trade easily and securely.</p>
            <div className='mt-8 mb-4 inline-flex md:justify-start justify-center items-center w-full'>
              <a href={whitePaper} target="_blank" className='bg-black text-white rounded-full px-5 py-2 text-sm font-normal'>Check Out Whitepaper</a>
            </div>
          </div>
          <div>
            <img src="https://image.shutterstock.com/image-vector/video-player-screen-web-dark-260nw-1695944479.jpg" alt="" />
          </div>
        </div>
        <div className='h-32 inline-flex justify-center items-end'>
            <AiOutlineArrowDown className='text-3xl fill-slate-800 cursor-pointer'/>
        </div>
    </div>
  )
}

export default HeroHowItsWork