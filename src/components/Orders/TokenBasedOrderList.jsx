import React from 'react'
import { useContext } from 'react'
import { EscrowContext } from '../../context/EscrowContext'

const TokenBasedOrderList = () => {
  //---USECONTEXT 
  const {createSellerTokenList} = useContext(EscrowContext)

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg my-3">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-white uppercase bg-black">
            <tr>
              <th scope="col" class="py-3 px-6">
                Buyer
              </th>
              <th scope="col" class="py-3 px-6">
                Seller
              </th>
              <th scope="col" class="py-3 px-6">
                Token ID
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              createSellerTokenList.length > 0 ? createSellerTokenList.map((item,index) => (
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td class="py-4 px-6">
                  <p className='text-blue-500 text-xs'>{item.buyer.slice(0,6)}...{item.buyer.slice(36)}</p>
                </td>
                <td class="py-4 px-6">
                <p className='text-blue-500 text-xs'>{item.seller.slice(0,6)}...{item.seller.slice(36)}</p>
                </td>
                <td class="py-4 px-6">
                {parseInt(item.token._hex,16)}
                </td>
                <td class="py-4 px-6">
                  <div className='flex justify-start items-center'>
                    <div className='mx-1'>
                      {
                        item.islocked ? '' :
                        <button className='text-red-600 font-medium border-solid border-[1px] border-red-600 px-2 py-1 rounded-full hover:bg-red-600 hover:text-white hover:transition-all'>Dispute</button>
                      }
                    </div>
                  </div>
                </td>
              </tr>
              )) : ''
            }
          </tbody>
        </table>
    </div>
  )
}

export default TokenBasedOrderList