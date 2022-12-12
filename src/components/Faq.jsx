import React from 'react'
import faq from '../assets/faq.png';
import Queries from './Queries';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {AiOutlineMinus} from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'
import { useState } from 'react';
import { Transition } from '@windmill/react-ui';
const Faq = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-[#222222] grid grid-cols-1 md:grid-cols-3 gap-3 ${open === false ? 'px-14 py-3' : 'p-5 md:p-14'}`}>
      {
        open === false ? 
        <div className='flex justify-between items-center col-span-3'>
          <div className='inline-flex justify-center items-start'>
                <img src={faq} className="w-28" alt=""  />
          </div>
          <div>
              <div className='flex justify-between items-center'>
                <h1 className='text-2xl text-center md:text-left md:text-4xl text-slate-200 font-bold'>FAQ</h1>
              </div>
          </div>
          <div>
          <p className='text-white font-bold text-2xl cursor-pointer' onClick={()=>setOpen(true)}>+</p>
          </div>
        </div>
        : 

        <>
        <div className='inline-flex justify-center items-start'>
            <img src={faq} className="w-60" alt=""  />
        </div>
        <div className='col-span-2'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl text-center md:text-left md:text-4xl text-slate-200 font-bold'>FAQ</h1>
            <AiOutlineMinus className='text-white font-bold cursor-pointer' onClick={()=>setOpen(false)} />
          </div>
          <div>
            <Queries question="What is TheSpotRoom?" 
            answer="The SpotRoom is a platform that offers luxury goods secured on Blockchain, directly from the brand creators.In the marketplace, owners of phygital items or NFTs can trade freely in the secondary market. "/>
            <Queries question="What is Phygital?" 
            answer="Each physical item is accompanied by an embedded security chip, linked to an NFT. The NFT is a collectible artwork representing the physical, as well as a product ID housing information on provenance, authenticity and ownership. Digital twin wearable comes in form of an AR filter or a digital skin for your avatar. "/>
            <Queries question="What are the fees?" 
            answer="Shipping fees and duties will be charged to the redeemer upon redemption if outside of the free shipping zone."/>
            <Queries question="How do I redeem?" 
            answer="Physical items will be shipped automatically upon order confirmation, unless the ‘redemption at a later date’ option is selected. Unredeemed goods can be redeemed at any point from ‘Order Summary’ within the specified redemption window. Once the NFT is redeemed, it will be moved from ‘Order Summary’ to your account.  Items redeemed at a later date are not eligible for return. "/>
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
            answer="You will have 24 hours to cancel your order, unless the option to redeem at a later date was selected during check-out. The physical product will be shipped to the address provided and a tracking number will be communicated via email. Upon delivery of the physical product, you will have 7 days to inspect and confirm the order. Go to your ‘Order Summary’ for order confirmation.
 
            If you choose to redeem the physical product at a later date, the NFT will be available in your ‘Order Summary’ and is ready for physical product redemption any time during the redemption window. The NFT representing the physical can be traded easily and securely without the hassle of shipping.
            "/>
             <Queries question="Where is ‘Order Summary’ and ‘Profile’?" 
            answer="Both ‘Order Summary’ and ‘Profile’ are on the global header under ‘More’. You can find all pending or unredeemed orders under ‘Order Summary’. Once an order is confirmed and/or redeemed, it will be under ‘Profile’. "/>
            <Queries question="Where is the digital NFT stored?" 
            answer="If you don’t already have a wallet, your NFTs will be stored in your account on our platform. They can be easily transferred to your wallet once you have it ready. "/>
            <Queries question="How do transactions work on TheSpotRoom?" 
            answer="Once an order is placed, you will be provided with a tracking number for the physical product shipment. To complete the purchase, simply scan the security chip on the physical product with your smartphone to activate the NFT. Once the NFT is activated, it will be automatically transferred to your wallet or account. The order is not eligible for return after this point. The digital wearable component will be delivered via email. "/>
            <Queries question="How do I sell my item?" 
            answer="The marketplace for trading will be launched in Q1 2023. Join the waitlist to be the first one to know. "/>
            <Queries question="How to scan the microchip?" 
            answer="Depending on the model of your smartphone, locate the NFC antenna on the smartphone and point it at the microchip. The smartphone should touch the microchip until a notification pops up. For iPhone, the antenna is located on the top edge at the back of the phone. It is recommended to remove any phone case as it may interfere with the signal"/>
                        <Queries question="How do I organize a return? " 
            answer="We are more than happy to accept your return within 7 days of delivery. To return an item, please email us at hello@thespotroom.com. We will respond to you with a returns number and the return address. 

            Once we receive your return, please allow approximately 10 business days for your return to be processed by us. We’ll send you an email once our team has processed your refund. Credit Card refunds can take up to 15 business days to clear back into your account."/>
            </div>

        </div>
        </>

      }
    </div>
  )
}

export default Faq