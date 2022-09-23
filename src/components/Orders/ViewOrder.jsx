import React from 'react'
import {Link} from 'react-router-dom'
import CoinBasedOrderList from './CoinBasedOrderList'
import TokenBasedOrderList from './TokenBasedOrderList'

const ViewOrder = () => {
  return (
    <div className='bg-slate-100 w-full h-screen flex justify-center items-start pt-20 md:pt-28'>
        <div className='w-full md:w-5/6 px-5'>
            <div>
                <div className='flex justify-between items-center'>
                  <h1 className='text-black text-md font-bold my-3'>Order Summary</h1>
                  <Link to='/orders' className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Back</Link>
                </div>
                <h2 className='text-black text-sm font-medium'>Coins Based Orders</h2>
                <CoinBasedOrderList/>
            </div>
            <div>
            <h2 className='text-black text-sm font-medium'>Token Based Orders</h2>
            <TokenBasedOrderList/>
            </div>
        </div>
    </div>
  )
}

export default ViewOrder