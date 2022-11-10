import React from 'react'
import BannerCollection from '../components/BannerCollection'
import abt2 from '../assets/freemanlogo.png';
import abt3 from '../assets/abtcol.png';
import AboutHowItsWork from '../components/AboutHowItsWork';
import Faq from '../components/Faq';
import ContactUs from '../components/ContactUs';
import Categories from '../components/Categories';

let list = [
    {
      title:"About the Brand",
      desc:"As traditional fine jewelers, Freeman Jewelry applied the high standards of luxury craftsmanship to create a rich, realistic collection for the Wizarding World. Every piece of fine jewelry is carefully handcrafted in their Seattle studio.",
      image:abt2,
      position:"left"
    },
    {
      title:"Collection Inspiration",
      desc:"After a 18-second video of the Golden Snitch Ring Box going “viral” in 2019, reaching over 36 million viewers across social media channels, Freeman Jewelry was inspired to create a full licensed Harry PotterLine.This holiday season, the company is taking their most loved pieces into Web3, by creating a wizarding world of Harry Potter where the physcial, digital and experiential come together. This limited collection offers four styles in 18K yellow gold, authenticated through an embeded security tag, and acommpanied by a digital twin NFT and an experienrial AR filter.",
      image:abt3,
      position:"right"
    }
  ]

const Collections = () => {
  return (
    <div>
        <BannerCollection/>
        <AboutHowItsWork list={list}/>
        <Categories/>
        <Faq/>
        <ContactUs/>
    </div>
  )
}

export default Collections