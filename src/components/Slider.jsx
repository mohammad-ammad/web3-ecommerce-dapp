import React, { useRef } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import coursel from '../assets/c1.png';
import coursel2 from '../assets/c2.png';
import coursel3 from '../assets/c3.png';
import coursel4 from '../assets/c4.png';
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
        </Slide>
    </div>
  )
}

export default Slider