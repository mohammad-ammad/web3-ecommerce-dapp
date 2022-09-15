import React from 'react'
import v1 from '../assets/v1.png'
import v2 from '../assets/v2.png'
import v3 from '../assets/v3.png'
import v4 from '../assets/v4.png'
const WhatsInclude = () => {
  return (
    <div className=''>
        <h1 className='text-center text-4xl font-bold my-10'>What's Included</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full p-2 md:w-1/2 relative left-1/2 transform -translate-x-1/2'>
            <div className='border-solid border-2 border-black rounded-lg p-3'>
                <img src={v1} className="w-7 my-3" alt="" srcset="" />
                <p className='text-lg font-bold my-2 text-black'>Physical</p>
                <p className='text-sm text-slate-700'>
                Phygital collections will be available for redemption upon sucessful purchase. Customers without a crypto wallet can simply create an account with us and store the NFT in there. The physical product will be automatically shipped to the address provided unless storage option is selected during check-out.
                </p>
            </div>
            <div className='border-solid border-2 border-black rounded-lg p-3'>
                <img src={v3} className="w-7 my-3" alt="" />
                <p className='text-lg font-bold my-2 text-black'>Utility</p>
                <p className='text-sm text-slate-700'>
                1. Exclusive invitation to IRL events.
                </p>
                <p className='text-sm text-slate-700'>
                2. Allowlist spot for limited drops.
                </p>
                <p className='text-sm text-slate-700'>
                3. Additional 20% off on off-season merch.
                </p>
                <p className='text-sm text-slate-700'>
                4. Airdropped exclusive TSR fashion NFT.
                </p>
                <p className='text-sm text-slate-700'>
                5. TSR metaverse mansion party.
                </p>
            </div>
            <div className='border-solid border-2 border-black rounded-lg p-3'>
                <img src={v2} className="w-7 my-3" alt="" srcset="" />
                <p className='text-lg font-bold my-2 text-black'>NFT</p>
                <div className='flex justify-start items-center'>
                    <h4 className='text-xs font-bold text-slate-700 mr-1'>Contract Address</h4>
                    <p className='text-xs text-blue-500'>0x47e3cd892akl5c6r394d3fuf...</p>
                </div>
                <div className='flex justify-start items-center'>
                    <h4 className='text-xs font-bold text-slate-700 mr-3'>Token ID</h4>
                    <p className='text-xs text-slate-700'>7</p>
                </div>
                <div className='flex justify-start items-center'>
                    <h4 className='text-xs font-bold text-slate-700 mr-3'>Token Standard</h4>
                    <p className='text-xs text-slate-700'>ERC - 1155</p>
                </div>
                <div className='flex justify-start items-center'>
                    <h4 className='text-xs font-bold text-slate-700 mr-3'>Blockchain</h4>
                    <p className='text-xs text-slate-700'>Ethereum</p>
                </div>
            </div>
            <div className='border-solid border-2 border-black rounded-lg p-3'>
                <img src={v4} className="w-7 my-3" alt="" srcset="" />
                <p className='text-lg font-bold my-2 text-black'>Digital</p>
                <p className='text-sm text-slate-700'>
                Imagined by The Spot Room lab. Compatible with iPhone and Snapchat.
                </p>
                <div className='border-solid border-2 w-fit px-5 py-1 text-sm font-bold mt-3 cursor-pointer rounded-2xl border-slate-600'>
                    try now
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatsInclude
