import React from 'react'
import Hero1 from '../assets/hero1.png';
import Hero2 from '../assets/hero2.png';
import Hero3 from '../assets/hero3.png';
const Hero = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <div>
            <img src={Hero1} alt="" srcset="" />
        </div>
        <div>
        <img src={Hero2} alt="" srcset="" />
        </div>
        <div>
        <img src={Hero3} alt="" srcset="" />
        </div>
    </div>
    </>
  )
}

export default Hero