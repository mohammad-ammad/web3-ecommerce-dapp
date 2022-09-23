import React from 'react'
import CoinOrderList from '../components/Orders/CoinOrderList'
import RegisterEscrow from '../components/Orders/RegisterEscrow'

const Orders = () => {
  return (
    <div className='bg-slate-100 w-full h-full flex justify-center items-start pt-20 md:pt-28'>
        <div className='w-full md:w-1/2 px-5'>
            <div>
                <h1 className='text-black text-md font-bold my-3'>Order Summary</h1>
                <h2 className='text-black text-sm font-medium'>Register Your Order In Escrow</h2>
                <RegisterEscrow/>
            </div>
            <div className='my-3'>
              <h2 className='text-black text-sm font-medium'>Coin Based Order Escrow Record</h2>
              <CoinOrderList/>
            </div>
        </div>
    </div>
  )
}

export default Orders