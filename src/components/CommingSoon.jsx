import React from 'react'
import ContactUs from './ContactUs'
import Faq from './Faq'
import Slider from './Slider'
import WhatsInclude from './WhatsInclude'
import {useParams} from 'react-router-dom'

const CommingSoon = () => {
    const {cat} = useParams()
  return (
    <div>
        <div className='w-full h-80 flex justify-center items-center bg-slate-100'>
            <h1 className='text-3xl text-slate-900 font-bold'>{cat} Launching Soon...</h1>

        </div>
        <Slider/>
        <WhatsInclude/>
        <Faq/>
        <ContactUs/>
    </div>
  )
}

export default CommingSoon