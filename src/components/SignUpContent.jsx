import React from 'react'
import googleIcon from '../assets/google_icon.png';
import walletIcon from '../assets/wallet_icon.png';
import emailIcon from '../assets/email.png';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const SignUpContent = ({setIsSignUp,setAuthModel}) => {

    //---GETTING THE AUTH CONTEXT
    const {createWithGoogle, createAndLoginWithWallet} = useContext(AuthContext)

    //---Model Switching function
    const emailModelHandler = () => 
    {
        setAuthModel(true)
        setIsSignUp(false)
    }

  return (
    <>
         <div>
            <button onClick={()=>createWithGoogle()} className='flex bg-blue-500 text-white w-full p-2 rounded-xl mb-3'>
                <img src={googleIcon} className="bg-white rounded-full ml-3" alt="" srcset="" />
                <p className='w-full pt-0.5'>Continue with Google</p>
            </button>
            <button onClick={emailModelHandler} className='flex bg-black text-white w-full py-3 px-2 rounded-xl mb-3'>
                <img src={emailIcon} className="ml-3" alt=""  />
                <p className='w-full pt-0.5'>Continue with Email</p>
            </button>
            <button onClick={()=>createAndLoginWithWallet()} className='flex bg-purple-500 text-white w-full p-2 rounded-xl'>
                <img src={walletIcon} className="rounded-full ml-3" alt=""  />
                <p className='w-full pt-1'>Connect Wallet</p>
            </button>
        </div>
    </>
  )
}

export default SignUpContent