import { Transition } from '@windmill/react-ui';
import React from 'react'
import { HiX } from 'react-icons/hi';
import ConfirmOrderContent from './ConfirmOrderContent';
import { BsArrowLeft } from 'react-icons/bs'
import { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';
import { MultiVendorContext } from '../context/MultiVendorContext';
import StripeCheckout from 'react-stripe-checkout';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ConfirmOrderModel = ({ confirmModal, setConfirmModal, setShowModal, setAccountInfo }) => {
  const navigate = useNavigate();
  //---USECONTEXT 
  const { wallet } = useContext(WalletContext)
  const { pDetails, currencyToggle, createOrder, paymentWithStripe, engraveName, zipCode, gotoorder } = useContext(MultiVendorContext)
  const obj = {
    address: pDetails[0]?.collection_address,
    id: pDetails[0]?.tokenId,
    amount: 1,
    engraveName:engraveName,
    price: currencyToggle ? pDetails[0]?.crypto_price : pDetails[0]?.native_price,
    _id: pDetails[0]?._id,
    type: currencyToggle ? 'Crypto' : 'Credit'
  }
  const backHandler = () => {
    setShowModal(true)
    setConfirmModal(false)
  }

  const nextHandler = () => {
    if (wallet.isConnected && wallet.address != "") {
      createOrder(obj)
    }
    else {
      setAccountInfo(true)
    }
    setConfirmModal(false)
  }

  //---STRIPE HANDLER
  const stripeHandler = token => 
  {
    let tax = 0;
    if(zipCode != "")
    {
      let product = {
        name: pDetails[0]?.title,
        price: Number(pDetails[0]?.native_price) + Number(5)
      }
  
      if (wallet.isConnected && wallet.address != "") {
        paymentWithStripe(product,token, obj, pDetails[0]?.crypto_price)
      }
      else {
        setAccountInfo(true)
      }
      setConfirmModal(false)
    }
    else 
    {
      toast.error("Please Fill zip code")
    }
   
  }

  useEffect(() => {
    gotoorder === true && navigate('/orders')
  }, [gotoorder])
  return (
    <>
      <Transition
        show={confirmModal}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >

        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto absolute md:fixed top-1/2 md:inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Confirm Order
                  </h3>
                  <button onClick={() => setConfirmModal(false)}>
                    <HiX className='text-2xl' />
                  </button>

                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ConfirmOrderContent />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                  <button onClick={backHandler} className='rounded-full px-6 py-2 text-sm font-bold text-black inline-flex justify-start items-center'>
                    <BsArrowLeft className='text-xl mr-2' />Back
                  </button>
                  {
                    currencyToggle ?
                      wallet.type == "InApp" ? 
                      <StripeCheckout
                        token={stripeHandler}
                        stripeKey="pk_live_51M7BDBJsZo5RWeq3SWGYTmCkKsFQg3wfZ6pHwldLS6O6HsItmhDpBkD0mXhonpuPLbBUi2VFcaPyuuM3MkZYNcpv00phEyQfgU"
                        name="The Spot Room"
                        amount={pDetails[0]?.native_price * 100}
                      >
                        <button className='bg-black text-white rounded-full px-6 py-2 text-sm font-normal'>{wallet.isConnected ? 'Place Order with Stripe' : 'Next'}</button>
                      </StripeCheckout>
                      :
                      <button className='bg-black text-white rounded-full px-6 py-2 text-sm font-normal' onClick={nextHandler}>{wallet.isConnected ? 'Place Order' : 'Next'}</button>
                      :
                      <StripeCheckout
                        token={stripeHandler}
                        stripeKey="pk_live_51M7BDBJsZo5RWeq3SWGYTmCkKsFQg3wfZ6pHwldLS6O6HsItmhDpBkD0mXhonpuPLbBUi2VFcaPyuuM3MkZYNcpv00phEyQfgU"
                        name="The Spot Room"
                        amount={pDetails[0]?.native_price * 100}
                      >
                        <button className='bg-black text-white rounded-full px-6 py-2 text-sm font-normal'>{wallet.isConnected ? 'Place Order with Stripe' : 'Next'}</button>
                      </StripeCheckout>
                  }
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

export default ConfirmOrderModel