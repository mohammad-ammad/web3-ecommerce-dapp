import React from 'react'
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import vector from '../assets/label.png';
import matic from '../assets/matic.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { MultiVendorContext } from '../context/MultiVendorContext';

const ProductDetailSection = ({setShowModal}) => {
    //---USEPARAMS
    const {id} = useParams();

    //---USECONTEXT
    const {productDetails, pDetails} = useContext(MultiVendorContext)

    //---USEEFFECT 
    useEffect(() => {
        productDetails(id)
    }, [id])
    
    const images = [
        p1,
        p2,
        p3
    ];
    const indicators = () => {
        return (
          <div className="indicator bg-slate-900 w-7 h-1.5 mx-1 rounded-xl cursor-pointer"></div>
        )
      };
  return (
    <>
    <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-3 bg-slate-100 h-full pt-32 pb-10 px-5 md:px-10 lg:px-32'>
        <div>
            <p className='text-lg text-slate-800 font-bold mb-3'>Brand’s name</p>
            <h1 className='text-3xl text-slate-900 font-bold mb-3'>{pDetails[0]?.title}</h1>
            <h3 className='text-md text-slate-800 font-bold mb-3'>About the Brand</h3>
            <p className='text-xs text-slate-900 font-medium leading-5 mb-2'>
            {pDetails[0]?.description}
            </p>
            <h3 className='text-md text-slate-800 font-bold'>Release Date</h3>
            <p className='text-sm text-slate-700 mb-3'>November 11, 2022 - 9:00 AM</p>
            <h3 className='text-md text-slate-800 font-bold'>Redemption Window</h3>
            <p className='text-sm text-slate-700 mb-3'>2 years</p>
            <h3 className='text-md text-slate-800 font-bold'>Edition Released</h3>
            <p className='text-sm text-slate-700'>30</p>
        </div>
        <div className='shadow-inner shadow-slate-300 w-80 h-96 rounded-md relative left-1/2 transform -translate-x-1/2'>
            <Slide autoplay={false} indicators={indicators}>
                <img src={`https://ipfs.moralis.io:2053/ipfs/${pDetails[0]?.attribute[0]['image']}`} className="w-full h-96 p-1" alt="" />
                <img src={`https://ipfs.moralis.io:2053/ipfs/${pDetails[0]?.attribute[1]['image']}`} className="w-full h-96 p-1" alt="" />
                <img src={`https://ipfs.moralis.io:2053/ipfs/${pDetails[0]?.attribute[2]['image']}`} className="w-full h-96 p-1" alt="" />
            </Slide>
            <div className='absolute top-0'>
            <img src={vector} className="relative" alt="" />
            <p className='absolute top-6 -rotate-45 text-white text-sm'>physical </p>
            </div>
        </div>
        <div>
            <p className='text-md text-slate-800 font-bold my-3'>Product Detail</p>
            <p className='text-xs text-slate-600 font-semibold my-3'>Item descriptions</p>
            <p className='text-md text-slate-800 font-bold my-3'>2” x 2”</p>
            <div className='flex justify-start items-center w-44'>
                <p className='text-md text-slate-800 font-bold'>Size:</p>
                <div className='flex justify-start items-center ml-5'>
                    <div className='mx-2 border-solid border-2 border-slate-600 rounded-full px-2 py-0.5 text-sm font-bold cursor-pointer text-slate-600 hover:bg-slate-700 hover:text-white'>S</div>
                    <div className='mx-2 border-solid border-2 border-slate-600 rounded-full px-1.5 py-0.5 text-sm font-bold cursor-pointer bg-slate-700 text-white'>M</div>
                    <div className='mx-2 border-solid border-2 border-slate-600 rounded-full px-2.5 py-0.5 text-sm font-bold cursor-pointer text-slate-600 hover:bg-slate-700 hover:text-white'>L</div>
                </div>
            </div>
            <p className='text-sm text-slate-800 font-bold mt-3 my-5'>Made in Italy</p>
            <h3 className='text-md text-slate-800 font-bold mt-3 my-3'>Availability</h3>
            <p className='text-sm text-slate-700 mb-3'>3 of 20 available</p>
            <div className='flex justify-start items-center my-6'>
                <p className='text-2xl mr-2 text-slate-900 font-bold'>$ {pDetails[0]?.native_price}</p>
                <p className='text-md text-slate-900 font-medium mr-2'>or</p>
                <div className='flex justify-start items-center'>
                    <img src={matic} alt=""  />
                    <p className='text-2xl mr-2 text-purple-600 font-bold ml-2'>{pDetails[0]?.crypto_price}</p>
                </div>
            </div>
            <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal' onClick={() => setShowModal(true)}>Buy Now</button>
        </div>
    </div>
</>
  )
}

export default ProductDetailSection