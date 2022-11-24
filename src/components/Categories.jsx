import React from 'react'
import col1 from '../assets/col1.png';
import col2 from '../assets/col2.png';
import col3 from '../assets/col3.png';
import col4 from '../assets/col4.png';
const Categories = () => {
  return (
    <div className='px-2 md:px-28 py-10 bg-slate-100'>
        <div className='inline-flex justify-center items-center w-full'>
            <h1 className='bg-[#D9D9D9] w-fit px-3 py-2 rounded-full text-lg text-black mb-3'>The Collection</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 px-5 md:px-0'>
            <div className="relative">
                <img src={col4} alt="" />
                <div className='absolute bottom-3 px-5 w-full'>
                    <p className='text-slate-900 text-md md:text-2xl font-bold text-center'>
                    Locket Golden Snitch Necklace
                    </p>
                </div>
            </div>
            <div className="relative">
                <img src={col1} alt="" />
                <div className='absolute bottom-3 px-5 w-full'>
                    <p className='text-slate-900 text-md md:text-2xl font-bold text-center'>
                    Time Turner Diamond Necklace
                    </p>
                </div>
            </div>
            <div className="relative">
                <img src={col2} alt="" />
                <div className='absolute bottom-3 px-5 w-full'>
                    <p className='text-slate-900 text-md md:text-2xl font-bold text-center'>
                    Hogwarts Acceptance Letter Necklace
                    </p>
                </div>
            </div>
            <div className="relative">
                <img src={col3} alt="" />
                <div className='absolute bottom-3 px-5 w-full'>
                    <p className='text-slate-900 text-md md:text-2xl font-bold text-center'>
                    Mirror of Erised Necklace
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories