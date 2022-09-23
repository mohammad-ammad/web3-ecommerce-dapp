import React from 'react'
import { Link } from 'react-router-dom'
import CoinOrderList from '../components/Orders/CoinOrderList'
import RegisterEscrow from '../components/Orders/RegisterEscrow'
import TokenOrderList from '../components/Orders/TokenOrderList'

const Orders = () => {
  return (
    <div className='bg-slate-100 w-full h-full flex justify-center items-start pt-20 md:pt-28'>
        <div className='w-full md:w-5/6 px-5'>
            <div>
                <div className='flex justify-between items-center'>
                  <h1 className='text-black text-md font-bold my-3'>Order Summary</h1>
                  <Link to='/view-orders' className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>View Orders</Link>
                </div>
                <h2 className='text-black text-sm font-medium'>Register Your Order In Escrow</h2>
                <RegisterEscrow/>
            </div>
            <div className='my-3'>
              <h2 className='text-black text-sm font-medium'>Coin Based Order Escrow Record</h2>
              <CoinOrderList/>
            </div>
            <div className='my-3'>
              <h2 className='text-black text-sm font-medium'>Token Based Order Escrow Record</h2>
              <TokenOrderList/>
            </div>
        </div>
    </div>
  )
}

export default Orders