import React from 'react'
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import vector from '../assets/label.png';
import matic from '../assets/matic.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { MultiVendorContext } from '../context/MultiVendorContext';
import { useState } from 'react';
import { WalletContext } from '../context/WalletContext';

const ProductDetailSection = ({setShowModal,isshowModal,setIsShowModal}) => {
    //---USEPARAMS
    const {id} = useParams();

    //---USECONTEXT
    const {productDetails, pDetails, setProSize, proSize} = useContext(MultiVendorContext)
    const [activeIndex, setActiveIndex] = useState(0);
    const {wallet} = useContext(WalletContext);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    //---USEEFFECT 
    useEffect(() => {
        productDetails(id)
    }, [id])

    //---GET SIZE
    const getSize = (size) => 
    {
        setProSize(size)
    }

    const buyHandler = () => 
    {
        if(wallet.isConnected && wallet.address != "")
        {
            setShowModal(true)
        }
        else 
        {
            setIsShowModal(true)
        }
    }

    const verifyNftHandler = () => 
    {
        if(wallet.isConnected)
        {
            navigate('/orders')
        }
        else 
        {
            setIsShowModal(true)
        }
    }
    
    const indicators = () => {
        return (
          <div className="indicator border-black border-[2px] w-10 h-1.5 mx-1 rounded-xl cursor-pointer"></div>
        )
      };
  return (
    <>
    <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-3 bg-slate-100 h-full pt-32 pb-10 px-5 md:px-10 lg:px-32'>
        <div>
            {/* <p className='text-lg text-slate-800 font-bold mb-3'>Brand's name</p> */}
            <h1 className='text-3xl text-slate-900 font-bold mb-3'>{pDetails[0]?.title}</h1>
            <h3 className='text-md text-slate-800 font-bold mb-3'>Product Description</h3>
            <p className='text-xs text-slate-900 text-justify font-medium leading-5 mb-2'>
            {pDetails[0]?.description}
            </p>
            <h3 className='text-md text-slate-800 font-bold'>Collection Address:</h3>
            <p className='text-sm text-slate-700 mb-3'>{pDetails[0]?.collection_address}</p>
            <h3 className='text-md text-slate-800 font-bold'>Category</h3>
            <p className='text-sm text-slate-700 mb-3'>{pDetails[0]?.category}</p>
            <div>
            <img src={pDetails[0]?.qrCode} className="w-20 border-solid border-[1px] border-black rounded-lg" alt=""  />
            </div>
            {/* <h3 className='text-md text-slate-800 font-bold'>Edition Released</h3>
            <p className='text-sm text-slate-700'>30</p> */}
        </div>
        <div className='shadow-inner shadow-slate-300 w-80 h-96 rounded-md relative left-1/2 transform -translate-x-1/2'>
            <Slide autoplay={false} indicators={indicators} canSwipe={true} onChange={(e, index )=>setActiveIndex(index)}>
                <img src={`https://ipfs.moralis.io:2053/ipfs/${pDetails[0]?.primary_image}`} className="w-full h-96 p-1" alt="" />
                <img src={`https://ipfs.moralis.io:2053/ipfs/${pDetails[0]?.secondary_image}`} className="w-full h-96 p-1" alt="" />
                <img src={`https://ipfs.moralis.io:2053/ipfs/${pDetails[0]?.tertiary_image}`} className="w-full h-96 p-1" alt="" />
            </Slide>
            <div className='absolute top-0'>
            <img src={vector} className="relative" alt="" />
            <p className={`absolute ${activeIndex === 0 ? 'top-6 text-sm' : 'top-6 left-[20px] text-sm'} -rotate-45 text-white`}>{activeIndex === 0 ? 'Physical' : activeIndex === 1 ? 'NFT' : activeIndex === 2 ? "AR" : null}</p>
            </div>
        </div>
        <div>
            {/* <p className='text-md text-slate-800 font-bold my-3'>Product Detail</p> */}
            {/* <p className='text-xs text-slate-600 font-semibold my-3'>Item descriptions</p> */}
            <div className='grid grid-cols-1 gap-1'>
                {
                    pDetails[0]?.attribute.map((el,i) => (
                        Object.keys(el).map((key, index)=> (
                            <p className='text-md text-slate-800 font-bold my-3'>{key}: <br/><span className='text-sm text-slate-800 font-normal'>{el[key]}</span></p>
                        ))
                    ))
                }
            </div>
            {/* <p className='text-sm text-slate-800 font-bold mt-3 my-5'>Made in Italy</p> */}
            <h3 className='text-md text-slate-800 font-bold mt-3 my-3'>Availability</h3>
            <p className='text-sm text-slate-700 mb-3'>{pDetails[0]?.remaining} of {pDetails[0]?.availabilty} available</p>
            <div className='flex justify-start items-center my-6'>
                <p className='text-2xl mr-2 text-slate-900 font-bold'>$ {pDetails[0]?.native_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                <p className='text-md text-slate-900 font-medium mr-2'>or</p>
                <div className='flex justify-start items-center'>
                    <img src={matic} alt=""  />
                    <p className='text-2xl mr-2 text-purple-600 font-bold ml-2'>{Number(pDetails[0]?.crypto_price).toFixed(2)}</p>
                </div>
            </div>
            {pDetails[0]?.remaining === 0 ? 
            <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Out of Stock</button>
            :
            <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal' onClick={() => buyHandler()}>Buy Now</button>
            }
            <button className='bg-transparent border-[1px] border-[solid] border-black text-black rounded-full px-5 py-1 text-sm font-normal mx-3' onClick={()=>verifyNftHandler()}>Login to Verify My NFT</button>
        </div>
    </div>
</>
  )
}

export default ProductDetailSection