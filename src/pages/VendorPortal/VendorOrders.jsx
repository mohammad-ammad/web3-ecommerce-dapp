import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import OrderView from '../../components/Vendor/OrderView'
import { MultiVendorContext } from '../../context/MultiVendorContext'

const VendorOrders = () => {
    //---USESTATE
    const [showModal,setShowModal] = useState(false);
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(3);
    const [skip, setSkip] = useState(0);
    //----USECONTEXT
    const {vendorOrder,vendorOrderList} = useContext(MultiVendorContext)

    //---USEEFFECT
    useEffect(() => {
        vendorOrderList(limit, skip)
    },[skip, limit])

    const nextPage = () => {
        setSkip(skip + limit)
    }

    const previousPage = () => {
        setSkip(skip - limit)
    }

    //---view Handler
    const viewHandler = (item) => 
    {
        setShowModal(true);
        setData(item);
    }
    return (
        <>
            <div className='w-full h-screen pt-28 bg-slate-100'>
                <div className='px-5 md:px-28 flex justify-between items-center'>
                    <h1 className='text-md text-black font-bold'>Your Orders</h1>
                    <Link to="/seller-list-product" className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Escrow</Link>
                </div>
                <div className='px-5 md:px-28'>
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg my-3">
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
                                        Engraving
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Confirmation
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
                                vendorOrder.length > 0 ?
                                vendorOrder.map((item, index) => (
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
                                                {item?.order[0]?.engraveName}
                                            </td>
                                            <td class="py-4 px-6">
                                            {item?.order[0]?.confirmation}
                                            </td>
                                            <td class="py-4 px-6">
                                            {item?.order[0]?.status}
                                            </td>
                                            <td class="py-4 px-6">
                                                <button className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal' onClick={()=>viewHandler(item)}>view</button>
                                            </td>
                                        </tr>
                                    )) : ''
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex justify-end items-center px-5 md:px-28'> 
                    <button type='button' className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal mr-2' onClick={previousPage}> Prev  </button> 
                    <button type='button' className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'  onClick={nextPage}> Next  </button>
                </div>
            </div>
            <OrderView showModal={showModal} setShowModal={setShowModal} data={data}/>
        </>
    )
}

export default VendorOrders