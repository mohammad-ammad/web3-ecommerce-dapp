import React from 'react'
import { Link } from 'react-router-dom';
import vector from '../assets/label.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Product = ({img, tag, title, price, id, toggle}) => {
  console.log(img[0]['image'])
  const indicators = () => {
    return (
      <div className="indicator bg-slate-900 w-7 h-1.5 mx-1 rounded-xl cursor-pointer"></div>
    )
  };
  return (
    <div className='flex flex-col'>
    <div className='shadow-inner shadow-slate-300 w-full h-full md:h-80 rounded-md relative'>
        <Slide autoplay={false} indicators={indicators}>
          <img src={`https://ipfs.moralis.io:2053/ipfs/${img[0]['image']}`} className="w-full h-full md:w-80 md:h-80 p-1" alt="" />
          <img src={`https://ipfs.moralis.io:2053/ipfs/${img[1]['image']}`} className="w-full h-full md:w-80 md:h-80 p-1" alt="" />
          <img src={`https://ipfs.moralis.io:2053/ipfs/${img[2]['image']}`} className="w-full h-full md:w-80 md:h-80 p-1" alt="" />
        </Slide>
        <div className='absolute top-0'>
          <img src={vector} className="relative" alt="" />
          <p className='absolute top-6 -rotate-45 text-white text-sm'>{tag}</p>
        </div>
      </div>
    <Link to={`/product-details/${id}`}>
      <div className='px-2 my-1'>
        <h1 className='text-md font-bold'>{title}</h1>
        {
          toggle ? 
          <p className='text-md font-extrabold my-2'>{price} Matic</p>
          :
          <p className='text-md font-extrabold my-2'>$ {price}</p>
        }
      </div>
    </Link>
    </div>
  )
}

export default Product