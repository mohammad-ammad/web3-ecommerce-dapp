import React from 'react'
import Product from './Product'
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import { useContext } from 'react';
import { MultiVendorContext } from '../context/MultiVendorContext';
import { useState } from 'react';

const FeaturedProducts = ({Heading}) => {
  //---USECONTEXT
  const {productList} = useContext(MultiVendorContext);
  //---USESTATE
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="py-10 px-2 md:px-24 bg-slate-100">
        <h1 className='text-3xl text-center font-bold my-3 md:my-2'>{Heading}</h1>
        <div className='flex justify-evenly items-center my-2 py-1 bg-white rounded-full w-44 mx-auto md:float-right shadow-inner shadow-slate-300 cursor-pointer'>
            <div className={`mx-1 text-sm ${toggle === false ? 'bg-black text-white px-3 py-1 rounded-full' : 'px-1'} cursor-pointer`} onClick={()=>setToggle(false)}>Us Dollar</div>
            <div className={`mx-1 text-sm ${toggle === true ? 'bg-black text-white  px-3 py-1 rounded-full' : 'px-1'} cursor-pointer`} onClick={()=>setToggle(true)}>Crypto</div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          {
            productList.length > 0 ? 
            productList.map((item,index) => (
              <Product key={index} img={[item.primary_image,item.secondary_image,item.tertiary_image]} id={item._id} tag="physical" title={item.title} price={toggle ? item.crypto_price : item.native_price} toggle={toggle}/>
            ))
            : 
            ''
          }
        </div>
    </div>
  )
}

export default FeaturedProducts