import React from 'react'
import col1 from '../assets/col1.png';
import col2 from '../assets/col2.png';
import col3 from '../assets/col3.png';
import col4 from '../assets/col4.png';
const Categories = () => {
  return (
    <div className='px-2 md:px-28 py-10 bg-slate-100'>
        <h1 className='text-3xl text-center font-bold my-3 '>The Collection</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 px-5 md:px-0'>
            <div className="relative">
                <img src={col1} alt="" />
                <div className='absolute bottom-3 px-5'>
                    <p className='text-white text-md md:text-2xl font-bold'>
                        Freeman Jewelry - Locket Golden Snitch Necklace
                    </p>
                </div>
            </div>
            <div className="relative">
                <img src={col2} alt="" />
                <div className='absolute bottom-3 md:bottom-10 px-5'>
                    <p className='text-white text-md md:text-2xl font-bold'>
                        Time Turner Diamond Necklace
                    </p>
                </div>
            </div>
            <div className="relative">
                <img src={col3} alt="" />
                <div className='absolute bottom-3 px-5'>
                    <p className='text-white text-md md:text-2xl font-bold'>
                        Hogwarts Acceptance Letter Necklace
                    </p>
                </div>
            </div>
            <div className="relative">
                <img src={col4} alt="" />
                <div className='absolute bottom-3 px-5'>
                    <p className='text-white text-md md:text-2xl font-bold'>
                        Mirror of Erised Necklace
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories