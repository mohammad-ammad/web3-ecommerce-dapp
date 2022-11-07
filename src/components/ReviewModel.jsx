import { Transition } from '@windmill/react-ui';
import React from 'react'
import { useContext } from 'react';
import { HiX } from 'react-icons/hi';
import { MultiVendorContext } from '../context/MultiVendorContext';
import ReviewOrderContent from './ReviewOrderContent';

const ReviewModel = ({ showModal, setShowModal, setConfirmModal, setAccountInfo }) => {

  //---USECONTEXT
  const {isUserDetails} = useContext(MultiVendorContext)

  const nextHandler = () => 
  {
    setShowModal(false)
    if(isUserDetails)
    {
      setConfirmModal(true)
    }
    else 
    {
      setAccountInfo(true)
    }
  }
  return (
    <>
      <Transition
        show={showModal}
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
                    Review Order
                  </h3>
                  <button onClick={() => setShowModal(false)}>
                    <HiX className='text-2xl' />
                  </button>

                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ReviewOrderContent />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

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

export default ReviewModel