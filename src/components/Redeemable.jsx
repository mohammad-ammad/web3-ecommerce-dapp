import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import p1 from '../assets/p1.png';
import { EscrowContext } from '../context/EscrowContext';
import { MultiVendorContext } from '../context/MultiVendorContext';

const Redeemable = ({pending, redeemable, item}) => {
    const {redeemNow} = useContext(MultiVendorContext)
    const {returnOrder} = useContext(EscrowContext)

    const actionHandler = (id,trxId,confirm) => 
    {
        returnOrder(id,trxId,confirm);
    } 

    const redeem = (id,trx) => 
    {
        redeemNow(id,trx)
    }
  return (
    <div className='bg-slate-50 border-solid border-[1px] border-black rounded-xl p-2 my-3'>
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-1 overflow-y-auto items-center'>
        <div className='col-span-2'>
            <img src={`https://ipfs.moralis.io:2053/ipfs/${item?.image}`} className="w-24 border-solid border-[1px] border-black rounded-lg" alt="" />
        </div>
        <div className='col-span-4'>
            <h1 className='text-xl font-bold text-black'>{item?.title}</h1>
            <div className='flex justify-between items-center'>
                <Link to={`/product-details/${item?.product_id}`} className='text-sm text-blue-500 cursor-pointer'>Details</Link>
                {
                    item?.order[0]?.isRedeemable ? 
                    item?.order[0]?.status == "Redeem not claim" ?
                    <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal' onClick={()=>redeem(item?._id,item?.trxId)}>Redeem Now</button>
                    : 
                    <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal' >Redeemed</button>
                    : 

                    item.confirmation === "not Confirmed" ?
                    <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal' onClick={()=>actionHandler(item?._id,item?.trxId,"confirmed")}>Confirm Order</button>
                    :
                    <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>{item?.confirmation === "confirmed" ? "confirmed" : item?.confirmation === "return" ? "return claimed" : ""}</button>
                }
               
            </div>
        </div>
       
    </div>
    {
        pending && 
        <>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Contract Address</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-blue-600'>{item?.collection.slice(0, 28)}...</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Token ID</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-slate-800'>{item?.trxId}</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Token Standard</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-slate-800'>ERC - 1155</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Blockchain</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-slate-800'>Polygon</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Order number</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-blue-600'>{item?._id}</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Order Date</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-blue-600'>{item?.order[0]?.createAt.substr(0, 10)}</p>
            </div>
        </div>
        {/* <div className='grid grid-cols-1 lg:grid-cols-5 gap-1 items-center my-2'>
            <div className='col-span-2'>
                <h1 className='text-sm text-black font-bold'>Redeemed On</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-xs text-slate-800'>Sep 5, 2022</p>
            </div>
        </div> */}
        {
            item?.order[0]?.isRedeemable ? null :
            item.confirmation == "not Confirmed" ?
            <p className='text-center text-red-600 text-xs cursor-pointer font-bold py-2' onClick={()=>actionHandler(item._id,item?.trxId,"return")}>Return my Order</p>
            : ""
        }
        </>
    }
    </div>
  )
}

export default Redeemable