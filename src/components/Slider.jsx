import React, { useRef } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import coursel from '../assets/c1.png';
import coursel2 from '../assets/c2.png';
import coursel3 from '../assets/c3.png';
import coursel4 from '../assets/c4.png';
import coursel5 from '../assets/c5.png';
import coursel6 from '../assets/c6.png';
import coursel7 from '../assets/c7.png';
import coursel8 from '../assets/c8.png';
import coursel9 from '../assets/c9.png';
import coursel10 from '../assets/c10.png';
import coursel11 from '../assets/c11.png';
const Slider = () => {
    
    const indicators = () => {
        return (
          <div className="indicator border-solid w-3 h-3 mx-1 border-white border-[2px] rounded-full cursor-pointer pp"></div>
        )
      };
  return (
    <div className='relative'>
         <Slide autoplay={true} indicators={indicators}>
            <img src={coursel} className="w-full" alt="" />
            <img src={coursel2} className="w-full" alt="" />
            <img src={coursel3} className="w-full" alt="" />
            <img src={coursel4} className="w-full" alt="" />
            <img src={coursel5} className="w-full" alt="" />
            <img src={coursel6} className="w-full" alt="" />
            <img src={coursel7} className="w-full" alt="" />
            <img src={coursel8} className="w-full" alt="" />
            <img src={coursel9} className="w-full" alt="" />
            <img src={coursel10} className="w-full" alt="" />
            <img src={coursel11} className="w-full" alt="" />
        </Slide>
    </div>
  )
}

export default Slider