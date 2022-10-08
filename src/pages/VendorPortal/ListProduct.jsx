import { Textarea } from '@windmill/react-ui'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Attributes from '../../components/Vendor/Attributes'

const ListProduct = () => {
  //---USESTATES
  const [attr, setAttr] = useState(1);
  const [attributes1, setAttributes1] = useState({
    image:"",
    sizeId:"",
    colorId:"",
    availabilty:0,
    native_price:0,
    crypto_price:0
  });
  const [attributes2, setAttributes2] = useState({
    image:"",
    sizeId:"",
    colorId:"",
    availabilty:0,
    native_price:0,
    crypto_price:0
  });
  const [attributes3, setAttributes3] = useState({
    image:"",
    sizeId:"",
    colorId:"",
    availabilty:0,
    native_price:0,
    crypto_price:0
  });
  const [data, setData] = useState({
    title:"",
    description:"",
    attributes:[]
  })

  //---USEEFFECT
  useEffect(() => {},[])

  //---submitHandler 
  const submitHandler = () => 
  {
    setData({...data,attributes:[attributes1,attributes2,attributes3]})
    console.log(data)
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
            <Attributes attr={attr} setAttr={setAttr} attributes={attributes1} setAttributes={setAttributes1} />
          </> 
          : attr === 2 ? 
          <>
            <Attributes attr={attr} setAttr={setAttr} attributes={attributes1} setAttributes={setAttributes1}/>
            <div className='my-3'>
              <hr />
            </div>
            <Attributes trash={true} attr={attr} setAttr={setAttr} attributes={attributes2} setAttributes={setAttributes2}/>
          </>
          :
          attr === 3 ?
          <>
            <Attributes attr={attr} setAttr={setAttr} attributes={attributes1} setAttributes={setAttributes1}/>
            <div className='my-3'>
              <hr />
            </div>
            <Attributes trash={true} attr={attr} setAttr={setAttr} attributes={attributes2} setAttributes={setAttributes2}/>
            <div className='my-3'>
              <hr />
            </div>
            <Attributes trash={true} attr={attr} setAttr={setAttr} attributes={attributes3} setAttributes={setAttributes3}/>
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