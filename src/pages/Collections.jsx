import React from 'react'
import BannerCollection from '../components/BannerCollection'
import Faq from '../components/Faq';
import ContactUs from '../components/ContactUs';
import Categories from '../components/Categories';
import AboutTheBrand from '../components/AboutTheBrand';


const Collections = () => {
  return (
    <div>
        <BannerCollection/>
        <AboutTheBrand/>
        <Categories/>
        <Faq/>
        <ContactUs/>
    </div>
  )
}

export default Collections