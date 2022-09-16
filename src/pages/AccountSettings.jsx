import React from 'react'
import AccountSettingsSection from '../components/AccountSettingsSection'
import ShippingAddressSection from '../components/ShippingAddressSection'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import Redeemable from '../components/Redeemable'
const AccountSettings = () => {
  return (
    <div className='bg-slate-100 w-full h-full flex justify-center items-start pt-20 md:pt-28'>
        <div className='w-full md:w-1/3 px-5'>
            <div>
                <h1 className='text-black text-md font-bold my-3'>General Information</h1>
                <h2 className='text-black text-sm font-medium'>Account Settings</h2>
                <AccountSettingsSection/>
                <h2 className='text-black text-sm font-medium mt-5'>Shipping Address</h2>
                <ShippingAddressSection/>
                <div className='flex justify-between items-center my-3'>
                    <div className='flex justify-start items-center'>
                            <BsFillCheckCircleFill/>
                            <span className='ml-2 text-xs font-bold text-slate-700'>Subscribe newsletter</span>
                        </div>
                        <div>
                            <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Update</button>
                        </div>
                </div>
                <h1 className='text-black text-md font-bold my-3'>My NFT Collections</h1>
                <h2 className='text-black text-sm font-medium'>Pending For Confirmation</h2>
                <Redeemable pending={true}/>
                <h2 className='text-black text-sm font-medium'>Redeemable</h2>
                <Redeemable redeemable={true}/>
                <h2 className='text-black text-sm font-medium'>Redeemed</h2>
                <Redeemable />
            </div>
            <div className='flex justify-center items-center my-5'>
                 <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default AccountSettings