import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { InstanceContext } from '../context/InstanceContext';
import {toast} from 'react-hot-toast'

const EmailSignUpContent = () => {
    //---INTIALIZED STATES
    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        DOB:"",
        phone:""
    });

    const [agreed, setAgreed] = useState(false);

    //---GETTING THE AUTH CONTEXT
    const {createUser} = useContext(AuthContext)

    //---GETTING INSTANCE CONTEXT
    const {loading} = useContext(InstanceContext);

    //----SUBMIT HANDLER FUNCTION
    const submitHandler = () => 
    {
        if(agreed)
        {
            if(!data.firstname || !data.lastname || !data.email || !data.password)
            {
                toast.error("Please fill the required fields");
            }
            else 
            {
                let obj = {
                    username:data.firstname + " " + data.lastname,
                    email:data.email,
                    password:data.password,
                    DOB:data.DOB,
                    phone:data.phone,
                    auth_type:"email"
                }
                
                createUser(obj)
        
                setData({
                    firstname:"",
                    lastname:"",
                    email:"",
                    password:"",
                    DOB:"",
                    phone:""
                });
            }
            
        }
        else 
        {
            toast.error("Please Agree the Terms and Conditions to move forward.")
        }
    }
    

  return (
    <>
    <h1 className='text-sm font-bold text-black'>Required</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.firstname} onChange={(e)=>setData({...data,firstname:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='FirstName' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.lastname} onChange={(e)=>setData({...data,lastname:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='LastName' name="" id="" />
        </div>
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Email Address' name="" id="" />
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Password' name="" id="" />
    </div>
    <div className='mt-5 mb-3'>
    <hr/>
    </div>
    <h1 className='text-sm font-bold text-black'>Optional</h1>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.DOB} onChange={(e)=>setData({...data,DOB:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='DOB' name="" id="" />
    </div>
    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
        <input type="text" value={data.phone} onChange={(e)=>setData({...data,phone:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Phone Number' name="" id="" />
    </div>
    <a href="" className='text-blue-500 text-sm my-2'>I have an account, Login instead.</a>
    <div className='flex justify-start items-center my-3'>
        <input type="checkbox" onClick={()=>setAgreed(!agreed)} name="" id="" />
        <p className='ml-2 text-sm font-medium text-black'>By Clicking "Sign Up", I agree with the <span className='text-blue-500'>Terms and Conditions</span></p>
    </div>
    {
        loading ? 
        <button className='bg-black text-white rounded-full px-6 py-2 text-sm font-normal float-right' disabled>Please Wait</button>
        :
        <button onClick={submitHandler} className='bg-black text-white rounded-full px-6 py-2 text-sm font-normal float-right'>Sign Up</button>
    }
    </>
  )
}

export default EmailSignUpContent