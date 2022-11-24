import React from 'react'
import banner2 from '../assets/ncf.png'
import Strip from './Strip'

const Video = () => {
  return (
    <>
    <Strip/>
    <div>
        <img src={banner2} className="w-full" alt=""  />
    </div>
    <Strip/>
    </>
  )
}

export default Video