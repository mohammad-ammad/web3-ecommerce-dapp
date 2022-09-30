import React from 'react'
import { Link } from 'react-router-dom'

const ListedProduct = () => {
  return (
    <div className='w-full h-screen pt-28 bg-slate-100'>
        <div className='px-5 md:px-28 flex justify-between items-center'>
            <h1 className='text-md text-black font-bold'>Listed Products</h1>
            <Link to="/seller-list-product" className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>List Product</Link>
        </div>
        <div className='px-5 md:px-28'>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg my-3">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-white uppercase bg-black">
            <tr>
              <th scope="col" class="py-3 px-6">
                Product title
              </th>
              <th scope="col" class="py-3 px-6">
                Price
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

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" >
                 
                  <td class="py-4 px-6">
                  abc
                  </td>
                  <td class="py-4 px-6">
                  abc
                  </td>
                  <td class="py-4 px-6">
                  abc
                  </td>
                  <td class="py-4 px-6">
                  <Link to="" className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>View</Link>
                  </td>
                  
                </tr>
          
          </tbody>
        </table>
      </div>
        </div>
        
    </div>
  )
}

export default ListedProduct