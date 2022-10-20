import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { MultiVendorContext } from '../context/MultiVendorContext'

const BuyerOrders = () => {
    //---USECONTEXT
    const { orderCart, cart } = useContext(MultiVendorContext)

    //---useEffect
    useEffect(() => {
        orderCart()
    }, [])
    return (
        <div className='bg-slate-100 w-full h-screen flex justify-center items-start pt-20 md:pt-28'>
            <div className='w-full md:w-5/6 px-5'>
                <h1 className='text-black text-md font-bold my-3'>Order Summary</h1>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-black">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Product
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Title
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Quantity
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
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
                                            {item.title}
                                        </td>
                                        <td class="py-4 px-6">
                                            {item?.order[0]?.quantity}
                                        </td>
                                        <td class="py-4 px-6">
                                        {item?.order[0]?.status}
                                        </td>
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