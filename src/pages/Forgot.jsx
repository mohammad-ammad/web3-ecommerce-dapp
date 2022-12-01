import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';

const Forgot = () => {
    const [email,setEmail] = useState("");
    const submitHandler = async () => 
    {
        if(email === "")
        {
            toast.error("Please Fill email")
        }
        else 
        {
            const resp = await axios.put(`${process.env.React_App_SERVER_URL}/user/forgot`,{
                email:email
            });

            if(resp['data']['message'] === "User not found. Please Register your account")
            {
                toast.error("User not found. Please Register your account")
            }
            if(resp['data']['message'] === "New Password sent to your email")
            {
                toast.success("New Password sent to your email")
            }

            setEmail("");
        }
    }
  return (
    <div className='bg-slate-100 w-full h-screen flex justify-center items-center pt-20 md:pt-10'>
        <div className='w-full md:w-1/3 px-5'>
            <div>
                <h1 className='text-black text-md font-bold my-3'>Forgot Password?</h1>
                <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Email Address' name="" id="" />
                </div>
                <div>
                    <button onClick={submitHandler} className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal w-full my-2'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forgot