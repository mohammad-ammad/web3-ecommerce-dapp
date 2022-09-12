import React from 'react'
import BannerCollection from '../components/BannerCollection'
import abt2 from '../assets/abt2.png';
import abt3 from '../assets/abt3.png';
import AboutHowItsWork from '../components/AboutHowItsWork';
import FeaturedProducts from '../components/FeaturedProducts';
import Faq from '../components/Faq';
import ContactUs from '../components/ContactUs';

let list = [
    {
      title:"About the Brand",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:abt3,
      position:"left"
    },
    {
      title:"Collection Inspiration",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:abt2,
      position:"right"
    }
  ]

const Collections = () => {
  return (
    <div>
        <BannerCollection/>
        <AboutHowItsWork list={list}/>
        <FeaturedProducts Heading="Collections"/>
        <Faq/>
        <ContactUs/>
    </div>
  )
}

export default Collections