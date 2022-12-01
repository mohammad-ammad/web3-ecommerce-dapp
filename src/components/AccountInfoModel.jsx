import { Transition } from '@windmill/react-ui';
import React, { useState } from 'react'
import { HiX } from 'react-icons/hi';
import AccountInfoContent from './AccountInfoContent';
import {BsArrowLeft} from 'react-icons/bs'
import { useContext } from 'react';
import { MultiVendorContext } from '../context/MultiVendorContext';
import { toast } from "react-hot-toast";

const AccountInfoModel = ({ accountInfo, setAccountInfo, setConfirmModal }) => {
  
  //---USESTATES
  const [data, setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    DOB:"",
    phone:"",
    shipping_address:"",
    room:"",
    city:"",
    state:"",
    zip:"",
    country:""
  })

  const {addShippingDetails} = useContext(MultiVendorContext)

  const nextHandler = () => 
  {
    let numRegex = "^[0-9]*$";

    if(! data.firstname || ! data.lastname || ! data.email || !data.phone || !data.shipping_address || !data.city || !data.state || !data.zip || !data.country)
    {
      toast.error("Please Fill all fields")
    }
    else if(data.phone.match(numRegex) === null)
    {
      toast.error("Phone no. Should be numbers")
    }
    else 
    {
      addShippingDetails(data)
      setConfirmModal(true);
      setAccountInfo(false);
    }
  }
  const backHandler = () => 
  {
    setAccountInfo(false);
  }
  return (
    <>
      <Transition
        show={accountInfo}
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
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Account Information
                  </h3>
                  <button onClick={() => setAccountInfo(false)}>
                    <HiX className='text-2xl' />
                  </button>

                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <AccountInfoContent data={data} setData={setData}/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                <button onClick={backHandler} className='rounded-full px-6 py-2 text-sm font-bold text-black inline-flex justify-start items-center'>
                    <BsArrowLeft className='text-xl mr-2'/>Back
                 </button>
                  <button onClick={nextHandler} className='bg-black text-white rounded-full px-6 py-2 text-sm font-normal'>Next</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

      </Transition>
    </>
  )
}

export default AccountInfoModel