import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-slate-100 inline-flex justify-center items-center flex-col w-full p-2'>
        <div className='flex flex-col md:flex-row justify-evenly items-center my-2'>
          <div className='text-xs text-slate-700 mx-2'>
            Please email <span className='text-slate-800 font-bold'>hello@thespotroom.com</span> for any question
          </div>
          <div className='text-xs text-slate-700 mx-2'>
            <Link to="/terms&conditions">Terms & Conditions</Link>
          </div>
          <div className='text-xs text-slate-700 mx-2'>
            <Link to="/privacy&safety">Privacy Policy</Link>
          </div>
        </div>
        <p className='text-xs text-slate-700'>Copyright © 2022 The Spot Room </p>
    </div>
  )
}

export default Footer