import React from 'react'
import Strip from './Strip'

const Banner = "https://cordmagazine.com/wp-content/uploads/2017/07/Top-10-Best-Selling-Clothing-Brands-In-The-World-sajt.jpg";

const Video = () => {
  return (
    <>
    <Strip/>
    <div>
        <img src={Banner} className="w-full" alt="" srcset="" />
    </div>
    <Strip/>
    </>
  )
}

export default Video