import React from 'react'
import Banner1 from '../assets/img-phygitalization.png';
import Banner2 from '../assets/img-authenticity.png';
import Banner3 from '../assets/img-liquidity.png';
import Banner4 from '../assets/img-flexibility.png';
import { Link } from 'react-router-dom';
const WhatToDo = () => {
  return (
    <div className='p-10'>
        <h1 className='text-2xl text-center font-bold'>What We Do</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
            <div className='text-center'>
                <img src={Banner1} className="mx-auto" alt="" />
                <h2 className='my-3 text-md font-bold'>Phygitalization</h2>
                <p className='text-sm text-slate-700'>All physical goods on The Spot Room are accompanied by a digital twin NFT and a digital wearable.</p>
            </div>
            <div className='text-center'>
                <img src={Banner2} className="mx-auto"  alt="" />
                <h2 className='my-3 text-md font-bold'>Authentication</h2>
                <p className='text-sm text-slate-700'>All physical goods are backed on the Blockchain through the NFT, which is the proof of provenance, authenticity and ownership</p>
            </div>
            <div className='text-center'>
                <img src={Banner3} className="mx-auto"  alt="" />
                <h2 className='my-3 text-md font-bold'>Ease of Trade</h2>
                <p className='text-sm text-slate-700'>Physical goods can be stored with the creator, while the digital twin NFT represents the physical in showcasing and trading.</p>
            </div>
            <div className='text-center'>
                <img src={Banner4} className="mx-auto"  alt="" />
                <h2 className='my-3 text-md font-bold'>Accessibility</h2>
                <p className='text-sm text-slate-700'>We provide the easiest way to acquire, store and access phygital NFTs without you owning a wallet. </p>
            </div>
        </div>
        <div className='inline-flex justify-center items-center w-full my-5'>
        <Link to="/how-it-works" className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>How It Works</Link>
        </div>
    </div>
  )
}

export default WhatToDo