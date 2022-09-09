import React from 'react'
import Faq from '../components/Faq'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'
import Video from '../components/Video'
import WhatToDo from '../components/WhatToDo'

const Landing = () => {
  return (
    <>
        <Hero/>
        <Video/>
        <WhatToDo/>
        <FeaturedProducts/>
        <Faq/>
    </>
  )
}

export default Landing