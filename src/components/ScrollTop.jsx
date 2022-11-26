import React, { useEffect, useState } from 'react'
const ScrollTop = () => {
    const [show, setShow] = useState(false);

    const handleBelow = () => {
        if(window.pageYOffset > 100)
        {
            if(!show) setShow(true)
        }
        else 
        {
            if(show) setShow(false)
        }
    }
    const handleScroll = () => {
        window['scrollTo']({top:0, behavior:'smooth'})
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleBelow)
            return () => window.removeEventListener('scroll',handleBelow)
    },[handleBelow])
  return (
    show && <div className='cursor-pointer fixed bottom-[10px] right-[10px] z-50 w-[40px] h-[40px] rounded-full shadow-lg bg-[#E7E7E7] flex justify-center items-center text-xs font-bold' onClick={handleScroll}>
    Top
    </div>
  )
}

export default ScrollTop