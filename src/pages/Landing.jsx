import React, { useEffect, useState } from 'react'
import AuthModel from '../components/AuthModel'
import ContactUs from '../components/ContactUs'
import Faq from '../components/Faq'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'
import Video from '../components/Video'
import WhatToDo from '../components/WhatToDo'

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
        <Hero/>
        <Video/>
        <WhatToDo/>
        <FeaturedProducts Heading="Featured Products"/>
        <Faq/>
        <ContactUs/>
    </>
  )
}

export default Landing