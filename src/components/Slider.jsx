import React, { useRef } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import coursel from '../assets/coursel.png';
const Slider = () => {
    
    const indicators = () => {
        return (
          <div className="indicator border-solid w-3 h-3 mx-1 border-white border-[2px] rounded-full cursor-pointer pp"></div>
        )
      };
  return (
    <div className='relative'>
         <Slide autoplay={false} indicators={indicators}>
            <img src={coursel} className="w-full" alt="" />
            <img src={coursel} className="w-full" alt="" />
            <img src={coursel} className="w-full" alt="" />
        </Slide>
    </div>
  )
}

export default Slider