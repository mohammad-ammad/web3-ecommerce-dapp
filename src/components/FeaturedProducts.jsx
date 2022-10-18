import React from 'react'
import Product from './Product'
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import { useContext } from 'react';
import { MultiVendorContext } from '../context/MultiVendorContext';

const FeaturedProducts = ({Heading}) => {
  //---USECONTEXT
  const {productList} = useContext(MultiVendorContext);
  const images = [
    p1,
    p2,
    p3
  ]
  return (
    <div className="py-10 px-2 md:px-24 bg-slate-100">
        <h1 className='text-3xl text-center font-bold my-3 md:my-2'>{Heading}</h1>
        <div className='flex justify-start items-center my-2 py-1 bg-white rounded-full w-44 mx-auto md:float-right shadow-inner shadow-slate-300 cursor-pointer'>
            <div className='mx-1 text-sm bg-black text-white px-3 py-1 rounded-full cursor-pointer'>US dollar</div>
            <div className='mx-1 text-sm'>Crypto</div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          {
            productList.length > 0 ? 
            productList.map((item,index) => (
              <Product key={index} img={item?.attribute} id={item._id} tag="physical" title={item.title} price={item.native_price}/>
            ))
            : 
            ''
          }
        </div>
    </div>
  )
}

export default FeaturedProducts