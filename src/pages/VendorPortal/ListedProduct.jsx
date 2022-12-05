import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MultiVendorContext } from '../../context/MultiVendorContext'
import { WalletContext } from '../../context/WalletContext'

const ListedProduct = () => {
  //---USECONTEXT
  const {vendorMintedProduct, vendorProdList} = useContext(MultiVendorContext)
  const {wallet} = useContext(WalletContext)

  //---USEEFFECT
  useEffect(() => {
    vendorMintedProduct()
    console.log("worksss")
  }, [wallet])
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
                Product
              </th>
              <th scope="col" class="py-3 px-6">
                QR-Code
              </th>
              <th scope="col" class="py-3 px-6">
                Title
              </th>
              {/* <th scope="col" class="py-3 px-6">
                SKU
              </th> */}
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              vendorProdList.length > 0 ? vendorProdList.map((item, i) => (
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={i}>
                 
                  <td class="py-4 px-6">
                    <img src={`https://ipfs.moralis.io:2053/ipfs/${item?.primary_image}`} className="w-20 border-solid border-[1px] border-black rounded-lg" alt=""  />
                  </td>
                  <td class="py-4 px-6">
                    <img src={item?.qrCode} className="w-20 border-solid border-[1px] border-black rounded-lg" alt=""  />
                  </td>
                  <td class="py-4 px-6">
                  {item?.title}
                  </td>
                  {/* <td class="py-4 px-6">
                  {item?.remaining} of {item?.availabilty}
                  </td> */}
                  <td class="py-4 px-6">
                    <Link to={`/seller-product/${item?._id}`} className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Edit</Link>
                  </td>
                  
                </tr>
              ))
              : null
            }
          </tbody>
        </table>
      </div>
        </div>
        
    </div>
  )
}

export default ListedProduct