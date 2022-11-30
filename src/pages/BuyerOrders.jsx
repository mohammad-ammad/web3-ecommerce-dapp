import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { EscrowContext } from '../context/EscrowContext'
import { MultiVendorContext } from '../context/MultiVendorContext'
import { WalletContext } from '../context/WalletContext'
import {Link} from "react-router-dom";

const BuyerOrders = () => {
    //---USECONTEXT
    const { orderCart, cart, redeemNow } = useContext(MultiVendorContext)
    const {cancelOrder} = useContext(EscrowContext)
    const {wallet} = useContext(WalletContext)
    
    //---useEffect
    useEffect(() => {
        orderCart()
    }, [wallet])

    //----CANCEL HANDLER
    const cancelHandler = (id,trxId) => 
    {
        if(wallet.username != "" && wallet.password != "")
        {
            cancelOrder(trxId,id,wallet.password)
        }
        else 
        {
            cancelOrder(trxId,id,"")
        }
    }

    const redeem = (id,trx) => 
    {
        redeemNow(id,trx)
    }

    return (
        <div className='bg-slate-100 w-full min-h-screen max-h-full flex justify-center items-start pt-20 md:pt-28'>
            <div className='w-full  px-5'>
                <h1 className='text-black text-md font-bold my-3'>Order Summary</h1>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-black">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Product
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Order Number
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Title
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Quantity
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Engraving Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Total Price
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.length > 0 ?
                                cart.map((item, index) => (
                                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td class="py-4 px-6">
                                            <img src={`https://ipfs.moralis.io:2053/ipfs/${item.image}`} className="w-20 border-solid border-[1px] border-black rounded-lg" alt=""  />
                                        </td>
                                        <td class="py-4 px-6">
                                        {item?._id}
                                        </td>
                                        <td class="py-4 px-6">
                                            {item.title}
                                        </td>
                                        <td class="py-4 px-6">
                                            {item?.order[0]?.quantity}
                                        </td>
                                        <td class="py-4 px-6">
                                            {item?.order[0]?.engraveName}
                                        </td>
                                        <td class="py-4 px-6">
                                        {item?.payment[0]?.price} {item?.payment[0]?.type === 'Crypto' ? 'Matic' : '$'}
                                        </td>
                                        <td class="py-4 px-1">
                                        Net Price: {item?.payment[0]?.price} <br/>
                                        Tax: {item?.payment[0]?.tax} <br/>
                                        Total: {Number(item?.payment[0]?.price) + Number(item?.payment[0]?.tax)}
                                        </td>
                                        <td class="py-4 px-6">
                                            {item?.order[0]?.status}
                                        </td>
                                        {
                                            item?.order[0]?.isRedeemable === true ? 
                                            <td class="py-4 px-6">
                                                <button className='bg-black text-white rounded-full px-5 py-1 w-32 text-xs font-normal mb-2' onClick={()=>redeem(item?._id,item?.trxId)}>Redeem Now</button>
                                                <Link to="/account-settings" className='bg-black text-white rounded-full px-5 py-1 w-32 text-xs font-normal'>Shipping Details</Link>
                                            </td>
                                            :
                                            <td class="py-4 px-6">
                                                <button className='bg-black text-white rounded-full px-5 py-1 w-32 text-xs font-normal mb-2' onClick={()=>cancelHandler(item?._id,item?.trxId)}>Cancel Order</button>
                                                <Link to="/account-settings" className='bg-black text-white rounded-full px-3 py-1 w-32 text-xs font-normal'>Shipping Details</Link>
                                            </td>
                                        }
                                       
                                    </tr>
                                )) : ''
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BuyerOrders