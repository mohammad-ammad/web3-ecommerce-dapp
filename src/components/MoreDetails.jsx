import React from 'react'
import more from '../assets/more_detail.png';

const MoreDetails = () => {
  return (
    <div className='flex justify-center items-center w-full flex-col py-10'>
        <h1 className='text-black text-[28px] font-[800] leading-[29px] mb-5'>More Details</h1>
        {/* <p className='text-slate-900 text-[16px] font-[400] leading-[28px] mb-5'>The Mirror of Erised Necklace is an officially-licensed Harry Potter™ piece. </p> */}
        <img src={more} alt="" />
    </div>
  )
}

export default MoreDetails