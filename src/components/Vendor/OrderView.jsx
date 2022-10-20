import { Transition } from '@windmill/react-ui';
import React from 'react'
import { HiX } from 'react-icons/hi';


const OrderView = ({ showModal ,setShowModal, data }) => {
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
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto w-full fixed  inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Product Details
                  </h3>
                  <button onClick={() => setShowModal(false)}>
                    <HiX className='text-2xl' />
                  </button>

                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                    <div className='flex justify-between items-center my-3'>
                        <h1 className='text-md text-black font-bold'>{data?.title}</h1>
                        <img src={`https://ipfs.moralis.io:2053/ipfs/${data?.image}`} className="w-20 border-solid border-[1px] border-black rounded-lg" alt=""  />
                    </div>
                    <p className='text-sm text-slate-800'><span className='text-md text-black font-bold'>Description:</span> {data?.description}</p>
                    <div className='flex justify-start items-center my-3'>
                        <p className='text-sm text-slate-800 mr-10'><span className='text-md text-black font-bold'>Quantity:</span> {data?.order[0].quantity}</p>
                        <p className='text-sm text-slate-800'><span className='text-md text-black font-bold'>Price:</span> {data?.payment[0].price} {data?.payment[0].type === 'Crypto' ? 'Matic' : '$'}</p>
                    </div>
                    <div>
                        <h1 className='text-md text-black font-bold'>User Details</h1>
                    </div>
                    <div className='flex justify-start items-center'>
                         <h1 className='text-md text-black font-bold mr-5'>Status</h1>
                        <select name="" id="" className='w-full py-2 px-4 text-xs bg-white shadow-inner shadow-slate-200 rounded-lg outline-none'>
                            <option value="">Choose Status</option>
                            {
                                data?.order[0].status === 'Pending' ? <option value="" selected>Pending</option>
                                : 
                                data?.order[0].status === 'Progress' ? <option value="" selected>Progress</option>
                                :
                                data?.order[0].status === 'Complete' ? <option value="" selected>Complete</option>
                                : ''
                            }
                            <option value="">{data?.order[0].status === 'Pending' ? 'Progress' : 'Pending'}</option>
                            <option value="">Complete</option>
                        </select>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button  className='bg-black text-white rounded-full px-6 py-2 text-sm font-normal'>Update</button>
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

export default OrderView