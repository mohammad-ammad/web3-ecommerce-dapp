import React from 'react'
import freemanLogo from '../assets/freemanlogo.png';
import collectionVideo from '../assets/collection.mp4';
const AboutTheBrand = () => {
  return (
    <div className='bg-slate-100'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center px-5 md:px-28 py-10'>
            <div>
                <img src={freemanLogo} className="" alt="" />
            </div>
            <div className='w-full md:w-5/12'>
                <h1 className='bg-[#D9D9D9] w-fit px-3 py-2 rounded-full text-lg text-black mb-3'>About The Brand</h1>
                <p className='text-md text-slate-900'>
                    As traditional fine jewelers, Freeman Jewelry applied the high standards of luxury craftsmanship to create a rich, realistic collection for the Wizarding World. Every piece of fine jewelry is carefully handcrafted in their Seattle studio.
                </p>
            </div>
        </div>
        <div className='inline-flex justify-center items-center w-full px-5'>
            <video src={collectionVideo} width="1100" autoPlay loop></video>
        </div>
        <div className='px-5 md:px-28 py-10'>
            <h1 className='bg-[#D9D9D9] w-fit px-3 py-2 rounded-full text-lg text-black mb-3'>About the Collection</h1>
            <p className='text-md text-slate-900'>
                After a 18-second video of the Golden Snitch Ring Box going “viral” in 2019, reaching over 36 million viewers across social media channels, Freeman Jewelry was inspired to create a fully licensed Harry Potter™ Line. This holiday season, the company is taking their most loved pieces into Web3, by creating a wizarding world of Harry Potter™ where the physical, digital and experiential come together. This limited collection offers four styles in 18K yellow gold, authenticated through an embedded microchip and are accompanied by a digital twin NFT and an experiential AR filter.
            </p>
        </div>
    </div>
  )
}

export default AboutTheBrand