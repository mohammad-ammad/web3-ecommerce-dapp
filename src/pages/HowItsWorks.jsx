import React, { useEffect, useRef } from 'react'
import AboutHowItsWork from '../components/AboutHowItsWork'
import ContactUs from '../components/ContactUs'
import Faq from '../components/Faq'
import HeroHowItsWork from '../components/HeroHowItsWork'
import abt1 from '../assets/abt1.png';
import abt2 from '../assets/abt2.png';
import abt3 from '../assets/abt3.png';
import abt4 from '../assets/abt4.png';
import abt5 from '../assets/abt5.png';
import abt6 from '../assets/abt6.png';

let list = [
  {
      title:"Phygitalization",
      desc:'The Spot Room works directly with brands and designers to create the digital twin NFT for each physical product. The NFT is not only a collectible artwork, but also the proof of provenance, authenticity and ownership. A digital wearable is also created to enhance the enjoyment of the physical product.',
      image:abt1,
      position:"left"
  },
  {
      title:"Launch Pad",
      desc:"Phygital collections will be available on The Spot Room launch pad for purchase with either credit card or crypto. Customers without a crypto wallet can simply create an account with us and store the NFT in there. The physical product will be automatically shipped to the address provided unless storage option is selected during check-out. Digital wearable will be delivered in an email.",
      image:abt5,
      position:"right"
  },
  {
      title:"Purchase Confirmation",
      desc:"Customers have 7 days to inspect and confirm the purchase after the physical product is delivered. To complete the transaction, simply scan the microchip embedded in the physical product to activate the NFT. Once activated, NFT will be transferred automatically to the purchaser’s wallet or account and no return will be honored after this point. ",
      image:abt3,
      position:"left"
  },
  {
      title:"Utilities",
      desc:"Holders of the NFT can enjoy all perks and benefits provided by the brand or designer.  Utilities are included in the product description and additional utilities will be communicated directly to all NFT holders. Utilities are to be enjoyed by current NFT holders only. ",
      image:abt4,
      position:"right"
  },
  {
      title:"Physical Redemption",
      desc:'If storage option is selected during check-out, customers have the flexibility to redeem the physical product at anytime during the redemption window. Simply request the redemption online and confirm your address, the physical product will be delivered to your door.',
      image:abt2,
      position:"left"
  },
  {
    title:"NFT Activation",
    desc:"After receiving the order, customer can scan the microchip embedded in the physical product using a smartphone. The smartphone must touch the microchip until a notification appears on the screen. The link will open the product page where the customer can log in to verify the companion NFT and manage the order. Reference the guide to locate the NFC antenna on your smartphone.",
    image:abt6,
    position:"right"
  }
]



const HowItsWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
  return (
    <>
    <HeroHowItsWork executeScroll={executeScroll}/>
    <AboutHowItsWork list={list} myRef={myRef}/>
    <Faq/>
    {/* <ContactUs/> */}
    </>
  )
}

export default HowItsWorks