import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai';
import whitePaper from '../assets/white_paper.pdf';
import howVideo from '../assets/how_video.mp4';
import Rect from '../assets/Rectangle.png';

const HeroHowItsWork = ({executeScroll}) => {
  return (
    <>
    <div className='relative'>
      <img src={Rect} alt="" className='h-[900px] md:h-[700px] w-full' />
      <div className='w-full flex justify-center items-center flex-col absolute top-14 md:top-1/4'>
        <div className='flex md:flex-row flex-col justify-between items-center w-[80%] px-2 md:px-28'>
          <div>
            <h1 className='text-4xl font-extrabold text-center md:text-left my-4'>How It Works</h1>
            <p className='text-xl font-semibold text-center md:text-left'>We back luxury goods on the Blockchain, so that</p>
            <p className='text-xl font-semibold text-center md:text-left'>you can buy and trade easily and securely.</p>
            <div className='mt-8 mb-4 inline-flex md:justify-start justify-center items-center w-full'>
              <a href={whitePaper} target="_blank" className='bg-black text-white rounded-full px-5 py-2 text-sm font-normal'>White Paper</a>
            </div>
          </div>
          <div>
            <video src={howVideo} width="200" height="150" className='rounded-md' autoPlay loop ></video>
          </div>
        </div>
        <div className='h-32 inline-flex justify-center items-end'>
            <AiOutlineArrowDown onClick={executeScroll} className='text-3xl fill-slate-800 cursor-pointer'/>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default HeroHowItsWork