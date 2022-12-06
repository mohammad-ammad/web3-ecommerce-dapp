import React from 'react'
import { Link } from 'react-router-dom';
import vector from '../assets/label.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useState } from 'react';

const Product = ({img, tag, title, price, id, toggle}) => {
  console.log(img[1]['image'])
  const [activeIndex, setActiveIndex] = useState(0);
  const indicators = () => {
    return (
      <div className="indicator border-black border-[2px] w-10 h-1.5 mx-1 rounded-xl cursor-pointer"></div>
    )
  };
  return (
    <Link to={`/product-details/${id}`}>
    <div className='flex flex-col'>
    <div className='shadow-inner shadow-slate-300 w-full h-full md:h-80 rounded-md relative'>
        <Slide autoplay={false} indicators={indicators} canSwipe={true} onChange={(e, index )=>setActiveIndex(index)}>
          <img src={`https://ipfs.moralis.io:2053/ipfs/${img[0]}`} className="w-full h-full md:w-80 md:h-80 p-1" alt="" />
          <img src={`https://ipfs.moralis.io:2053/ipfs/${img[1]}`} className="w-full h-full md:w-80 md:h-80 p-1" alt="" />
          <img src={`https://ipfs.moralis.io:2053/ipfs/${img[2]}`} className="w-full h-full md:w-80 md:h-80 p-1" alt="" />
        </Slide>
        <div className='absolute top-0'>
          <img src={vector} className="relative" alt="" />
          <p className={`absolute ${activeIndex === 0 ? 'top-6 text-sm' : 'top-6 left-[20px] text-sm'} -rotate-45 text-white`}>{activeIndex === 0 ? 'Physical' : activeIndex === 1 ? 'NFT' : activeIndex === 2 ? "AR" : null}</p>
        </div>
      </div>
      <div className='px-2 my-1'>
        <h1 className='text-md font-bold'>{title}</h1>
        {
          toggle ? 
          <p className='text-md font-extrabold my-2'>{Number(price).toFixed(2)} Matic</p>
          :
          <p className='text-md font-extrabold my-2'>$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        }
      </div>
    </div>
    </Link>
  )
}

export default Product