import { Textarea } from '@windmill/react-ui'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Attributes from '../../components/Vendor/Attributes'
import { InstanceContext } from '../../context/InstanceContext'
import { MultiVendorContext } from '../../context/MultiVendorContext'
import { WalletContext } from '../../context/WalletContext'

const ListProduct = () => {
  //---USECONTEXT
  const {getSizes, getColor, mintProduct, getCategories} = useContext(MultiVendorContext)
  const {loadNftSmartContract} = useContext(InstanceContext);
  const {wallet} = useContext(WalletContext);
  //---USESTATES
  const [attr, setAttr] = useState(1);
  const [attributes1, setAttributes1] = useState({
    image:"abc",
    sizeId:"",
    colorId:""
  });
  const [attributes2, setAttributes2] = useState({
    image:"",
    sizeId:"",
    colorId:""
  });
  const [attributes3, setAttributes3] = useState({
    image:"",
    sizeId:"",
    colorId:""
  });
  const [data, setData] = useState({
    title:"",
    description:"",
    vendorAddress:"",
    catId:"",
    availabilty:"",
    native_price:"",
    crypto_price:"",
    attributes:[]
  })

  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [categories, setCategories] = useState([]);

  //---USEEFFECT
  useEffect(() => {
    setData({...data,attributes:[attributes1]})
  },[attributes1])

  useEffect(() => {
    setData({...data,attributes:[attributes1,attributes2]})
  },[attributes2])

  useEffect(() => {
    setData({...data,attributes:[attributes1,attributes2, attributes3]})
  },[attributes3])
  
  useEffect(() => {
    sizesFunc()
    ColorFunc()
    cateFunc()
  },[])

  useEffect(() => {
    if(wallet.isConnected)
    {
      setData({...data,vendorAddress:wallet.address})
      console.log(wallet)
    }
  },[wallet])

  const sizesFunc = async () => 
  {
    const res = await getSizes()
    setSize(res['data']);
  }

  const ColorFunc = async () => 
  {
    const res = await getColor()
    setColor(res['data'])
  }

  const cateFunc = async () => 
  {
    const data = await getCategories();
    setCategories(data['data'])
  }

  //---submitHandler 
  const submitHandler = () => 
  {
    // console.log(data)
    mintProduct(data)
  }

  //---loadCollectionContract 
  const loadCollectionContract = (e) => 
  {
    setData({...data,catId:e.target.value})
    loadNftSmartContract(e.target.value,wallet.signer);
  }
  return (
    <div className='w-full h-full pt-28 bg-slate-100'>
      <div className='px-5 md:px-28 flex justify-between items-center'>
        <h1 className='text-md text-black font-bold'>List Products</h1>
        <Link to="/seller-products" className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>Back</Link>
      </div>

      <div className='px-5 md:px-28 my-3'>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
          <input type="text" value={data.title} onChange={(e)=>setData({...data, title:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Title' name="" id="" />
        </div>
        <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
          <Textarea className='w-full p-3 text-xs bg-transparent outline-none' onChange={(e)=>setData({...data, description:e.target.value})} placeholder='Description'>{data.description}</Textarea>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <select  name="" id="" onChange={(e)=>loadCollectionContract(e)} className='w-full p-3 text-xs bg-transparent outline-none'>
              <option value="" disabled selected>Select Category</option>
              {
                categories.length > 0 ? categories.map((item,index) => (
                  <option value={item.collection_address} key={index}>{item.title}</option>
                )) : ''
              }
            </select>
          </div>
          <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.availabilty} onChange={(e)=>setData({...data, availabilty:e.target.value})}  className='w-full p-3 text-xs bg-transparent outline-none' placeholder='SKU' name="" id="" />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.native_price} onChange={(e)=>setData({...data, native_price:e.target.value})}  className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Price in USD' name="" id="" />
          </div>
          <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
            <input type="text" value={data.crypto_price} onChange={(e)=>setData({...data, crypto_price:e.target.value})} className='w-full p-3 text-xs bg-transparent outline-none' placeholder='Price in Matic' name="" id="" />
          </div>
        </div>
        <div className='my-3'>
          <hr />
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-sm text-black font-semibold'>Attributes</h1>
          <button onClick={()=>setAttr(attr + 1)} className='bg-black text-white rounded-full px-5 py-1 text-sm font-normal'>ADD</button>
        </div>
        {
          attr === 1 ? 
          <>
            <Attributes attr={attr} setAttr={setAttr} attributes={attributes1} setAttributes={setAttributes1} size={size} color={color}/>
          </> 
          : attr === 2 ? 
          <>
            <Attributes attr={attr} setAttr={setAttr} attributes={attributes1} setAttributes={setAttributes1} size={size} color={color}/>
            <div className='my-3'>
              <hr />
            </div>
            <Attributes trash={true} attr={attr} setAttr={setAttr} attributes={attributes2} setAttributes={setAttributes2} size={size} color={color}/>
          </>
          :
          attr === 3 ?
          <>
            <Attributes attr={attr} setAttr={setAttr} attributes={attributes1} setAttributes={setAttributes1} size={size} color={color}/>
            <div className='my-3'>
              <hr />
            </div>
            <Attributes trash={true} attr={attr} setAttr={setAttr} attributes={attributes2} setAttributes={setAttributes2} size={size} color={color}/>
            <div className='my-3'>
              <hr />
            </div>
            <Attributes trash={true} attr={attr} setAttr={setAttr} attributes={attributes3} setAttributes={setAttributes3} size={size} color={color}/>
          </> 
          : ''
        }

        <div className='flex justify-center items-center my-5'>
          <button onClick={()=>submitHandler()} className='bg-black text-white w-full rounded-full px-5 py-1 text-sm font-normal'>Mint</button>
        </div>

      </div>

    </div>
  )
}

export default ListProduct