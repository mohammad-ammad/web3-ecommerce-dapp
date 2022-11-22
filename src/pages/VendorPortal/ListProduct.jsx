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
import axios from 'axios'
import { toast } from 'react-hot-toast'

const ListProduct = () => {
  //---USECONTEXT
  const {getSizes, getColor, mintProduct, getCategories, catAttr, catAttrList} = useContext(MultiVendorContext)
  const {loadNftSmartContract} = useContext(InstanceContext);
  const {wallet} = useContext(WalletContext);
  //---USESTATES
  const [attributes1, setAttributes1] = useState({
    image:"abc",
    sizeId:""
  });
  const [attributes2, setAttributes2] = useState({
    image:"",
    sizeId:""
  });
  const [attributes3, setAttributes3] = useState({
    image:"",
    sizeId:""
  });
  const [data, setData] = useState({
    title:"",
    description:"",
    catId:"",
    availabilty:"",
    native_price:"",
    crypto_price:"",
    primary_image:"",
    secondary_image:"",
    tertiary_image:"",
    attribute:[]
  })

  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [categories, setCategories] = useState([]);
  const [attr, setAttr] = useState({});

  //---USEEFFECT
  // useEffect(() => {
  //   setData({...data,attributes:[attributes1]})
  // },[attributes1])

  // useEffect(() => {
  //   setData({...data,attributes:[attributes1,attributes2]})
  // },[attributes2])

  // useEffect(() => {
  //   setData({...data,attributes:[attributes1,attributes2, attributes3]})
  // },[attributes3])
  
  useEffect(() => {
    sizesFunc()
    ColorFunc()
    cateFunc()
  },[])

  useEffect(() => {
    if(wallet.isConnected)
    {
      // setData({...data,vendorAddress:wallet.address})
      // console.log(wallet)
      // console.log("vendorooooo")
    }
  },[wallet])


  useEffect(() => {
    setData({...data, attribute:[attr]})
  },[attr])

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
    console.log(data)
    mintProduct(data)
  }

  //---loadCollectionContract 
  const loadCollectionContract = (e) => 
  {
    setData({...data,catId:e.target.value})
    loadNftSmartContract(e.target.value,wallet.signer);
    catAttr(e.target.value)
  }

  const attrChangeHandler = (e) => 
  {
    setAttr({...attr, [e.target.name]:e.target.value})
  }

  //---UPLOAD TO IPFS
  const sendFileToIPFS = async (_file,name) => {
    if (_file) {
      try {
        const formData = new FormData();
        formData.append("file", _file);

        toast.promise(
          axios({
            method: "post",
            url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data: formData,
            headers: {
              'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
              'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
              "Content-Type": "multipart/form-data"
            },
          }).then(resFile => {
            const ImgHash = resFile.data.IpfsHash;
            console.log(ImgHash);
            setData({...data,[name]:ImgHash})
          }).catch(err => console.log(err))
          , 
          {
              loading: 'Image Uploading Please Wait',
              success: 'Image Uploaded Successfully',
              error: 'Something Went Wrong',
          }
          )        
      } catch (error) {
        console.log("Error sending File to IPFS: ")
        console.log(error)
      }
    }
  }

  const setIpfs = (e) => 
  {
    sendFileToIPFS(e.target.files[0],e.target.name)
    console.log("working")
  }

  console.log(data)
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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
              <input type="file" onChange={(e) => setIpfs(e)} className='w-full p-3 text-xs bg-transparent outline-none' name="primary_image" id="" />
            </div>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
              <input type="file" onChange={(e) => setIpfs(e)} className='w-full p-3 text-xs bg-transparent outline-none' name="secondary_image" id="" />
            </div>
            <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
              <input type="file" onChange={(e) => setIpfs(e)} className='w-full p-3 text-xs bg-transparent outline-none' name="tertiary_image" id="" />
            </div>
        </div>
        <div className='my-3'>
          <hr />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          {
            catAttrList.length > 0 ?
            catAttrList.map((el,i) => (
              <div key={i}>
                <div className='bg-white shadow-inner shadow-slate-200 rounded-lg my-1'>
                  <input type="text" onChange={(e)=>attrChangeHandler(e)} className='w-full p-3 text-xs bg-transparent outline-none' placeholder={el} name={el} id="" />
                </div>
              </div>
            ))
            : null
          }
        </div>

        <div className='flex justify-center items-center my-5'>
          <button onClick={()=>submitHandler()} className='bg-black text-white w-full rounded-full px-5 py-1 text-sm font-normal'>Mint</button>
        </div>

      </div>

    </div>
  )
}

export default ListProduct