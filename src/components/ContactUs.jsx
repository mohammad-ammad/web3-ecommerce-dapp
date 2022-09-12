import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessage2Line} from 'react-icons/ri'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const ContactUs = () => {
  return (
    <div className='bg-slate-100 flex justify-center items-center flex-col p-2 md:p-14'>
        <h1 className='text-3xl text-center font-bold my-3 md:my-2'>Connect with Us</h1>
        <p className='text-sm text-slate-700'>Join the community.</p>
        <p className='text-sm text-slate-700 text-center'>Stay in the loop for the latest news, drops & collectibles.</p>
        <div className='my-2 flex flex-col'>
            <div className='md:w-96 my-2 inline-flex justify-start items-center bg-white shadow-inner shadow-slate-200 rounded-lg'>
                <AiOutlineMail className='ml-3 fill-slate-500'/>
                <input type="text" className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Your Email' name="" id="" />
            </div>
            <div className='md:w-96 my-2 inline-flex justify-start items-start bg-white shadow-inner shadow-slate-200 rounded-lg'>
                <RiMessage2Line className='ml-3 mt-2 fill-slate-500'/>
                <textarea name="" id="" className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Your Message (Optional)' cols="30" rows="10"></textarea>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center'>
                    <BsFillCheckCircleFill/>
                    <span className='ml-2 text-xs font-bold text-slate-700'>Subscribe newsletter</span>
                </div>
                <div>
                    <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs