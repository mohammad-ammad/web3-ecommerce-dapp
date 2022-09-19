import { Transition } from '@windmill/react-ui';
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { InstanceContext } from '../context/InstanceContext';

const InAppWalletModel = ({ inWalletModal,setInWalletModal }) => {

    //Intialized states
    const [data, setData] = useState({
        username:"",
        password:""
    });

    //Getting the Instance Context
    const {createWallet, loading, InAppWalletAddress} = useContext(InstanceContext)

    //create wallet function
    const createWalletHandler = () => 
    {
        createWallet(data.username,data.password)
        setData({
          username:"",
          password:""
        })
    }
  
  return (
    <>
      <Transition
        show={inWalletModal}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >

        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto w-full fixed  inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Create In-App Wallet
                  </h3>
                  <button onClick={() => setInWalletModal(false)}>
                    <HiX className='text-2xl' />
                  </button>

                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {
                    InAppWalletAddress != "" &&
                    <div className='bg-white border-solid border-[1px] border-black rounded-lg py-2 px-3 text-sm font-bold'>
                    Your New Wallet Address is: <span className='text-xs text-blue-500 font-normal'>{InAppWalletAddress}</span>
                    <p>Please Save this Wallet Address for future used.</p>
                  </div>
                  }
                  
                  <div>
                    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                        <input type="text" value={data.username} onChange={(e)=>setData({...data,username:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Username' name="" id="username" />
                    </div>
                    <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                        <input type="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Password' name="" id="password" />
                    </div>
                    <div className='flex justify-between items-center my-3'>
                        <a href="" className='text-xs text-blue-500 cursor-pointer px-2 py-1'>Already have an wallet?</a>
                        <a onClick={!loading && createWalletHandler} href="javaScript:void(0)" className={`bg-black text-white rounded-full px-5 py-1 text-sm font-normal ${loading && 'cursor-not-allowed'}`}>Create</a>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

      </Transition>
    </>
  )
}

export default InAppWalletModel