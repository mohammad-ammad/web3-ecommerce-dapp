import React from 'react'
import v1 from '../assets/v1.png'
import v2 from '../assets/v2.png'
import v3 from '../assets/v3.png'
import v4 from '../assets/v4.png'
import {Link} from 'react-router-dom'
const WhatsInclude = () => {
    return (
        <div className=''>
            <h1 className='text-center text-black text-[28px] font-[800] leading-[29px] my-10'>What's Included</h1>
            <div className='flex flex-col md:flex-row justify-center items-center w-full p-2'>
                <div className='border-solid border-2 border-black rounded-lg p-3 w-[417px] h-[312px] mx-1 my-1'>
                    <img src={v1} className="w-[40px] h-[40px] my-3" alt="" />
                    <p className='text-[24px] font-[700] my-2 text-black'>Physical</p>
                    <p className='text-[14px] font-[400] leading-[28px] text-slate-700'>
                        Physical products will be available for redemption upon successful purchase. The physical product will be automatically shipped to the address provided unless storage option is selected during check-out.
                    </p>
                </div>
                <div className='border-solid border-2 border-black rounded-lg p-3 w-[417px] h-[312px] mx-1 my-1'>
                    <img src={v3} className="w-[40px] h-[40px] my-3" alt="" />
                    <p className='text-[24px] font-[700] my-2 text-black'>Utility</p>
                    <p className='text-[14px] font-[400] leading-[28px] text-slate-700'>
                        - Exclusive invitation to Freeman IRL events.
                    </p>
                    <p className='text-sm text-slate-700'>
                        - Priority list for new collection drops. 
                    </p>
                    <p className='text-sm text-slate-700'>
                        - Complimentary consultation for bespoke design &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;services.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center w-full p-2'>

                <div className='border-solid border-2 border-black rounded-lg p-3 w-[417px] h-[312px] mx-1 my-1'>
                    <img src={v2} className="w-[40px] h-[40px] my-3" alt="" />
                    <p className='text-[24px] font-[700] my-2 text-black'>NFT</p>
                    <div className='flex justify-start items-center'>
                        <h4 className='text-[14px] font-[800] leading-[28px] text-slate-700 mr-1'>Contract Address</h4>
                        <p className='text-[14px] font-[400] leading-[28px] text-blue-500'>0x47e3cd892akl5c6r394d3fuf...</p>
                    </div>
                    <div className='flex justify-start items-center'>
                        <h4 className='text-[14px] font-[800] leading-[28px] text-slate-700 mr-3'>Token ID</h4>
                        <p className='text-[14px] font-[400] leading-[28px] text-slate-700'>7</p>
                    </div>
                    <div className='flex justify-start items-center'>
                        <h4 className='text-[14px] font-[800] leading-[28px] text-slate-700 mr-3'>Token Standard</h4>
                        <p className='text-[14px] font-[400] leading-[28px] text-slate-700'>ERC - 1155</p>
                    </div>
                    <div className='flex justify-start items-center'>
                        <h4 className='text-[14px] font-[800] leading-[28px] text-slate-700 mr-3'>Blockchain</h4>
                        <p className='text-[14px] font-[400] leading-[28px] text-slate-700'>Polygon</p>
                    </div>
                </div>
                <div className='border-solid border-2 border-black rounded-lg p-3 w-[417px] h-[312px] mx-1 my-1'>
                    <img src={v4} className="w-[40px] h-[40px] my-3" alt="" />
                    <p className='text-[24px] font-[700] my-2 text-black'>Digital</p>
                    <p className='text-[14px] font-[400] leading-[28px] text-slate-700'>
                    Imagined by <span className='italic'>The Spot Room</span> design lab. AR filter will be delivered via email.
                    </p>
                    {/* <div className='border-solid border-2 w-fit px-5 py-1 text-sm font-bold mt-3 cursor-pointer rounded-2xl border-slate-600'>
                        try now
                    </div> */}
                </div>
            </div>
            <div className='inline-flex justify-center items-center w-full my-5'>
                <Link to="/how-it-works" className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>How It Works</Link>
            </div>
        </div>
    )
}

export default WhatsInclude
