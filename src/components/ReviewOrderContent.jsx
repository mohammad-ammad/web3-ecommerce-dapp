import React from 'react'
import { useContext } from 'react';
import p1 from '../assets/p1.png';
import { MultiVendorContext } from '../context/MultiVendorContext';

const ReviewOrderContent = () => {
    //---USECONTEXT 
    const {pDetails, currencyToggle, setCurrencyToggle, proSize ,engraveName, setEngraveName} = useContext(MultiVendorContext)
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-0 overflow-y-auto'>
        <div className='col-span-2'>
            <img src={`https://ipfs.moralis.io:2053/ipfs/${pDetails[0]?.attribute[0]['image']}`} className="w-32 border-solid border-[1px] border-black rounded-lg" alt="" />
        </div>
        <div className='col-span-4'>
            <h1 className='text-xl font-bold text-black'>{pDetails[0]?.title}</h1>
            <p className='text-md text-black font-bold'>Size: {proSize}</p>
            {
                pDetails[0]?.engravable ? 
                <>
                    <h1 className='text-sm text-black font-bold'>Engrave Your Name?</h1>
                    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                        <input type="text" value={engraveName} onChange={(e)=>setEngraveName(e.target.value)} name="" id="" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Engravable Name'/>
                    </div>
                </>
                : 
                ''
            }
            <div className='flex justify-start items-center my-2 py-1 bg-white rounded-full w-full mx-auto shadow-inner shadow-slate-300 cursor-pointer'>
                <div className={`mx-1 text-sm ${currencyToggle === false ? 'bg-black text-white  px-3 py-1 rounded-full' : ''} cursor-pointer w-1/2 text-center`} onClick={()=>setCurrencyToggle(false)}>Credit Card</div>
                <div className={`mx-1 text-sm w-1/2 text-center ${currencyToggle === true ? 'bg-black text-white  px-3 py-1 rounded-full' : ''}`} onClick={()=>setCurrencyToggle(true)}>Crypto</div>
            </div>
        </div>
    </div>
    <div className='my-2'>
        <p className='text-sm text-slate-600'>
        Phygital collections will be available for redemption upon successful purchase. Customers without a crypto wallet can simply create an account with us and store the NFT in there. The physical product will be automatically shipped to the address provided unless storage option is selected during check-out. 
        </p>
        <p className='text-sm text-slate-600 my-2'>
            - Physical item redemed at a later date is not eligible for return.
        </p>
        <div className='flex justify-start items-center'>
            <input type="checkbox" className='mr-2' name="" id="" />
            <p className='text-sm md:text-md text-black font-bold'>
            Store the physical item for redemption at a later date.
            </p>
        </div>
    </div>
    </>
  )
}

export default ReviewOrderContent