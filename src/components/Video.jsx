import React from 'react'
import banner2 from '../assets/banner2.png'
import Strip from './Strip'

// const Banner = "https://cordmagazine.com/wp-content/uploads/2017/07/Top-10-Best-Selling-Clothing-Brands-In-The-World-sajt.jpg";

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