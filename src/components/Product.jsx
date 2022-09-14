import React from 'react'
import { Link } from 'react-router-dom';
import vector from '../assets/label.png';

const Product = ({img, tag, title, price}) => {
  return (
    <Link to='/product-details'>
      <div className='shadow-inner shadow-slate-300 w-full rounded-md relative'>
        <img src={img} className="w-full h-full md:w-80 md:h-80 p-1" alt="" />
        <div className='absolute top-0'>
          <img src={vector} className="relative" alt="" />
          <p className='absolute top-6 -rotate-45 text-white text-sm'>{tag}</p>
        </div>
      </div>
      <div className='px-2 my-1'>
        <h1 className='text-md font-bold'>{title}</h1>
        <p className='text-md font-extrabold my-2'>$ {price}</p>
      </div>
    </Link>
  )
}

export default Product