import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessage2Line} from 'react-icons/ri'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
const ContactUs = () => {
    //---USESTATES
    const [data, setData] = useState({
        email:"",
        message:""
    })

    //---USECONTEXT
    const {createNewsLetter} = useContext(AuthContext)

    //---SUBMIT HANDLER
    const submitHandler = () => 
    {
        if(data.email != "" && data.message != "")
        {
            createNewsLetter(data)
            setData({
                email:"",
                message:""
            })
        }
    }
  return (
    <div className='bg-slate-100 flex justify-center items-center flex-col p-2 md:p-14'>
        <h1 className='text-3xl text-center font-bold my-3 md:my-2'>Contact Us</h1>
        <p className='text-sm text-slate-700'>Join the movement.</p>
        <p className='text-sm text-slate-700 text-center'>Be featured on our Launch Pad or let us power your phygital website.</p>
        <div className='my-2 flex flex-col'>
            <div className='md:w-96 my-2 inline-flex justify-start items-center bg-white shadow-inner shadow-slate-200 rounded-lg'>
                <AiOutlineMail className='ml-3 fill-slate-500'/>
                <input type="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Your Email' name="" id="" />
            </div>
            <div className='md:w-96 my-2 inline-flex justify-start items-start bg-white shadow-inner shadow-slate-200 rounded-lg'>
                <RiMessage2Line className='ml-3 mt-2 fill-slate-500'/>
                <textarea name="" onChange={(e)=>setData({...data,message:e.target.value})} id="" className='w-full p-2 text-xs bg-transparent outline-none' placeholder='Your Message (Optional)' cols="30" rows="10">{data.message}</textarea>
            </div>
            <div className='flex justify-end items-center'>
                {/* <div className='flex justify-start items-center'>
                    <BsFillCheckCircleFill/>
                    <span className='ml-2 text-xs font-bold text-slate-700'>Subscribe newsletter</span>
                </div> */}
                <div>
                    <button onClick={submitHandler} className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs