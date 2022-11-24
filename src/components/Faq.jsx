import React from 'react'
import faq from '../assets/faq.png';
import Queries from './Queries';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import { useState } from 'react';
import { Transition } from '@windmill/react-ui';
const Faq = () => {
  return (
    <div className='bg-[#222222] grid grid-cols-1 md:grid-cols-3 gap-3 p-5 md:p-14'>
        <div className='inline-flex justify-center items-start'>
            <img src={faq} className="w-60" alt=""  />
        </div>
        <div className='col-span-2'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl text-center md:text-left md:text-4xl text-slate-200 font-bold'>FAQ</h1>
          </div>
          <div>
            <Queries question="What is TheSpotRoom?" 
            answer="The SpotRoom is a platform that offers luxury goods secured on Blockchain, directly from the brand creators.In the marketplace, owners of phygital items or NFTs can trade freely in the secondary market. "/>
            <Queries question="What is Phygital?" 
            answer="Each physical item is accompanied by an embedded security chip, linked to an NFT. The NFT is a collectible artwork representing the physical, as well as a product ID housing information on provenance, authenticity and ownership. Digital twin wearable comes in form of an AR filter or a digital skin for your avatar. "/>
            <Queries question="What are the fees?" 
            answer="Shipping fees and duties will be charged to the redeemer upon redemption if outside of the free shipping zone."/>
            <Queries question="How do I redeem?" 
            answer="Physical items will be shipped automatically upon order confirmation, unless the ‘redemption at a later date’ option is selected. Unredeemed goods can be redeemed at any point from the ‘My NFT Collection’ page within the specified redemption window.  Items redeemed at a later date are not eligible for return."/>
             <Queries question="What is made-to-order?" 
            answer="Due to the exclusivity of the brands we work with, some drops will be made-to-order. Once the order is confirmed, you can expect to receive the physical item within the specified delivery window."/>
            <Queries question="Does TheSpotRoom only offer jewelry and handbags?" 
            answer="We are starting with jewelry and handbags. We expect to expand our horizon into many other product categories in the near future. "/>
            <Queries question="Do you work directly with the brands?" 
            answer="Yes, we work directly with the brands to ensure the security chip is safely embedded and verify the authenticity from the very beginning. The NFTs and digital wearables are stories directly told by the brand creators to enhance the enjoyment of the physical products. "/>
            <Queries question="Will you be working with other brands?" 
            answer="Yes, we are constantly forming new partnerships with the most exciting and interesting brands on the market. Feel free to drop us a note on your favorite brands, we will make it happen. "/>
            <Queries question="How can I prepare for a drop?" 
            answer="Join the waitlist so that you can be notified when the collection is released"/>
            <Queries question="What happens if I sell my digital NFT?" 
            answer="The NFT is attached to the physical product as its digital twin. Therefore, the NFT represents the physical item in Blockchain transactions. By selling the NFT, you are also expected to sell and transfer the physical product accordingly. On the rare occasion that one decides to decouple the NFT from its physical twin, the physical twin product may lose value, as its provenance, authenticity and ownership can no longer be verified on the Blockchain. "/>
            <Queries question="What can I do after I make a purchase?" 
            answer="You can enjoy the physical product like you always do with any purchase. The NFT gives you the digital style, whilst also providing the security of ownership. Your wallet or account will act as your digital closet to organize and showcase your phygital collections. 
            
            If you choose to redeem the physical product at a later date, you can still enjoy the digital wearable virtually without taking possession of the physical. The NFT representing the physical can be traded easily and securely without the hassle of shipping. 
            "/>
            <Queries question="Where is the digital NFT stored?" 
            answer="If you don’t already have a wallet, your NFTs will be stored in your account on our platform. They can be easily transferred to your wallet once you have it ready. "/>
            <Queries question="How do transactions work on TheSpotRoom?" 
            answer="Once an order is placed, you will be provided with a tracking number for the physical product shipment. To complete the purchase, simply scan the security chip on the physical product with your smartphone to activate the NFT. Once the NFT is activated, it will be automatically transferred to your wallet or account. The order is not eligible for return after this point. The digital wearable component will be delivered via email. "/>
            <Queries question="How do I sell my item?" 
            answer="The marketplace for trading will be launched in Q1 2023. Join the waitlist to be the first one to know. "/>
            </div>

        </div>
    </div>
  )
}

export default Faq