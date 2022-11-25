import React from 'react'
import googleIcon from '../assets/google_icon.png';
import walletIcon from '../assets/wallet_icon.png';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useState } from 'react';

const AuthContent = ({walletHandler, setShowModal}) => {

    //---INTIALIZED STATES
    const [data, setData] = useState({
        email:"",
        password:""
    })
    
    //---GETTING THE AUTH CONTEXT
    const {login,loginWithDB, createAndLoginWithWallet} = useContext(AuthContext)

    //---LOGIN SUBMIT HANDLER
    const submitHandler = (type) => 
    {
        if(type === "custom")
        {
            loginWithDB(data.email,data.password,"email")
            setData({
                email:"",
                password:""
            })
        }
        if(type === "google")
        {
            login()
        }
        if(type === "wallet")
        {
            createAndLoginWithWallet()
        }
        
        setShowModal(false)
    }


  return (
    <>
    <div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Email Address' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Password' name="" id="" />
        </div>
    </div>
    <div className='flex justify-between items-center my-3'>
        <a href="" className='text-xs text-blue-500 cursor-pointer px-2 py-1'>Forgot my password</a>
        <button onClick={()=>submitHandler("custom")} className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Sign In</button>
    </div>
    <div>
        <button onClick={()=>submitHandler("google")} className='flex bg-blue-500 text-white w-full p-2 rounded-xl mb-3'>
            <img src={googleIcon} className="bg-white rounded-full ml-3" alt=""  />
            <p className='w-full pt-0.5'>Continue with Google</p>
        </button>
        <button onClick={()=>submitHandler("wallet")} className='flex bg-purple-500 text-white w-full p-2 rounded-xl'>
            <img src={walletIcon} className="rounded-full ml-3" alt=""  />
            <p className='w-full pt-1'>Connect Wallet</p>
        </button>
    </div>
    </>
  )
}

export default AuthContent