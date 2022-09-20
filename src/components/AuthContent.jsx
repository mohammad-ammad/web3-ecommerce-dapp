import React from 'react'
import googleIcon from '../assets/google_icon.png';
import walletIcon from '../assets/wallet_icon.png';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AuthContent = ({walletHandler}) => {
    
    const {login} = useContext(AuthContext)

  return (
    <>
    <div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Email Address' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Password' name="" id="" />
        </div>
    </div>
    <div className='flex justify-between items-center my-3'>
        <a href="" className='text-xs text-blue-500 cursor-pointer px-2 py-1'>Forgot my password</a>
        <a href="javaScript:void(0)" className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Sign In</a>
    </div>
    <div>
        <button onClick={() => login()} className='flex bg-blue-500 text-white w-full p-2 rounded-xl mb-3'>
            <img src={googleIcon} className="bg-white rounded-full ml-3" alt="" srcset="" />
            <p className='w-full pt-0.5'>Continue with Google</p>
        </button>
        <button onClick={walletHandler} className='flex bg-purple-500 text-white w-full p-2 rounded-xl'>
            <img src={walletIcon} className="rounded-full ml-3" alt="" srcset="" />
            <p className='w-full pt-1'>Connect Wallet</p>
        </button>
    </div>
    </>
  )
}

export default AuthContent