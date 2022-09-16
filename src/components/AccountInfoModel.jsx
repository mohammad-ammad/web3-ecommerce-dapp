import { Transition } from '@windmill/react-ui';
import React from 'react'
import { HiX } from 'react-icons/hi';
import AccountInfoContent from './AccountInfoContent';
import {BsArrowLeft} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom';

const AccountInfoModel = ({ accountInfo, setAccountInfo, setConfirmModal }) => {
  const navigate = useNavigate();
  const nextHandler = () => 
  {
    navigate('/account-settings')
  }
  const backHandler = () => 
  {
    setAccountInfo(false);
    setConfirmModal(true);
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
                  <AccountInfoContent/>
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